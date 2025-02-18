function registrarCliente(){
    let nombre = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if(nombre=="" || email =="" || password==""){
        alert('Ingrese sus datos correctos')
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

}
