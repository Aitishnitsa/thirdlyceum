let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

const dropdownIds = ['education', 'education-mobile', 'students', 'students-mobile', 'teachers', 'teachers-mobile', 'parents', 'parents-mobile'];
const dropdownMenuGroup = document.querySelectorAll('.dropdown-menu');
const mobileMenu = document.getElementById('mobile-menu');
const closed = document.getElementById('closed-menu');
const opened = document.getElementById('opened-menu');
const mobileMenuButton = document.getElementById('mobile-menu-button');
const blurBg = document.getElementById('blur-background');
const body = document.body;


// Function to toggle mobile menu
function toggleMobileMenu() {
    mobileMenu.classList.toggle('hidden');
    changeButtonPath(mobileMenu);
}

function changeButtonPath(mobileMenu) {
    closed.style.display = mobileMenu.classList.contains('hidden') ? 'block' : 'none';
    opened.style.display = mobileMenu.classList.contains('hidden') ? 'none' : 'block';

    body.classList.toggle('overflow-hidden', !mobileMenu.classList.contains('hidden'));
}

// Event listener for the mobile menu button
mobileMenuButton.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent the click event from reaching the document
    toggleMobileMenu();
});

// Close mobile menu when clicking outside
blurBg.addEventListener('click', (event) => {
    // Check if the clicked element is outside the mobile menu and button
    if (!mobileMenu.contains(event.target) || event.target !== mobileMenuButton) {
        mobileMenu.classList.add('hidden');
        changeButtonPath(mobileMenu);
    }
});

body.addEventListener('click', (event) => {
    // Check if the clicked element is outside the mobile menu and button
    dropdownMenuGroup.forEach(item => {
        if (!item.contains(event.target)) {
            item.classList.add('hidden');
        }
    });
});

// Function to toggle dropdown menu
function toggleDropdown(dropdownId) {
    const dropdownMenu = document.getElementById(`${dropdownId}`);
    dropdownMenuGroup.forEach(item => {
        if (!item.classList.contains('hidden') && item != dropdownMenu) {
            item.classList.add('hidden');
        }
    });
    dropdownMenu.classList.toggle('hidden');
}

dropdownIds.forEach(dropdownId => {
    const dropdownButton = document.getElementById(`dropdown-${dropdownId}`);
    dropdownButton.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent the click event from reaching the document
        toggleDropdown(`dropdown-${dropdownId}-menu`);
    });
});
