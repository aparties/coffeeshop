document.addEventListener("DOMContentLoaded", function () {   
    const body = document.querySelector('body')
    const div = document.createElement('div')
    body.style.display = 'flex'
    body.style.justifyContent = 'center'

    div.classList.add('valor')
    div.style.width ="200px"
    div.style.textAlign = "center"
    body.appendChild(div)

})

const botonPagat = document.getElementsByClassName("btn-pagar")

function  pagarOperacion(){
    
}