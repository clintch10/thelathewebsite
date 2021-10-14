/* Show menu */
const hamburger = document.querySelector(".btn-hamburger");
const navMenu = document.querySelector(".nav-menu"); 

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

}

/* Close menu when click a link or outside the menu */
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

/* Close menu when clicked outside the container */
const hamburgerClose = document.getElementById('hamburger')
const navMenuClose = document.getElementById('nav-menu')

document.onclick = function(e){
    if(e.target.id !== 'hamburger' && e.target.id !== 'nav-menu')
    {
        closeMenu();
    }
}
