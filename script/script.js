// Ensure the navbar margin remains consistent
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', function () {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            navbar.style.margin = '18px'; // Reset margin
        }
    });
});

// Optional: Handle collapse toggle to maintain the design
document.querySelector('.navbar-toggler').addEventListener('click', function () {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        navbar.style.margin = '18px'; // Reset margin when toggling
    }
});
