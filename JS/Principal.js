




const EQUIPOS_AL = {
  NYY: {
    codigo: "NYY",
    mlbId: 147,
    comboNombre: "Yankees",
    ciudad: "NEW YORK",
    nombre: "YANKEES",
    fundacion: "1901",
    fraseFundacion: "Más de 125 años de historia y grandeza en el Bronx.",
    campeonatos: "27 TÍTULOS",
    aniosCampeonatos: "Campeones en: 1923, 1927, 1928, 1932, 1936, 1937, 1938, 1939, 1941, 1943, 1947, 1949, 1950, 1951, 1952, 1953, 1956, 1958, 1961, 1962, 1977, 1978, 1996, 1998, 1999, 2000 y 2009.",
    sede: "YANKEE STADIUM",
    descSede: "Capacidad para 46,537 fanáticos en el Bronx, NY.",
    imagenEstadio: "images/stadiums/yankees.jpg"
  },
  BOS: {
    codigo: "BOS",
    mlbId: 111,
    comboNombre: "Red Sox",
    ciudad: "BOSTON",
    nombre: "RED SOX",
    fundacion: "1901",
    fraseFundacion: "Una de las franquicias fundadoras más históricas de la MLB.",
    campeonatos: "9 TÍTULOS",
    aniosCampeonatos: "Campeones en: 1903, 1912, 1915, 1916, 1918, 2004, 2007, 2013 y 2018.",
    sede: "FENWAY PARK",
    descSede: "Capacidad para 37,755 fanáticos en Boston, MA.",
    imagenEstadio: "images/stadiums/Redsox.jpg"
  },
  BAL: {
    codigo: "BAL",
    mlbId: 110,
    comboNombre: "Orioles",
    ciudad: "BALTIMORE",
    nombre: "ORIOLES",
    fundacion: "1894",
    fraseFundacion: "Tradición e historia legendaria en Maryland.",
    campeonatos: "3 TÍTULOS",
    aniosCampeonatos: "Campeones en: 1966, 1970 y 1983.",
    sede: "CAMDEN YARDS",
    descSede: "Capacidad para 44,970 fanáticos en Baltimore, MD.",
    imagenEstadio: "images/stadiums/oriols.jpg"
  },
  TB: {
    codigo: "TB",
    mlbId: 139,
    comboNombre: "Rays",
    ciudad: "TAMPA BAY",
    nombre: "RAYS",
    fundacion: "1998",
    fraseFundacion: "Innovación y competitividad constante en la División Este.",
    campeonatos: "0 TÍTULOS",
    aniosCampeonatos: "Sin títulos de Serie Mundial (Campeones de la Liga Americana en 2008 y 2020).",
    sede: "TROPICANA FIELD",
    descSede: "Capacidad para 25,025 fanáticos en St. Petersburg, FL.",
    imagenEstadio: "images/stadiums/Rays.jpg"
  },
  TOR: {
    codigo: "TOR",
    mlbId: 141,
    comboNombre: "Blue Jays",
    ciudad: "TORONTO",
    nombre: "BLUE JAYS",
    fundacion: "1977",
    fraseFundacion: "El orgullo del béisbol de todo Canadá.",
    campeonatos: "2 TÍTULOS",
    aniosCampeonatos: "Campeones en: 1992 y 1993.",
    sede: "ROGERS CENTRE",
    descSede: "Capacidad para 39,150 fanáticos en Toronto, Canadá.",
    imagenEstadio: "images/stadiums/Jays.jpg"
  },
  CWS: {
    codigo: "CWS",
    mlbId: 145,
    comboNombre: "White Sox",
    ciudad: "CHICAGO",
    nombre: "WHITE SOX",
    fundacion: "1901",
    fraseFundacion: "Más de un siglo de tradición en el lado sur de Chicago.",
    campeonatos: "3 TÍTULOS",
    aniosCampeonatos: "Campeones en: 1906, 1917 y 2005.",
    sede: "RATE FIELD",
    descSede: "Capacidad para 40,615 fanáticos en Chicago, IL.",
    imagenEstadio: "images/stadiums/Whitesox.jpg"
  },
  CLE: {
    codigo: "CLE",
    mlbId: 114,
    comboNombre: "Guardians",
    ciudad: "CLEVELAND",
    nombre: "GUARDIANS",
    fundacion: "1901",
    fraseFundacion: "Fuerza histórica y pasión inquebrantable en Ohio.",
    campeonatos: "2 TÍTULOS",
    aniosCampeonatos: "Campeones en: 1920 y 1948.",
    sede: "PROGRESSIVE FIELD",
    descSede: "Capacidad para 34,820 fanáticos en Cleveland, OH.",
    imagenEstadio: "images/stadiums/Cleveland.jpg"
  },
  MIN: {
    codigo: "MIN",
    mlbId: 142,
    comboNombre: "Twins",
    ciudad: "MINNESOTA",
    nombre: "TWINS",
    fundacion: "1901",
    fraseFundacion: "Herencia campeona en el corazón de las Ciudades Gemelas.",
    campeonatos: "3 TÍTULOS",
    aniosCampeonatos: "Campeones en: 1924, 1987 y 1991.",
    sede: "TARGET FIELD",
    descSede: "Capacidad para 38,544 fanáticos en Minneapolis, MN.",
    imagenEstadio: "images/stadiums/twins.jpg"
  },
  DET: {
    codigo: "DET",
    mlbId: 116,
    comboNombre: "Tigers",
    ciudad: "DETROIT",
    nombre: "TIGERS",
    fundacion: "1901",
    fraseFundacion: "Garra histórica y leyendas inmortales en la Ciudad del Motor.",
    campeonatos: "4 TÍTULOS",
    aniosCampeonatos: "Campeones en: 1935, 1945, 1968 y 1984.",
    sede: "COMERICA PARK",
    descSede: "Capacidad para 41,083 fanáticos en Detroit, MI.",
    imagenEstadio: "images/stadiums/Tigers.jpg"
  },
  KC: {
    codigo: "KC",
    mlbId: 118,
    comboNombre: "Royals",
    ciudad: "KANSAS CITY",
    nombre: "ROYALS",
    fundacion: "1969",
    fraseFundacion: "Realeza del medio oeste con ADN de campeones.",
    campeonatos: "2 TÍTULOS",
    aniosCampeonatos: "Campeones en: 1985 y 2015.",
    sede: "KAUFFMAN STADIUM",
    descSede: "Capacidad para 37,903 fanáticos en Kansas City, MO.",
    imagenEstadio: "images/stadiums/Royals.jpg"
  },
  HOU: {
    codigo: "HOU",
    mlbId: 117,
    comboNombre: "Astros",
    ciudad: "HOUSTON",
    nombre: "ASTROS",
    fundacion: "1962",
    fraseFundacion: "Potencia moderna de la Liga Americana en la Ciudad Espacial.",
    campeonatos: "2 TÍTULOS",
    aniosCampeonatos: "Campeones en: 2017 y 2022.",
    sede: "DAIKIN PARK",
    descSede: "Capacidad para 41,168 fanáticos en Houston, TX.",
    imagenEstadio: "images/stadiums/Astros.jpg"
  },
  TEX: {
    codigo: "TEX",
    mlbId: 140,
    comboNombre: "Rangers",
    ciudad: "TEXAS",
    nombre: "RANGERS",
    fundacion: "1961",
    fraseFundacion: "El espíritu competitivo del corazón de Texas.",
    campeonatos: "1 TÍTULO",
    aniosCampeonatos: "Campeones en: 2023.",
    sede: "GLOBE LIFE FIELD",
    descSede: "Capacidad para 40,300 fanáticos en Arlington, TX.",
    imagenEstadio: "images/stadiums/Texans.jpg"
  },
  SEA: {
    codigo: "SEA",
    mlbId: 136,
    comboNombre: "Mariners",
    ciudad: "SEATTLE",
    nombre: "MARINERS",
    fundacion: "1977",
    fraseFundacion: "Pasión eléctrica en el noroeste del Pacífico.",
    campeonatos: "0 TÍTULOS",
    aniosCampeonatos: "Sin títulos de Serie Mundial (Récord de 116 victorias en 2001).",
    sede: "T-MOBILE PARK",
    descSede: "Capacidad para 47,929 fanáticos en Seattle, WA.",
    imagenEstadio: "images/stadiums/Seattle.jpg"
  },
  ATH: {
    codigo: "ATH",
    mlbId: 133,
    comboNombre: "Athletics",
    ciudad: "OAKLAND",
    nombre: "ATHLETICS",
    fundacion: "1901",
    fraseFundacion: "Una de las dinastías históricas más ganadoras del béisbol.",
    campeonatos: "9 TÍTULOS",
    aniosCampeonatos: "Campeones en: 1910, 1911, 1913, 1929, 1930, 1972, 1973, 1974 y 1989.",
    sede: "SUTTER HEALTH PARK",
    descSede: "Capacidad para 14,014 fanáticos en West Sacramento, CA.",
    imagenEstadio: "images/stadiums/Okland.jpg"
  },
  LAA: {
    codigo: "LAA",
    mlbId: 108,
    comboNombre: "Angels",
    ciudad: "LOS ANGELES",
    nombre: "ANGELS",
    fundacion: "1961",
    fraseFundacion: "Más de seis décadas de espectáculo en California.",
    campeonatos: "1 TÍTULO",
    aniosCampeonatos: "Campeones en: 2002.",
    sede: "ANGEL STADIUM",
    descSede: "Capacidad para 45,517 fanáticos en Anaheim, CA.",
    imagenEstadio: "images/stadiums/Angels.jpg"
  }
};


const MAPA_COMBO_A_CODIGO = {};
Object.values(EQUIPOS_AL).forEach(eq => {
  MAPA_COMBO_A_CODIGO[eq.comboNombre.toLowerCase()] = eq.codigo;
});

document.addEventListener("DOMContentLoaded", () => {

  const heroWrapper = document.querySelector(".hero-wrapper");
  const titleCity = document.querySelector(".title-city");
  const titleName = document.querySelector(".title-name");
  const comboInput = document.getElementById("combo-input");
  const comboItems = document.querySelectorAll("#combo-lista li");


  const factColumns = document.querySelectorAll("#section-quick-facts .fact-column");


  const lastGameSection = document.getElementById("section-last-game");
  const metadataContainer = lastGameSection.querySelector(".metadata");
  const liveText = lastGameSection.querySelector(".live-text");
  const locationText = lastGameSection.querySelector(".location");
  const teamLogos = lastGameSection.querySelectorAll(".team-logo");
  const scoreElement = lastGameSection.querySelector(".score");


  function renderizarEquipo(codigo) {
    const equipo = EQUIPOS_AL[codigo] || EQUIPOS_AL.NYY;


    localStorage.setItem("equipoSeleccionado", equipo.codigo);
    if (comboInput) {
      comboInput.value = equipo.comboNombre;
    }


    if (heroWrapper && equipo.imagenEstadio) {
      heroWrapper.style.backgroundImage = `url('${equipo.imagenEstadio}')`;
    }


    if (titleCity) titleCity.textContent = equipo.ciudad;
    if (titleName) titleName.textContent = equipo.nombre;


    if (factColumns.length >= 3) {

      factColumns[0].querySelector(".fact-value").textContent = equipo.fundacion;
      factColumns[0].querySelector(".fact-desc").textContent = equipo.fraseFundacion;


      factColumns[1].querySelector(".fact-value").textContent = equipo.campeonatos;
      factColumns[1].querySelector(".fact-desc").textContent = equipo.aniosCampeonatos;


      factColumns[2].querySelector(".fact-value").textContent = equipo.sede;
      factColumns[2].querySelector(".fact-desc").textContent = equipo.descSede;
    }


    cargarUltimoPartidoMLB(equipo.mlbId);
  }


  async function cargarUltimoPartidoMLB(teamId) {
    try {
      const hoy = new Date();
      const fin = hoy.toISOString().split("T")[0];
      const haceMeses = new Date(hoy);
      haceMeses.setMonth(hoy.getMonth() - 6);
      const inicio = haceMeses.toISOString().split("T")[0];

      const url = `https://statsapi.mlb.com/api/v1/schedule?sportId=1&teamId=${teamId}&startDate=${inicio}&endDate=${fin}&hydrate=linescore,venue`;
      const respuesta = await fetch(url);
      const data = await respuesta.json();

      const todosLosJuegos = [];
      if (data.dates && data.dates.length > 0) {
        data.dates.forEach(fecha => {
          if (fecha.games) {
            todosLosJuegos.push(...fecha.games);
          }
        });
      }

      if (todosLosJuegos.length === 0) return;


      const juegoEnVivo = todosLosJuegos.find(
        g => g.status && g.status.abstractGameState === "Live"
      );


      const juegosFinalizados = todosLosJuegos.filter(
        g => g.status && g.status.abstractGameState === "Final"
      );

      const partidoMostrar = juegoEnVivo || juegosFinalizados[juegosFinalizados.length - 1];
      if (!partidoMostrar) return;

      const awayTeam = partidoMostrar.teams.away;
      const homeTeam = partidoMostrar.teams.home;


      if (teamLogos.length >= 2) {
        teamLogos[0].src = `https://www.mlbstatic.com/team-logos/team-cap-on-dark/${awayTeam.team.id}.svg`;
        teamLogos[0].alt = awayTeam.team.name;

        teamLogos[1].src = `https://www.mlbstatic.com/team-logos/team-cap-on-dark/${homeTeam.team.id}.svg`;
        teamLogos[1].alt = homeTeam.team.name;
      }


      const awayScore = awayTeam.score ?? 0;
      const homeScore = homeTeam.score ?? 0;
      if (scoreElement) {
        scoreElement.textContent = `${awayScore}-${homeScore}`;
      }


      if (juegoEnVivo) {
        const inningActual = partidoMostrar.linescore?.currentInning || 1;
        const nombreSede = partidoMostrar.venue?.name
          ? partidoMostrar.venue.name.toUpperCase()
          : "ESTADIO MLB";

        if (liveText) liveText.textContent = `EN VIVO: ${inningActual}º INNING`;
        if (locationText) locationText.textContent = nombreSede;
        if (metadataContainer) metadataContainer.style.display = "flex";
      } else {
        if (metadataContainer) metadataContainer.style.display = "none";
      }
    } catch (error) {
      console.error("Error al obtener datos de MLB Stats API:", error);
      if (metadataContainer) metadataContainer.style.display = "none";
    }
  }


  comboItems.forEach(item => {
    item.addEventListener("click", () => {
      const nombreSeleccionado = item.textContent.trim().toLowerCase();
      const codigoEncontrado = MAPA_COMBO_A_CODIGO[nombreSeleccionado];

      if (codigoEncontrado) {
        const nuevaUrl = `${window.location.pathname}?equipo=${codigoEncontrado}`;
        window.history.replaceState({ path: nuevaUrl }, "", nuevaUrl);

        renderizarEquipo(codigoEncontrado);
      }
    });
  });


  const params = new URLSearchParams(window.location.search);
  const codigoInicial =
    params.get("equipo")?.toUpperCase() ||
    localStorage.getItem("equipoSeleccionado") ||
    "NYY";

  renderizarEquipo(codigoInicial);
});