const btnEscaneo = document.getElementById('btn-escaneo');
const modalEscaneo = document.getElementById('modal-escaneo');
const btnRegresar = document.getElementById('btn-regresar');
const btnJugar = document.getElementById('btn-jugar');
const textoInfoEquipo = document.getElementById('texto-info-equipo');
const btnIrPrincipal = document.getElementById('btn-ir-principal');
const EQUIPOS_AL = {
    NYY: { codigo: "NYY", mlbId: 147, nombre: "The New York Yankees", modelo: "models/Dandy_Yankees.glb" },
    BOS: { codigo: "BOS", mlbId: 111, nombre: "Boston Red Sox", modelo: "models/Mascota_BOS.glb" },
    BAL: { codigo: "BAL", mlbId: 110, nombre: "Baltimore Orioles", modelo: "models/Mascota_BAL.glb" },
    TB: { codigo: "TB", mlbId: 139, nombre: "Tampa Bay Rays", modelo: "models/Mascota_TB.glb" },
    TOR: { codigo: "TOR", mlbId: 141, nombre: "Toronto Blue Jays", modelo: "models/Mascota_TOR.glb" },
    CLE: { codigo: "CLE", mlbId: 114, nombre: "Cleveland Guardians", modelo: "models/Mascota_CLE.glb" },
    CWS: { codigo: "CWS", mlbId: 145, nombre: "Chicago White Sox", modelo: "models/Mascota_CWS.glb" },
    DET: { codigo: "DET", mlbId: 116, nombre: "Detroit Tigers", modelo: "models/Mascota_DET.glb" },
    KC: { codigo: "KC", mlbId: 118, nombre: "Kansas City Royals", modelo: "models/Mascota_KC.glb" },
    MIN: { codigo: "MIN", mlbId: 142, nombre: "Minnesota Twins", modelo: "models/Mascota_MIN.glb" },
    HOU: { codigo: "HOU", mlbId: 117, nombre: "Houston Astros", modelo: "models/Mascota_HOU.glb" },
    LAA: { codigo: "LAA", mlbId: 108, nombre: "Los Angeles Angels", modelo: "models/Mascota_LAA.glb" },
    ATH: { codigo: "ATH", mlbId: 133, nombre: "Athletics", modelo: "models/Mascota_ATH.glb" },
    SEA: { codigo: "SEA", mlbId: 136, nombre: "Seattle Mariners", modelo: "models/Mascota_SEA.glb" },
    TEX: { codigo: "TEX", mlbId: 140, nombre: "Texas Rangers", modelo: "models/Mascota_TEX.glb" }
};
let equipoDetectado = EQUIPOS_AL.NYY;
function actualizarCajaInfo(equipo) {
    if (!equipo) return;
    textoInfoEquipo.textContent = `Información relevante a ${equipo.nombre}`;
    btnIrPrincipal.href = `Principal.html?equipo=${equipo.codigo}`;
    localStorage.setItem('equipoSeleccionado', equipo.codigo);
}
const animateBtn = document.getElementById("animate-btn");
const particleBtn = document.getElementById("particle-btn");
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
    particleBtn.hidden = false;
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


});
let emittingParticle = false;
particleBtn.addEventListener("click", () => {
    if (!targetDetected || emittingParticle) {
        return;
    }
    particleBtn.disabled = true;
    emittingParticle = true;
    confetti({
        particleCount: 100,
        spread: 70,
        origin: {
            x: 0.5,
            y: 0.7
        }
    });
    setTimeout(() => {
        emittingParticle = false;
        if (targetDetected) {
            particleBtn.disabled = false;
        }
    }, 500);
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

// MINIGAME GJHEKJGHEJkh
const modalMinijuego = document.getElementById('modal-minijuego');
const btnCerrarMinijuego = document.getElementById('btn-cerrar-minijuego');
const gameContainer = document.getElementById('game-container');
const gameImage = document.getElementById('game-image');
const baseballImg = document.getElementById('baseball');
const hitMarker = document.getElementById('hit-marker');
const gameInstructions = document.getElementById('game-instructions');
const winScreen = document.getElementById('win-screen');
const lossScreen = document.getElementById('loss-screen');
const btnReiniciar = document.getElementById('btn-reiniciar');
const btnReiniciarLoss = document.getElementById('btn-reiniciar-loss');
const rewardPlayerImg = document.getElementById('reward-player-img');
const rewardPlayerName = document.getElementById('reward-player-name');
const rewardPlayerQuote = document.getElementById('reward-player-quote');
const streakLabel = document.getElementById('streak-label');

const FRAME_NORMAL = 'images/minigame.jpeg';
const FRAME_BATTING = 'images/minigame-bat.jpg';
let gameInProgress = false;

let pitchActive = false;
let currentProgress = 0;
let currentDuration = 1200;
let currentCurve = 1;
let swingCooldown = false;
let winStreak = 0;

const MENSAJES_JUGADOR = [
    'Homerun!',
    'Excelente swing, campeón!',
    'Waos!',
    'Tremendo batazo!',
    'Hola!',
    'Exactamente lo que haria yo!',
    'Suertudo',
    'Mejor que yo?',
    'Metete al equipo we!'
];

btnJugar.addEventListener('click', () => {
    modalEscaneo.close();
    modalMinijuego.showModal();
    resetGame();
});

btnCerrarMinijuego.addEventListener('click', () => {
    modalMinijuego.close();
});

function resetGame() {
    gameInProgress = false;
    pitchActive = false;
    swingCooldown = false;
    winScreen.style.display = 'none';
    lossScreen.style.display = 'none';
    baseballImg.style.display = 'none';
    hitMarker.style.display = 'none';
    gameImage.src = FRAME_NORMAL;
    gameInstructions.style.display = 'block';
    gameInstructions.textContent = "¡Toca la pantalla para batear!";
    updateStreakDisplay();
}

function updateStreakDisplay() {
    if (streakLabel) {
        streakLabel.textContent = `Racha: ${winStreak} 🔥`;
    }
}

async function mostrarPremioJugador() {
    try {
        const equipoActual = equipoDetectado || EQUIPOS_AL.NYY;
        rewardPlayerName.textContent = "Cargando...";
        rewardPlayerImg.src = "images/logo.png";

        const randomMsg = MENSAJES_JUGADOR[Math.floor(Math.random() * MENSAJES_JUGADOR.length)];
        rewardPlayerQuote.textContent = randomMsg;

        const res = await fetch(`https://statsapi.mlb.com/api/v1/teams/${equipoActual.mlbId}/roster/Active`);
        const data = await res.json();

        if (data.roster && data.roster.length > 0) {
            const randomIndex = Math.floor(Math.random() * data.roster.length);
            const player = data.roster[randomIndex].person;

            rewardPlayerName.textContent = player.fullName;
            rewardPlayerImg.src = `https://securea.mlb.com/mlb/images/players/head_shot/${player.id}.jpg`;
            rewardPlayerImg.onerror = function () { this.src = 'images/logo.png'; };
        } else {
            rewardPlayerName.textContent = "Jugador MLB";
        }
    } catch (err) {
        console.error("Error al obtener la tarjeta del jugador:", err);
        rewardPlayerName.textContent = "Jugador Estrella";
    }
}

function startPitch() {
    if (gameInProgress) return;
    gameInProgress = true;
    gameInstructions.style.display = 'none';
    baseballImg.style.display = 'block';

    currentCurve = Math.random() < 0.5 ? 1 : -1;
    let startX = 170;
    let startY = 120;
    let startTime = null;

    let baseMinDuration = Math.max(500, 1000 - (winStreak * 100));
    let baseMaxDuration = Math.max(800, 1800 - (winStreak * 200));
    currentDuration = Math.floor(Math.random() * (baseMaxDuration - baseMinDuration)) + baseMinDuration;

    function animateBall(timestamp) {
        if (!startTime) startTime = timestamp;
        let elapsed = timestamp - startTime;
        currentProgress = elapsed / currentDuration;

        if (currentProgress < 1) {
            let curveIntensity = Math.min(85, 50 + (winStreak * 7));
            let currentX = startX + (200 - startX) * currentProgress + Math.sin(currentProgress * Math.PI) * curveIntensity * currentCurve;
            let currentY = startY + (280 - startY) * currentProgress;
            let currentScale = 0.3 + (currentProgress * 1.5);

            baseballImg.style.left = `${currentX}px`;
            baseballImg.style.top = `${currentY}px`;
            baseballImg.style.transform = `scale(${currentScale})`;

            if (pitchActive) {
                requestAnimationFrame(animateBall);
            }
        } else {
            baseballImg.style.display = 'none';
            pitchActive = false;
            winStreak = 0;
            updateStreakDisplay();
            lossScreen.style.display = 'flex';
        }
    }

    pitchActive = true;
    requestAnimationFrame(animateBall);
}

gameContainer.addEventListener('click', () => {
    if (winScreen.style.display === 'flex' || lossScreen.style.display === 'flex' || swingCooldown) {
        return;
    }

    if (!pitchActive && !gameInProgress) {
        let randomStartupDelay = Math.floor(Math.random() * 1000) + 500;
        gameInstructions.textContent = "¡Viene la bola...";
        setTimeout(() => {
            gameInstructions.style.display = 'none';
            startPitch();
        }, randomStartupDelay);
        return;
    }

    if (pitchActive) {
        swingCooldown = true;
        gameImage.src = FRAME_BATTING;

        hitMarker.style.display = 'block';
        setTimeout(() => {
            hitMarker.style.display = 'none';
        }, 200);

        let minWindow = Math.min(0.80, 0.75 + (winStreak * 0.01));
        let maxWindow = Math.max(0.92, 0.95 - (winStreak * 0.006));

        if (currentProgress >= minWindow && currentProgress <= maxWindow) {
            pitchActive = false;
            baseballImg.style.display = 'none';
            winStreak++;
            updateStreakDisplay();

            mostrarPremioJugador();
            winScreen.style.display = 'flex';

            if (typeof confetti === 'function') {
                confetti({
                    particleCount: 120,
                    spread: 80,
                    origin: { y: 0.6 }
                });
            }
        } else {
            setTimeout(() => {
                gameImage.src = FRAME_NORMAL;
                swingCooldown = false;
            }, 800);
        }
    }
});

btnReiniciar.addEventListener('click', (e) => {
    e.stopPropagation();
    resetGame();
});

if (btnReiniciarLoss) {
    btnReiniciarLoss.addEventListener('click', (e) => {
        e.stopPropagation();
        resetGame();
    });
}

const btnDebugMinijuego = document.getElementById('btn-debug-minijuego');

if (btnDebugMinijuego) {
    btnDebugMinijuego.addEventListener('click', () => {
        equipoDetectado = EQUIPOS_AL.NYY;
        if (modalEscaneo.open) {
            modalEscaneo.close();
        }
        modalMinijuego.showModal();
        resetGame();
    });
}