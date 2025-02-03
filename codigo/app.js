const li= document.querySelectorAll('.li')
const bloque=document.querySelectorAll('.bloque')

//cuando hacemos click en un li
    //todos .li quitar la clase activo
    //todos .bloque quitar la clases activo
    //.li con la posicion se añadimos la clase activo
    //.bloque con la posicion se añadimos la clase activo.
li.forEach((cadaLi , i)=>{
    li[i].addEventListener('click',()=>{
        li.forEach((cadaLi,i)=>{
            li[i].classList.remove('activo')
            bloque[i].classList.remove('activo')
        })

        li[i].classList.add('activo')
        bloque[i].classList.add('activo')
    })
})

const li2= document.querySelectorAll('.li2')
const bloque2=document.querySelectorAll('.bloque2')

//cuando hacemos click en un li
    //todos .li quitar la clase activo
    //todos .bloque quitar la clases activo
    //.li con la posicion se añadimos la clase activo
    //.bloque con la posicion se añadimos la clase activo.
li2.forEach((cadaLi , i)=>{
    li2[i].addEventListener('click',()=>{
        li2.forEach((cadaLi,i)=>{
            li2[i].classList.remove('activo2')
            bloque2[i].classList.remove('activo2')
        })

        li2[i].classList.add('activo2')
        bloque2[i].classList.add('activo2')
    })
})
