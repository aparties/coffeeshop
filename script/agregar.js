document.addEventListener("DOMContentLoaded", function () {
    const productos = [
        { nombre: "Frappé Mocha", precio: 13.5, imagen: "/img/f1.jpg" },
        { nombre: "Frappé Caramel", precio: 14.0, imagen: "/img/f2.jpg" },
        { nombre: "Frappé de Café", precio: 13.0, imagen: "/img/f3.jpg" },
        { nombre: "Frappé Oreo", precio: 14.0, imagen: "/img/f4.png" },
        { nombre: "Café Americano", precio: 10.5, imagen: "/img/americano.jpg" },
        { nombre: "Cappuccino Clásico", precio: 13.0, imagen: "/img/capuchino.jpg" },
        { nombre: "Mocaccino", precio: 14.0, imagen: "/img/mocaccino.jpg" },
        { nombre: "Latte", precio: 13.0, imagen: "/img/latte.png" }
    ];

    const contenedorProductos = document.querySelector(".productos");

    let carrito = JSON.parse(localStorage.getItem("carrito")) || {};

    productos.forEach(producto => {
        const productoElemento = document.createElement("div");
        productoElemento.classList.add("producto");

        productoElemento.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h2>${producto.nombre}</h2>
            <p class="precio">S/ ${producto.precio.toFixed(2)}</p>
            <label for="cantidad-${producto.nombre}">Cantidad:</label>
            <input type="number" id="cantidad-${producto.nombre}" min="1" value="${carrito[producto.nombre] || 1}">
            <button class="btn-agregar" data-nombre="${producto.nombre}" data-precio="${producto.precio}">Agregar</button>
        `;

        contenedorProductos.appendChild(productoElemento);
    });

    document.querySelectorAll(".btn-agregar").forEach(boton => {
        boton.addEventListener("click", function () {
            const nombre = this.getAttribute("data-nombre");
            const precio = parseFloat(this.getAttribute("data-precio"));
            const cantidadInput = document.getElementById(`cantidad-${nombre}`);
            const cantidad = parseInt(cantidadInput.value);

            carrito[nombre] = (carrito[nombre] || 0) + cantidad;
            localStorage.setItem("carrito", JSON.stringify(carrito));

            alert(`${nombre} agregado al carrito.`);
        });
    });
});
