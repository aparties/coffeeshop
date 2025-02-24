document.addEventListener('DOMContentLoaded',() =>{
    const detalleCarrito = document.getElementById("detallePedido");
    detalleCarrito.style.border="1px solid black";  
    detalleCarrito.style.width="300px";
    detalleCarrito.style.height="50%";
    detalleCarrito.style.display ="flex"
    detalleCarrito.style.alignItems ="center"
    detalleCarrito.style.position="relative"
    detalleCarrito.style.top = "25%"
    detalleCarrito.style.bottom  = "25%"
    detalleCarrito.style.backgroundColor="skyblue"
    detalleCarrito.style.marginLeft = "100px"
    detalleCarrito.style.borderRadius = "20px"
    
    let carrito = JSON.parse(localStorage.getItem('carrito'));
    const precioDeCompra = localStorage.getItem('PrecioDeCompra');
    let productos="";
    Object.keys(carrito).forEach(nombreProducto => productos+= `${nombreProducto}: ${carrito[nombreProducto]}\n`);

    detalleCarrito.style.display ='flex'
    detalleCarrito.style.flexDirection ='column'
    detalleCarrito.innerHTML=`<h3 class="detalle-pago">Detalle de carrito</h3><br>
                    <h3 class="detalle-pago">Total a pagar:</h3>
                      <h3 class="detalle-pago">${productos}</h3>
                      <br>
                      <span class ="pago-Valor">S/. ${precioDeCompra}</span>
                      <br>
                      <button type="button" class="boton-return" onclick="irCarrito()" style="padding: 10px; border-radius: 10px;">Regresar al Carrito</button>`

})

const botonRet = document.querySelector("boton-return")
function irCarrito(){
    window.location.href = "carrito.html"
}
