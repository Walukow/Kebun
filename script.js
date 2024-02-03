document.getElementById('toggle-menu').addEventListener('click', function() {
    var navbar = document.querySelector('.navbar');
    if (navbar.style.maxHeight) {
        navbar.style.maxHeight = null;
    } else {
        navbar.style.maxHeight = navbar.scrollHeight + "px";
    }
});

