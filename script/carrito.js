document.addEventListener("DOMContentLoaded", function () {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || {};
    const tablaCarrito = document.querySelector("#tabla-carrito tbody");
    const totalCarrito = document.getElementById("total-carrito");

    function actualizarCarrito() {
        tablaCarrito.innerHTML = "";
        let total = 0;

        Object.keys(carrito).forEach(nombreProducto => {
            const cantidad = carrito[nombreProducto];
            const precio = obtenerPrecioProducto(nombreProducto);
            total += precio * cantidad;

            const fila = document.createElement("tr");
            fila.innerHTML = `
                <td>${nombreProducto}</td>
                <td>
                    <button class="btn-menos" data-producto="${nombreProducto}">➖</button>
                    ${cantidad}
                    <button class="btn-mas" data-producto="${nombreProducto}">➕</button>
                </td>
                <td>S/ ${(precio * cantidad).toFixed(2)}</td>
                <td><button class="btn-eliminar" data-producto="${nombreProducto}">🗑 Eliminar</button></td>
            `;
            tablaCarrito.appendChild(fila);
        });

        totalCarrito.textContent = `Total: S/ ${total.toFixed(2)}`;
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }

    function obtenerPrecioProducto(nombre) {
        const productos = {
            "Frappé Mocha": 13.5, "Frappé Caramel": 14.0, "Frappé de Café": 13.0,
            "Frappé Oreo": 14.0, "Café Americano": 10.5, "Cappuccino Clásico": 13.0,
            "Mocaccino": 14.0, "Latte": 13.0
        };
        return productos[nombre] || 0;
    }

    tablaCarrito.addEventListener("click", function (e) {
        if (e.target.classList.contains("btn-mas")) {
            const producto = e.target.dataset.producto;
            carrito[producto]++;
            actualizarCarrito();
        } else if (e.target.classList.contains("btn-menos")) {
            const producto = e.target.dataset.producto;
            if (carrito[producto] > 1) {
                carrito[producto]--;
            } else {
                delete carrito[producto];
            }
            actualizarCarrito();
        } else if (e.target.classList.contains("btn-eliminar")) {
            const producto = e.target.dataset.producto;
            delete carrito[producto];
            actualizarCarrito();
        }
    });

    document.getElementById("finalizar-compra").addEventListener("click", function () {
        alert("Compra finalizada. ¡Gracias por tu compra!");
        localStorage.removeItem("carrito");
        window.location.href = "main.html";
    });

    actualizarCarrito();
});
