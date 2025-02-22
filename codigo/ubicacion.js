function cambiarUbicacion(mapaUrl, enlaceUrl) {
    document.getElementById('mapa-iframe').src = mapaUrl;
    document.getElementById('enlace-ver-mapa').href = enlaceUrl;
    document.querySelector('.columna-mapa').classList.add('mover-abajo'); 
}
