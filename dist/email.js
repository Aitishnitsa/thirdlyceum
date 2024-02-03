(function () {
    emailjs.init('DaOujsfer8bPIS-EV');
})();

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    emailjs.sendForm('service_b9xzgou', 'template_60himxb', this)
        .then(function () {
            console.log('SUCCESS!');
        }, function (error) {
            console.log('FAILED...', error);
        });

    document.getElementById('contact-form').reset();
});