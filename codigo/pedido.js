//Menus de la ventanas principales
const li= document.querySelectorAll('.li')
const bloque=document.querySelectorAll('.bloque')

//Menus internos de cada ventana
const li2= document.querySelectorAll('.li2')
const bloque2=document.querySelectorAll('.bloque2')

//cuando hacemos click en un li
    //quita de todos los .li y .bloque la clase activo
    //.li y .bloque con la posicion se añadimos la clase activo
function recorrerMenus(li,bloque,nameClass){
    li.forEach((element , i)=>{
        element.addEventListener('click',()=>{
            li.forEach((element,i)=>{
                element.classList.remove(nameClass);
                bloque[i].classList.remove(nameClass);
            })
            element.classList.add(nameClass);
            bloque[i].classList.add(nameClass);
        })
    })
}

recorrerMenus(li, bloque, "activo")
recorrerMenus(li2, bloque2, "activo2")
