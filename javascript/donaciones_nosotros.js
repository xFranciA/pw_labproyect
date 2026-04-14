/* ── ABRIR MODAL ── */
function slAbrirModal(id) {
  var modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.add('abierto');
  document.body.style.overflow = 'hidden';
}

/* ── CERRAR MODAL ── */
function slCerrarModal(id) {
  var modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.remove('abierto');
  document.body.style.overflow = '';
}

/* ── CERRAR AL HACER CLIC FUERA DEL MODAL ── */
(function () {
  document.querySelectorAll('.sl-modal-overlay').forEach(function (overlay) {
    overlay.addEventListener('click', function () {
      this.classList.remove('abierto');
      document.body.style.overflow = '';
    });
  });
})();

/* ── ANIMACIÓN DE ENTRADA PARA LAS TARJETAS ── */
(function () {
  var tarjetas = document.querySelectorAll('.sl-news-card');
  if (!tarjetas.length || !window.IntersectionObserver) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  tarjetas.forEach(function (card, i) {
    card.style.transitionDelay = (i * 0.07) + 's';
    observer.observe(card);
  });
})();

/* pad nosotros*/

/* ── ANIMACIÓN FADE-IN AL HACER SCROLL ── */
(function () {
  var elementos = document.querySelectorAll(
    '.sl-card, .sl-timeline-item, .sl-stat, .sl-location-item, .sl-profile-card'
  );

  if (!elementos.length || !window.IntersectionObserver) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity   = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  elementos.forEach(function (el) {
    el.style.opacity    = '0';
    el.style.transform  = 'translateY(16px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
})();
