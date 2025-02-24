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

const botonPagar = document.querySelector(".btn-pagar")

function  pagarOperacion(){

    if(window.location.href.includes("pagoAgentes.html")){
        localStorage.setItem("pagoRealizado","Pago en Efectivo")
    
    }else if(window.location.href.includes("pagoTarjeta.html")){
        localStorage.setItem("pagoRealizado","Pago con Tarjeta")
    
    }else if(window.location.href.includes("pagoYape.html")){ 
        localStorage.setItem("pagoRealizado","Pago con Yape")
    }

    window.location.href='pedido.html'
}

botonPagar.addEventListener('click' , pagarOperacion)