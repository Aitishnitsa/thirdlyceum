const sidebar = document.getElementById('sidebar');
const nav = document.getElementById('sidebar-nav');
const btn = document.getElementById('sidebar-btn');
const bg = document.getElementById('blur-bg-sb');
const navList = document.getElementById('nav-list');
const arrowLeft = document.getElementById('arrow-left');
const arrowRight = document.getElementById('arrow-right');
const goTop = document.getElementById('go-top');


const hideSidebarButton = () => { btn.classList.toggle('hidden'); }

const toggleSidebarNav = () => {
    let isHidden = nav.classList.contains('hidden');

    const sidebarHiddenClasses = ['fixed', 'flex', 'h-screen', 'items-center', 'px-6', 'top-0'];
    const navHiddenClasses = ['shadow-2xl', 'shadow-gray-500'];
    const btnHiddenClasses = ['bg-blue', 'rounded-2xl'];

    nav.classList.toggle('hidden', !isHidden);
    bg.classList.toggle('hidden', !isHidden);
    arrowLeft.classList.toggle('hidden');
    arrowRight.classList.toggle('hidden');
    body.classList.toggle('overflow-hidden');

    toggleSidebarClasses(isHidden, sidebar, sidebarHiddenClasses);
    toggleSidebarClasses(isHidden, nav, navHiddenClasses);
    toggleSidebarClasses(isHidden, btn, btnHiddenClasses);
}

const toggleSidebarClasses = (isHidden, container, classes) => {
    isHidden ? container.classList.add(...classes) : container.classList.remove(...classes);
}

const outsideBtnClick = () => {
    if (!nav.classList.contains('hidden')) {
        toggleSidebarNav();
    }
}

const toggleGoTopButton = () => {
    window.scrollY > 200 ? goTop.classList.remove('hidden') : goTop.classList.add('hidden');
};

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