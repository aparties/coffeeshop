document.addEventListener("DOMContentLoaded", function () {
    const producto = document.querySelector(".detalle-producto");
    const nombreProducto = producto.querySelector("h1").textContent.trim();
    const cantidadInput = producto.querySelector("input[type='number']");
    const actualizarBtn = producto.querySelector(".btn:not(.eliminar):not(.confirmar)");
    const eliminarBtn = producto.querySelector(".eliminar");
    const precioBase = parseFloat(producto.querySelector(".precio").textContent.replace("S/ ", ""));
    const precioSpan = producto.querySelector(".precio");

    let carrito = JSON.parse(localStorage.getItem("carrito")) || {};

    // Si el producto está en el carrito, cargar su cantidad; si no, usar 1
    cantidadInput.value = carrito[nombreProducto] || 1;

    function actualizarPrecio() {
        let cantidad = parseInt(cantidadInput.value) || 1;
        carrito[nombreProducto] = cantidad;
        precioSpan.textContent = `S/ ${(cantidad * precioBase).toFixed(2)}`;
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }

    actualizarBtn.addEventListener("click", actualizarPrecio);

    eliminarBtn.addEventListener("click", function () {
        delete carrito[nombreProducto];
        localStorage.setItem("carrito", JSON.stringify(carrito));

        // Eliminar visualmente el producto de la página
        producto.innerHTML = "<p>Producto eliminado del carrito.</p>";

        // Redirigir después de un corto tiempo
        setTimeout(() => window.location.href = "main.html", 1000);
    });
});

