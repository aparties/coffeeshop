document.addEventListener('DOMContentLoaded', () => {
    const loggedIn = localStorage.getItem('loggedIn') === 'true';
    const userEmail = localStorage.getItem('userEmail');
    const isFirstVisit = localStorage.getItem('isFirstVisit') === 'true';  // Verifica si es la primera vez que visita

    if (loggedIn) {
        document.getElementById('userEmailHeader').textContent = userEmail;
        document.getElementById('userInfo').style.display = 'inline'; // Muestra el correo y el botón de cerrar sesión
        
        // Solo mostrar el mensaje de bienvenida si es la primera vez que el usuario visita después de iniciar sesión
        if (isFirstVisit) {
            alert(`Bienvenido, ${userEmail}!`);
            localStorage.setItem('isFirstVisit', 'false'); // Marca que ya no es la primera visita
        }
    } else {
        document.getElementById('bton-login').style.display = 'inline'; // Muestra el enlace de login
    }

    // Manejo del botón de cerrar sesión
    const logoutButton = document.getElementById('logoutButton');
    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            // Eliminar datos de localStorage
            localStorage.removeItem('loggedIn');
            localStorage.removeItem('userEmail');
            localStorage.removeItem('isFirstVisit');  // Eliminar el flag de la primera visita
            // Redirigir a la página de login
            window.location.href = 'login.html';
        });
    }
});
