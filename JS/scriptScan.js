const btnEscaneo = document.getElementById('btn-escaneo');
const modalEscaneo = document.getElementById('modal-escaneo');
const btnRegresar = document.getElementById('btn-regresar');
const btnJugar = document.getElementById('btn-jugar');
const modalMinijuego = document.getElementById('modal-minijuego');
const btnCerrarMinijuego = document.getElementById('btn-cerrar-minijuego');
const textoInfoEquipo = document.getElementById('texto-info-equipo');
const btnIrPrincipal = document.getElementById('btn-ir-principal');
const EQUIPOS_AL = {
    NYY: { codigo: "NYY", nombre: "The New York Yankees", modelo: "models/Dandy_Yankees.glb" },
    BOS: { codigo: "BOS", nombre: "Boston Red Sox", modelo: "models/Mascota_BOS.glb" },
    BAL: { codigo: "BAL", nombre: "Baltimore Orioles", modelo: "models/Mascota_BAL.glb" },
    TB:  { codigo: "TB",  nombre: "Tampa Bay Rays", modelo: "models/Mascota_TB.glb" },
    TOR: { codigo: "TOR", nombre: "Toronto Blue Jays", modelo: "models/Mascota_TOR.glb" },
    CLE: { codigo: "CLE", nombre: "Cleveland Guardians", modelo: "models/Mascota_CLE.glb" },
    CWS: { codigo: "CWS", nombre: "Chicago White Sox", modelo: "models/Mascota_CWS.glb" },
    DET: { codigo: "DET", nombre: "Detroit Tigers", modelo: "models/Mascota_DET.glb" },
    KC:  { codigo: "KC",  nombre: "Kansas City Royals", modelo: "models/Mascota_KC.glb" },
    MIN: { codigo: "MIN", nombre: "Minnesota Twins", modelo: "models/Mascota_MIN.glb" },
    HOU: { codigo: "HOU", nombre: "Houston Astros", modelo: "models/Mascota_HOU.glb" },
    LAA: { codigo: "LAA", nombre: "Los Angeles Angels", modelo: "models/Mascota_LAA.glb" },
    ATH: { codigo: "ATH", nombre: "Athletics", modelo: "models/Mascota_ATH.glb" },
    SEA: { codigo: "SEA", nombre: "Seattle Mariners", modelo: "models/Mascota_SEA.glb" },
    TEX: { codigo: "TEX", nombre: "Texas Rangers", modelo: "models/Mascota_TEX.glb" }
};
let equipoDetectado = EQUIPOS_AL.NYY;
function actualizarCajaInfo(equipo) {
    if (!equipo) return;
    textoInfoEquipo.textContent = `Información relevante a ${equipo.nombre}`;
    btnIrPrincipal.href = `Principal.html?equipo=${equipo.codigo}`;
    localStorage.setItem('equipoSeleccionado', equipo.codigo);
}
const animateBtn = document.getElementById("animate-btn");
const arTarget = document.getElementById("ar-target");
const model = document.getElementById("ar-model");
let targetDetected = false;
let rotating = false;
const ROTATION_TIME = 0.5;
const ROTATION_DEGREES = 360;
arTarget.addEventListener("targetFound", () => {
    console.log("got the target bubba");
    targetDetected = true;
    animateBtn.hidden = false;
    equipoDetectado = EQUIPOS_AL.NYY;
    actualizarCajaInfo(equipoDetectado);
});
arTarget.addEventListener("targetLost", () => {
    console.log("lost target");
    targetDetected = false;
    animateBtn.hidden = true;
});

animateBtn.addEventListener("click", () => {
    if (!targetDetected || rotating) return;
    rotating = true;
    animateBtn.disabled = true;
    const currentRotation = model.getAttribute("rotation");
    const newRotation = {
        x: currentRotation.x,
        y: currentRotation.y + ROTATION_DEGREES,
        z: currentRotation.z
    };
    model.setAttribute("animation", {
        property: "rotation",
        to: newRotation,
        dur: ROTATION_TIME * 1000,
        easing: "easeInOutQuad"
    });
    setTimeout(() => {
        rotating = false;
        if (targetDetected) {
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
btnEscaneo.addEventListener('click', () => {
    actualizarCajaInfo(equipoDetectado);
    modalEscaneo.showModal();
});

btnRegresar.addEventListener('click', () => {
    modalEscaneo.close();
});

btnJugar.addEventListener('click', () => {
    modalEscaneo.close();
    modalMinijuego.showModal();
});

btnCerrarMinijuego.addEventListener('click', () => {
    modalMinijuego.close();
});