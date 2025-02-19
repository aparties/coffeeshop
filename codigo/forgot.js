const form = document.getElementById('resetForm')

form.addEventListener('submit', function(event) {
    //
    event.preventDefault();
    const emailInput = document.getElementById('email').value;
    const messageDiv = document.getElementById('message');

    if (validateEmail(emailInput)) {
        messageDiv.textContent = 'Se ha enviado un enlace de restablecimiento de contraseña a tu correo electrónico.';
        messageDiv.style.color = '#4CAF50';
    } else {
        messageDiv.textContent = 'Por favor, introduce un correo electrónico válido.';
        messageDiv.style.color = '#FF0000';
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}