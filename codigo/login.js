document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('loggedIn') === 'true') {
        window.location.href = 'main.html';
    }
});

const botonIniciar = document.getElementById('boton');
let email = document.getElementById('email');
let password = document.getElementById('password');

function iniciarSesion() {
    //validar que los campos no esten vacios
    if(email.value=='' || password.value==''){
        alert('Todos los campos son obligatorios');
        return;
    }
    // Obtener los clientes existentes en localStorage
    let clientes = JSON.parse(localStorage.getItem('clientes')) || [];

    // Validar el correo y la contraseña
    let clienteEncontrado = clientes.find(cliente => cliente.email === email.value && cliente.password === password.value);

    if (clienteEncontrado) {
        alert('Inicio de sesión exitoso');
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('userEmail', email.value);
        location="main.html";
    } else {
        alert('Correo o contraseña incorrectos');
        location="login.html";
    }
}

botonIniciar.onclick = iniciarSesion;

password.addEventListener('keypress',(e)=>{
    if(e.key === 'Enter'){
        iniciarSesion();
    }
})
