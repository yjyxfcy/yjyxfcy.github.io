/* Use one observer for all images, avoiding a layout measurement per image. */
(function(window, document) {
  'use strict';
  var pending = new WeakSet();
  var offset = Number(window.CONFIG && CONFIG.lazyload && CONFIG.lazyload.offset_factor) || 0;
  var margin = Math.max(0, Math.round((window.innerHeight || document.documentElement.clientHeight) * offset));
  var observer = 'IntersectionObserver' in window ? new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (!entry.isIntersecting) return;
      observer.unobserve(entry.target);
      entry.target.removeAttribute('srcset');
      entry.target.removeAttribute('lazyload');
    });
  }, { rootMargin: margin + 'px' }) : null;
  function observeImages() {
    document.querySelectorAll('img[lazyload]').forEach(function(image) {
      if (pending.has(image)) return;
      pending.add(image);
      if (observer) observer.observe(image);
      else { image.removeAttribute('srcset'); image.removeAttribute('lazyload'); }
    });
  }
  observeImages();
  if (window.Fluid && Fluid.events && typeof Fluid.events.registerRefreshCallback === 'function') Fluid.events.registerRefreshCallback(observeImages);
})(window, document);
