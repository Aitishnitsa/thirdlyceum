const sidebar = document.getElementById('sidebar');
const nav = document.getElementById('sidebar-nav');
const btn = document.getElementById('sidebar-btn');
const bg = document.getElementById('blur-bg-sb');
const navList = document.getElementById('nav-list');
const arrowLeft = document.getElementById('arrow-left');
const arrowRight = document.getElementById('arrow-right');
const goTop = document.getElementById('go-top');

function hideBtn() {
    btn.classList.toggle('hidden');
}

function toggleSidebarNav() {
    let isHidden = nav.classList.contains('hidden');

    nav.classList.toggle('hidden', !isHidden);
    bg.classList.toggle('hidden', !isHidden);
    arrowLeft.classList.toggle('hidden');
    arrowRight.classList.toggle('hidden');
    body.classList.toggle('overflow-hidden');

    if (isHidden) {
        sidebar.classList.add('fixed', 'flex', 'h-screen', 'items-center', 'px-6', 'top-0');
        nav.classList.add('shadow-2xl', 'shadow-gray-500');
        btn.classList.add('bg-blue', 'h-8', 'overflow-hidden', 'rounded-2xl', 'w-8');
    } else {
        sidebar.classList.remove('fixed', 'flex', 'h-screen', 'items-center', 'px-6', 'top-0');
        nav.classList.remove('shadow-2xl', 'shadow-gray-500');
        btn.classList.remove('bg-blue', 'rounded-2xl');
    }
}

function outsideBtnClick() {
    if (!nav.classList.contains('hidden')) {
        toggleSidebarNav();
    }
}

function toggleGoTopButton() {
    if (window.scrollY > 200) {
        goTop.classList.remove('hidden');
    } else {
        goTop.classList.add('hidden');
    }
}

btn.addEventListener('click', (event) => {
    event.stopPropagation();
    toggleSidebarNav();
});

sidebar.addEventListener('click', (event) => {
    event.stopPropagation();
    outsideBtnClick();
});

bg.addEventListener('click', (event) => {
    event.stopPropagation();
    outsideBtnClick();
});

window.addEventListener('scroll', toggleGoTopButton);