const DATOS_HISTORIA = {
    NYY: {
        codigo: "NYY",
        comboNombre: "Yankees",
        subtitle: "EL IMPERIO DEL BÉISBOL",
        title: "27 Campeonatos y una Dinastía de Pinstripes",
        p1: "Desde su fundación, los Yankees han sido el epicentro del béisbol mundial. Forjaron una identidad de victoria inigualable, atrayendo a las estrellas más grandes que el deporte ha conocido y definiendo la cultura de la grandeza deportiva.",
        p2: "A través de las décadas, consolidaron su posición como la franquicia más ganadora del deporte profesional con 27 campeonatos mundiales, construyendo el mito del 'Imperio del Mal' en su icónico Yankee Stadium.",
        quote: "Jugar por los Yankees es sentir el peso de la historia en cada turno al bate.",
        author: "- Derek Jeter",
        momentos: [
            { año: "1923", titulo: "La Casa que Ruth Construyó", desc: "Inauguración del Yankee Stadium y el primer campeonato de la franquicia impulsado por Babe Ruth.", video: "https://www.youtube.com/embed/5n7KjFnA1d8" },
            { año: "1939", titulo: "El Discurso del Hombre Más Afortunado", desc: "El emotivo adiós de Lou Gehrig frente a miles de aficionados tras su diagnóstico de ELA.", video: "https://www.youtube.com/embed/tFEH13veX_c" },
            { año: "1956", titulo: "El Juego Perfecto de Don Larsen", desc: "El único juego perfecto lanzado en la historia de la Serie Mundial frente a los Brooklyn Dodgers.", video: "https://www.youtube.com/embed/NMpjsQCWp6A" },
            { año: "1977", titulo: "El Nacimiento de Mr. October", desc: "Reggie Jackson conecta tres cuadrangulares en tres lanzamientos seguidos en el Juego 6.", video: "https://www.youtube.com/embed/DzEavV_Q29U" },
            { año: "1998", titulo: "La Dinastía Moderna", desc: "La histórica temporada de 114 victorias de los Yankees bajo el mando de Joe Torre.", video: "https://www.youtube.com/embed/9TsYKTjM2SU" },
            { año: "2009", titulo: "Misión 27: El Nuevo Estadio", desc: "Los Yankees ganan su vigésimo séptimo anillo en el año inaugural del nuevo Yankee Stadium.", video: "https://www.youtube.com/embed/6HHtjqRTA6g" }
        ]
    },
    BOS: {
        codigo: "BOS",
        comboNombre: "Red Sox",
        subtitle: "RESILIENCIA Y GLORIA",
        title: "Rompiendo la Maldición y Haciendo Historia",
        p1: "Los Red Sox han sido el corazón deportivo de Nueva Inglaterra. Su historia está marcada por épicas rivalidades, momentos de profunda angustia y las victorias más catárticas jamás presenciadas en Fenway Park.",
        p2: "Tras 86 años de espera, el equipo se liberó de la infame Maldición del Bambino, inaugurando una nueva era dorada en el siglo XXI con múltiples campeonatos mundiales.",
        quote: "Este campeonato no es solo nuestro, es para todos los que esperaron 86 años.",
        author: "- David Ortiz",
        momentos: [
            { año: "1918", titulo: "El Último Título de la Era Clásica", desc: "Victoria en la Serie Mundial antes del infame traspaso de Babe Ruth a los Yankees.", video: "https://www.youtube.com/embed/kRjZ28O_lQ0" },
            { año: "1975", titulo: "El Jonrón de Carlton Fisk", desc: "El icónico momento donde Fisk 'empuja' la pelota hacia territorio bueno en el Juego 6.", video: "https://www.youtube.com/embed/D32uO4X_7zM" },
            { año: "2004", titulo: "El Regreso Imposible (ALCS)", desc: "Remontada histórica tras estar abajo 0-3 en la serie frente a su eterno rival, Nueva York.", video: "https://www.youtube.com/embed/n4fCq74H1tU" },
            { año: "2004", titulo: "Rompiendo la Maldición del Bambino", desc: "Boston barre a los Cardinals y gana la Serie Mundial rompiendo 86 años de sequía.", video: "https://www.youtube.com/embed/a70JmIuJ010" },
            { año: "2013", titulo: "Boston Strong", desc: "David Ortiz lidera al equipo a un emotivo campeonato en Fenway tras el atentado en el maratón.", video: "https://www.youtube.com/embed/fGf7qW-1rP4" },
            { año: "2018", titulo: "Dominio Absoluto", desc: "El mejor equipo en la historia de la franquicia gana 108 juegos y arrolla a los Dodgers en octubre.", video: "https://www.youtube.com/embed/v9qR9Y_Wc8s" }
        ]
    },
    BAL: {
        codigo: "BAL",
        comboNombre: "Orioles",
        subtitle: "LA MAGIA DE CAMDEN YARDS",
        title: "Tradición, Defensa y el 'Oriole Way'",
        p1: "Desde su llegada a Baltimore en 1954, los Orioles forjaron una cultura ganadora basada en una defensa impenetrable y pitcheo de élite. Bajo la filosofía del 'Oriole Way', la franquicia dominó la liga a finales de los sesenta y setenta.",
        p2: "Sede del béisbol más tradicional y de leyendas de hierro, el equipo revolucionó la arquitectura de los estadios modernos con la inauguración de Camden Yards.",
        quote: "No importa la situación, siempre jugamos el béisbol de la manera correcta.",
        author: "- Cal Ripken Jr.",
        momentos: [
            { año: "1966", titulo: "El Primer Campeonato", desc: "Frank Robinson gana la Triple Corona y los Orioles barren a los Dodgers en la Serie Mundial.", video: "https://www.youtube.com/embed/8Kq1A_w-m2Q" },
            { año: "1970", titulo: "El Guante de Brooks Robinson", desc: "Una exhibición defensiva inigualable en la antesala asegura el segundo título mundial del equipo.", video: "https://www.youtube.com/embed/Y0G3R0R2Djg" },
            { año: "1983", titulo: "El Imperio de la 'Oriole Magic'", desc: "Tercer campeonato mundial liderado por el legendario mánager Earl Weaver y Cal Ripken Jr.", video: "https://www.youtube.com/embed/qJ_rM5Q4fHg" },
            { año: "1992", titulo: "Inauguración de Camden Yards", desc: "El estadio que cambió para siempre la arquitectura moderna y retro de las Grandes Ligas.", video: "https://www.youtube.com/embed/2_Yy_T_8LFs" },
            { año: "1995", titulo: "2,131: El Hombre de Hierro", desc: "Cal Ripken Jr. rompe el récord inquebrantable de Lou Gehrig de más juegos consecutivos.", video: "https://www.youtube.com/embed/5T5z4o5V4Sg" },
            { año: "2014", titulo: "El Delirio de Delmon Young", desc: "Un doblete barre bases en la ALDS hace temblar Camden Yards y sella la victoria sobre Detroit.", video: "https://www.youtube.com/embed/3M8A4bO5Gk0" }
        ]
    },
    TB: {
        codigo: "TB",
        comboNombre: "Rays",
        subtitle: "INNOVACIÓN EN EL TRÓPICO",
        title: "De la Peor Franquicia al Dominio Analítico",
        p1: "Nacidos como los Devil Rays en 1998, el equipo sufrió una década de derrotas antes de realizar una de las transformaciones más sorprendentes en la historia del deporte profesional, cambiando sus colores, su nombre y su destino en 2008.",
        p2: "Con recursos limitados, Tampa Bay revolucionó el béisbol moderno usando análisis de datos masivos (sabermetría), turnando a jugadores desconocidos en estrellas y peleando tú a tú con los gigantes financieros de su división.",
        quote: "No tenemos el dinero de Nueva York, pero tenemos inteligencia y mucho corazón.",
        author: "- Evan Longoria",
        momentos: [
            { año: "1998", titulo: "El Primer Juego", desc: "Inauguración de la franquicia en el Tropicana Field frente a la fanaticada floridana.", video: "https://www.youtube.com/embed/aH2lF_aEaEE" },
            { año: "2008", titulo: "El Milagro de Tampa Bay", desc: "De ser el peor equipo en la liga a ganar el banderín de la Liga Americana.", video: "https://www.youtube.com/embed/fD_c8F6Z_sA" },
            { año: "2011", titulo: "El Juego 162", desc: "Evan Longoria conecta un jonrón en la 12va entrada para meter al equipo dramáticamente a playoffs.", video: "https://www.youtube.com/embed/Y_aY9S_lQZk" },
            { año: "2013", titulo: "El Juego 163 de Desempate", desc: "David Price lanza un juego completo fenomenal para vencer a los Rangers y asegurar el comodín.", video: "https://www.youtube.com/embed/v9J7s_A9w5s" },
            { año: "2020", titulo: "El Salvamento de Brosseau", desc: "Mike Brosseau se venga de Aroldis Chapman con un jonrón decisivo en la ALDS.", video: "https://www.youtube.com/embed/xQ9s6F_5eD8" },
            { año: "2020", titulo: "El Drama del Juego 4", desc: "Brett Phillips conecta el hit de la locura en la Serie Mundial para dejar tendidos a los Dodgers.", video: "https://www.youtube.com/embed/2qXmY_M9fE4" }
        ]
    },
    TOR: {
        codigo: "TOR",
        comboNombre: "Blue Jays",
        subtitle: "EL ORGULLO DE CANADÁ",
        title: "Bicampeones Mundiales al Norte de la Frontera",
        p1: "Desde su debut en el gélido Exhibition Stadium en 1977, los Blue Jays se convirtieron en los embajadores del béisbol en Canadá. La pasión desbordante del país entero los llevó a construir el imponente SkyDome.",
        p2: "En los años noventa, formaron una maquinaria ofensiva indetenible que conquistó Series Mundiales consecutivas, dejando momentos icónicos que redefinieron el entusiasmo y el orgullo deportivo canadiense.",
        quote: "Ese jonrón no fue solo para nosotros, fue para 30 millones de canadienses.",
        author: "- Joe Carter",
        momentos: [
            { año: "1977", titulo: "El Béisbol Llega a Toronto", desc: "El primer partido en la historia de la franquicia jugado bajo la nieve.", video: "https://www.youtube.com/embed/rV1H_4M_zU4" },
            { año: "1992", titulo: "Primer Campeonato Canadiense", desc: "Roberto Alomar y los Blue Jays llevan el Trofeo del Comisionado fuera de los EE.UU. por primera vez.", video: "https://www.youtube.com/embed/wP1uX_v2Gcw" },
            { año: "1993", titulo: "Touch 'Em All, Joe!", desc: "Joe Carter conecta un cuadrangular en la 9na entrada para ganar la Serie Mundial, dejando a los Phillies en el terreno.", video: "https://www.youtube.com/embed/-F5HwiGm7Gk" },
            { año: "2015", titulo: "El Épico Bat Flip", desc: "José Bautista conecta un dramático jonrón de 3 carreras y lanza el bate en el Juego 5 de la ALDS.", video: "https://www.youtube.com/embed/61spAt92APc" },
            { año: "2016", titulo: "Walk-off en el Wild Card", desc: "Edwin Encarnación dispara un cuadrangular en entradas extras para vencer a los Orioles.", video: "https://www.youtube.com/embed/9Bv_3yG0_74" },
            { año: "2021", titulo: "El Despertar de Vladdy Jr.", desc: "Vladimir Guerrero Jr. desata su poder generacional peleando por la Triple Corona de la liga.", video: "https://www.youtube.com/embed/bLz-R8Jg60Y" }
        ]
    },
    CWS: {
        codigo: "CWS",
        comboNombre: "White Sox",
        subtitle: "ESPÍRITU DEL SUR DE CHICAGO",
        title: "Defensa del Orgullo en la Ciudad de los Vientos",
        p1: "Arrastrando la pesada historia del infame escándalo de los 'Black Sox' de 1919, la franquicia del sur de Chicago forjó su identidad sobre la resiliencia y el carácter rudo de su clase trabajadora.",
        p2: "Con 88 años de sequía a sus espaldas, la novena del 2005 reescribió los libros de historia con una de las exhibiciones de pitcheo abridor más dominantes en la historia de los playoffs, devolviendo la gloria a la ciudad.",
        quote: "En el lado sur de Chicago no nos rendimos, peleamos hasta el último out.",
        author: "- Paul Konerko",
        momentos: [
            { año: "1906", titulo: "Los Hitless Wonders", desc: "Primer campeonato de la franquicia venciendo sorpresivamente a sus vecinos, los Cubs.", video: "https://www.youtube.com/embed/jZ_y-A-Z-Kk" },
            { año: "1919", titulo: "El Escándalo de los Black Sox", desc: "Ocho jugadores son suspendidos de por vida, cambiando las reglas de integridad del béisbol para siempre.", video: "https://www.youtube.com/embed/xR2S9_zX6gU" },
            { año: "1959", titulo: "Los Go-Go White Sox", desc: "Un equipo basado en la velocidad y la defensa gana el banderín de la Liga Americana tras 40 años.", video: "https://www.youtube.com/embed/l5J-K9k3qgY" },
            { año: "2005", titulo: "El Grand Slam de Konerko", desc: "Paul Konerko hace explotar U.S. Cellular Field con un grand slam en el Juego 2 de la Serie Mundial.", video: "https://www.youtube.com/embed/hO3-Jq0p-08" },
            { año: "2005", titulo: "El Fin de la Sequía", desc: "Con 4 juegos completos consecutivos en la ALCS y una barrida en la final, ganan el título 88 años después.", video: "https://www.youtube.com/embed/Q0F_x0_rGcw" },
            { año: "2009", titulo: "El Juego Perfecto de Buehrle", desc: "Mark Buehrle retira a los 27 bateadores de los Rays gracias a una icónica atrapada de DeWayne Wise.", video: "https://www.youtube.com/embed/Xq-J4z3C0_w" }
        ]
    },
    CLE: {
        codigo: "CLE",
        comboNombre: "Guardians",
        subtitle: "CORAZÓN DE OHIO",
        title: "Más de un Siglo de Pasión en el Béisbol",
        p1: "Con más de un siglo de existencia, el equipo de Cleveland ha visto desfilar a los mejores lanzadores de la historia y ha albergado a una de las fanaticadas más fieles y sufridas del deporte profesional.",
        p2: "Su historia, rebautizada recientemente como Guardians, está cimentada en récords intocables, rachas históricas de victorias y equipos de los 90s que abarrotaron el Jacobs Field noche tras noche.",
        quote: "Nuestra afición ha soportado mucho, y cada vez que saltamos al campo jugamos por ellos.",
        author: "- Jim Thome",
        momentos: [
            { año: "1920", titulo: "El Primer Campeonato y un Triple Play", desc: "Bill Wambsganss ejecuta el único triple play sin asistencia en la historia de las Series Mundiales.", video: "https://www.youtube.com/embed/5H_pZ-x_CjY" },
            { año: "1948", titulo: "El Título con Bob Feller", desc: "Apoyados en el legendario Satchel Paige y Bob Feller, Cleveland gana su segunda y más reciente corona.", video: "https://www.youtube.com/embed/N-0S_yXhP9Y" },
            { año: "1995", titulo: "La Locura del Jacobs Field", desc: "Un equipo ofensivo devastador gana 100 juegos en una temporada recortada y rompe décadas de malos resultados.", video: "https://www.youtube.com/embed/7Vp-2_wT2n8" },
            { año: "2016", titulo: "El Jonrón de Rajai Davis", desc: "En el épico Juego 7 de la Serie Mundial, Davis empata el juego ante Aroldis Chapman desatando la locura local.", video: "https://www.youtube.com/embed/K9J-yM-N4F0" },
            { año: "2017", titulo: "La Racha de 22 Victorias", desc: "Cleveland impone el récord moderno de la Liga Americana con 22 triunfos de manera consecutiva.", video: "https://www.youtube.com/embed/C2wH2gZJ2T0" },
            { año: "2022", titulo: "El Jonrón de Oscar González", desc: "El dominicano deja en el terreno a los Yankees en playoffs bajo la canción de Bob Esponja.", video: "https://www.youtube.com/embed/B_UoP7A2V04" }
        ]
    },
    MIN: {
        codigo: "MIN",
        comboNombre: "Twins",
        subtitle: "EL ESPÍRITU DE LAS CIUDADES GEMELAS",
        title: "Béisbol de Fundamentos Bajo el Domo",
        p1: "Desde su reubicación a Minnesota en 1961, los Twins han construido su identidad alrededor del juego de fundamentos y héroes trabajadores. La estruendosa acústica del Metrodome se convirtió en una de las mayores ventajas de local en el deporte.",
        p2: "Dueños de dos de los campeonatos más peleados en la historia de las Series Mundiales, el equipo sigue cautivando hoy a su afición desde el hermoso Target Field.",
        quote: "Aquí no compramos campeonatos, los ganamos con trabajo en equipo y fundamentos.",
        author: "- Tom Kelly (Mánager)",
        momentos: [
            { año: "1965", titulo: "Primer Banderín en Minnesota", desc: "Liderados por Harmon Killebrew y Tony Oliva, los Twins conquistan la Liga Americana.", video: "https://www.youtube.com/embed/aP9E_R-9L7Y" },
            { año: "1987", titulo: "Campeones de la 'Homer Hanky'", desc: "Con la afición agitando sus pañuelos, los Twins ganan el primer campeonato de su historia frente a St. Louis.", video: "https://www.youtube.com/embed/6UjT_2p4R8o" },
            { año: "1991", titulo: "El Juego 6 de Kirby Puckett", desc: "El legendario 'And we'll see you tomorrow night!' tras su dramático jonrón para forzar el Juego 7.", video: "https://www.youtube.com/embed/N-0L_nO4XU8" },
            { año: "1991", titulo: "La Obra Maestra de Jack Morris", desc: "Morris lanza 10 entradas en blanco en el Juego 7 para darle a Minnesota su segundo título mundial.", video: "https://www.youtube.com/embed/XqE-3jM_Qjg" },
            { año: "2009", titulo: "El Juego 163 vs Detroit", desc: "Un épico maratón de 12 entradas que aseguró el título divisional en el último juego de temporada regular del Metrodome.", video: "https://www.youtube.com/embed/9BqO2l14qF8" },
            { año: "2023", titulo: "Fin a la Maldición de los Playoffs", desc: "Minnesota rompe la histórica racha de 18 derrotas consecutivas en postemporada venciendo a Toronto.", video: "https://www.youtube.com/embed/H_U22p99B6A" }
        ]
    },
    DET: {
        codigo: "DET",
        comboNombre: "Tigers",
        subtitle: "RUGIDO EN LA CIUDAD DEL MOTOR",
        title: "Estrellas de Poder en la Historia de Detroit",
        p1: "Siendo una de las franquicias originales, los Tigres de Detroit han sido un reflejo del corazón industrial de su ciudad: duros, potentes y trabajadores. Desde los días agresivos de Ty Cobb hasta la fuerza descomunal de Miguel Cabrera.",
        p2: "Su legado está marcado por temporadas dominantes, pitcheo abridor histórico y campeonatos mundiales que paralizaron y unieron a toda la ciudad de Michigan.",
        quote: "No hay sonido más dulce en Detroit que el crujido de un bate conectado en el Comerica Park.",
        author: "- Al Kaline",
        momentos: [
            { año: "1968", titulo: "El Título de Mickey Lolich", desc: "Lolich gana tres juegos en la Serie Mundial y levanta el espíritu de una ciudad afectada por tensiones sociales.", video: "https://www.youtube.com/embed/5H_pZ-x_CjY" },
            { año: "1984", titulo: "Bless You Boys", desc: "Liderando de principio a fin la temporada, Sparky Anderson y los Tigres aplastan a los Padres en la final.", video: "https://www.youtube.com/embed/N-0S_yXhP9Y" },
            { año: "2006", titulo: "El Jonrón de Magglio Ordoñez", desc: "Un cuadrangular épico en el Juego 4 de la ALCS manda a los Tigres de vuelta a la Serie Mundial ante el delirio total.", video: "https://www.youtube.com/embed/7Vp-2_wT2n8" },
            { año: "2012", titulo: "La Triple Corona de Miggy", desc: "Miguel Cabrera se convierte en el primer jugador en 45 años en liderar la liga en Promedio, Jonrones y Empujadas.", video: "https://www.youtube.com/embed/K9J-yM-N4F0" },
            { año: "2013", titulo: "El Dominio de la Rotación", desc: "Max Scherzer gana el Cy Young y la rotación impone el récord de más ponches en la historia de la liga.", video: "https://www.youtube.com/embed/C2wH2gZJ2T0" },
            { año: "2021", titulo: "El Club de los 500 para Cabrera", desc: "Miguel Cabrera conecta el cuadrangular número 500 de su carrera asegurando su lugar en Cooperstown.", video: "https://www.youtube.com/embed/B_UoP7A2V04" }
        ]
    },
    KC: {
        codigo: "KC",
        comboNombre: "Royals",
        subtitle: "REALEZA EN EL MEDIO OESTE",
        title: "Velocidad, Defensa y Remontadas Épicas",
        p1: "Desde su nacimiento en 1969, los Kansas City Royals definieron una era gloriosa en los años 80s gracias a superestrellas formadas en casa y una intensa rivalidad con los Yankees, basando su juego en la agilidad en los senderos.",
        p2: "Tras casi tres décadas de letargo, el equipo resurgió en los 2010s con un estilo de béisbol de 'paso a paso': contacto oportuno, robos de base frenéticos y un bullpen que apagaba cualquier esperanza rival.",
        quote: "No somos el equipo más poderoso, somos el equipo que nunca, jamás, da un juego por perdido.",
        author: "- Salvador Pérez",
        momentos: [
            { año: "1980", titulo: "El Primer Banderín", desc: "George Brett conecta un gigantesco jonrón en Yankee Stadium para enviar a Kansas City a su primera Serie Mundial.", video: "https://www.youtube.com/embed/kRjZ28O_lQ0" },
            { año: "1983", titulo: "El Incidente del Pine Tar", desc: "La legendaria e histérica rabieta de George Brett luego de que le anularan un jonrón por exceso de brea en el bate.", video: "https://www.youtube.com/embed/D32uO4X_7zM" },
            { año: "1985", titulo: "La Primera Corona de la Realeza", desc: "Los Royals remontan un 3-1 en la Serie Mundial y apalean a San Luis 11-0 en el Juego 7 decisivo.", video: "https://www.youtube.com/embed/n4fCq74H1tU" },
            { año: "2014", titulo: "La Locura del Juego de Comodín", desc: "En uno de los juegos más épicos de la historia, remontan a Oakland en 12 entradas rompiendo 29 años de sequía.", video: "https://www.youtube.com/embed/a70JmIuJ010" },
            { año: "2015", titulo: "El Escape Loco de Hosmer", desc: "Eric Hosmer corre hacia el home en el Juego 5 para forzar entradas extras en Nueva York.", video: "https://www.youtube.com/embed/fGf7qW-1rP4" },
            { año: "2015", titulo: "El Retorno al Trono", desc: "Los Royals se consagran Campeones de la Serie Mundial en la 12va entrada confirmando su resiliencia absoluta.", video: "https://www.youtube.com/embed/v9qR9Y_Wc8s" }
        ]
    },
    HOU: {
        codigo: "HOU",
        comboNombre: "Astros",
        subtitle: "LA DINASTÍA ESPACIAL",
        title: "De las Estrellas al Dominio Moderno",
        p1: "Iniciaron como los Colt .45s antes de transformarse en los Astros, el equipo del futuro que jugaba en el Astrodome, la Octava Maravilla del Mundo. Siempre caracterizados por la innovación y el espectáculo.",
        p2: "Hoy representan la gran dinastía moderna de la Liga Americana, alcanzando múltiples Series Mundiales de manera consecutiva mediante un desarrollo implacable de talento.",
        quote: "No importa el tamaño del jugador, sino el tamaño de su corazón y sus batazos.",
        author: "- José Altuve",
        momentos: [
            { año: "1965", titulo: "La Octava Maravilla", desc: "Inauguración del Astrodome, el primer estadio completamente techado del mundo.", video: "https://www.youtube.com/embed/UEjIcjTefDc" },
            { año: "1986", titulo: "El Maratón de 16 Entradas", desc: "Épico enfrentamiento de pitcheo en la postemporada contra los New York Mets.", video: "https://www.youtube.com/embed/9BqO2l14qF8" },
            { año: "2005", titulo: "Primer Banderín", desc: "Los Astros ganan su primer pase a la Serie Mundial bajo el liderazgo de las Abejas Asesinas y Roy Oswalt.", video: "https://www.youtube.com/embed/xL6_d-zB038" },
            { año: "2017", titulo: "Campeones Mundiales", desc: "Houston se consagra por primera vez en la historia en un emocionante Juego 7 contra los Dodgers.", video: "https://www.youtube.com/embed/XqEITLq0u2Y" },
            { año: "2019", titulo: "El Jonrón de Altuve", desc: "José Altuve conecta un icónico cuadrangular ante Aroldis Chapman para dejar tendidos a los Yankees y ganar el banderín.", video: "https://www.youtube.com/embed/J7t6l9lH3cM" },
            { año: "2022", titulo: "El No-Hitter Combinado", desc: "Cristian Javier y el bullpen logran un histórico sin hit ni carrera en la Serie Mundial rumbo a su segundo título.", video: "https://www.youtube.com/embed/hO-C0i_VnFE" }
        ]
    },
    TEX: {
        codigo: "TEX",
        comboNombre: "Rangers",
        subtitle: "ESTRELLA SOLITARIA",
        title: "Perseverancia y Triunfo en el Calor Texano",
        p1: "Originarios de Washington antes de mudarse a Texas en 1972, los Rangers soportaron décadas de reconstrucción bajo el abrazador sol de Arlington, siendo el hogar de leyendas como Nolan Ryan e Iván Rodríguez.",
        p2: "Su historia de resiliencia alcanzó su punto máximo recientemente, borrando las dolorosas y desgarradoras memorias de las Series Mundiales de los 2010s con un campeonato autoritario en 2023.",
        quote: "El camino fue largo y doloroso, pero finalmente la gloria de octubre llegó a Texas.",
        author: "- Corey Seager",
        momentos: [
            { año: "1991", titulo: "El Séptimo No-Hitter", desc: "A sus 44 años, la leyenda Nolan Ryan lanza el séptimo juego sin hit ni carrera de su mítica trayectoria.", video: "https://www.youtube.com/embed/8Kq1A_w-m2Q" },
            { año: "1996", titulo: "El Primer Título Divisional", desc: "Bajo la batuta de Johnny Oates, el equipo de Juan González asegura su primer viaje histórico a los playoffs.", video: "https://www.youtube.com/embed/Y0G3R0R2Djg" },
            { año: "2010", titulo: "Banderín de la Americana", desc: "Vencen a los temibles Yankees con el ponche decisivo de Neftalí Feliz para ir a su primera Serie Mundial.", video: "https://www.youtube.com/embed/qJ_rM5Q4fHg" },
            { año: "2011", titulo: "El Drama del Juego 6", desc: "A un solo strike del campeonato en dos ocasiones distintas, sufren la derrota más desgarradora de su historia.", video: "https://www.youtube.com/embed/2_Yy_T_8LFs" },
            { año: "2015", titulo: "La Épica Rivalidad del Séptimo Inning", desc: "Un juego salvaje en Toronto de 53 minutos donde Texas y Blue Jays intercambian jugadas insólitas.", video: "https://www.youtube.com/embed/5T5z4o5V4Sg" },
            { año: "2023", titulo: "Campeones del Mundo", desc: "Imbatibles como visitantes, los Rangers consiguen el primer campeonato de su historia venciendo a Arizona.", video: "https://www.youtube.com/embed/1Q2w3e4r5t6" }
        ]
    },
    SEA: {
        codigo: "SEA",
        comboNombre: "Mariners",
        subtitle: "MAGIA EN EL NOROESTE",
        title: "Béisbol Icónico y Récords Inquebrantables",
        p1: "Aislados geográficamente en el extremo del Noroeste de Estados Unidos, los Mariners han sido el hogar de algunas de las superestrellas más electrizantes e icónicas de la historia: Ken Griffey Jr., Edgar Martínez e Ichiro Suzuki.",
        p2: "Su legado está construido sobre momentos individuales mágicos, campañas regulares récord y una afición que se mantuvo fiel a pesar de la sequía de postemporada más larga en los deportes profesionales norteamericanos.",
        quote: "No se trata de ganar todos los días, se trata de hacer que los fanáticos se levanten de sus asientos.",
        author: "- Ken Griffey Jr.",
        momentos: [
            { año: "1995", titulo: "The Double", desc: "El legendario doblete de Edgar Martínez que salvó a la franquicia de la reubicación en una dramática ALDS.", video: "https://www.youtube.com/embed/aH2lF_aEaEE" },
            { año: "2001", titulo: "Las 116 Victorias", desc: "Liderados por el novato maravilla Ichiro Suzuki, los Mariners empatan el récord histórico de victorias en una temporada.", video: "https://www.youtube.com/embed/fD_c8F6Z_sA" },
            { año: "2004", titulo: "Los 262 Hits de Ichiro", desc: "Ichiro rompe el mítico récord de George Sisler de más imparables en una sola temporada regular.", video: "https://www.youtube.com/embed/Y_aY9S_lQZk" },
            { año: "2012", titulo: "El Juego Perfecto del Rey", desc: "Félix Hernández paraliza al mundo del béisbol lanzando el primer juego perfecto en la historia del club.", video: "https://www.youtube.com/embed/v9J7s_A9w5s" },
            { año: "2022", titulo: "El Fin de la Sequía", desc: "Cal Raleigh conecta un dramático cuadrangular para romper una racha de 21 años sin entrar a postemporada.", video: "https://www.youtube.com/embed/xQ9s6F_5eD8" },
            { año: "2022", titulo: "La Gran Remontada del Wild Card", desc: "Seattle se levanta de un déficit de 7 carreras ante Toronto en ruta a su primer triunfo en playoffs en décadas.", video: "https://www.youtube.com/embed/7Y6u5i4o3p2" }
        ]
    },
    ATH: {
        codigo: "ATH",
        comboNombre: "Athletics",
        subtitle: "DINAMISMO Y MONEYBALL",
        title: "Innovación Verde y Oro a Través de las Eras",
        p1: "Siendo una de las franquicias más laureadas de las Grandes Ligas con 9 campeonatos, los Atléticos han dominado en tres ciudades diferentes: Filadelfia, Kansas City y Oakland. Famosos por sus excentricidades y espíritu rebelde.",
        p2: "A principios del siglo XXI cambiaron para siempre la forma en la que se analiza y juega el béisbol a través del 'Moneyball', demostrando que la inteligencia y las estadísticas pueden competir contra las carteras más ricas del deporte.",
        quote: "Tratamos de comprar triunfos, no jugadores. Ese es el arte de este juego.",
        author: "- Billy Beane",
        momentos: [
            { año: "1972", titulo: "El Inicio del 'Mustache Gang'", desc: "La era de Rollie Fingers, Catfish Hunter y Reggie Jackson inicia ganando tres títulos mundiales consecutivos.", video: "https://www.youtube.com/embed/rV1H_4M_zU4" },
            { año: "1989", titulo: "La Serie de la Bahía", desc: "Los Athletics de Ricky Henderson y José Canseco barren a los Giants en medio del trágico terremoto de Loma Prieta.", video: "https://www.youtube.com/embed/wP1uX_v2Gcw" },
            { año: "1991", titulo: "El Rey del Robo", desc: "Rickey Henderson levanta la base en lo alto tras romper el récord histórico de bases robadas de Lou Brock.", video: "https://www.youtube.com/embed/-F5HwiGm7Gk" },
            { año: "2002", titulo: "La Racha de 20 Victorias", desc: "Scott Hatteberg conecta un dramático jonrón (inmortalizado en el cine) para sellar el récord de la franquicia.", video: "https://www.youtube.com/embed/9M8n7b6v5c4" },
            { año: "2012", titulo: "Campeones en el Último Día", desc: "Con un presupuesto ínfimo, barren la última serie a Texas asegurando el título divisional de manera milagrosa.", video: "https://www.youtube.com/embed/9Bv_3yG0_74" },
            { año: "2019", titulo: "El Último Gran Festejo en el Coliseo", desc: "Una vibrante victoria en playoffs frente a más de 54,000 ruidosos fanáticos antes del declive y mudanza del club.", video: "https://www.youtube.com/embed/bLz-R8Jg60Y" }
        ]
    },
    LAA: {
        codigo: "LAA",
        comboNombre: "Angels",
        subtitle: "BÉISBOL BAJO EL SOL DE CALIFORNIA",
        title: "De Estrellas Cinematográficas a Héroes Generacionales",
        p1: "Nacidos de la visión expansionista en la ciudad de Los Ángeles en 1961 y mudados a Anaheim poco después, los Angels combinaron siempre el glamour californiano con el corazón de trabajadores incansables bajo la Gran A.",
        p2: "Su historia dio un vuelco mágico en 2002 con el inolvidable Rally Monkey, y hoy son mundialmente reconocidos por haber sido el hogar simultáneo de dos de los talentos más puros en la historia del béisbol: Mike Trout y Shohei Ohtani.",
        quote: "Crean en los milagros, porque en Anaheim los vemos suceder todo el tiempo.",
        author: "- Tim Salmon",
        momentos: [
            { año: "1979", titulo: "El Primer Banderín Divisional", desc: "Bajo la guía de Don Baylor y Nolan Ryan, los Angels ganan por primera vez la dura División Oeste.", video: "https://www.youtube.com/embed/jZ_y-A-Z-Kk" },
            { año: "1986", titulo: "El Drama contra Boston", desc: "Una Serie de Campeonato cardiaca que quedó grabada como una de las batallas más dolorosas en la historia del club.", video: "https://www.youtube.com/embed/xR2S9_zX6gU" },
            { año: "2002", titulo: "El Milagro del Rally Monkey", desc: "Una épica remontada de 5 carreras en la Serie Mundial liderada por Scott Spiezio asegura el primer título.", video: "https://www.youtube.com/embed/2X1z0l9k8m7" },
            { año: "2014", titulo: "El MVP Unánime de Trout", desc: "Mike Trout consagra su estatus como el mejor jugador del planeta liderando a los Angels a 98 victorias.", video: "https://www.youtube.com/embed/hO3-Jq0p-08" },
            { año: "2019", titulo: "El Juego sin Hit de Skaggs", desc: "Una noche increíblemente emotiva donde todos los jugadores usaron el dorsal 45 en honor a su lanzador fallecido.", video: "https://www.youtube.com/embed/Q0F_x0_rGcw" },
            { año: "2021", titulo: "El Fenómeno Ohtani", desc: "Shohei Ohtani rompe paradigmas ganando el MVP de manera unánime con 46 jonrones y dominio absoluto como lanzador.", video: "https://www.youtube.com/embed/Xq-J4z3C0_w" }
        ]
    }
};

const MAPA_COMBO_A_CODIGO = {
    "rays": "TB", "yankees": "NYY", "red sox": "BOS", "orioles": "BAL",
    "blue jays": "TOR", "white sox": "CWS", "guardians": "CLE", "twins": "MIN",
    "tigers": "DET", "royals": "KC", "astros": "HOU", "rangers": "TEX",
    "mariners": "SEA", "athletics": "ATH", "angels": "LAA"
};

document.addEventListener("DOMContentLoaded", () => {
    const comboInput = document.getElementById("combo-input");
    const comboItems = document.querySelectorAll("#combo-lista li");

    const hSubtitle = document.getElementById("historia-subtitle");
    const hTitle = document.getElementById("historia-title");
    const hNarrative = document.getElementById("historia-narrative");
    const hQuote = document.getElementById("historia-quote");
    const hAuthor = document.getElementById("historia-author");
    const contenedorVideos = document.getElementById("contenedor-videos");

    function cargarHistoria(codigo) {
        const datos = DATOS_HISTORIA[codigo] || DATOS_HISTORIA.NYY;

        localStorage.setItem("equipoSeleccionado", datos.codigo);
        if (comboInput) comboInput.value = datos.comboNombre;

        if (typeof window.actualizarHeaderLive === "function") {
            window.actualizarHeaderLive();
        }

        hSubtitle.textContent = datos.subtitle;
        hTitle.textContent = datos.title;
        hNarrative.innerHTML = `
            <p class="text-highlight">${datos.p1}</p>
            <p>${datos.p2}</p>
        `;
        hQuote.textContent = datos.quote;
        hAuthor.textContent = datos.author;


        contenedorVideos.innerHTML = "";
        datos.momentos.forEach(momento => {
            const article = document.createElement("article");
            article.className = "video-card";
            article.innerHTML = `
                <div class="video-thumbnail">
                    <iframe src="${momento.video}" class="thumb-video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="video-info">
                    <span class="year-tag">${momento.año}</span>
                    <h4 class="video-title">${momento.titulo}</h4>
                    <p class="video-desc">${momento.desc}</p>
                </div>
            `;
            contenedorVideos.appendChild(article);
        });


        document.querySelectorAll('.btn-filter').forEach(b => b.classList.remove('active'));
        const btnNormal = document.querySelector('.btn-filter[data-filter="normal"]');
        if(btnNormal) btnNormal.classList.add('active');
        document.querySelectorAll('.thumb-video').forEach(iframe => iframe.className = 'thumb-video');
    }


    comboItems.forEach(item => {
        item.addEventListener("click", () => {
            const nombre = item.textContent.trim().toLowerCase();
            const codigo = MAPA_COMBO_A_CODIGO[nombre];
            if (codigo) {
                const nuevaUrl = `${window.location.pathname}?equipo=${codigo}`;
                window.history.replaceState({ path: nuevaUrl }, "", nuevaUrl);
                cargarHistoria(codigo);
            }
        });
    });

    const urlParams = new URLSearchParams(window.location.search);
    const equipoInicial = urlParams.get("equipo")?.toUpperCase() || localStorage.getItem("equipoSeleccionado") || "NYY";
    cargarHistoria(equipoInicial);




    const filterButtons = document.querySelectorAll('.btn-filter');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {

            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const iframes = document.querySelectorAll('.thumb-video');
            const filterName = btn.getAttribute('data-filter');


            iframes.forEach(iframe => {
                iframe.className = 'thumb-video';
                if (filterName !== 'normal') {
                    iframe.classList.add(`filter-${filterName}`);
                }
            });
        });
    });
});