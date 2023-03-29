const menu = document.querySelector(".mobile-menu");

menu.addEventListener("click", function () {
  document.querySelector(".menu_list").classList.toggle("show");
  menu.classList.toggle("show");
});
