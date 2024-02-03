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
    document.addEventListener('click', function (event) {
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileMenuButton = document.getElementById('mobile-menu-button');

        // Check if the clicked element is outside the mobile menu and button
        if (!mobileMenu.contains(event.target) && event.target !== mobileMenuButton) {
            mobileMenu.classList.add('hidden');
            changeButtonPath(mobileMenu);
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
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

    // Close dropdown menus when clicking outside
    document.addEventListener('click', function () {
        const dropdownMenus = document.querySelectorAll('.dropdown-menu');
        dropdownMenus.forEach(function (menu) {
            menu.classList.add('hidden');
        });
    });
});




// const dropdownButton = document.getElementById('dropdown-button');
// const dropdownMenu = document.getElementById('dropdown-menu');
// let isDropdownOpen = false; // Set to true to open the dropdown by default, false to close it by default

// // Function to toggle the dropdown
// function toggleDropdown() {
//     isDropdownOpen = !isDropdownOpen;
//     if (isDropdownOpen) {
//         dropdownMenu.classList.remove('hidden');
//     } else {
//         dropdownMenu.classList.add('hidden');
//     }
// }

// // Initialize the dropdown state
// toggleDropdown();

// // Toggle the dropdown when the button is clicked
// dropdownButton.addEventListener('click', toggleDropdown);

// // Close the dropdown when clicking outside of it
// window.addEventListener('click', (event) => {
//     if (!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
//         dropdownMenu.classList.add('hidden');
//         isDropdownOpen = false;
//     }
// });