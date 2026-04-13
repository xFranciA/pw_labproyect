document.addEventListener("DOMContentLoaded", () => {
  const btnMenu = document.getElementById("btn-menu");
  const menu = document.getElementById("menu");

  if (btnMenu && menu) {
    btnMenu.addEventListener("click", () => {
      menu.classList.toggle("activo");
    });
  }

  const imagenes = document.querySelectorAll(".galeria-item img");
  const visor = document.getElementById("visor-galeria");
  const imagenGrande = document.getElementById("imagen-visor");
  const botonCerrar = document.getElementById("cerrar-visor");

  if (imagenes.length > 0 && visor && imagenGrande && botonCerrar) {
    imagenes.forEach((imagen) => {
      imagen.addEventListener("click", () => {
        imagenGrande.src = imagen.src;
        imagenGrande.alt = imagen.alt;
        visor.classList.add("activo");
      });
    });

    botonCerrar.addEventListener("click", () => {
      visor.classList.remove("activo");
    });

    visor.addEventListener("click", (e) => {
      if (e.target === visor) {
        visor.classList.remove("activo");
      }
    });
  }
});