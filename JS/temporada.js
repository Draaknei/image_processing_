



const EQUIPOS_AL = {
    NYY: { codigo: "NYY", mlbId: 147, divId: 201, nombre: "Yankees" },
    BOS: { codigo: "BOS", mlbId: 111, divId: 201, nombre: "Red Sox" },
    BAL: { codigo: "BAL", mlbId: 110, divId: 201, nombre: "Orioles" },
    TB:  { codigo: "TB",  mlbId: 139, divId: 201, nombre: "Rays" },
    TOR: { codigo: "TOR", mlbId: 141, divId: 201, nombre: "Blue Jays" },
    CWS: { codigo: "CWS", mlbId: 145, divId: 202, nombre: "White Sox" },
    CLE: { codigo: "CLE", mlbId: 114, divId: 202, nombre: "Guardians" },
    MIN: { codigo: "MIN", mlbId: 142, divId: 202, nombre: "Twins" },
    DET: { codigo: "DET", mlbId: 116, divId: 202, nombre: "Tigers" },
    KC:  { codigo: "KC",  mlbId: 118, divId: 202, nombre: "Royals" },
    HOU: { codigo: "HOU", mlbId: 117, divId: 200, nombre: "Astros" },
    TEX: { codigo: "TEX", mlbId: 140, divId: 200, nombre: "Rangers" },
    SEA: { codigo: "SEA", mlbId: 136, divId: 200, nombre: "Mariners" },
    ATH: { codigo: "ATH", mlbId: 133, divId: 200, nombre: "Athletics" },
    LAA: { codigo: "LAA", mlbId: 108, divId: 200, nombre: "Angels" }
};

const MAPA_COMBO_A_CODIGO = {};
Object.values(EQUIPOS_AL).forEach(eq => MAPA_COMBO_A_CODIGO[eq.nombre.toLowerCase()] = eq.codigo);


const MESES = ["ENE", "FEB", "MAR", "ABR", "MAY", "JUN", "JUL", "AGO", "SEP", "OCT", "NOV", "DIC"];

document.addEventListener("DOMContentLoaded", () => {
    const tbodyStandings = document.querySelector(".standings-table tbody");
    const scheduleList = document.querySelector(".schedule-list");
    const monthFiltersContainer = document.querySelector(".month-filters");
    const btnFullSchedule = document.querySelector(".full-schedule-btn");

    const comboInput = document.getElementById("combo-input");
    const comboItems = document.querySelectorAll("#combo-lista li");

    let allGames = [];
    let currentTeamId = null;

    async function cargarTemporada(codigo) {
        const equipo = EQUIPOS_AL[codigo] || EQUIPOS_AL.NYY;
        currentTeamId = equipo.mlbId;


        localStorage.setItem("equipoSeleccionado", equipo.codigo);
        if (comboInput) comboInput.value = equipo.nombre;


        cargarPosiciones(equipo);


        cargarCalendario(equipo.mlbId);
    }

    async function cargarPosiciones(equipo) {
        try {

            const url = `https://statsapi.mlb.com/api/v1/standings?leagueId=103`;
            const res = await fetch(url);
            const data = await res.json();


            const divisionRecord = data.records.find(r => r.division.id === equipo.divId);
            if (!divisionRecord) return;

            tbodyStandings.innerHTML = "";

            divisionRecord.teamRecords.forEach((teamRecord, index) => {
                const tr = document.createElement("tr");
                if (teamRecord.team.id === equipo.mlbId) {
                    tr.classList.add("highlight-row");
                }


                let racha = teamRecord.streak?.streakCode || "-";
                let rachaClass = "";
                if (racha.includes("W")) {
                    racha = racha.replace("W", "G");
                    rachaClass = "text-win";
                } else if (racha.includes("L")) {
                    racha = racha.replace("L", "P");
                    rachaClass = "text-loss";
                }

                const pctFixed = parseFloat(teamRecord.winningPercentage).toFixed(3).replace(/^0+/, '');

                tr.innerHTML = `
                    <td class="col-pos">${index + 1}</td>
                    <td class="col-equipo">${teamRecord.team.name}</td>
                    <td class="col-g">${teamRecord.wins}</td>
                    <td class="col-p">${teamRecord.losses}</td>
                    <td class="col-pct">${pctFixed}</td>
                    <td class="col-jd">${teamRecord.gamesBack === "-" ? "0.0" : teamRecord.gamesBack}</td>
                    <td class="col-rch ${rachaClass}">${racha}</td>
                `;
                tbodyStandings.appendChild(tr);
            });
        } catch (err) { console.error("Error al cargar standings:", err); }
    }

    async function cargarCalendario(teamId) {
        try {
            const anioActual = new Date().getFullYear();
            const url = `https://statsapi.mlb.com/api/v1/schedule?sportId=1&teamId=${teamId}&startDate=${anioActual}-03-01&endDate=${anioActual}-10-31`;
            const res = await fetch(url);
            const data = await res.json();

            allGames = [];
            data.dates.forEach(date => {
                date.games.forEach(game => allGames.push(game));
            });

            generarBotonesMes(allGames);


            const mesActual = new Date().getMonth();
            renderizarJuegosPorMes(mesActual);

        } catch (err) { console.error("Error al cargar calendario:", err); }
    }

    function generarBotonesMes(games) {

        const mesesConJuegos = [...new Set(games.map(g => new Date(g.gameDate).getMonth()))].sort((a,b)=>a-b);
        monthFiltersContainer.innerHTML = "";

        const mesActual = new Date().getMonth();

        mesesConJuegos.forEach(mesIndex => {
            const btn = document.createElement("button");
            btn.className = "month-btn";
            if (mesIndex === mesActual) btn.classList.add("active");
            btn.textContent = MESES[mesIndex];

            btn.addEventListener("click", () => {
                document.querySelectorAll(".month-btn").forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
                renderizarJuegosPorMes(mesIndex);
            });

            monthFiltersContainer.appendChild(btn);
        });
    }

    function renderizarJuegosPorMes(mesIndex) {
        scheduleList.innerHTML = "";

        const juegosMes = allGames.filter(g => new Date(g.gameDate).getMonth() === mesIndex);

        if(juegosMes.length === 0) {
            scheduleList.innerHTML = "<p>No hay juegos programados para este mes.</p>";
            return;
        }

        juegosMes.forEach(game => {
            const dateObj = new Date(game.gameDate);
            const day = dateObj.getDate().toString().padStart(2, '0');
            const monthText = MESES[dateObj.getMonth()];

            const isHome = game.teams.home.team.id === currentTeamId;
            const opponentName = isHome ? game.teams.away.team.name : game.teams.home.team.name;
            const homeAwayText = isHome ? "LOCAL" : "VISITANTE";
            const homeAwayIcon = isHome ? "images/2_494.svg" : "images/2_497.svg";

            let scoreMeta = "";
            const state = game.status.abstractGameState;

            if (state === "Final") {
                const myScore = isHome ? game.teams.home.score : game.teams.away.score;
                const oppScore = isHome ? game.teams.away.score : game.teams.home.score;
                const winLoss = myScore > oppScore ? "G" : "P";
                scoreMeta = `
                    <div class="score">${winLoss}, ${myScore}-${oppScore}</div>
                    <div class="game-meta final">FINAL</div>
                `;
            } else if (state === "Live") {
                const myScore = isHome ? game.teams.home.score : game.teams.away.score;
                const oppScore = isHome ? game.teams.away.score : game.teams.home.score;
                scoreMeta = `
                    <div class="score">${myScore}-${oppScore}</div>
                    <div class="game-meta live">EN VIVO</div>
                `;
            } else {
                const time = dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                scoreMeta = `<div class="game-meta time">${time}</div>`;
            }

            const gameElement = document.createElement("div");
            gameElement.className = "schedule-item";
            gameElement.innerHTML = `
                <div class="date-opponent">
                  <div class="date-box">
                    <span class="date-day">${day}</span>
                    <span class="date-month">${monthText}</span>
                  </div>
                  <div class="divider-line"></div>
                  <div class="opponent-info">
                    <div class="opponent-name">${opponentName}</div>
                    <div class="home-away">
                      <img src="${homeAwayIcon}" alt="${homeAwayText}" class="icon">
                      <span>${homeAwayText}</span>
                    </div>
                  </div>
                </div>
                <div class="score-action">
                    ${scoreMeta}
                </div>
            `;
            scheduleList.appendChild(gameElement);
        });
    }


    comboItems.forEach(item => {
        item.addEventListener("click", () => {
            const nombre = item.textContent.trim().toLowerCase();
            const codigo = MAPA_COMBO_A_CODIGO[nombre];
            if (codigo) cargarTemporada(codigo);
        });
    });


    if (btnFullSchedule) {
        btnFullSchedule.addEventListener("click", () => {
            const equipoActual = localStorage.getItem("equipoSeleccionado") || "NYY";

            window.open(`https://www.mlb.com/${equipoActual.toLowerCase()}/schedule`, "_blank");
        });
    }


    const urlParams = new URLSearchParams(window.location.search);
    const equipoInicial = urlParams.get("equipo")?.toUpperCase() || localStorage.getItem("equipoSeleccionado") || "NYY";
    cargarTemporada(equipoInicial);
});