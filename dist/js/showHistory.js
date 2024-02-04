document.addEventListener('DOMContentLoaded', function () {
    const readMoreBtn = document.getElementById('read-history');
    const hideBtn = document.getElementById('hide-history');
    const hiddenParagraphs = document.querySelectorAll('.hidden-paragraphs');

    readMoreBtn.addEventListener('click', function () {
        hiddenParagraphs.forEach(item => item.classList.toggle('hidden'));
        readMoreBtn.classList.add('hidden');
        hideBtn.classList.remove('hidden');
    });

    hideBtn.addEventListener('click', function () {
        hiddenParagraphs.forEach(item => item.classList.toggle('hidden'));
        hideBtn.classList.add('hidden');
        readMoreBtn.classList.remove('hidden');
    });
});