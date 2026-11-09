const EQUIPOS_AL = {
    NYY: { codigo: "NYY", nombre: "Yankees" },
    BOS: { codigo: "BOS", nombre: "Red Sox" },
    BAL: { codigo: "BAL", nombre: "Orioles" },
    TB:  { codigo: "TB",  nombre: "Rays" },
    TOR: { codigo: "TOR", nombre: "Blue Jays" },
    CWS: { codigo: "CWS", nombre: "White Sox" },
    CLE: { codigo: "CLE", nombre: "Guardians" },
    MIN: { codigo: "MIN", nombre: "Twins" },
    DET: { codigo: "DET", nombre: "Tigers" },
    KC:  { codigo: "KC",  nombre: "Royals" },
    HOU: { codigo: "HOU", nombre: "Astros" },
    TEX: { codigo: "TEX", nombre: "Rangers" },
    SEA: { codigo: "SEA", nombre: "Mariners" },
    ATH: { codigo: "ATH", nombre: "Athletics" },
    LAA: { codigo: "LAA", nombre: "Angels" }
};

const MAPA_COMBO_A_CODIGO = {};
Object.values(EQUIPOS_AL).forEach(eq => MAPA_COMBO_A_CODIGO[eq.nombre.toLowerCase()] = eq.codigo);

const BANCO_TRIVIA = {
    NYY: [
        { q: "¿Cuántas Series Mundiales han ganado los Yankees en su historia?", options: ["24", "27", "30", "20"], ans: 1 },
        { q: "¿Cuál es el número de camiseta retirado de Derek Jeter?", options: ["2", "3", "4", "5"], ans: 0 },
        { q: "¿Cómo se llama el icónico estadio de los Yankees?", options: ["Fenway Park", "Citi Field", "Yankee Stadium", "Camden Yards"], ans: 2 },
        { q: "¿Qué leyenda de los Yankees es conocido como 'El Bambino'?", options: ["Mickey Mantle", "Lou Gehrig", "Joe DiMaggio", "Babe Ruth"], ans: 3 },
        { q: "¿En qué división de la Liga Americana juegan los Yankees?", options: ["Este", "Central", "Oeste", "Norte"], ans: 0 }
    ],
    BOS: [
        { q: "¿En qué año rompieron los Red Sox la famosa 'Maldición del Bambino'?", options: ["2001", "2004", "2007", "2013"], ans: 1 },
        { q: "¿Cómo se llama el famoso muro verde de su estadio?", options: ["The Green Monster", "The Big Wall", "The Boston Wall", "The Fenway Giant"], ans: 0 },
        { q: "¿Qué jugador es conocido como 'Big Papi'?", options: ["Pedro Martínez", "Manny Ramírez", "David Ortiz", "Nomar Garciaparra"], ans: 2 },
        { q: "¿En qué estadio juegan como locales los Red Sox?", options: ["Wrigley Field", "Fenway Park", "Gillette Stadium", "TD Garden"], ans: 1 },
        { q: "¿Qué número utilizaba el legendario Ted Williams?", options: ["9", "8", "34", "45"], ans: 0 }
    ],
    BAL: [
        { q: "¿Quién tiene el récord de más partidos consecutivos jugados (2,632)?", options: ["Brooks Robinson", "Cal Ripken Jr.", "Eddie Murray", "Jim Palmer"], ans: 1 },
        { q: "¿En qué año ganaron los Orioles su última Serie Mundial?", options: ["1983", "1992", "1979", "1966"], ans: 0 },
        { q: "¿Cuál es el estadio de los Baltimore Orioles?", options: ["PNC Park", "Camden Yards", "Nationals Park", "Citizens Bank Park"], ans: 1 },
        { q: "¿Qué tipo de ave es la mascota del equipo?", options: ["Un azulejo", "Un cardenal", "Una oropéndola", "Un halcón"], ans: 2 },
        { q: "¿Quién fue mánager de los Orioles por más de 17 años (1968-1985)?", options: ["Buck Showalter", "Earl Weaver", "Joe Torre", "Tony La Russa"], ans: 1 }
    ],
    TB: [
        { q: "¿En qué año se fundó la franquicia de los Rays?", options: ["1993", "1995", "1998", "2001"], ans: 2 },
        { q: "¿Cuál fue el nombre original del equipo hasta 2007?", options: ["Tampa Bay Devil Rays", "Tampa Bay Manta Rays", "Tampa Bay Sun", "Tampa Bay Sharks"], ans: 0 },
        { q: "¿En qué estadio techado juegan sus partidos como local?", options: ["Marlins Park", "Tropicana Field", "Amalie Arena", "Chase Field"], ans: 1 },
        { q: "¿En qué años llegaron los Rays a la Serie Mundial?", options: ["2008 y 2020", "2007 y 2018", "2010 y 2021", "2009 y 2019"], ans: 0 },
        { q: "¿Qué exmánager llevó al equipo a su primera Serie Mundial en 2008?", options: ["Kevin Cash", "Joe Maddon", "Lou Piniella", "Terry Francona"], ans: 1 }
    ],
    TOR: [
        { q: "¿En qué país juegan los Blue Jays, siendo el único equipo fuera de EE. UU.?", options: ["México", "Puerto Rico", "Canadá", "República Dominicana"], ans: 2 },
        { q: "¿En qué años consecutivos ganaron los Blue Jays la Serie Mundial?", options: ["1990 y 1991", "1992 y 1993", "1994 y 1995", "1988 y 1989"], ans: 1 },
        { q: "¿Quién conectó el famoso jonrón que les dio el título en 1993?", options: ["Roberto Alomar", "John Olerud", "Paul Molitor", "Joe Carter"], ans: 3 },
        { q: "¿Cómo se llamaba originalmente el estadio donde juegan (hoy Rogers Centre)?", options: ["SkyDome", "Olympic Stadium", "CN Tower Field", "Maple Leaf Park"], ans: 0 },
        { q: "¿Qué legendario lanzador, conocido como 'Doc', brilló con Toronto en los 2000s?", options: ["Roger Clemens", "Roy Halladay", "Pat Hentgen", "Dave Stieb"], ans: 1 }
    ],
    CWS: [
        { q: "¿En qué ciudad juegan los White Sox?", options: ["Boston", "Cleveland", "Chicago", "Cincinnati"], ans: 2 },
        { q: "¿En qué año ganaron su Serie Mundial más reciente, rompiendo una sequía de 88 años?", options: ["2003", "2004", "2005", "2016"], ans: 2 },
        { q: "¿Cómo se llama el estadio de los White Sox?", options: ["Wrigley Field", "Guaranteed Rate Field", "Soldier Field", "United Center"], ans: 1 },
        { q: "¿Qué famoso jugador cubano fue el MVP de la Liga Americana en 2020 jugando para ellos?", options: ["Luis Robert", "Yoán Moncada", "José Abreu", "Yasmani Grandal"], ans: 2 },
        { q: "¿Qué infame escándalo involucró al equipo en la Serie Mundial de 1919?", options: ["Robo de señales", "Uso de esteroides", "Black Sox Scandal (Apuestas)", "Bates con corcho"], ans: 2 }
    ],
    CLE: [
        { q: "¿Cuál era el nombre de la franquicia hasta la temporada 2021?", options: ["Cleveland Spiders", "Cleveland Indians", "Cleveland Naps", "Cleveland Blues"], ans: 1 },
        { q: "¿En qué año ganaron su última Serie Mundial?", options: ["1948", "1954", "1995", "2016"], ans: 0 },
        { q: "¿Cómo se llama el estadio donde juegan como locales?", options: ["Jacobs Field / Progressive Field", "FirstEnergy Stadium", "Rocket Mortgage FieldHouse", "Quicken Loans Arena"], ans: 0 },
        { q: "¿Qué lanzador de Cleveland impuso el récord moderno de ponches en un juego de 9 entradas (20)?", options: ["Bob Feller", "Corey Kluber", "Shane Bieber", "Roger Clemens"], ans: 3 },
        { q: "¿A qué división de la Liga Americana pertenecen?", options: ["Este", "Central", "Oeste", "Sur"], ans: 1 }
    ],
    MIN: [
        { q: "¿Qué dos ciudades representan los 'Twins' (Gemelos)?", options: ["St. Paul y Minneapolis", "Duluth y Rochester", "Fargo y Bismarck", "Bloomington y Edina"], ans: 0 },
        { q: "¿En qué estadio juegan actualmente?", options: ["Metrodome", "Target Field", "US Bank Stadium", "Xcel Energy Center"], ans: 1 },
        { q: "¿Qué legendario jugador de los Twins usaba el número 34 y fue MVP en 2001?", options: ["Harmon Killebrew", "Kirby Puckett", "Joe Mauer", "Torii Hunter"], ans: 1 },
        { q: "¿En qué años ganaron la Serie Mundial desde su mudanza a Minnesota?", options: ["1987 y 1991", "1990 y 1995", "1980 y 1985", "2000 y 2005"], ans: 0 },
        { q: "¿Cómo se llama la mascota del equipo?", options: ["T.C. Bear", "Twinny", "Sota", "Homer"], ans: 0 }
    ],
    DET: [
        { q: "¿Cómo se llama el icónico estadio de los Tigers inaugurado en el año 2000?", options: ["Tiger Stadium", "Comerica Park", "Ford Field", "Little Caesars Arena"], ans: 1 },
        { q: "¿Quién fue el último jugador de los Tigers en ganar la Triple Corona de bateo (2012)?", options: ["Víctor Martínez", "Justin Verlander", "Miguel Cabrera", "Prince Fielder"], ans: 2 },
        { q: "¿Cuántas Series Mundiales tienen los Detroit Tigers?", options: ["2", "3", "4", "5"], ans: 2 },
        { q: "¿Qué legendario jardinero de Detroit fue apodado 'El Durazno de Georgia'?", options: ["Al Kaline", "Ty Cobb", "Hank Greenberg", "Willie Horton"], ans: 1 },
        { q: "¿Contra qué equipo perdieron la Serie Mundial de 2012?", options: ["St. Louis Cardinals", "San Francisco Giants", "Texas Rangers", "Boston Red Sox"], ans: 1 }
    ],
    KC: [
        { q: "¿En qué ciudad y estado juegan los Royals?", options: ["Kansas City, Missouri", "Kansas City, Kansas", "Wichita, Kansas", "St. Louis, Missouri"], ans: 0 },
        { q: "¿En qué año ganaron su Serie Mundial más reciente?", options: ["1985", "2014", "2015", "2018"], ans: 2 },
        { q: "¿Cómo se llama el icónico estadio de los Royals, famoso por sus fuentes de agua?", options: ["Arrowhead Stadium", "Kauffman Stadium", "Sprint Center", "Royals Park"], ans: 1 },
        { q: "¿Qué legendario tercera base jugó toda su carrera de 21 años con los Royals?", options: ["Frank White", "Hal McRae", "George Brett", "Bo Jackson"], ans: 2 },
        { q: "¿Cómo se llama la mascota de los Royals, que es un león con una corona?", options: ["King Lion", "Roy", "Sluggerrr", "Crownie"], ans: 2 }
    ],
    HOU: [
        { q: "¿En qué año se cambió el equipo a la Liga Americana?", options: ["2011", "2013", "2015", "2017"], ans: 1 },
        { q: "¿Cómo se llamaba originalmente el equipo antes de ser 'Astros'?", options: ["Houston Colt .45s", "Houston Stars", "Houston Rockets", "Houston Comets"], ans: 0 },
        { q: "¿Cuántas Series Mundiales han ganado los Astros (hasta 2023)?", options: ["1", "2", "3", "Ninguna"], ans: 1 },
        { q: "¿Quién es el segunda base estrella originario de Venezuela (MVP 2017)?", options: ["Carlos Correa", "Alex Bregman", "José Altuve", "Yordan Álvarez"], ans: 2 },
        { q: "¿Cómo se llama el estadio con techo retráctil de los Astros?", options: ["Astrodome", "Daikin Park", "Reliant Stadium", "Toyota Center"], ans: 1 }
    ],
    TEX: [
        { q: "¿En qué año ganaron los Texas Rangers su primera Serie Mundial?", options: ["2010", "2011", "2015", "2023"], ans: 3 },
        { q: "¿En qué ciudad del área metropolitana de Dallas juegan?", options: ["Dallas", "Fort Worth", "Arlington", "Frisco"], ans: 2 },
        { q: "¿Qué legendario lanzador logró su ponche 5,000 jugando para los Rangers en 1989?", options: ["Nolan Ryan", "Roger Clemens", "Randy Johnson", "Greg Maddux"], ans: 0 },
        { q: "¿A qué equipo vencieron los Rangers para ganar la Serie Mundial de 2023?", options: ["Philadelphia Phillies", "Atlanta Braves", "Arizona Diamondbacks", "Los Angeles Dodgers"], ans: 2 },
        { q: "¿Qué mánager histórico los guió a su campeonato en 2023?", options: ["Ron Washington", "Bruce Bochy", "Buck Showalter", "Chris Woodward"], ans: 1 }
    ],
    SEA: [
        { q: "¿Cuál es el récord histórico de victorias en una temporada (116) que empataron los Mariners en 2001?", options: ["100", "110", "114", "116"], ans: 3 },
        { q: "¿Quién fue el icónico jardinero japonés que debutó con ellos en 2001 y fue MVP y Novato del Año?", options: ["Hideki Matsui", "Shohei Ohtani", "Ichiro Suzuki", "Yu Darvish"], ans: 2 },
        { q: "¿Qué gran hito en la franquicia logró 'El Rey' Félix Hernández en 2012?", options: ["Juego Perfecto", "Ganar el Cy Young", "Juego sin hits", "Ganar 30 juegos"], ans: 0 },
        { q: "¿Cómo se llama el estadio donde juegan?", options: ["Kingdome", "Lumen Field", "T-Mobile Park", "Safeco Arena"], ans: 2 },
        { q: "¿Cuántas Series Mundiales han jugado los Mariners en su historia?", options: ["2", "1", "3", "0 (Nunca han ido)"], ans: 3 }
    ],
    ATH: [
        { q: "¿En qué ciudad jugaron los Athletics desde 1968 hasta 2024 antes de su mudanza temporal?", options: ["Filadelfia", "Kansas City", "Oakland", "Las Vegas"], ans: 2 },
        { q: "¿Cuántas Series Mundiales ha ganado la franquicia en toda su historia?", options: ["5", "7", "9", "11"], ans: 2 },
        { q: "¿Qué filosofía analítica implementó el gerente general Billy Beane, famosa por una película?", options: ["Sabermetrics", "Moneyball", "The Shift", "Opener Strategy"], ans: 1 },
        { q: "¿Qué jugador de los A's es el líder histórico de robos de base en la MLB (1,406)?", options: ["Lou Brock", "Tim Raines", "Vince Coleman", "Rickey Henderson"], ans: 3 },
        { q: "¿De qué colores es el uniforme tradicional de los Athletics?", options: ["Rojo y Blanco", "Verde y Oro", "Azul y Naranja", "Negro y Plata"], ans: 1 }
    ],
    LAA: [
        { q: "¿En qué año ganaron los Angels su única Serie Mundial?", options: ["2000", "2002", "2005", "2010"], ans: 1 },
        { q: "¿Qué superestrella japonesa, que batea y lanza, jugó con ellos de 2018 a 2023?", options: ["Ichiro Suzuki", "Shohei Ohtani", "Yu Darvish", "Masahiro Tanaka"], ans: 1 },
        { q: "¿Qué jardinero de los Angels ha ganado 3 premios MVP (2014, 2016, 2019)?", options: ["Albert Pujols", "Josh Hamilton", "Mike Trout", "Vladimir Guerrero"], ans: 2 },
        { q: "¿En qué ciudad del sur de California está ubicado su estadio?", options: ["Los Ángeles", "San Diego", "Anaheim", "Pasadena"], ans: 2 },
        { q: "¿Cómo se llama el objeto icónico en su estadio que lanza fuegos artificiales tras los jonrones?", options: ["El Gran Sombrero", "The Big A (La Gran A)", "El Ángel de Fuego", "La Estrella"], ans: 1 }
    ]
};

// Diccionario de recompensas (Una leyenda por equipo)
const RECOMPENSAS = {
    NYY: { nombre: "Babe Ruth", desc: "El jugador más influyente de la historia.", wiki: "Babe_Ruth" },
    BOS: { nombre: "David Ortiz", desc: "El eterno bateador designado y rey de octubre.", wiki: "David_Ortiz" },
    BAL: { nombre: "Cal Ripken Jr.", desc: "El Hombre de Hierro, 2,632 juegos seguidos.", wiki: "Cal_Ripken_Jr." },
    TB:  { nombre: "Evan Longoria", desc: "La cara histórica de los Tampa Bay Rays.", wiki: "Evan_Longoria" },
    TOR: { nombre: "Roberto Alomar", desc: "La estrella indiscutible del bicampeonato canadiense.", wiki: "Roberto_Alomar" },
    CWS: { nombre: "Frank Thomas", desc: "'The Big Hurt'. Un bateador sencillamente temible.", wiki: "Frank_Thomas_(designated_hitter)" },
    CLE: { nombre: "Bob Feller", desc: "Dueño de una recta fulminante y leyenda de Ohio.", wiki: "Bob_Feller" },
    MIN: { nombre: "Kirby Puckett", desc: "El alma absoluta de las Ciudades Gemelas.", wiki: "Kirby_Puckett" },
    DET: { nombre: "Miguel Cabrera", desc: "Ganador de la Triple Corona y maestro del madero.", wiki: "Miguel_Cabrera" },
    KC:  { nombre: "George Brett", desc: "El ícono absoluto de la Realeza del medio oeste.", wiki: "George_Brett" },
    HOU: { nombre: "José Altuve", desc: "El corazón y motor de la dinastía moderna.", wiki: "José_Altuve" },
    TEX: { nombre: "Nolan Ryan", desc: "El rey del ponche. La máxima estrella solitaria.", wiki: "Nolan_Ryan" },
    SEA: { nombre: "Ken Griffey Jr.", desc: "El swing más perfecto en la historia del béisbol.", wiki: "Ken_Griffey_Jr." },
    ATH: { nombre: "Rickey Henderson", desc: "El indomable rey de las bases robadas.", wiki: "Rickey_Henderson" },
    LAA: { nombre: "Mike Trout", desc: "El mejor talento generacional del siglo XXI.", wiki: "Mike_Trout" }
};

document.addEventListener("DOMContentLoaded", () => {
    // Variables de Estado
    let currentTeamCode = "NYY";
    let questions = [];
    let currentQuestionIndex = 0;
    let score = 0;
    
    // Variables de control de ronda
    let answeredCurrent = false;
    let failedAttempts = 0;
    let isGameOver = false;

    // Referencias al DOM de la Trivia
    const questionText = document.querySelector(".question-text");
    const progressLabel = document.querySelector(".progress-group .label");
    const progressFill = document.querySelector(".progress-fill");
    const scoreBadge = document.querySelector(".score-badge");
    const btnNext = document.querySelector(".btn-primary");
    const titleHeader = document.querySelector(".header-block .title");
    const comboInput = document.getElementById("combo-input");
    const comboItems = document.querySelectorAll("#combo-lista li");

    // Elementos de la Recompensa (Ocultos inicialmente)
    const rewardCard = document.getElementById("reward-card");
    const rewardImg = document.getElementById("reward-img");
    const rewardName = document.getElementById("reward-name");
    const rewardDesc = document.getElementById("reward-desc");
    
    const dashboardBox = document.getElementById("trivia-dashboard");
    const questionBox = document.getElementById("trivia-question-box");
    const answersGrid = document.getElementById("trivia-answers");

    function loadTriviaData(codigo) {
        currentTeamCode = codigo || "NYY";
        const equipoInfo = EQUIPOS_AL[currentTeamCode];
        
        localStorage.setItem("equipoSeleccionado", currentTeamCode);
        if (comboInput) comboInput.value = equipoInfo.nombre;
        
        if (titleHeader) {
            titleHeader.textContent = `¿Cuánto sabes de los ${equipoInfo.nombre}?`;
        }

        if (typeof window.actualizarHeaderLive === "function") {
            window.actualizarHeaderLive();
        }

        questions = BANCO_TRIVIA[currentTeamCode] || BANCO_TRIVIA.NYY;
        currentQuestionIndex = 0;
        score = 0;
        isGameOver = false;
        
        rewardCard.style.display = "none";
        dashboardBox.style.display = "flex";
        questionBox.style.display = "flex";
        answersGrid.style.display = "grid";
        
        renderQuestion();
    }

    function renderQuestion() {
        answeredCurrent = false;
        failedAttempts = 0;
        btnNext.disabled = true;
        btnNext.textContent = "SIGUIENTE PREGUNTA";

        const currentQ = questions[currentQuestionIndex];
        
        questionText.textContent = currentQ.q;
        progressLabel.textContent = `PREGUNTA ${currentQuestionIndex + 1} DE 5`;
        progressFill.style.width = `${((currentQuestionIndex + 1) / 5) * 100}%`;
        scoreBadge.textContent = `${score} / 5 ACERTADAS`;

        let currentAnswerBtns = document.querySelectorAll(".answer-btn");
        const letras = ["A", "B", "C", "D"];
        
        currentAnswerBtns.forEach((btn, index) => {
            btn.className = "answer-btn"; 
            
            const indicator = btn.querySelector(".option-indicator");
            const textSpan = btn.querySelector(".answer-text");
            
            indicator.textContent = letras[index];
            textSpan.textContent = currentQ.options[index];

            const nuevoBtn = btn.cloneNode(true);
            btn.replaceWith(nuevoBtn);
            nuevoBtn.addEventListener("click", () => handleAnswer(index, nuevoBtn));
        });
    }

    function handleAnswer(selectedIndex, clickedBtn) {
        if (answeredCurrent || isGameOver) return;
        if (clickedBtn.classList.contains("disabled")) return; 

        const currentQ = questions[currentQuestionIndex];
        const correctIndex = currentQ.ans;
        
        const currentAnswerBtns = document.querySelectorAll(".answer-btn");

        if (selectedIndex === correctIndex) {
            clickedBtn.classList.add("correct");
            score++;
            answeredCurrent = true;
            btnNext.disabled = false;
            scoreBadge.textContent = `${score} / 5 ACERTADAS`;

            currentAnswerBtns.forEach(b => {
                if (!b.classList.contains("correct")) b.classList.add("disabled");
            });

            if (currentQuestionIndex === questions.length - 1) {
                btnNext.textContent = "VER RESULTADOS";
            }
        } else {
            clickedBtn.classList.add("wrong");
            clickedBtn.classList.add("disabled");
            failedAttempts++;

            if (failedAttempts >= 2) {
                answeredCurrent = true;
                isGameOver = true;
                
                currentAnswerBtns[correctIndex].classList.add("correct");

                currentAnswerBtns.forEach(b => {
                    if (!b.classList.contains("correct") && !b.classList.contains("wrong")) {
                        b.classList.add("disabled");
                    }
                });

                questionText.textContent = "¡Has fallado 2 veces! Fin de la trivia.";
                btnNext.disabled = false;
                btnNext.textContent = "HAS PERDIDO - REINICIAR";
            }
        }
    }
    
    async function showCollectibleReward() {
        dashboardBox.style.display = "none";
        questionBox.style.display = "none";
        answersGrid.style.display = "none";
        
        const rewardData = RECOMPENSAS[currentTeamCode];
        
        rewardName.textContent = rewardData.nombre;
        rewardDesc.textContent = rewardData.desc;
        rewardImg.src = "images/logo.png";
        
        rewardCard.style.display = "block";
        btnNext.textContent = "JUGAR DE NUEVO";
        
        if (rewardData.wiki) {
            try {
                let res = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${rewardData.wiki}`);
                if (!res.ok) {
                    res = await fetch(`https://es.wikipedia.org/api/rest_v1/page/summary/${rewardData.wiki}`);
                }
                const data = await res.json();
                
                if (data.originalimage && data.originalimage.source) {
                    rewardImg.src = data.originalimage.source;
                } else if (data.thumbnail && data.thumbnail.source) {
                    rewardImg.src = data.thumbnail.source;
                }
            } catch (e) {
                console.warn(`No se pudo cargar la imagen del premio para: ${rewardData.nombre}`);
            }
        }
    }

    btnNext.addEventListener("click", () => {
        if (isGameOver) {
            loadTriviaData(currentTeamCode); // Reinicia todo
            return;
        }

        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            renderQuestion();
        } else {
            isGameOver = true;
            
            if (score === 5) {
                 showCollectibleReward();
            } else {
                 questionText.textContent = `¡Trivia completada! Lograste ${score} de 5 respuestas correctas. Acierta 5/5 para desbloquear una tarjeta coleccionable.`;
                 progressLabel.textContent = `COMPLETADO`;
                 document.querySelectorAll(".answer-btn").forEach(b => b.style.display = "none");
                 btnNext.textContent = "INTENTAR DE NUEVO";
            }
        }
    });

    comboItems.forEach(item => {
        item.addEventListener("click", () => {
            const nombre = item.textContent.trim().toLowerCase();
            const codigo = MAPA_COMBO_A_CODIGO[nombre];
            if (codigo) {
                const nuevaUrl = `${window.location.pathname}?equipo=${codigo}`;
                window.history.replaceState({ path: nuevaUrl }, "", nuevaUrl);
                
                loadTriviaData(codigo);
            }
        });
    });

    const urlParams = new URLSearchParams(window.location.search);
    const equipoInicial = urlParams.get("equipo")?.toUpperCase() || localStorage.getItem("equipoSeleccionado") || "NYY";
    loadTriviaData(equipoInicial);
});