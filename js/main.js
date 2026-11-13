(function () {
  var links = document.querySelectorAll('.local a');
  if (!links.length) { return; }
  var blocks = document.querySelectorAll('.blk[id]');
  var spy = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        links.forEach(function (a) {
          if (a.getAttribute('href') === '#' + e.target.id) {
            a.setAttribute('aria-current', 'true');
          } else {
            a.removeAttribute('aria-current');
          }
        });
      }
    });
  }, { rootMargin: '-10% 0px -75% 0px' });
  blocks.forEach(function (b) { spy.observe(b); });
})();
