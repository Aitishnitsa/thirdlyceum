document.addEventListener('DOMContentLoaded', function () {
    const readMoreBtn = document.getElementById('read-history');
    const hiddenParagraphs = document.querySelectorAll('.hidden-paragraphs');

    readMoreBtn.addEventListener('click', function () {
        hiddenParagraphs.forEach(item => {
            item.classList.toggle('hidden');
            if (item.classList.contains('hidden')) {
                readMoreBtn.textContent = 'Читати далі';
            } else {
                readMoreBtn.textContent = 'Згорнути';
            }
        });
    });
});