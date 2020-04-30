//select DOM Items
const menuBtn = document.querySelector(".menu-btn");
//selects whatewer we pu here
const menuNav = document.querySelector(".menu-nav");
const menu = document.querySelector(".menu");
const menuBranding = document.querySelector(".menu-brending");
const navItems = document.querySelectorAll(".nav-item");

//set initial sate of menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close"); //ads a class
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach((item) => item.classList.add("show"));

    //Set menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach((item) => item.classList.remove("show"));

    showMenu = false;
  }
}
