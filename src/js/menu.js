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
const toggleMobileMenu = () => {
    mobileMenu.classList.toggle('hidden');
    changeButtonPath(mobileMenu);
}

const changeButtonPath = (mobileMenu) => {
    const isHidden = mobileMenu.classList.contains('hidden');
    closed.classList.toggle('hidden', !isHidden);
    opened.classList.toggle('hidden', isHidden);
    body.classList.toggle('overflow-hidden', !isHidden);
}

// Function to toggle dropdown menu
const toggleDropdown = (dropdownId) => {
    const dropdownMenu = document.getElementById(`${dropdownId}`);
    dropdownMenuGroup.forEach(item => {
        if (!item.classList.contains('hidden') && item != dropdownMenu) {
            item.classList.add('hidden');
        }
    });
    dropdownMenu.classList.toggle('hidden');
}

// Event listener for the mobile menu button
mobileMenuButton.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent the click event from reaching the document
    try {
        hideSidebarButton();
    } catch {
        // console.log('error caught :)');
    }
    toggleMobileMenu();
});

// Close mobile menu when clicking outside
blurBg.addEventListener('click', (event) => {
    // Check if the clicked element is outside the mobile menu and button
    if (!mobileMenu.contains(event.target) || event.target !== mobileMenuButton) {
        mobileMenu.classList.add('hidden');
        try {
            hideSidebarButton();
        } catch {
            // console.log('error caught :)');
        }
        toggleMobileMenu();
    }
});

body.addEventListener('click', () => {
    // Check if the clicked element is outside the dropdown
    dropdownMenuGroup.forEach(item => {
        item.classList.add('hidden');
    });
});

mobileMenu.addEventListener('click', () => {
    toggleMobileMenu();
});

dropdownIds.forEach(dropdownId => {
    const dropdownButton = document.getElementById(`dropdown-${dropdownId}`);
    dropdownButton.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent the click event from reaching the document
        toggleDropdown(`dropdown-${dropdownId}-menu`);
    });
});

const addAnimation = (id, animation) => {
    const element = document.getElementById(id);
    element.classList.remove('opacity-0');

    // Створюємо Intersection Observer для кожного блоку
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Якщо блок прокручується, додаємо анімаційні класи
                element.classList.add(...animation);
            } else {
                // Якщо блок більше не прокручується, видаляємо анімаційні класи
                // element.classList.remove(...animation);
            }
        });
    });

    // Починаємо відстеження блоку
    observer.observe(element);
};

// Додаємо анімацію тільки для прокручуваних блоків
try {
    addAnimation('history', ['animate-fade-down', 'animate-once', 'animate-ease-in']);
    addAnimation('articles-container', ['animate-fade-down', 'animate-once', 'animate-ease-in']);
    addAnimation('contacts-section', ['animate-fade-right', 'animate-once', 'animate-duration-1000', 'animate-ease-in-out']);
    addAnimation('email-section', ['animate-fade-left', 'animate-once', 'animate-duration-1000', 'animate-ease-in-out']);
} catch {
    console.log('animated block is absent');
}
