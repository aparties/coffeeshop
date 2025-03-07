document.addEventListener('DOMContentLoaded',() =>{
    const detalleCarrito = document.getElementById("detallePedido");
    detalleCarrito.classList.add('activarCasilla'); //activa en el estilo de css.
    
    let carrito = JSON.parse(localStorage.getItem('carrito'));
    const precioDeCompra = localStorage.getItem('PrecioDeCompra');
    let productos="";
    Object.keys(carrito).forEach(nombreProducto => productos+= `${nombreProducto}: ${carrito[nombreProducto]}<br>`);
    detalleCarrito.innerHTML = `<br>
                    <h2 class="detalle-pago"><ion-icon name="cart-outline" style="font-size:25px;"></ion-icon> Detalle de carrito</h2><br>
                    <h3 class="detalle-pago" style="font-weight:bold;">${productos}</h3>
                    <br>
                    <h3 class="detalle-pago">Total a pagar:</h3>
                    <span class ="pago-Valor">S/. ${precioDeCompra}</span>
                    <br>
                    <button type="button" class="btn" style="width: 80%;" onclick="irCarrito()">Regresar al Carrito</button>`;
})

const botonRet = document.querySelector("boton-return")
function irCarrito(){
    window.location.href = "carrito.html"
}
