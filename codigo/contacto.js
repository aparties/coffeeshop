document.addEventListener('DOMContentLoaded', function() {
    emailjs.init("kjiuTKJln2THTabJJ"); //"kjiuTKJln2THTabJJ" User ID  EmailJS
    console.log('EmailJS initialized');
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Form submission prevented');

    const serviceID = 'service_7holabb'; //Service ID
    const templateID = 'template_jss708090'; //Template ID

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            alert('Correo enviado con éxito!');
            console.log('Email sent successfully');
        }, (err) => {
            console.error('FAILED...', err);
            alert('Ocurrió un error al enviar el correo.');
        });
});
