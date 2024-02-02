let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

document.addEventListener('DOMContentLoaded', function () {
    // Function to toggle mobile menu
    function toggleMobileMenu() {
        let mobileMenu = document.getElementById('mobile-menu');
        let closedPath = document.querySelector('.closed-path');
        let openPath = document.querySelector('.open-path');

        mobileMenu.classList.toggle('hidden');
        closedPath.style.display = mobileMenu.classList.contains('hidden') ? 'block' : 'none';
        openPath.style.display = mobileMenu.classList.contains('hidden') ? 'none' : 'block';
    }

    // Event listener for the mobile menu button
    let mobileMenuButton = document.getElementById('menu-button');
    mobileMenuButton.addEventListener('click', toggleMobileMenu);
});
