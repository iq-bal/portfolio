document.addEventListener("DOMContentLoaded", function(){
    const navbarToggler = document.getElementById("navbar-toggler");
    const navbarLinks = document.getElementById("navbar-links");
    navbarToggler.addEventListener("click", function () {
        navbarLinks.classList.toggle("show");
    });
})