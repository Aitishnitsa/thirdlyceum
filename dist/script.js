let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

document.addEventListener('DOMContentLoaded', function () {
    // Function to toggle mobile menu
    function toggleMobileMenu() {
        const mobileMenu = document.getElementById('mobile-menu');
        const closedPath = document.querySelector('.closed-path');
        const openPath = document.querySelector('.open-path');

        mobileMenu.classList.toggle('hidden');
        closedPath.style.display = mobileMenu.classList.contains('hidden') ? 'block' : 'none';
        openPath.style.display = mobileMenu.classList.contains('hidden') ? 'none' : 'block';
    }

    // Event listener for the mobile menu button
    let mobileMenuButton = document.getElementById('menu-button');
    mobileMenuButton.addEventListener('click', toggleMobileMenu);
});

const dropdownButton = document.getElementById('dropdown-button');
const dropdownMenu = document.getElementById('dropdown-menu');
let isDropdownOpen = false; // Set to true to open the dropdown by default, false to close it by default

// Function to toggle the dropdown
function toggleDropdown() {
    isDropdownOpen = !isDropdownOpen;
    if (isDropdownOpen) {
        dropdownMenu.classList.remove('hidden');
    } else {
        dropdownMenu.classList.add('hidden');
    }
}

// Initialize the dropdown state
toggleDropdown();

// Toggle the dropdown when the button is clicked
dropdownButton.addEventListener('click', toggleDropdown);

// Close the dropdown when clicking outside of it
window.addEventListener('click', (event) => {
    if (!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.add('hidden');
        isDropdownOpen = false;
    }
});