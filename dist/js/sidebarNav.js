const sidebar = document.getElementById('sidebar');
const nav = document.getElementById('sidebar-nav');
const btn = document.getElementById('sidebar-btn');
const btnDiv = document.getElementById('sidebar-btn-div');
const bg = document.getElementById('blur-bg-sb');
const navList = document.getElementById('nav-list');

function hideBtn() {
    btn.classList.toggle('hidden');
}

function toggleSidebarNav() {
    let isHidden = nav.classList.contains('hidden');

    nav.classList.toggle('hidden', !isHidden);
    bg.classList.toggle('hidden', !isHidden);
    body.classList.toggle('overflow-hidden');

    if (isHidden) {
        sidebar.classList.add('fixed', 'flex', 'h-screen', 'items-center', 'px-6', 'top-0');
    } else {
        sidebar.classList.remove('fixed', 'flex', 'h-screen', 'items-center', 'px-6', 'top-0');
    }
}

function outsideBtnClick() {
    if (!nav.classList.contains('hidden')) {
        toggleSidebarNav();
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
