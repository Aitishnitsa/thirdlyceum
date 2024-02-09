const readMoreBtn = document.getElementById('read-history');
const hideBtn = document.getElementById('hide-history');
const hiddenParagraphs = document.querySelectorAll('.hidden-paragraphs');

const toggleHistory = () => {
    hiddenParagraphs.forEach(item => item.classList.toggle('hidden'));
    readMoreBtn.classList.toggle('hidden');
    hideBtn.classList.toggle('hidden');
};

readMoreBtn.addEventListener('click', toggleHistory);
hideBtn.addEventListener('click', toggleHistory);