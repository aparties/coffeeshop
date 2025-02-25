function registrarCliente(){
    let nombre = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if(nombre.trim().length===0 || email.trim().length===0 || password.trim().length===0){
        alert('Ingrese todos campos completos')
        return;
    }

    let clientes = JSON.parse( localStorage.getItem('clientes')) || [];
    
    let clienteEncontrado = clientes.find(cliente=>cliente.email === email)

    if(clienteEncontrado){
        alert('El correo ya esta registrado.\nRegistre otro correo.');
        return;
    }

    const cliente = {
        username: nombre,
        email: email,
        password: password
    };
    
    // Agregar el nuevo cliente al array de clientes
    clientes.push(cliente);

    localStorage.setItem('clientes', JSON.stringify(clientes));

    document.getElementById("registroForm").reset();

    alert('Datos guardados con éxito');

    //ultima pagina que lo invoco
    const prevPage = localStorage.getItem('prevPage');
    window.location.href = prevPage ? prevPage : 'login.html';

}
