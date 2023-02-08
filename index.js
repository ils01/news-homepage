const btnMenu = document.querySelector(".btn-menu");
const navList = document.querySelector(".nav-list");
const cover = document.querySelector(".cover");
const btnMenuClose = document.querySelector(".btn-menu-close");

btnMenu.addEventListener("click", (event) => {
  navList.classList.add("opened");
  cover.classList.add("opened");
});

btnMenuClose.addEventListener("click", (event) => {
  navList.classList.remove("opened");
  cover.classList.remove("opened");
});

cover.addEventListener("click", (event) => {
  navList.classList.remove("opened");
  cover.classList.remove("opened");
});
