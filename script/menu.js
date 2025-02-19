document.addEventListener("DOMContentLoaded", function () {
    const menuHTML = `
            <ul>
                <li><a href="/main.html">Home</a></li>
                <li><a href="/nosotros.html">Nosotros</a></li>
                <li><a href="/contacto.html">Contacto</a></li>
                <li><a href="/ubicacion.html">Ubicación</a></li>
                <li><a id="bton-login" href="/login.html" style="display: none;">Login</a></li>
                <li><span id="userInfo" style="display: none;">
                    <span id="userEmailHeader"></span>
                    <button id="logoutButton">Cerrar sesión</button>
                    </span>
                </li>
            </ul>
    `;

    // Busca el elemento donde quieres insertar el menú
    const menuContainer = document.getElementById("menu-container");

    if (menuContainer) {
        menuContainer.innerHTML = menuHTML;
    }
});
