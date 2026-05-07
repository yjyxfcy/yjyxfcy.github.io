/* global FluidLanguage */

(function() {
  'use strict';

  var STORAGE_KEY = 'fluid-language';
  var data = window.FluidLanguage || {};
  var packs = data.packs || {};
  var supported = Object.keys(packs);

  if (!supported.length) {
    return;
  }

  function getByPath(obj, path) {
    if (Object.prototype.hasOwnProperty.call(obj, path)) {
      return obj[path];
    }
    return path.split('.').reduce(function(result, key) {
      return result && Object.prototype.hasOwnProperty.call(result, key) ? result[key] : undefined;
    }, obj);
  }

  function normalizeLang(lang) {
    if (supported.indexOf(lang) !== -1) {
      return lang;
    }
    if (lang) {
      var shortLang = lang.split('-')[0].toLowerCase();
      for (var i = 0; i < supported.length; i++) {
        if (supported[i].toLowerCase().split('-')[0] === shortLang) {
          return supported[i];
        }
      }
    }
    return data.defaultLang && supported.indexOf(data.defaultLang) !== -1 ? data.defaultLang : supported[0];
  }

  function getRequestedLang() {
    var params = new URLSearchParams(window.location.search);
    return normalizeLang(params.get('lang') || localStorage.getItem(STORAGE_KEY) || navigator.language);
  }

  function applyLanguage(lang) {
    var pack = packs[lang] || {};
    document.documentElement.setAttribute('lang', lang);
    localStorage.setItem(STORAGE_KEY, lang);

    document.querySelectorAll('[data-i18n-key]').forEach(function(element) {
      var value = getByPath(pack, element.getAttribute('data-i18n-key'));
      if (typeof value === 'string') {
        if (element.getAttribute('data-i18n-html') === 'true') {
          element.innerHTML = value;
          if (element.hasAttribute('data-typed-text')) {
            element.setAttribute('data-typed-text', value);
          }
        } else {
          element.textContent = value;
        }
      }
    });

    document.querySelectorAll('.language-option').forEach(function(option) {
      var active = option.getAttribute('data-lang') === lang;
      option.classList.toggle('active', active);
      option.setAttribute('aria-current', active ? 'true' : 'false');
    });

    var current = document.getElementById('language-current');
    if (current) {
      current.textContent = pack.name || lang;
    }
  }

  function bindSwitcher() {
    document.querySelectorAll('.language-option').forEach(function(option) {
      option.addEventListener('click', function(event) {
        event.preventDefault();
        var lang = normalizeLang(option.getAttribute('data-lang'));
        applyLanguage(lang);
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function() {
    bindSwitcher();
    applyLanguage(getRequestedLang());
  });
})();
