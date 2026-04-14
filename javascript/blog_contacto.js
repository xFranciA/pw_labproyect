document.addEventListener('DOMContentLoaded', () => {
    const btnMenu = document.getElementById('btn-menu');
    const menu = document.getElementById('menu');
    const nav = document.querySelector('.barra-nav');

    if (btnMenu && menu) {
        btnMenu.addEventListener('click', () => {
            menu.classList.toggle('activo');
            
            const bars = btnMenu.querySelectorAll('div');
            bars[0].style.transform = menu.classList.contains('activo') ? 'rotate(45deg) translate(5px, 5px)' : 'none';
            bars[1].style.opacity = menu.classList.contains('activo') ? '0' : '1';
            bars[2].style.transform = menu.classList.contains('activo') ? 'rotate(-45deg) translate(7px, -6px)' : 'none';
        });

        document.querySelectorAll('.menu-nav a').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('activo');
            });
        });
    }

    const contactoForm = document.querySelector('.formulario-contacto form');
    if (contactoForm) {
        contactoForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const inputs = contactoForm.querySelectorAll('input[required], textarea[required]');
            let valido = true;

            inputs.forEach(input => {
                if (!input.value.trim()) {
                    valido = false;
                    input.style.borderColor = 'red';
                } else {
                    input.style.borderColor = '#ccc';
                }
            });

            if (valido) {
                const btnEnvio = contactoForm.querySelector('button');
                const textoOriginal = btnEnvio.innerText;
                
                btnEnvio.innerText = 'Enviando...';
                btnEnvio.disabled = true;

                setTimeout(() => {
                    alert('¡Mensaje enviado con éxito! Nos comunicaremos con usted a la brevedad.');
                    contactoForm.reset();
                    btnEnvio.innerText = textoOriginal;
                    btnEnvio.disabled = false;
                }, 1500);
            }
        });
    }

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.padding = '10px 40px';
            nav.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
            nav.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
        } else {
            nav.style.padding = '0 40px';
            nav.style.backgroundColor = 'var(--color-negro)';
            nav.style.boxShadow = 'none';
        }
    });

    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.tarjeta, .formulario-contacto, .info-contacto-lateral').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
});