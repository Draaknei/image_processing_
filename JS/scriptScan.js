const btnEscaneo = document.getElementById('btn-escaneo');
const modalEscaneo = document.getElementById('modal-escaneo');
const btnRegresar = document.getElementById('btn-regresar');
const btnJugar = document.getElementById('btn-jugar');
const modalMinijuego = document.getElementById('modal-minijuego');
const btnCerrarMinijuego = document.getElementById('btn-cerrar-minijuego');

// Abrir Escaneo
btnEscaneo.addEventListener('click', () => {
    modalEscaneo.showModal();
});

// Botón Rojo (Cerrar Escaneo)
btnRegresar.addEventListener('click', () => {
    modalEscaneo.close();
});

// Botón Verde (Cerrar Escaneo y Abrir Juego)
btnJugar.addEventListener('click', () => {
    modalEscaneo.close();
    modalMinijuego.showModal();
});

// Cerrar ventana de Minijuego
btnCerrarMinijuego.addEventListener('click', () => {
    modalMinijuego.close();
});