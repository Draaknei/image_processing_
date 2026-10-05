



const EQUIPOS_AL = {
    NYY: { codigo: "NYY", mlbId: 147, nombre: "Yankees" },
    BOS: { codigo: "BOS", mlbId: 111, nombre: "Red Sox" },
    BAL: { codigo: "BAL", mlbId: 110, nombre: "Orioles" },
    TB:  { codigo: "TB",  mlbId: 139, nombre: "Rays" },
    TOR: { codigo: "TOR", mlbId: 141, nombre: "Blue Jays" },
    CWS: { codigo: "CWS", mlbId: 145, nombre: "White Sox" },
    CLE: { codigo: "CLE", mlbId: 114, nombre: "Guardians" },
    MIN: { codigo: "MIN", mlbId: 142, nombre: "Twins" },
    DET: { codigo: "DET", mlbId: 116, nombre: "Tigers" },
    KC:  { codigo: "KC",  mlbId: 118, nombre: "Royals" },
    HOU: { codigo: "HOU", mlbId: 117, nombre: "Astros" },
    TEX: { codigo: "TEX", mlbId: 140, nombre: "Rangers" },
    SEA: { codigo: "SEA", mlbId: 136, nombre: "Mariners" },
    ATH: { codigo: "ATH", mlbId: 133, nombre: "Athletics" },
    LAA: { codigo: "LAA", mlbId: 108, nombre: "Angels" }
};

const MAPA_COMBO_A_CODIGO = {};
Object.values(EQUIPOS_AL).forEach(eq => MAPA_COMBO_A_CODIGO[eq.nombre.toLowerCase()] = eq.codigo);

document.addEventListener("DOMContentLoaded", () => {

    const playersGrid = document.querySelector(".players-grid");
    const comboInput = document.getElementById("combo-input");
    const comboItems = document.querySelectorAll("#combo-lista li");


    const rosterSidebar = document.getElementById("roster-sidebar");
    const closeSidebarBtn = document.getElementById("close-sidebar");


    const detailImg = document.querySelector(".detail-img");
    const detailNumber = document.querySelector(".detail-meta .player-number");
    const detailPosition = document.querySelector(".detail-meta .player-position");
    const detailName = document.querySelector(".detail-name");
    const statsHeader = document.querySelector(".stats-row.header");
    const statsBody = document.querySelector(".stats-row.body");
    const detailDesc = document.querySelector(".detail-description");

    async function cargarRoster(codigo) {
        const equipo = EQUIPOS_AL[codigo] || EQUIPOS_AL.NYY;


        localStorage.setItem("equipoSeleccionado", equipo.codigo);
        if (comboInput) comboInput.value = equipo.nombre;


        if (typeof window.actualizarHeaderLive === "function") {
            window.actualizarHeaderLive();
        }

        try {
            playersGrid.innerHTML = "<p>Cargando plantilla de la MLB...</p>";


            const res = await fetch(`https://statsapi.mlb.com/api/v1/teams/${equipo.mlbId}/roster/Active`);
            const data = await res.json();

            playersGrid.innerHTML = "";

            if (data.roster && data.roster.length > 0) {
                data.roster.forEach((item, index) => {
                    const player = item.person;
                    const position = item.position;
                    const jerseyNumber = item.jerseyNumber || "00";

                    const article = document.createElement("article");
                    article.className = "player-card";
                    if (index === 0) article.classList.add("active");

                    const imgUrl = `https://securea.mlb.com/mlb/images/players/head_shot/${player.id}.jpg`;

                    article.innerHTML = `
                        <img src="${imgUrl}" alt="${player.fullName}" class="player-img" onerror="this.src='images/logo.png'">
                        <div class="player-info">
                            <span class="player-number">#${jerseyNumber}</span>
                            <h3 class="player-name">${player.fullName}</h3>
                            <span class="player-position">${position.name.toUpperCase()}</span>
                        </div>
                    `;


                    article.addEventListener("click", () => {
                        document.querySelectorAll(".player-card").forEach(c => c.classList.remove("active"));
                        article.classList.add("active");
                        cargarDetallesJugador(player.id, jerseyNumber, position, imgUrl);


                        if (window.innerWidth <= 1024) {
                            rosterSidebar.classList.add("modal-active");
                            document.body.style.overflow = "hidden";
                        }
                    });

                    playersGrid.appendChild(article);
                });


                const primerJugador = data.roster[0];
                const imgPrimera = `https://securea.mlb.com/mlb/images/players/head_shot/${primerJugador.person.id}.jpg`;
                cargarDetallesJugador(primerJugador.person.id, primerJugador.jerseyNumber, primerJugador.position, imgPrimera);
            }
        } catch (err) {
            console.error("Error cargando el roster:", err);
            playersGrid.innerHTML = "<p>Error al cargar la plantilla desde los servidores.</p>";
        }
    }

    async function cargarDetallesJugador(personId, jerseyNumber, position, imgUrl) {
        try {

            const res = await fetch(`https://statsapi.mlb.com/api/v1/people/${personId}?hydrate=stats(group=[hitting,pitching],type=[season])`);
            const data = await res.json();
            const player = data.people[0];

            detailImg.src = imgUrl;
            detailNumber.textContent = `#${jerseyNumber || "00"}`;
            detailPosition.textContent = position.name.toUpperCase();
            detailName.textContent = player.fullName;

            const edad = player.currentAge || "--";
            const altura = player.height || "--";
            const peso = player.weight || "--";
            const debut = player.mlbDebutDate ? player.mlbDebutDate.split("-")[0] : "Desconocido";
            detailDesc.textContent = `Debutó en la MLB en ${debut}. Actualmente tiene ${edad} años, mide ${altura} y pesa ${peso} lbs. Lanza con la ${player.pitchHand?.description || ''} y batea a la ${player.batSide?.description || ''}.`;

            let statObj = null;
            if (player.stats) {
                const seasonStats = player.stats.find(s => s.type.displayName === "season");
                if (seasonStats && seasonStats.splits.length > 0) {
                    statObj = seasonStats.splits[0].stat;
                }
            }

            if (position.abbreviation === "P") {
                statsHeader.innerHTML = `<span>ERA</span><span>W</span><span>L</span><span>SO</span><span>WHIP</span>`;
                statsBody.innerHTML = statObj ? `
                    <span>${statObj.era || "0.00"}</span>
                    <span>${statObj.wins || "0"}</span>
                    <span>${statObj.losses || "0"}</span>
                    <span>${statObj.strikeOuts || "0"}</span>
                    <span>${statObj.whip || "0.00"}</span>
                ` : `<span>-</span><span>-</span><span>-</span><span>-</span><span>-</span>`;
            } else {
                statsHeader.innerHTML = `<span>AVG</span><span>HR</span><span>RBI</span><span>OBP</span><span>SLG</span>`;
                statsBody.innerHTML = statObj ? `
                    <span>${statObj.avg || ".000"}</span>
                    <span>${statObj.homeRuns || "0"}</span>
                    <span>${statObj.rbi || "0"}</span>
                    <span>${statObj.obp || ".000"}</span>
                    <span>${statObj.slg || ".000"}</span>
                ` : `<span>-</span><span>-</span><span>-</span><span>-</span><span>-</span>`;
            }

        } catch (err) {
            console.error("Error cargando estadísticas:", err);
            detailDesc.textContent = "No se pudieron cargar las estadísticas completas de este jugador.";
        }
    }


    if (closeSidebarBtn) {
        closeSidebarBtn.addEventListener("click", () => {
            rosterSidebar.classList.remove("modal-active");
            document.body.style.overflow = "";
        });
    }


    if (rosterSidebar) {
        rosterSidebar.addEventListener("click", (event) => {


            if (event.target === rosterSidebar) {
                rosterSidebar.classList.remove("modal-active");
                document.body.style.overflow = "";
            }
        });
    }


    comboItems.forEach(item => {
        item.addEventListener("click", () => {
            const nombre = item.textContent.trim().toLowerCase();
            const codigo = MAPA_COMBO_A_CODIGO[nombre];
            if (codigo) {
                const nuevaUrl = `${window.location.pathname}?equipo=${codigo}`;
                window.history.replaceState({ path: nuevaUrl }, "", nuevaUrl);
                cargarRoster(codigo);
            }
        });
    });

    const urlParams = new URLSearchParams(window.location.search);
    const equipoInicial = urlParams.get("equipo")?.toUpperCase() || localStorage.getItem("equipoSeleccionado") || "NYY";
    cargarRoster(equipoInicial);
});