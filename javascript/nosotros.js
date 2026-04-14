
(function () {
  var placeholder = document.getElementById('sl-photo-placeholder');
  var display     = document.getElementById('sl-photo-display');
  var input       = document.getElementById('sl-photo-input');

  if (!placeholder || !display || !input) return;

  /* Clic en el placeholder activa el selector de archivos */
  placeholder.addEventListener('click', function () {
    input.click();
  });

  /* Al seleccionar archivo, mostrar la imagen */
  input.addEventListener('change', function () {
    var file = this.files[0];
    if (!file) return;

    var reader = new FileReader();

    reader.onload = function (e) {
      display.src = e.target.result;
      display.style.display = 'block';
      placeholder.style.display = 'none';
    };

    reader.onerror = function () {
      alert('No se pudo cargar la imagen. Intenta con otro archivo.');
    };

    reader.readAsDataURL(file);
  });

  /* Drag & drop sobre el placeholder */
  placeholder.addEventListener('dragover', function (e) {
    e.preventDefault();
    this.style.borderColor = 'var(--sl-gold)';
    this.style.background  = '#202020';
  });

  placeholder.addEventListener('dragleave', function () {
    this.style.borderColor = 'var(--sl-gold-dark)';
    this.style.background  = '';
  });

  placeholder.addEventListener('drop', function (e) {
    e.preventDefault();
    this.style.borderColor = 'var(--sl-gold-dark)';
    this.style.background  = '';

    var file = e.dataTransfer.files[0];
    if (!file || !file.type.startsWith('image/')) return;

    var reader = new FileReader();
    reader.onload = function (ev) {
      display.src = ev.target.result;
      display.style.display = 'block';
      placeholder.style.display = 'none';
    };
    reader.readAsDataURL(file);
  });
})();


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
