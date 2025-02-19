document.addEventListener('DOMContentLoaded', () => {
    const loggedIn = localStorage.getItem('loggedIn') === 'true';
    const userEmail = localStorage.getItem('userEmail');

    if (loggedIn) {
        document.getElementById('userEmailHeader').textContent = userEmail;
        document.getElementById('userInfo').style.display = 'inline'; // Muestra el correo y el botón de cerrar sesión
        alert(`Bienvenido, ${userEmail}!`);
    
    } else {
        document.getElementById('bton-login').style.display = 'inline'; // Muestra el enlace de login
        alert('¡Bienvenido! a tu Tienda favorita.');
    }

});

// Manejo del boton de cerrar sesión
const logoutButton = document.getElementById('logoutButton');
logoutButton.addEventListener('click', () => {
    // Eliminar datos de localStorage
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('userEmail');
    // Redirigir a la página de login
    window.location.href = 'login.html';
});