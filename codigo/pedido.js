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

function recorrerMenus(li, bloque, nameClass){
    li.forEach((element , i)=>{
        element.addEventListener('click',()=>{
            eliminarClase(li, bloque, nameClass);
            element.classList.add(nameClass);
            bloque[i].classList.add(nameClass);
        })
    })
}

recorrerMenus(li, bloque, "activo")
recorrerMenus(li2, bloque2, "activo2")

//Funcion para ir a la ventana especifica
const irVentanaEspecifica = (numero) =>{ 
    eliminarClase(li, bloque,'activo');
    li[numero].classList.add("activo");
    bloque[numero].classList.add("activo");
}

document.addEventListener("DOMContentLoaded", function () {
    const loggedIn = localStorage.getItem('loggedIn') === 'true';
    if (loggedIn) {
        irVentanaEspecifica(1);
    }
})


//Funcion para registrar al cliente para que compre
function registrarEmail(){
    const email = document.getElementById('tem-email').value;
    localStorage.setItem('temporalEmail', email);
    window.location.href='register.html'
}

const botonDireccion = document.getElementById('boton-direccion-del')
const direccionDel = document.querySelector('.direccion-envio-del')

function validateEmptyField(message,e){
        const field= e.target;
        const fielValue = e.target.value
        if(fielValue.trim().length===0){
            field.classList.add('invalid')
            field.nextElementSibling.classList.add('error')//elemento hermano
            field.nextElementSibling.innerText = message;
            focus(field)
        }else{
            field.classList.remove('invalid')
            field.nextElementSibling.classList.add('error');
            field.nextElementSibling.innerText ="";
        }
}

botonDireccion.addEventListener('click' , () => {
    direccionDel.addEventListener('blur', (e) => validateEmptyField('Ingresa una direccion correcta' , e))
})
    
