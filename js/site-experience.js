(function() {
  'use strict';
  function init() {
    var poem = document.querySelector('.poem-scroll');
    if (poem && !document.getElementById('poem-expand')) {
      var button = document.createElement('button');
      button.id = 'poem-expand'; button.type = 'button'; button.className = 'poem-expand';
      button.setAttribute('aria-expanded', 'false');
      function update() {
        var expanded = button.getAttribute('aria-expanded') === 'true';
        var en = !/^zh(?:-|$)/i.test(document.documentElement.lang || 'zh-CN');
        button.textContent = en ? (expanded ? 'Show less ↑' : 'Read full poem ↓') : (expanded ? '收起 ↑' : '展开诗词 ↓');
      }
      button.addEventListener('click', function() { var expanded = button.getAttribute('aria-expanded') === 'true'; button.setAttribute('aria-expanded', String(!expanded)); poem.classList.toggle('poem-expanded', !expanded); update(); });
      document.querySelectorAll('.language-option').forEach(function(option) { option.addEventListener('click', update); });
      poem.insertAdjacentElement('afterend', button); update();
    }
    var audio = document.getElementById('song-player');
    if (audio && !audio.dataset.failureObserved) {
      audio.dataset.failureObserved = 'true';
      audio.addEventListener('error', function() {
        var message = document.getElementById('song-error');
        if (!message) { message = document.createElement('p'); message.id = 'song-error'; message.className = 'daily-status'; audio.parentNode.appendChild(message); }
        message.textContent = /^zh(?:-|$)/i.test(document.documentElement.lang || 'zh-CN') ? '音频暂时无法加载，可以尝试下一首。' : 'Audio could not be loaded. Try the next track.';
      });
      audio.addEventListener('canplay', function() { var message = document.getElementById('song-error'); if (message) message.remove(); });
    }
    var content = document.getElementById('poem-content');
    if (content && !content.dataset.timeoutObserved) {
      content.dataset.timeoutObserved = 'true';
      function armPoemTimeout() {
        setTimeout(function() { if (content.textContent.trim() === '正在铺纸研墨…') content.textContent = '诗词暂时无法加载，请稍后重试。'; }, 15000);
      }
      if ('IntersectionObserver' in window) {
        var poemObserver = new IntersectionObserver(function(entries) {
          if (entries.some(function(entry) { return entry.isIntersecting; })) { poemObserver.disconnect(); armPoemTimeout(); }
        }, { rootMargin: '300px' });
        poemObserver.observe(content);
      } else { armPoemTimeout(); }
    }
  }
  document.addEventListener('DOMContentLoaded', init);
  if (window.Fluid && Fluid.events && typeof Fluid.events.registerRefreshCallback === 'function') Fluid.events.registerRefreshCallback(init);
})();
