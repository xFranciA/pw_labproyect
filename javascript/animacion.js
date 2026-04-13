const links = document.querySelectorAll(".menu-nav a");

const currentPage = window.location.pathname.split("/").pop();

links.forEach(link => {
  const linkPage = link.getAttribute("href");

  if (linkPage === currentPage) {
    link.classList.add("pagina-activa");
  }
});

const btnMenu = document.getElementById("btn-menu");
const menu = document.getElementById("menu");

if (btnMenu && menu) {
  btnMenu.addEventListener("click", () => {
    menu.classList.toggle("activo");
  });
}