(() => {
    emailjs.init('DaOujsfer8bPIS-EV');
})();

const form = document.getElementById('contact-form');

const showAlert = (title, message) => {
    const alertContainer = document.getElementById('alert-container');
    alertContainer.innerHTML = `
        <div data-dismissible="alert" role="alert"
                    class="font-semibold relative flex rounded-lg bg-orange px-4 py-4 text-base text-darkBlue">
                    <div class="shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z">
                            </path>
                        </svg>
                    </div>
                    <div class="ml-3 mr-12">${message}</div>
                </div>
    `;

    setTimeout(() => {
        alertContainer.innerHTML = '';
    }, 5000); // ms
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    emailjs.sendForm('service_b9xzgou', 'template_60himxb', form)
        .then(() => {
            console.log('SUCCESS!');
            showAlert('Success', 'Повідомлення надіслано успішно');
        }, (error) => {
            console.log('FAILED...', error);
            showAlert('Failed', 'Виникла помилка при відправленні повідомлення. Спробуйте пізніше');
        });

    document.getElementById('contact-form').reset();
});