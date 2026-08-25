/*!
 * Klyn — init de AOS + countup ligero.
 * Reemplaza al legacy vendor.bundle.js/theme.bundle.js (Landkit):
 * el sitio solo usa AOS (data-aos), countup (data-countup) y
 * Bootstrap Collapse (servido aparte como bootstrap.bundle.min.js).
 */
(function () {
  'use strict';

  var aosAvailable = !!window.AOS;
  var anchors;
  var mo;

  /* AOS — misma config que usaba Landkit */
  if (aosAvailable) {
    window.AOS.init({
      duration: 700,
      easing: 'ease-out-quad',
      once: true,
      startEvent: 'load'
    });
  } else {
    /* Si AOS no cargó, evitar que el contenido quede invisible */
    document.querySelectorAll('[data-aos]').forEach(function (el) {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
  }

  /* CountUp ligero — anima enteros con easeOutExpo (default de countup.js) */
  function animateCount(el) {
    if (el.dataset.counted) return;
    el.dataset.counted = '1';

    var end = el.dataset.to ? parseFloat(el.dataset.to) : 0;
    var opts = {};
    try {
      opts = el.dataset.countup ? JSON.parse(el.dataset.countup) : {};
    } catch (e) {
      opts = {};
    }
    var start = typeof opts.startVal === 'number' ? opts.startVal : 0;
    var duration = (typeof opts.duration === 'number' ? opts.duration : 2) * 1000;
    var t0 = null;

    function frame(t) {
      if (t0 === null) t0 = t;
      var p = Math.min((t - t0) / duration, 1);
      var eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p); /* easeOutExpo */
      el.textContent = String(Math.round(start + (end - start) * eased));
      if (p < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  /*
   * Elementos con data-aos-id="countup:in" arrancan cuando AOS los anima
   * al entrar al viewport (la build de AOS de Landkit emitía el evento
   * "aos:in:countup:in"; la oficial no emite eventos, así que observamos
   * la clase .aos-animate). El resto de los countups arranca de inmediato.
   */
  anchors = document.querySelectorAll('[data-countup][data-aos-id="countup:in"]');

  if (!aosAvailable) {
    document.querySelectorAll('[data-countup]').forEach(animateCount);
    return;
  }

  document.querySelectorAll('[data-countup]:not([data-aos-id="countup:in"])').forEach(animateCount);

  if (anchors.length && 'MutationObserver' in window) {
    mo = new MutationObserver(function (records) {
      records.forEach(function (r) {
        if (r.target.classList.contains('aos-animate')) animateCount(r.target);
      });
    });
    anchors.forEach(function (el) {
      mo.observe(el, { attributes: true, attributeFilter: ['class'] });
      if (el.classList.contains('aos-animate')) animateCount(el);
    });
  } else {
    anchors.forEach(animateCount);
  }
})();
