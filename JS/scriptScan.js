// Keys must match the data-team attribute of the AR targets in Scan.html
// const AL_TEAMS = {
//     NYY: { code: "NYY", mlbId: 147, name: "The New York Yankees", model: "models/Dandy_Yankees.glb" },
//     BOS: { code: "BOS", mlbId: 111, name: "Boston Red Sox", model: "models/Mascota_BOS.glb" },
//     BAL: { code: "BAL", mlbId: 110, name: "Baltimore Orioles", model: "models/Mascota_BAL.glb" },
//     TB: { code: "TB", mlbId: 139, name: "Tampa Bay Rays", model: "models/Mascota_TB.glb" },
//     TOR: { code: "TOR", mlbId: 141, name: "Toronto Blue Jays", model: "models/Mascota_TOR.glb" },
//     CLE: { code: "CLE", mlbId: 114, name: "Cleveland Guardians", model: "models/Mascota_CLE.glb" },
//     CWS: { code: "CWS", mlbId: 145, name: "Chicago White Sox", model: "models/Mascota_CWS.glb" },
//     DET: { code: "DET", mlbId: 116, name: "Detroit Tigers", model: "models/Tigers.glb" },
//     KC: { code: "KC", mlbId: 118, name: "Kansas City Royals", model: "models/Mascota_KC.glb" },
//     MIN: { code: "MIN", mlbId: 142, name: "Minnesota Twins", model: "models/Mascota_MIN.glb" },
//     HOU: { code: "HOU", mlbId: 117, name: "Houston Astros", model: "models/Astros.glb" },
//     LAA: { code: "LAA", mlbId: 108, name: "Los Angeles Angels", model: "models/Mascota_LAA.glb" },
//     ATH: { code: "ATH", mlbId: 133, name: "Athletics", model: "models/Athletics.glb" },
//     SEA: { code: "SEA", mlbId: 136, name: "Seattle Mariners", model: "models/Mascota_SEA.glb" },
//     TEX: { code: "TEX", mlbId: 140, name: "Texas Rangers", model: "models/Mascota_TEX.glb" }
// };


const AL_TEAMS = {
    NYY: { code: "NYY", mlbId: 147, name: "The New York Yankees", model: "models/Dandy_Yankees.glb" },
    BOS: { code: "BOS", mlbId: 111, name: "Boston Red Sox", model: "logos/01.png" },
    BAL: { code: "BAL", mlbId: 110, name: "Baltimore Orioles", model: "logos/02.png" },
    TB: { code: "TB", mlbId: 139, name: "Tampa Bay Rays", model: "logos/03.png" },
    TOR: { code: "TOR", mlbId: 141, name: "Toronto Blue Jays", model: "logos/04.png" },
    CLE: { code: "CLE", mlbId: 114, name: "Cleveland Guardians", model: "logos/05.png" },
    CWS: { code: "CWS", mlbId: 145, name: "Chicago White Sox", model: "logos/06.png" },
    DET: { code: "DET", mlbId: 116, name: "Detroit Tigers", model: "models/Tigers.glb" },
    KC: { code: "KC", mlbId: 118, name: "Kansas City Royals", model: "logos/08.png" },
    MIN: { code: "MIN", mlbId: 142, name: "Minnesota Twins", model: "logos/09.png" },
    HOU: { code: "HOU", mlbId: 117, name: "Houston Astros", model: "models/Astros.glb" },
    LAA: { code: "LAA", mlbId: 108, name: "Los Angeles Angels", model: "logos/11.png" },
    ATH: { code: "ATH", mlbId: 133, name: "Athletics", model: "models/Athletics.glb" },
    SEA: { code: "SEA", mlbId: 136, name: "Seattle Mariners", model: "logos/13.png" },
    TEX: { code: "TEX", mlbId: 140, name: "Texas Rangers", model: "logos/14.png" }
};

const MLB_API = "https://statsapi.mlb.com/api/v1";
const AL_LEAGUE_ID = 103;
const DIVISION_NAMES = {
    200: "División Oeste de la Liga Americana",
    201: "División Este de la Liga Americana",
    202: "División Central de la Liga Americana"
};

const BASE_SCALE = "0.2 0.2 0.2";
const PULSE_SCALE = "0.3 0.3 0.3";
const ROTATION_TIME = 0.5;
const ROTATION_DEGREES = 360;
const DETECTION_GRACE_MS = 3000;

const PAST_WINDOW_DAYS = 120;
const FUTURE_WINDOW_DAYS = 200;
const RECENT_RESULTS_COUNT = 5;
const INFO_CACHE_MS = 5 * 60 * 1000;

const btnScan = document.getElementById("btn-escaneo");
const scanModal = document.getElementById("modal-escaneo");
const btnBack = document.getElementById("btn-regresar");
const btnPlay = document.getElementById("btn-jugar");
const teamInfoText = document.getElementById("texto-info-equipo");
const teamInfoPanel = document.getElementById("info-equipo");
const btnGoToMain = document.getElementById("btn-ir-principal");
const scanToast = document.getElementById("scan-toast");
const animateBtn = document.getElementById("animate-btn");
const particleBtn = document.getElementById("particle-btn");

let detectedTeam = null;
let selectedTeam = null;
let activeTarget = null;
let graceTimer = null;
let toastTimer = null;
let rotating = false;
let emittingParticle = false;
let infoRequestId = 0;
const teamInfoCache = {};

function showToast(message) {
    scanToast.textContent = message;
    scanToast.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
        scanToast.hidden = true;
    }, 3000);
}

function updateInfoBox(team) {
    if (!team) return;
    teamInfoText.textContent = `Información relevante a ${team.name}`;
    btnGoToMain.href = `Principal.html?equipo=${team.code}`;
    localStorage.setItem("equipoSeleccionado", team.code);
}

// function loadModel(team, modelEl) {
//     if (modelEl.dataset.loaded === "true") return;
//     modelEl.dataset.loaded = "true";
//     modelEl.addEventListener("model-error", () => {
//         console.warn(`Could not load 3D model for ${team.code}: ${team.model}`);
//     });
//     modelEl.setAttribute("gltf-model", team.model);
// }

function loadModel(team, modelEl) {
    if (modelEl.dataset.loaded === "true") return;
    modelEl.dataset.loaded = "true";

    const isGLB = team.model.toLowerCase().endsWith(".glb");

    if (isGLB) {
        modelEl.addEventListener("model-error", () => {
            console.warn(`Could not load 3D model for ${team.code}: ${team.model}`);
        });

        modelEl.setAttribute("gltf-model", team.model);
        return;
    }

    const image = new Image();

    image.onload = () => {
        const aspectRatio = image.naturalWidth / image.naturalHeight;
        const maxDimension = 1.5;

        const width = aspectRatio >= 1 ? maxDimension : maxDimension * aspectRatio;
        const height = aspectRatio >= 1 ? maxDimension / aspectRatio : maxDimension;

        modelEl.setAttribute("geometry", {
            primitive: "plane",
            width,
            height
        });

        modelEl.setAttribute("material", {
            src: team.model,
            side: "double",
            transparent: true
        });
    };

    image.onerror = () => {
        console.warn(`Could not load team logo for ${team.code}: ${team.model}`);
    };

    image.src = team.model;
}

function onTargetFound(team, modelEl) {
    console.log(`Target found: ${team.code}`);
    clearTimeout(graceTimer);
    loadModel(team, modelEl);
    activeTarget = { team, model: modelEl };
    detectedTeam = team;
    animateBtn.hidden = false;
    particleBtn.hidden = false;
    animateBtn.disabled = rotating;
    particleBtn.disabled = emittingParticle;
}

function onTargetLost(team) {
    console.log(`Target lost: ${team.code}`);
    if (!activeTarget || activeTarget.team.code !== team.code) return;
    activeTarget = null;
    animateBtn.hidden = true;
    particleBtn.hidden = true;
    clearTimeout(graceTimer);
    graceTimer = setTimeout(() => {
        if (!activeTarget) detectedTeam = null;
    }, DETECTION_GRACE_MS);
}

document.querySelectorAll(".ar-target").forEach((targetEl) => {
    const team = AL_TEAMS[targetEl.dataset.team];
    const modelEl = targetEl.querySelector(".team-model");
    if (!team || !modelEl) {
        console.warn("AR target with unknown or missing team/model:", targetEl);
        return;
    }
    targetEl.addEventListener("targetFound", () => onTargetFound(team, modelEl));
    targetEl.addEventListener("targetLost", () => onTargetLost(team));
});

animateBtn.addEventListener("click", () => {
    if (!activeTarget || rotating) return;
    const modelEl = activeTarget.model;
    const halfTime = (ROTATION_TIME * 1000) / 2;

    rotating = true;
    animateBtn.disabled = true;

    const currentRotation = modelEl.getAttribute("rotation");
    modelEl.setAttribute("animation", {
        property: "rotation",
        to: `${currentRotation.x} ${currentRotation.y + ROTATION_DEGREES} ${currentRotation.z}`,
        dur: ROTATION_TIME * 1000,
        easing: "easeInOutQuad"
    });

    modelEl.setAttribute("animation__scale", {
        property: "scale",
        to: PULSE_SCALE,
        dur: halfTime,
        easing: "easeInOutQuad"
    });
    setTimeout(() => {
        modelEl.setAttribute("animation__scale", {
            property: "scale",
            to: BASE_SCALE,
            dur: halfTime,
            easing: "easeInOutQuad"
        });
    }, halfTime);

    setTimeout(() => {
        rotating = false;
        if (activeTarget) {
            animateBtn.disabled = false;
        }
    }, ROTATION_TIME * 1000);
});

particleBtn.addEventListener("click", () => {
    if (!activeTarget || emittingParticle) return;
    particleBtn.disabled = true;
    emittingParticle = true;
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { x: 0.5, y: 0.7 }
    });
    setTimeout(() => {
        emittingParticle = false;
        if (activeTarget) {
            particleBtn.disabled = false;
        }
    }, 500);
});

const dateFormatter = new Intl.DateTimeFormat("es-MX", { weekday: "short", day: "numeric", month: "short", year: "numeric" });
const timeFormatter = new Intl.DateTimeFormat("es-MX", { hour: "numeric", minute: "2-digit" });

function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

function toApiDate(date) {
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${date.getFullYear()}-${month}-${day}`;
}

async function fetchJson(url) {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
    return res.json();
}

async function fetchTeamDetails(team) {
    const data = await fetchJson(`${MLB_API}/teams/${team.mlbId}`);
    return data.teams && data.teams.length > 0 ? data.teams[0] : null;
}

async function fetchStanding(team) {
    const currentYear = new Date().getFullYear();
    for (const season of [currentYear, currentYear - 1]) {
        const data = await fetchJson(`${MLB_API}/standings?leagueId=${AL_LEAGUE_ID}&season=${season}&standingsTypes=regularSeason`);
        for (const division of data.records || []) {
            const record = (division.teamRecords || []).find((r) => r.team.id === team.mlbId);
            if (record) return { season, record };
        }
    }
    return null;
}

async function fetchGames(team, startDate, endDate) {
    const data = await fetchJson(`${MLB_API}/schedule?sportId=1&teamId=${team.mlbId}&startDate=${toApiDate(startDate)}&endDate=${toApiDate(endDate)}`);
    const games = (data.dates || []).flatMap((day) => day.games || []);
    return games.sort((a, b) => new Date(a.gameDate) - new Date(b.gameDate));
}

function isFinished(game) {
    return game.status.abstractGameState === "Final"
        && Number.isInteger(game.teams.home.score)
        && Number.isInteger(game.teams.away.score);
}

function isUpcoming(game) {
    const detailedState = (game.status.detailedState || "").toLowerCase();
    return game.status.abstractGameState !== "Final"
        && !detailedState.includes("postponed")
        && !detailedState.includes("cancel");
}

function describeGame(game, team) {
    const isHome = game.teams.home.team.id === team.mlbId;
    const own = isHome ? game.teams.home : game.teams.away;
    const opponent = isHome ? game.teams.away : game.teams.home;
    return {
        isHome,
        own,
        opponent,
        venue: game.venue ? game.venue.name : "",
        date: new Date(game.gameDate),
        isLive: game.status.abstractGameState === "Live",
        won: own.score > opponent.score
    };
}

function createEl(tag, text, className) {
    const node = document.createElement(tag);
    if (text !== undefined && text !== null) node.textContent = text;
    if (className) node.className = className;
    return node;
}

function createSection(title) {
    const section = createEl("section", null, "info-section");
    section.appendChild(createEl("h4", title, "info-title"));
    return section;
}

function buildSummary(details, standing) {
    const sentences = [];

    if (details) {
        const divisionName = details.division ? DIVISION_NAMES[details.division.id] : null;
        let intro = `Los ${details.name}`;
        intro += divisionName ? ` compiten en la ${divisionName}` : " compiten en la Liga Americana";
        if (details.venue && details.venue.name) intro += " y juegan de local en " + details.venue.name;
        sentences.push(intro + ".");
        if (details.firstYearOfPlay) sentences.push(`Su primera temporada fue en ${details.firstYearOfPlay}.`);
    }

    if (standing) {
        const record = standing.record;
        sentences.push(`Temporada ${standing.season}: ${record.wins} victorias y ${record.losses} derrotas (${record.winningPercentage}), ${record.divisionRank}.° lugar en su división.`);
    }

    return sentences.join(" ");
}

function buildLastGameSection(team, pastGames) {
    const section = createSection("Último juego");
    if (!pastGames) {
        section.appendChild(createEl("p", "Información no disponible."));
        return section;
    }

    const finished = pastGames.filter(isFinished);
    if (finished.length === 0) {
        section.appendChild(createEl("p", "Sin juegos recientes."));
        return section;
    }

    const game = describeGame(finished[finished.length - 1], team);
    const line = createEl("p", `${game.own.team.name} ${game.own.score} - ${game.opponent.score} ${game.opponent.team.name}`);
    line.appendChild(createEl("span", game.won ? "Victoria" : "Derrota", `result-chip ${game.won ? "result-win" : "result-loss"}`));
    section.appendChild(line);
    section.appendChild(createEl("p", `${game.isHome ? "Local" : "Visitante"} · ${dateFormatter.format(game.date)}${game.venue ? " · " + game.venue : ""}`, "info-detail"));
    return section;
}

function buildNextGameSection(team, futureGames) {
    const section = createSection("Próximo juego");
    if (!futureGames) {
        section.appendChild(createEl("p", "Información no disponible."));
        return section;
    }

    const upcoming = futureGames.filter(isUpcoming);
    if (upcoming.length === 0) {
        section.appendChild(createEl("p", "Sin próximos juegos programados."));
        return section;
    }

    const game = describeGame(upcoming[0], team);
    section.appendChild(createEl("p", `${game.own.team.name} vs ${game.opponent.team.name}`));
    const when = game.isLive ? "En juego ahora" : `${dateFormatter.format(game.date)}, ${timeFormatter.format(game.date)}`;
    section.appendChild(createEl("p", `${game.isHome ? "Local" : "Visitante"} · ${when}${game.venue ? " · " + game.venue : ""}`, "info-detail"));
    return section;
}

function buildRecentResultsSection(team, pastGames) {
    const section = createSection(`Últimos ${RECENT_RESULTS_COUNT} resultados`);
    if (!pastGames) {
        section.appendChild(createEl("p", "Información no disponible."));
        return section;
    }

    const recent = pastGames.filter(isFinished).slice(-RECENT_RESULTS_COUNT);
    if (recent.length === 0) {
        section.appendChild(createEl("p", "Sin resultados recientes."));
        return section;
    }

    const chips = createEl("div", null, "recent-results");
    recent.forEach((rawGame) => {
        const game = describeGame(rawGame, team);
        const chip = createEl("span", game.won ? "V" : "D", `result-chip ${game.won ? "result-win" : "result-loss"}`);
        chip.title = `${dateFormatter.format(game.date)}: ${game.own.score}-${game.opponent.score} vs ${game.opponent.team.name}`;
        chips.appendChild(chip);
    });
    section.appendChild(chips);
    section.appendChild(createEl("p", "V = victoria, D = derrota. El más reciente está a la derecha.", "info-detail"));
    return section;
}

function showInfoMessage(message) {
    teamInfoPanel.replaceChildren(createEl("p", message));
}

function renderTeamInfo(team, info) {
    teamInfoPanel.replaceChildren();

    const summary = buildSummary(info.details, info.standing);
    if (summary) teamInfoPanel.appendChild(createEl("p", summary));

    teamInfoPanel.appendChild(buildLastGameSection(team, info.pastGames));
    teamInfoPanel.appendChild(buildNextGameSection(team, info.futureGames));
    teamInfoPanel.appendChild(buildRecentResultsSection(team, info.pastGames));
}

async function loadTeamInfo(team) {
    const requestId = ++infoRequestId;

    const cached = teamInfoCache[team.code];
    if (cached && Date.now() - cached.time < INFO_CACHE_MS) {
        renderTeamInfo(team, cached.info);
        return;
    }

    showInfoMessage("Cargando información del equipo...");

    const now = new Date();
    const results = await Promise.allSettled([
        fetchTeamDetails(team),
        fetchStanding(team),
        fetchGames(team, addDays(now, -PAST_WINDOW_DAYS), addDays(now, 1)),
        fetchGames(team, addDays(now, -1), addDays(now, FUTURE_WINDOW_DAYS))
    ]);

    if (requestId !== infoRequestId) return;

    results.forEach((result) => {
        if (result.status === "rejected") console.error("Error loading team info:", result.reason);
    });

    const valueOf = (result) => (result.status === "fulfilled" ? result.value : null);
    const info = {
        details: valueOf(results[0]),
        standing: valueOf(results[1]),
        pastGames: valueOf(results[2]),
        futureGames: valueOf(results[3])
    };

    if (results.every((result) => result.status === "rejected")) {
        showInfoMessage("No se pudo cargar la información del equipo.");
        return;
    }

    teamInfoCache[team.code] = { time: Date.now(), info };
    renderTeamInfo(team, info);
}

btnScan.addEventListener("click", () => {
    if (!detectedTeam) {
        showToast("No se detectó ningún equipo. Apunta la cámara a la imagen de un equipo.");
        return;
    }
    selectedTeam = detectedTeam;
    updateInfoBox(selectedTeam);
    loadTeamInfo(selectedTeam);
    scanModal.showModal();
});

btnBack.addEventListener("click", () => {
    scanModal.close();
});

const gameModal = document.getElementById("modal-minijuego");
const btnCloseGame = document.getElementById("btn-cerrar-minijuego");
const gameContainer = document.getElementById("game-container");
const gameImage = document.getElementById("game-image");
const baseballImg = document.getElementById("baseball");
const hitMarker = document.getElementById("hit-marker");
const gameInstructions = document.getElementById("game-instructions");
const winScreen = document.getElementById("win-screen");
const lossScreen = document.getElementById("loss-screen");
const btnRestart = document.getElementById("btn-reiniciar");
const btnRestartLoss = document.getElementById("btn-reiniciar-loss");
const rewardPlayerImg = document.getElementById("reward-player-img");
const rewardPlayerName = document.getElementById("reward-player-name");
const rewardPlayerQuote = document.getElementById("reward-player-quote");
const streakLabel = document.getElementById("streak-label");

const FRAME_NORMAL = "images/minigame.jpeg";
const FRAME_BATTING = "images/minigame-bat.jpg";
let gameInProgress = false;

let pitchActive = false;
let currentProgress = 0;
let currentDuration = 1200;
let currentCurve = 1;
let swingCooldown = false;
let winStreak = 0;

const PLAYER_MESSAGES = [
    "Homerun!",
    "Excelente swing, campeón!",
    "Waos!",
    "Tremendo batazo!",
    "Hola!",
    "Exactamente lo que haria yo!",
    "Suertudo",
    "Mejor que yo?",
    "Metete al equipo we!"
];

btnPlay.addEventListener("click", () => {
    scanModal.close();
    gameModal.showModal();
    resetGame();
});

btnCloseGame.addEventListener("click", () => {
    gameModal.close();
});

function resetGame() {
    gameInProgress = false;
    pitchActive = false;
    swingCooldown = false;
    winScreen.style.display = "none";
    lossScreen.style.display = "none";
    baseballImg.style.display = "none";
    hitMarker.style.display = "none";
    gameImage.src = FRAME_NORMAL;
    gameInstructions.style.display = "block";
    gameInstructions.textContent = "¡Toca la pantalla para batear!";
    updateStreakDisplay();
}

function updateStreakDisplay() {
    if (streakLabel) {
        streakLabel.textContent = `Racha: ${winStreak} 🔥`;
    }
}

async function showPlayerReward() {
    try {
        const team = selectedTeam || AL_TEAMS.NYY;
        rewardPlayerName.textContent = "Cargando...";
        rewardPlayerImg.src = "images/logo.png";

        const randomMsg = PLAYER_MESSAGES[Math.floor(Math.random() * PLAYER_MESSAGES.length)];
        rewardPlayerQuote.textContent = randomMsg;

        const res = await fetch(`${MLB_API}/teams/${team.mlbId}/roster/Active`);
        const data = await res.json();

        if (data.roster && data.roster.length > 0) {
            const randomIndex = Math.floor(Math.random() * data.roster.length);
            const player = data.roster[randomIndex].person;

            rewardPlayerName.textContent = player.fullName;
            rewardPlayerImg.src = `https://securea.mlb.com/mlb/images/players/head_shot/${player.id}.jpg`;
            rewardPlayerImg.onerror = function () { this.src = "images/logo.png"; };
        } else {
            rewardPlayerName.textContent = "Jugador MLB";
        }
    } catch (err) {
        console.error("Error fetching the reward player card:", err);
        rewardPlayerName.textContent = "Jugador Estrella";
    }
}

function startPitch() {
    if (gameInProgress) return;
    gameInProgress = true;
    gameInstructions.style.display = "none";
    baseballImg.style.display = "block";

    currentCurve = Math.random() < 0.5 ? 1 : -1;
    let startX = 170 / 400;
    let startY = 120 / 350;
    let startTime = null;

    // let baseMinDuration = Math.max(500, 1000 - (winStreak * 100));
    // let baseMaxDuration = Math.max(800, 1800 - (winStreak * 200));
    let baseMinDuration = Math.max(500, 1300 - (winStreak * 150));
let baseMaxDuration = Math.max(800, 2200 - (winStreak * 250));
    currentDuration = Math.floor(Math.random() * (baseMaxDuration - baseMinDuration)) + baseMinDuration;

    function animateBall(timestamp) {
        if (!startTime) startTime = timestamp;
        let elapsed = timestamp - startTime;
        currentProgress = elapsed / currentDuration;

        if (currentProgress < 1) {
            let curveIntensity = Math.min(85, 30 + (winStreak * 10)) / 400;
let currentX = startX + (0.5 - startX) * currentProgress + Math.sin(currentProgress * Math.PI) * curveIntensity * currentCurve;
let currentY = startY + (0.8 - startY) * currentProgress;
            // let curveIntensity = Math.min(85, 50 + (winStreak * 7));
            // let currentX = startX + (200 - startX) * currentProgress + Math.sin(currentProgress * Math.PI) * curveIntensity * currentCurve;
            // let currentY = startY + (280 - startY) * currentProgress;
            let currentScale = 0.3 + (currentProgress * 1.5);

            // baseballImg.style.left = `${currentX}px`;
            // baseballImg.style.top = `${currentY}px`;
            baseballImg.style.left = `${currentX * 100}%`;
            baseballImg.style.top = `${currentY * 100}%`;
            baseballImg.style.transform = `scale(${currentScale})`;

            if (pitchActive) {
                requestAnimationFrame(animateBall);
            }
        } else {
            baseballImg.style.display = "none";
            pitchActive = false;
            winStreak = 0;
            updateStreakDisplay();
            lossScreen.style.display = "flex";
        }
    }

    pitchActive = true;
    requestAnimationFrame(animateBall);
}

gameContainer.addEventListener("click", () => {
    if (winScreen.style.display === "flex" || lossScreen.style.display === "flex" || swingCooldown) {
        return;
    }

    if (!pitchActive && !gameInProgress) {
        let randomStartupDelay = Math.floor(Math.random() * 1000) + 500;
        gameInstructions.textContent = "¡Viene la bola...";
        setTimeout(() => {
            gameInstructions.style.display = "none";
            startPitch();
        }, randomStartupDelay);
        return;
    }

    if (pitchActive) {
        swingCooldown = true;
        gameImage.src = FRAME_BATTING;

        hitMarker.style.display = "block";
        setTimeout(() => {
            hitMarker.style.display = "none";
        }, 200);

        let minWindow = Math.min(0.80, 0.75 + (winStreak * 0.01));
        let maxWindow = Math.max(0.92, 0.95 - (winStreak * 0.006));

        if (currentProgress >= minWindow && currentProgress <= maxWindow) {
            pitchActive = false;
            baseballImg.style.display = "none";
            winStreak++;
            updateStreakDisplay();

            showPlayerReward();
            winScreen.style.display = "flex";

            if (typeof confetti === "function") {
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

btnRestart.addEventListener("click", (e) => {
    e.stopPropagation();
    resetGame();
});

if (btnRestartLoss) {
    btnRestartLoss.addEventListener("click", (e) => {
        e.stopPropagation();
        resetGame();
    });
}

const btnDebugGame = document.getElementById("btn-debug-minijuego");

if (btnDebugGame) {
    btnDebugGame.addEventListener("click", () => {
        selectedTeam = AL_TEAMS.NYY;
        if (scanModal.open) {
            scanModal.close();
        }
        gameModal.showModal();
        resetGame();
    });
}