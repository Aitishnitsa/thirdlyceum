let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

document.addEventListener('DOMContentLoaded', function () {
    // Function to toggle mobile menu
    function toggleMobileMenu() {
        const mobileMenu = document.getElementById('mobile-menu');
        mobileMenu.classList.toggle('hidden');

        changeButtonPath(mobileMenu);
    }

    function changeButtonPath(mobileMenu) {
        const closed = document.getElementById('closed-menu');
        const opened = document.getElementById('opened-menu');
        const body = document.body;

        closed.style.display = mobileMenu.classList.contains('hidden') ? 'block' : 'none';
        opened.style.display = mobileMenu.classList.contains('hidden') ? 'none' : 'block';

        body.classList.toggle('overflow-hidden', !mobileMenu.classList.contains('hidden'));
    }

    // Event listener for the mobile menu button
    document.getElementById('mobile-menu-button').addEventListener('click', function (event) {
        event.stopPropagation(); // Prevent the click event from reaching the document
        toggleMobileMenu();
    });

    // Close mobile menu when clicking outside
    document.getElementById('blur-background').addEventListener('click', function (event) {
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileMenuButton = document.getElementById('mobile-menu-button');

        // Check if the clicked element is outside the mobile menu and button
        if (!mobileMenu.contains(event.target) || event.target !== mobileMenuButton) {
            mobileMenu.classList.add('hidden');
            changeButtonPath(mobileMenu);
        }
    });

    // Function to toggle dropdown menu
    function toggleDropdown(dropdownId) {
        const dropdownMenu = document.querySelector(`#${dropdownId}-menu`);
        dropdownMenu.classList.toggle('hidden');
    }

    // Array of dropdown IDs
    const dropdownIds = ['education', 'education-mobile', 'students', 'students-mobile', 'teachers', 'teachers-mobile', 'parents', 'parents-mobile'];

    // Add event listeners for the dropdown buttons dynamically
    dropdownIds.forEach(function (dropdownId) {
        const dropdownButton = document.getElementById(`dropdown-${dropdownId}`);

        dropdownButton.addEventListener('click', function (event) {
            event.stopPropagation(); // Prevent the click event from reaching the document
            toggleDropdown(`dropdown-${dropdownId}`);
        });
    });

});