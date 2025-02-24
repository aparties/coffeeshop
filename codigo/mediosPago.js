document.addEventListener("DOMContentLoaded", function () {   
    const body = document.querySelector('body')
    const div = document.createElement('div')
    const precioDeCompra = localStorage.getItem('PrecioDeCompra');
    let carrito = JSON.parse(localStorage.getItem('carrito'));
    
    div.classList.add('valor')
    body.appendChild(div)

    let productos="";
    Object.keys(carrito).forEach(nombreProducto => productos+= `${nombreProducto}: ${carrito[nombreProducto]}\n`);

    if(precioDeCompra){
        div.style.display ='flex'
        div.style.flexDirection ='column'
        div.innerHTML=`<h3 class="detalle-pago">Total a pagar:</h3>
                      <h3 class="detalle-pago">${productos}</h3>
                      <br>
                      <span class ="pago-Valor">S/. ${precioDeCompra}</span>`
    }

})

const botonPagat = document.getElementsByClassName("btn-pagar")
function  pagarOperacion(){
    
}