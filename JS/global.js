
document.addEventListener('DOMContentLoaded', () => {
  const btnOpenMenu = document.querySelector('.button-menu');
  const btnCloseMenu = document.getElementById('mobile-menu-close');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileOverlay = document.getElementById('mobile-overlay');

  const openMenu = () => {
    mobileMenu.classList.add('active');
    mobileOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    mobileMenu.classList.remove('active');
    mobileOverlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (btnOpenMenu) {
    btnOpenMenu.addEventListener('click', openMenu);
  }

  if (btnCloseMenu) {
    btnCloseMenu.addEventListener('click', closeMenu);
  }

  if (mobileOverlay) {
    mobileOverlay.addEventListener('click', closeMenu);
  }
});





const input = document.getElementById("combo-input");
const lista = document.getElementById("combo-lista");
const opciones = lista.querySelectorAll("li");


input.addEventListener("focus", () => { lista.classList.add("activa") });

opciones.forEach(opcion => {
  opcion.addEventListener("click", () => {
    input.value = opcion.textContent;
    lista.classList.remove("activa");
  });
});

document.addEventListener("click", (evento) => {
  if (!input.contains(evento.target) && !lista.contains(evento.target)) {
    lista.classList.remove("activa");
  }
});





window.actualizarHeaderLive = async function () {
  const MAPA_IDS = { NYY: 147, BOS: 111, BAL: 110, TB: 139, TOR: 141, CWS: 145, CLE: 114, MIN: 142, DET: 116, KC: 118, HOU: 117, TEX: 140, SEA: 136, ATH: 133, LAA: 108 };
  const headerMetadata = document.querySelector('.header-actions .metadata') || document.querySelector('.top-bar .metadata');
  if (!headerMetadata) return;
  const liveIndicator = headerMetadata.querySelector('.live-indicator');
  const liveText = headerMetadata.querySelector('.live-text');
  const locationText = headerMetadata.querySelector('.location');
  const codigoEquipo = localStorage.getItem("equipoSeleccionado") || "NYY";
  const teamId = MAPA_IDS[codigoEquipo];
  if (!teamId) return;
  try {
    const hoy = new Date();
    const ayer = new Date(hoy); ayer.setDate(hoy.getDate() - 1);
    const manana = new Date(hoy); manana.setDate(hoy.getDate() + 1);
    const start = ayer.toISOString().split("T")[0];
    const end = manana.toISOString().split("T")[0];
    const url = `https://statsapi.mlb.com/api/v1/schedule?sportId=1&teamId=${teamId}&startDate=${start}&endDate=${end}&hydrate=linescore,venue`;
    const res = await fetch(url);
    const data = await res.json();
    let juegoEnVivo = null;
    if (data.dates) {
      data.dates.forEach(date => {
        date.games.forEach(game => {
          if (game.status && game.status.abstractGameState === "Live") {
            juegoEnVivo = game;
          }
        });
      });
    }
    if (juegoEnVivo) {
      const inning = juegoEnVivo.linescore?.currentInning || 1;
      const inningState = juegoEnVivo.linescore?.inningState || "";
      const venue = juegoEnVivo.venue?.name || "ESTADIO";
      let parteInning = "";
      if (inningState.toLowerCase() === "top") parteInning = "ALTA";
      if (inningState.toLowerCase() === "bottom") parteInning = "BAJA";
      if (liveText) liveText.textContent = `EN VIVO: ${parteInning} ${inning}º INNING`.trim();
      if (locationText) {
        locationText.textContent = venue.toUpperCase();
        locationText.style.display = "block";
      }
      headerMetadata.style.display = "flex";
      if (liveIndicator) liveIndicator.style.display = "flex";
    } else {
      if (liveIndicator) liveIndicator.style.display = "none";
      if (locationText) locationText.style.display = "none";
    }
  } catch (err) {
    console.error("Error cargando live game para el header:", err);
    if (liveIndicator) liveIndicator.style.display = "none";
    if (locationText) locationText.style.display = "none";
  }
};
document.addEventListener('DOMContentLoaded', () => {
  window.actualizarHeaderLive();
  const comboOpciones = document.querySelectorAll("#combo-lista li");
  if (comboOpciones.length > 0) {
    comboOpciones.forEach(opcion => {
      opcion.addEventListener("click", () => {
        setTimeout(() => {
          window.actualizarHeaderLive();
        }, 100);
      });
    });
  }
});