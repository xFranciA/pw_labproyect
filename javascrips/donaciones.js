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

/* ── CERRAR CON TECLA ESCAPE ── */
(function () {
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    document.querySelectorAll('.sl-modal-overlay.abierto').forEach(function (m) {
      m.classList.remove('abierto');
      document.body.style.overflow = '';
    });
  });
})();

/* ── FILTRO DE TARJETAS ── */
function slFiltrar(categoria, btn) {
  /* Actualizar botón activo */
  document.querySelectorAll('.sl-filter-btn').forEach(function (b) {
    b.classList.remove('activo');
  });
  btn.classList.add('activo');

  /* Mostrar u ocultar tarjetas */
  document.querySelectorAll('.sl-news-card').forEach(function (card) {
    var coincide = categoria === 'todos' || card.dataset.categoria === categoria;
    card.style.display = coincide ? '' : 'none';
  });
}

/* ── ENVÍO DE MENSAJE CON VALIDACIÓN ── */
function slEnviarMensaje(btn) {
  var form     = btn.closest('.sl-modal-form');
  var inputs   = form.querySelectorAll('input');
  var nombre   = inputs[0] ? inputs[0].value.trim() : '';
  var contacto = inputs[1] ? inputs[1].value.trim() : '';

  /* Validación mínima */
  if (!nombre || !contacto) {
    if (inputs[0]) inputs[0].style.borderColor = nombre   ? '' : 'var(--sl-gold)';
    if (inputs[1]) inputs[1].style.borderColor = contacto ? '' : 'var(--sl-gold)';
    return;
  }

  /* Restablecer bordes */
  inputs.forEach(function (el) { el.style.borderColor = ''; });

  /* Feedback visual de éxito */
  btn.textContent = '✓ Mensaje enviado';
  btn.disabled    = true;

  /* Limpiar formulario tras 3 segundos */
  setTimeout(function () {
    form.querySelectorAll('input, textarea').forEach(function (el) {
      el.value = '';
    });
    btn.textContent = 'Enviar Mensaje →';
    btn.disabled    = false;
  }, 3000);
}

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