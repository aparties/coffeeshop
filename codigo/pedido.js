//Menus de la ventanas principales
const li= document.querySelectorAll('.li')
const bloque=document.querySelectorAll('.bloque')

//Menus internos de cada ventana
const li2= document.querySelectorAll('.li2')
const bloque2=document.querySelectorAll('.bloque2')

//Funcion para cuando hacemos click en un li
    //quita de todos los .li y .bloque la clase activo
    //.li y .bloque con la posicion se añadimos la clase activo
const eliminarClase = ( pestaña, ventana, clase) => {
    pestaña.forEach((element,i)=>{
        element.classList.remove(clase);
        ventana[i].classList.remove(clase);
    })
}

//Funcion para navegar entre ventanas
function recorrerMenus(li, bloque, nameClass){
    li.forEach((element , i)=>{
        element.addEventListener('click',()=>{
            eliminarClase(li, bloque, nameClass);
            element.classList.add(nameClass);
            bloque[i].classList.add(nameClass);
        })
    })
}

//Funcion para ir a la ventana especifica
const irVentanaEspecifica = (numero) =>{ 
    eliminarClase(li, bloque,'activo');
    li[numero].classList.add("activo");
    bloque[numero].classList.add("activo");
}

//llamamos a las ventanas para recorrer
recorrerMenus(li, bloque, "activo")
recorrerMenus(li2, bloque2, "activo2")


//Evento que determina la posicion de la ventana
document.addEventListener("DOMContentLoaded", function () {
    const loggedIn = localStorage.getItem('loggedIn') === 'true';
    const direccionEnvio = localStorage.getItem('direccionEnvio');
    const medioPago = localStorage.getItem("pagoRealizado")
    if(loggedIn && direccionEnvio && medioPago) {
        irVentanaEspecifica(3);
    }else if(loggedIn && direccionEnvio) {
        irVentanaEspecifica(2);
    }else if (loggedIn) {
        irVentanaEspecifica(1);
    }
})

/*PRIMERA VENTANA - PEDIDOS*/
//Funcion para registrar al cliente para que compre
function registrarEmail(){
    const email = document.getElementById('tem-email').value;
    localStorage.setItem('temporalEmail', email);
    localStorage.setItem('prevPage', window.location.href);
    window.location.href='register.html'
}

//Para iniciar sesion
function iniciarLogin(){
    window.location.href='login.html'
    localStorage.setItem('prevPage', window.location.href);
}

/*SEGUNDA VENTANA - ENTREGA*/
const botonDelivery = document.getElementById('boton-direccion1')
const botonRetiro = document.getElementById('boton-direccion2')
const direccion= document.querySelectorAll('.direccion-envio')

//funcion que validen el campo de direccion
function validarcampo(message,e){
    const field= e.target;
    const fielValue = e.target.value
    if(fielValue.trim().length===0){
        field.classList.add('invalid')
        field.nextElementSibling.classList.add('error')//elemento hermano
        field.nextElementSibling.innerText = message;
        field.focus()
    }else{
        field.classList.remove('invalid')
        field.nextElementSibling.classList.add('error');
        field.nextElementSibling.innerText ="";
    }
}

//funcion navegar a siguiente pagos
function irVentanaPago(index){
    if(!direccion[index].value){ 
        alert('Ingrese una direccion')
        return;
    }
    localStorage.setItem('direccionEnvio', direccion[index].value);
    irVentanaEspecifica(2);
}

direccion.forEach(element => element.addEventListener('blur', (e) => validarcampo('Ingresa una direccion correcta, por favor' , e)))
botonDelivery.addEventListener('click' , () => irVentanaPago(0))
botonRetiro.addEventListener('click' , () => irVentanaPago(1))

/*TERCERA VENTANA - PAGOS*/
function regresarEntrega(){
    irVentanaEspecifica(1);
}

function pagarBoton(){
    alert('Elija un opcion a pagar')
}


/*CUARTA VENTANA - DATOS*/
const botonTerminar = document.querySelectorAll('.btnDatos')

//funcion que procesa los formularios final del comprobante de pago.
botonTerminar.forEach((element,index) =>{ 
    element.addEventListener('click', function(event) {
        if(index === 0){
            alert('Compra finalizada. ¡Gracias por tu compra!')
        }else if(index === 1){
            const tipoIndent = document.getElementById('tipoIndentf').value;
            const numero = document.getElementById('numeroIndentf').value;
            const email = document.getElementById('email').value;
            
            if(tipoIndent.trim().length===0 || numero.trim().length===0 || email.trim().length===0){
                alert('Complete todos los campos')
                return;
            }
            alert(`Tipo Documento: ${tipoIndent}\nNumero de documento: ${numero}\nCorreo Electronico: ${email}\nCompra finalizada. ¡Gracias por tu compra!`)
        
        }else {
            const direccion = document.getElementById('direccion').value;
            const ruc = document.getElementById('ruc').value;
            const idEmail = document.getElementById('idEmail').value;
            const razonSocial = document.getElementById('razonSocial').value;
            
            if(direccion.trim().length===0 || ruc.trim().length===0 || idEmail.trim().length===0 || razonSocial.trim().length ===0){
                alert('Complete todos los campos')
                return;
            }

            alert(`Numero de RUC: ${ruc}\nDireccion: ${direccion}\nCorreo Electronico: ${idEmail}\nRazon Social: ${razonSocial}\nCompra finalizada. ¡Gracias por tu compra!`)
        }
        
        localStorage.removeItem('carrito');
        localStorage.removeItem('PrecioDeCompra');
        localStorage.removeItem('direccionEnvio');
        localStorage.removeItem('pagoRealizado');
        window.location.href = "main.html"
    });
})