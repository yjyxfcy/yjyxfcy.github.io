/**
 * Three-way color mode toggle for Fluid theme
 * Cycles: auto → light → dark → auto
 *
 * "auto" mode follows the system's prefers-color-scheme setting.
 * When the user manually selects light or dark, it overrides auto.
 * Selecting auto again clears the override and returns to system-following.
 */
(function(window, document) {
  var rootElement = document.documentElement;
  var STORAGE_KEY = 'Fluid_Color_Scheme';
  var ATTR_NAME = 'data-user-color-scheme';
  var BTN_SELECTOR = '#color-toggle-btn';
  var ICON_SELECTOR = '#color-toggle-icon';

  // The three modes in cycle order
  var MODES = ['auto', 'light', 'dark'];
  var MANUAL_MODES = { light: true, dark: true };

  function getLS(k) {
    try { return localStorage.getItem(k); } catch (e) { return null; }
  }

  function setLS(k, v) {
    try { localStorage.setItem(k, v); } catch (e) {}
  }

  function removeLS(k) {
    try { localStorage.removeItem(k); } catch (e) {}
  }

  /**
   * Get the current user-selected mode.
   * Returns 'auto' if no manual preference is stored.
   */
  function getCurrentMode() {
    var stored = getLS(STORAGE_KEY);
    if (MANUAL_MODES[stored]) {
      return stored;
    }
    return 'auto';
  }

  /**
   * Get the effective display mode (what's actually showing).
   * In auto mode, reads from CSS --color-mode (set by prefers-color-scheme media query).
   * Falls back to time-based heuristic.
   */
  function getEffectiveMode() {
    var mode = getComputedStyle(rootElement)
      .getPropertyValue('--color-mode')
      .replace(/["'\s]/g, '');
    if (MANUAL_MODES[mode]) return mode;
    // Fallback: dark from 18:00 to 06:00
    var h = new Date().getHours();
    return (h >= 18 || h <= 6) ? 'dark' : 'light';
  }

  /**
   * Get the next mode in the cycle.
   */
  function getNextMode(current) {
    var idx = MODES.indexOf(current);
    return MODES[(idx + 1) % MODES.length];
  }

  /**
   * Apply a color mode.
   * - 'auto': clears manual override, system preference takes over
   * - 'light'/'dark': sets manual override
   */
  function applyMode(mode) {
    if (mode === 'auto') {
      rootElement.removeAttribute(ATTR_NAME);
      removeLS(STORAGE_KEY);
      // Use effective mode for highlight/comments/theme-color
      var effective = getEffectiveMode();
      updateHighlight(effective);
      updateComments(effective);
    } else {
      rootElement.setAttribute(ATTR_NAME, mode);
      setLS(STORAGE_KEY, mode);
      updateHighlight(mode);
      updateComments(mode);
    }

    updateIcon(getCurrentMode());
    updateMetaThemeColor();
  }

  /**
   * Update the toggle button icon.
   * In auto mode: shows the effective (system) icon with a small "A" badge.
   * In manual mode: shows the selected mode's icon.
   */
  function updateIcon(currentMode) {
    var icon = document.querySelector(ICON_SELECTOR);
    if (!icon) return;

    if (currentMode === 'auto') {
      var effective = getEffectiveMode();
      icon.className = 'iconfont icon-' + effective;
      icon.setAttribute('data-mode', 'auto');
    } else {
      icon.className = 'iconfont icon-' + currentMode;
      icon.setAttribute('data-mode', currentMode);
    }
  }

  /**
   * Toggle highlight CSS between light and dark stylesheets.
   */
  function updateHighlight(schema) {
    var lightCss = document.getElementById('highlight-css');
    var darkCss = document.getElementById('highlight-css-dark');
    if (schema === 'dark') {
      if (darkCss) darkCss.removeAttribute('disabled');
      if (lightCss) lightCss.setAttribute('disabled', '');
    } else {
      if (lightCss) lightCss.removeAttribute('disabled');
      if (darkCss) darkCss.setAttribute('disabled', '');
    }

    // Update code widget styling after a short delay
    setTimeout(function() {
      document.querySelectorAll('.markdown-body pre').forEach(function(pre) {
        var cls = (typeof Fluid !== 'undefined' && Fluid.utils && Fluid.utils.getBackgroundLightness)
          ? (Fluid.utils.getBackgroundLightness(pre) >= 0 ? 'code-widget-light' : 'code-widget-dark')
          : (schema === 'dark' ? 'code-widget-dark' : 'code-widget-light');
        var widget = pre.querySelector('.code-widget-light, .code-widget-dark');
        if (widget) {
          widget.classList.remove('code-widget-light', 'code-widget-dark');
          widget.classList.add(cls);
        }
      });
    }, 200);
  }

  /**
   * Propagate theme change to comment systems.
   */
  function updateComments(schema) {
    if (window.REMARK42) window.REMARK42.changeTheme(schema);
    if (window.CUSDIS) window.CUSDIS.setTheme(schema);

    var utterances = document.querySelector('.utterances-frame');
    if (utterances) {
      var t = schema === 'dark'
        ? (window.UtterancesThemeDark || 'github-dark')
        : (window.UtterancesThemeLight || 'github-light');
      utterances.contentWindow.postMessage({ type: 'set-theme', theme: t }, 'https://utteranc.es');
    }

    var giscus = document.querySelector('iframe.giscus-frame');
    if (giscus) {
      var gt = schema === 'dark'
        ? (window.GiscusThemeDark || 'dark')
        : (window.GiscusThemeLight || 'light');
      giscus.contentWindow.postMessage({ giscus: { setConfig: { theme: gt } } }, 'https://giscus.app');
    }
  }

  /**
   * Update the theme-color meta tag for browser chrome coloring.
   */
  function updateMetaThemeColor() {
    var color = getComputedStyle(rootElement).getPropertyValue('--navbar-bg-color').trim();
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta && color) meta.setAttribute('content', color);
  }

  /**
   * Initialize: replace the binary toggle with our three-way toggle.
   */
  function init() {
    var button = document.querySelector(BTN_SELECTOR);
    var icon = document.querySelector(ICON_SELECTOR);

    if (!button || !icon) {
      // DOM not ready yet, retry
      setTimeout(init, 50);
      return;
    }

    // Remove old event listeners by cloning and replacing the button
    var newButton = button.cloneNode(true);
    button.parentNode.replaceChild(newButton, button);
    button = newButton;
    icon = button.querySelector(ICON_SELECTOR);

    // Set initial icon state
    updateIcon(getCurrentMode());

    // Click: cycle to next mode (auto → light → dark → auto)
    button.addEventListener('click', function(e) {
      e.preventDefault();
      var current = getCurrentMode();
      var next = getNextMode(current);
      applyMode(next);
    });

    // Hover: preview what the next click will do
    button.addEventListener('mouseenter', function() {
      var current = getCurrentMode();
      var next = getNextMode(current);
      if (next === 'auto') {
        // Show effective system mode icon with auto indicator
        icon.className = 'iconfont icon-' + getEffectiveMode();
        icon.setAttribute('data-mode', 'auto-preview');
      } else {
        icon.className = 'iconfont icon-' + next;
        icon.setAttribute('data-mode', next);
      }
    });

    button.addEventListener('mouseleave', function() {
      updateIcon(getCurrentMode());
    });

    // Listen for system color scheme changes (only matters in auto mode)
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function() {
        if (getCurrentMode() === 'auto') {
          var effective = getEffectiveMode();
          updateIcon('auto');
          updateHighlight(effective);
          updateComments(effective);
          updateMetaThemeColor();
        }
      });
    }
  }

  // Start when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})(window, document);
