const btnEscaneo = document.getElementById('btn-escaneo');
const modalEscaneo = document.getElementById('modal-escaneo');
const btnRegresar = document.getElementById('btn-regresar');
const btnJugar = document.getElementById('btn-jugar');
const modalMinijuego = document.getElementById('modal-minijuego');
const btnCerrarMinijuego = document.getElementById('btn-cerrar-minijuego');
// Animation
const animateBtn = document.getElementById("animate-btn");
const arTarget = document.getElementById("ar-target");
const model = document.getElementById("ar-model");
let targetDetected = false;
let rotating = false;
const ROTATION_TIME = 0.5;
const ROTATION_DEGREES = 360;
arTarget.addEventListener("targetFound", () =>{
    console.log("got the target bubba")  ;
    targetDetected = true;
    animateBtn.hidden = false;
});
arTarget.addEventListener("targetLost", () =>{
    console.log("lost target");
    targetDetected = false;
    animateBtn.hidden = true;
});

animateBtn.addEventListener("click", () => {
    if(!targetDetected || rotating) return;
    rotating = true;
    animateBtn.disabled = true;
    const currentRotation = model.getAttribute("rotation");
    const newRotation = {
        x : currentRotation.x,
        y : currentRotation.y + ROTATION_DEGREES,
        z : currentRotation.z
    };
    model.setAttribute("animation", {
        property:"rotation",
        to: newRotation,
        dur: ROTATION_TIME * 1000, // convert to milliseconds,
        easing :"easeInOutQuad" 
    });
    setTimeout(() => {
        rotating = false;
        if(targetDetected){
            animateBtn.disabled = false;
        }
    }, ROTATION_TIME * 1000);
    model.setAttribute("animation__scale", {
    property: "scale",
    keyframes: [
        "0.2 0.2 0.2",
        "0.3 0.3 0.3",
        "0.2 0.2 0.2"
    ],
    dur: ROTATION_TIME * 1000,
    easing: "easeInOutQuad"
});

    confetti({
        particleCount: 100,
        spread: 70,
        origin: {
            x: 0.5,
            y: 0.7
        }
    });

});
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

