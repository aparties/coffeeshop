//Menus de la ventanas principales
const li= document.querySelectorAll('.li')
const bloque=document.querySelectorAll('.bloque')

//Menus internos de cada ventana
const li2= document.querySelectorAll('.li2')
const bloque2=document.querySelectorAll('.bloque2')

//Funcion para cuando hacemos click en un li
    //quita de todos los .li y .bloque la clase activo
    //.li y .bloque con la posicion se añadimos la clase activo
const eliminarClase = ( bloque, nameClass) => {
    li.forEach((element,i)=>{
        element.classList.remove(nameClass);
        bloque[i].classList.remove(nameClass);
    })
}

function recorrerMenus(li, bloque, nameClass){
    li.forEach((element , i)=>{
        element.addEventListener('click',()=>{
            eliminarClase(bloque, nameClass);
            element.classList.add(nameClass);
            bloque[i].classList.add(nameClass);
        })
    })
}

recorrerMenus(li, bloque, "activo")
recorrerMenus(li2, bloque2, "activo2")


document.addEventListener("DOMContentLoaded", function () {
    const loggedIn = localStorage.getItem('loggedIn') === 'true';
    if (loggedIn) {
        eliminarClase('activo');
        li[1].classList.add("activo");
        bloque[1].classList.add("activo");
    }
})