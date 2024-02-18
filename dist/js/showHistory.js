const readMoreBtn = document.getElementById('read-history');
const hideBtn = document.getElementById('hide-history');
const hiddenParagraphs = document.querySelectorAll('.hidden-paragraphs');
const historyImg = document.getElementById('history-img');

const toggleHistory = () => {
    hiddenParagraphs.forEach(item => {
        item.classList.toggle('hidden');
        item.classList.add('animate-fade-down', 'animate-duration-500');
    });
    historyImg.classList.add('animate-rotate-x', 'animate-duration-700', 'animate-ease-out');
    readMoreBtn.classList.toggle('hidden');
    hideBtn.classList.toggle('hidden');
};

readMoreBtn.addEventListener('click', toggleHistory);
hideBtn.addEventListener('click', toggleHistory);