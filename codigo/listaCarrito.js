document.addEventListener('DOMContentLoaded',() =>{
    const detalleCarrito = document.getElementById("detallePedido");
    detalleCarrito.classList.add('activarCasilla'); //activa en el estilo de css.
    
    let carrito = JSON.parse(localStorage.getItem('carrito'));
    const precioDeCompra = localStorage.getItem('PrecioDeCompra');
    let productos="";
    Object.keys(carrito).forEach(nombreProducto => productos+= `${nombreProducto}: ${carrito[nombreProducto]}\n`);

    detalleCarrito.style.display ='flex'
    detalleCarrito.style.flexDirection ='column'
    detalleCarrito.innerHTML = `<br>
                    <h2 class="detalle-pago">Detalle de carrito</h2><br>
                    <h3 class="detalle-pago" style="font-weight:bold">${productos}</h3>
                    <br>
                    <h3 class="detalle-pago">Total a pagar:</h3>
                    <span class ="pago-Valor">S/. ${precioDeCompra}</span>
                    <br>
                    <button type="button" class="boton-return" onclick="irCarrito()" style="padding: 10px;border-radius: 10px;">Regresar al Carrito</button>`;
})

const botonRet = document.querySelector("boton-return")
function irCarrito(){
    window.location.href = "carrito.html"
}
