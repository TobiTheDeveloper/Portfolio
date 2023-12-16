function toggleDropdown() {
    var navbar = document.querySelector('.navbar');
    navbar.classList.toggle('menu-active');
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    var navbar = document.querySelector('.navbar');
    
    if (!event.target.matches('.navbar__bars i') && !event.target.matches('.navbar__menu--links')) {
        navbar.classList.remove('menu-active');
    }
}
