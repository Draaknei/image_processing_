



const DATOS_LEYENDAS = {
    NYY: {
        codigo: "NYY",
        comboNombre: "Yankees",
        videoUrl: "https://www.youtube.com/embed/Cf0ouronLLI",
        videoTitulo: "La Épica Historia de los New York Yankees",
        videoDesc: "Descubre cómo se forjó la dinastía más grande en la historia del béisbol profesional, acumulando 27 campeonatos mundiales.",
        leyendas: [
            { nombre: "Babe Ruth", posicion: "JARDINERO DERECHO", anios: "1920 - 1934", desc: "El 'Gran Bambino'. Cambió el juego para siempre con su poder al bate y es considerado el jugador más influyente de todos los tiempos.", wiki: "Babe_Ruth" },
            { nombre: "Lou Gehrig", posicion: "PRIMERA BASE", anios: "1923 - 1939", desc: "El 'Caballo de Hierro'. Su récord de partidos consecutivos jugados y su trágica pero inspiradora historia lo hacen un ícono inmortal.", wiki: "Lou_Gehrig" },
            { nombre: "Derek Jeter", posicion: "CAMPOCORTO", anios: "1995 - 2014", desc: "El 'Capitán'. Lideró a los Yankees a 5 campeonatos de Serie Mundial con su estilo de juego impecable y liderazgo inquebrantable.", wiki: "Derek_Jeter" },
            { nombre: "Mickey Mantle", posicion: "JARDINERO CENTRAL", anios: "1951 - 1968", desc: "El bateador ambidiestro más poderoso de la historia. Ganó 7 Series Mundiales y 3 premios MVP a pesar de sus constantes lesiones.", wiki: "Mickey_Mantle" },
            { nombre: "Joe DiMaggio", posicion: "JARDINERO CENTRAL", anios: "1936 - 1951", desc: "'The Yankee Clipper'. Dueño de la racha inquebrantable de 56 juegos seguidos conectando hit en 1941.", wiki: "Joe_DiMaggio" },
            { nombre: "Mariano Rivera", posicion: "CERRADOR", anios: "1995 - 2013", desc: "El rey del salvamento (652) y el único jugador en la historia elegido al Salón de la Fama de manera unánime.", wiki: "Mariano_Rivera" }
        ]
    },
    BOS: {
        codigo: "BOS",
        comboNombre: "Red Sox",
        videoUrl: "https://www.youtube.com/embed/zTedtmVpRB4",
        videoTitulo: "The Curse of The Bambino | HBO",
        videoDesc: "Revive los momentos más dramáticos y gloriosos de una franquicia que esperó 86 años para volver a la cima del mundo en 2004.",
        leyendas: [
            { nombre: "Ted Williams", posicion: "JARDINERO IZQUIERDO", anios: "1939 - 1960", desc: "Considerado el bateador más puro de la historia y el último en batear por encima de .400 en una temporada (.406).", wiki: "Ted_Williams" },
            { nombre: "Carl Yastrzemski", posicion: "JARDINERO IZQUIERDO", anios: "1961 - 1983", desc: "Ganador de la Triple Corona en 1967. Dedicó sus 23 temporadas de carrera exclusivamente a los Medias Rojas.", wiki: "Carl_Yastrzemski" },
            { nombre: "David Ortiz", posicion: "BATEADOR DESIGNADO", anios: "2003 - 2016", desc: "'Big Papi'. El héroe indiscutible de octubre que conectó los batazos más importantes para romper la Maldición.", wiki: "David_Ortiz" },
            { nombre: "Pedro Martínez", posicion: "LANZADOR ABRIDOR", anios: "1998 - 2004", desc: "Su temporada de 1999 es estadísticamente una de las mejores campañas para un abridor en la historia del béisbol moderno.", wiki: "Pedro_Martínez" },
            { nombre: "Wade Boggs", posicion: "TERCERA BASE", anios: "1982 - 1992", desc: "Una máquina de contacto. Ganó cinco títulos de bateo con Boston y fue clave en la ofensiva de los años 80s.", wiki: "Wade_Boggs" },
            { nombre: "Jim Rice", posicion: "JARDINERO IZQUIERDO", anios: "1974 - 1989", desc: "MVP de 1978. Un bateador temible que acumuló más de 380 jonrones en su carrera de 16 años con el equipo.", wiki: "Jim_Rice" }
        ]
    },
    BAL: {
        codigo: "BAL",
        comboNombre: "Orioles",
        videoUrl: "https://www.youtube.com/embed/vgBdaBVPLIA",
        videoTitulo: "60 Years of Orioles Magic",
        videoDesc: "Una mirada a la historia del equipo de Maryland y el 'Oriole Way' que definió una era de campeonatos en las Grandes Ligas.",
        leyendas: [
            { nombre: "Cal Ripken Jr.", posicion: "CAMPOCORTO", anios: "1981 - 2001", desc: "El 'Hombre de Hierro'. Posee el récord inquebrantable de 2,632 juegos consecutivos jugados, redefiniendo la posición.", wiki: "Cal_Ripken_Jr." },
            { nombre: "Brooks Robinson", posicion: "TERCERA BASE", anios: "1955 - 1977", desc: "Conocido como la 'Aspiradora Humana', es considerado el mejor tercera base defensivo en la historia del béisbol (16 Guantes de Oro).", wiki: "Brooks_Robinson" },
            { nombre: "Jim Palmer", posicion: "LANZADOR ABRIDOR", anios: "1965 - 1984", desc: "Ganador de tres premios Cy Young y el lanzador más ganador en la historia de los Orioles durante su época dorada.", wiki: "Jim_Palmer" },
            { nombre: "Frank Robinson", posicion: "JARDINERO DERECHO", anios: "1966 - 1971", desc: "Ganador de la Triple Corona en 1966 en su primer año con el equipo. Lideró a los Orioles a cuatro Series Mundiales en seis años.", wiki: "Frank_Robinson" },
            { nombre: "Eddie Murray", posicion: "PRIMERA BASE", anios: "1977 - 1988", desc: "Bateador ambidiestro consistente y peligroso. Acumuló más de 3,000 hits y 500 jonrones en su carrera en el Salón de la Fama.", wiki: "Eddie_Murray" },
            { nombre: "Earl Weaver", posicion: "MÁNAGER", anios: "1968 - 1982", desc: "El estratega ardiente que lideró la mejor época de la franquicia. Su famosa filosofía era 'Pitcheo, defensa y jonrones de 3 carreras'.", wiki: "Earl_Weaver" }
        ]
    },
    TB: {
        codigo: "TB",
        comboNombre: "Rays",
        videoUrl: "https://www.youtube.com/embed/4dcxh9KGAZQ",
        videoTitulo: "Cómo los Rays escaparon del Infierno",
        videoDesc: "La evolución de una franquicia joven que revolucionó el juego apostando por analíticas, estrategia defensiva y talento juvenil.",
        leyendas: [
            { nombre: "Evan Longoria", posicion: "TERCERA BASE", anios: "2008 - 2017", desc: "El rostro de la franquicia en sus mejores años, famoso por su jonrón en el Juego 162 que los metió a playoffs de manera épica.", wiki: "Evan_Longoria" },
            { nombre: "Carl Crawford", posicion: "JARDINERO IZQUIERDO", anios: "2002 - 2010", desc: "Líder histórico del club en triples y bases robadas, fue el motor ofensivo del equipo en su primera década.", wiki: "Carl_Crawford" },
            { nombre: "David Price", posicion: "LANZADOR ABRIDOR", anios: "2008 - 2014", desc: "Ganador del Cy Young y el as indiscutible de la rotación que llevó a Tampa Bay a su primera Serie Mundial.", wiki: "David_Price_(baseball)" },
            { nombre: "Ben Zobrist", posicion: "UTILITY", anios: "2006 - 2014", desc: "El prototipo del jugador moderno que podía jugar en cualquier posición y rendir al nivel de un All-Star con el bate y el guante.", wiki: "Ben_Zobrist" },
            { nombre: "Kevin Kiermaier", posicion: "JARDINERO CENTRAL", anios: "2013 - 2022", desc: "Ganador de múltiples Guantes de Oro de Platino, conocido por realizar atrapadas espectaculares saltando la barda.", wiki: "Kevin_Kiermaier" },
            { nombre: "James Shields", posicion: "LANZADOR ABRIDOR", anios: "2006 - 2012", desc: "'Big Game James'. El abridor de hierro que sentó las bases de la competitividad de la rotación de los Rays.", wiki: "James_Shields_(baseball)" }
        ]
    },
    TOR: {
        codigo: "TOR",
        comboNombre: "Blue Jays",
        videoUrl: "https://www.youtube.com/embed/LNwJaVGTZ7A",
        videoTitulo: "The Blue Jays Way | Sportsnet",
        videoDesc: "La explosión del béisbol en Toronto y los bicampeonatos mundiales que hicieron vibrar a toda una nación en los años noventa.",
        leyendas: [
            { nombre: "Roberto Alomar", posicion: "SEGUNDA BASE", anios: "1991 - 1995", desc: "Uno de los intermedistas más completos de la historia, clave en los títulos consecutivos con su guante y bateo oportuno.", wiki: "Roberto_Alomar" },
            { nombre: "Joe Carter", posicion: "JARDINERO", anios: "1991 - 1997", desc: "Inmortalizado por su jonrón histórico para dejar en el terreno a los Phillies y asegurar la Serie Mundial de 1993.", wiki: "Joe_Carter" },
            { nombre: "Roy Halladay", posicion: "LANZADOR ABRIDOR", anios: "1998 - 2009", desc: "'Doc' fue el lanzador más dominante de su era con los Blue Jays. Trabajador incansable y ganador del premio Cy Young.", wiki: "Roy_Halladay" },
            { nombre: "José Bautista", posicion: "JARDINERO DERECHO", anios: "2008 - 2017", desc: "Joey Bats'. Lideró la liga en jonrones dos veces y encendió a Canadá con su icónico 'Bat Flip' en la postemporada de 2015.", wiki: "José_Bautista" },
            { nombre: "Carlos Delgado", posicion: "PRIMERA BASE", anios: "1993 - 2004", desc: "El mayor jonronero en la historia de la franquicia. Un bateador de poder zurdo temible durante más de una década.", wiki: "Carlos_Delgado" },
            { nombre: "Dave Stieb", posicion: "LANZADOR ABRIDOR", anios: "1979 - 1992", desc: "El mejor lanzador en la historia inicial del club, ganador del primer y único juego sin hit ni carrera en la historia de Toronto.", wiki: "Dave_Stieb" }
        ]
    },
    CWS: {
        codigo: "CWS",
        comboNombre: "White Sox",
        videoUrl: "https://www.youtube.com/embed/jfKMPujPdHY",
        videoTitulo: "LAST COMISKEY Documentary",
        videoDesc: "De la era antigua de Comiskey Park hasta el glorioso campeonato mundial de 2005 que rompió una sequía de casi un siglo.",
        leyendas: [
            { nombre: "Frank Thomas", posicion: "PRIMERA BASE", anios: "1990 - 2005", desc: "'The Big Hurt'. Un bateador temible y único jugador de los White Sox en ganar premios MVP en temporadas consecutivas.", wiki: "Frank_Thomas_(designated_hitter)" },
            { nombre: "Paul Konerko", posicion: "PRIMERA BASE", anios: "1999 - 2014", desc: "El capitán tranquilo. Lideró la ofensiva por 15 años y conectó un Grand Slam clave en la Serie Mundial de 2005.", wiki: "Paul_Konerko" },
            { nombre: "Minnie Miñoso", posicion: "JARDINERO IZQUIERDO", anios: "1951 - 1980", desc: "El 'Cometa Cubano'. Primer jugador afrodescendiente en Chicago, su carisma y estilo revolucionaron al equipo.", wiki: "Minnie_Miñoso" },
            { nombre: "Luke Appling", posicion: "CAMPOCORTO", anios: "1930 - 1950", desc: "'Old Aches and Pains'. Jugó 20 temporadas para el club, ganó dos títulos de bateo y era un maestro haciendo fouls.", wiki: "Luke_Appling" },
            { nombre: "Mark Buehrle", posicion: "LANZADOR ABRIDOR", anios: "2000 - 2011", desc: "Lanzador zurdo de control magistral. Lanzó un Juego Perfecto y un Sin Hit ni Carrera con la camiseta de los White Sox.", wiki: "Mark_Buehrle" },
            { nombre: "Luis Aparicio", posicion: "CAMPOCORTO", anios: "1956 - 1967", desc: "El venezolano veloz que ganó el Novato del Año y 9 Guantes de Oro, liderando la liga en bases robadas 9 años seguidos.", wiki: "Luis_Aparicio" }
        ]
    },
    CLE: {
        codigo: "CLE",
        comboNombre: "Guardians",
        videoUrl: "https://www.youtube.com/embed/QowafnL2Ttc",
        videoTitulo: "20 GREATEST Cleveland Guardians Players Of All Time",
        videoDesc: "Una franquicia resiliente que fue hogar de algunos de los brazos más dominantes y bateadores más potentes de la historia.",
        leyendas: [
            { nombre: "Bob Feller", posicion: "LANZADOR ABRIDOR", anios: "1936 - 1956", desc: "Dueño de una recta fulminante, sacrificó los mejores años de su carrera para servir como artillero en la Segunda Guerra Mundial.", wiki: "Bob_Feller" },
            { nombre: "Jim Thome", posicion: "PRIMERA BASE", anios: "1991 - 2002", desc: "El líder histórico de jonrones de la franquicia. Su poder descomunal y su sonrisa amable lo hicieron leyenda en Ohio.", wiki: "Jim_Thome" },
            { nombre: "Tris Speaker", posicion: "JARDINERO CENTRAL", anios: "1916 - 1926", desc: "Jugador-mánager que llevó a Cleveland a su primer título en 1920. Aún posee el récord histórico de dobles en la MLB.", wiki: "Tris_Speaker" },
            { nombre: "Larry Doby", posicion: "JARDINERO", anios: "1947 - 1955", desc: "El primer jugador afroamericano en la historia de la Liga Americana. Un bateador de poder y pionero de los derechos civiles.", wiki: "Larry_Doby" },
            { nombre: "Omar Vizquel", posicion: "CAMPOCORTO", anios: "1994 - 2004", desc: "Mago defensivo que ganó 8 Guantes de Oro consecutivos con Cleveland, formando la mejor dupla junto a Roberto Alomar.", wiki: "Omar_Vizquel" },
            { nombre: "Corey Kluber", posicion: "LANZADOR ABRIDOR", anios: "2011 - 2019", desc: "'Klubot'. Ganador de dos premios Cy Young. Su dominio desde el montículo llevó a Cleveland a la Serie Mundial en 2016.", wiki: "Corey_Kluber" }
        ]
    },
    MIN: {
        codigo: "MIN",
        comboNombre: "Twins",
        videoUrl: "https://www.youtube.com/embed/jGDD8z0m65A",
        videoTitulo: "20 GREATEST Minnesota Twins Players of All Time",
        videoDesc: "De la acústica ensordecedora del Metrodome a la elegancia del Target Field, el hogar de bateadores históricos.",
        leyendas: [
            { nombre: "Kirby Puckett", posicion: "JARDINERO CENTRAL", anios: "1984 - 1995", desc: "El corazón de los Twins en sus campeonatos de 1987 y 1991. Forzado al retiro temprano pero jamás olvidado por la afición.", wiki: "Kirby_Puckett" },
            { nombre: "Harmon Killebrew", posicion: "PRIMERA BASE", anios: "1954 - 1974", desc: "Un coloso del jonrón y el bateador de poder absoluto del equipo. Su silueta inspiró el diseño del logo oficial de la MLB.", wiki: "Harmon_Killebrew" },
            { nombre: "Joe Mauer", posicion: "RECEPTOR", anios: "2004 - 2018", desc: "El chico de casa. El único receptor en la historia de la Liga Americana en ganar tres codiciados títulos de bateo.", wiki: "Joe_Mauer" },
            { nombre: "Rod Carew", posicion: "SEGUNDA BASE", anios: "1967 - 1978", desc: "Siete veces campeón de bateo con los Twins. Un artista con el bate que podía colocar la bola en cualquier lugar del campo.", wiki: "Rod_Carew" },
            { nombre: "Tony Oliva", posicion: "JARDINERO DERECHO", anios: "1962 - 1976", desc: "Estrella cubana que ganó el Novato del Año, tres coronas de bateo y formó una dinastía ofensiva junto a Killebrew.", wiki: "Tony_Oliva" },
            { nombre: "Johan Santana", posicion: "LANZADOR ABRIDOR", anios: "2000 - 2007", desc: "Con un cambio de velocidad devastador, ganó dos premios Cy Young y fue el zurdo más dominante del béisbol a mediados de los 2000.", wiki: "Johan_Santana" }
        ]
    },
    DET: {
        codigo: "DET",
        comboNombre: "Tigers",
        videoUrl: "https://www.youtube.com/embed/Vnvk4SJpZ94",
        videoTitulo: "A look into the history of Detroit Tigers",
        videoDesc: "Tradición y grandeza en Detroit, desde la implacable era del Tiger Stadium hasta la modernidad del Comerica Park.",
        leyendas: [
            { nombre: "Ty Cobb", posicion: "JARDINERO CENTRAL", anios: "1905 - 1926", desc: "Posee el mejor promedio de bateo de por vida (.366) y jugó con una ferocidad inigualable en la llamada 'Era de la bola muerta'.", wiki: "Ty_Cobb" },
            { nombre: "Al Kaline", posicion: "JARDINERO DERECHO", anios: "1953 - 1974", desc: "Conocido como 'Mr. Tiger', saltó directo de la preparatoria a Grandes Ligas y pasó 22 años impecables jugando en Detroit.", wiki: "Al_Kaline" },
            { nombre: "Miguel Cabrera", posicion: "PRIMERA BASE", anios: "2008 - 2023", desc: "Ganador de la Triple Corona (2012), miembro de los clubes de 3,000 hits y 500 jonrones. Uno de los mejores bates derechos de la historia.", wiki: "Miguel_Cabrera" },
            { nombre: "Hank Greenberg", posicion: "PRIMERA BASE", anios: "1930 - 1946", desc: "El gran toletero judío que lideró la liga en jonrones cuatro veces antes de hacer una pausa en su carrera militar en la guerra.", wiki: "Hank_Greenberg" },
            { nombre: "Justin Verlander", posicion: "LANZADOR ABRIDOR", anios: "2005 - 2017", desc: "Lanzó dos juegos sin hits con Detroit y ganó el MVP como lanzador abridor (2011), siendo la cara de la rotación por una década.", wiki: "Justin_Verlander" },
            { nombre: "Alan Trammell", posicion: "CAMPOCORTO", anios: "1977 - 1996", desc: "MVP de la Serie Mundial de 1984. Jugó las 20 temporadas de su carrera de Salón de la Fama vistiendo únicamente este uniforme.", wiki: "Alan_Trammell" }
        ]
    },
    KC: {
        codigo: "KC",
        comboNombre: "Royals",
        videoUrl: "https://www.youtube.com/embed/cxMX4qmJIdM",
        videoTitulo: "Realeza en el Medio Oeste",
        videoDesc: "El resurgimiento de una franquicia que forjó su éxito basándose en la velocidad, el contacto oportuno y un bullpen de élite.",
        leyendas: [
            { nombre: "George Brett", posicion: "TERCERA BASE", anios: "1973 - 1993", desc: "Líder histórico de la franquicia y el único jugador en toda la historia de MLB en ganar un título de bateo en tres décadas distintas.", wiki: "George_Brett" },
            { nombre: "Frank White", posicion: "SEGUNDA BASE", anios: "1973 - 1990", desc: "Ganó 8 Guantes de Oro y fue la espectacular columna vertebral defensiva de los Royals durante sus mejores campañas.", wiki: "Frank_White_(baseball)" },
            { nombre: "Bret Saberhagen", posicion: "LANZADOR ABRIDOR", anios: "1984 - 1991", desc: "Ganador de dos premios Cy Young y MVP absoluto de la Serie Mundial de 1985 con tan solo 21 años de edad.", wiki: "Bret_Saberhagen" },
            { nombre: "Salvador Pérez", posicion: "RECEPTOR", anios: "2011 - Presente", desc: "MVP de la Serie Mundial 2015 y capitán indiscutible moderno. Dueño del récord de más jonrones por un receptor en una temporada (48).", wiki: "Salvador_Pérez" },
            { nombre: "Alex Gordon", posicion: "JARDINERO IZQUIERDO", anios: "2007 - 2020", desc: "Un maestro defensivo que ganó 8 Guantes de Oro y conectó el jonrón que empató el dramático Juego 1 de la Serie Mundial 2015.", wiki: "Alex_Gordon" },
            { nombre: "Dan Quisenberry", posicion: "LANZADOR RELEVISTA", anios: "1979 - 1988", desc: "Cerrador de estilo submarino que dominó los 80s sin usar ponches, liderando la liga en salvamentos en cinco ocasiones.", wiki: "Dan_Quisenberry" }
        ]
    },
    HOU: {
        codigo: "HOU",
        comboNombre: "Astros",
        videoUrl: "https://www.youtube.com/embed/MaEuVqkXgUY",
        videoTitulo: "La Dinastía de los Astros",
        videoDesc: "El meteórico ascenso de una franquicia que se transformó en el equipo más poderoso y contendiente de la Liga Americana.",
        leyendas: [
            { nombre: "Craig Biggio", posicion: "SEGUNDA BASE", anios: "1988 - 2007", desc: "El líder histórico de hits de los Astros (3,060), jugó con excelencia como receptor, segunda base y jardinero central.", wiki: "Craig_Biggio" },
            { nombre: "Jeff Bagwell", posicion: "PRIMERA BASE", anios: "1991 - 2005", desc: "Con su inconfundible y peculiar postura al bate baja, se convirtió en el líder absoluto de cuadrangulares en la historia del equipo.", wiki: "Jeff_Bagwell" },
            { nombre: "José Altuve", posicion: "SEGUNDA BASE", anios: "2011 - Presente", desc: "El corazón de la dinastía moderna. A pesar de su estatura, ha conectado los batazos más importantes en postemporada.", wiki: "José_Altuve" },
            { nombre: "Nolan Ryan", posicion: "LANZADOR ABRIDOR", anios: "1980 - 1988", desc: "El 'Expreso de Texas'. Su estadía en Houston cimentó su legado ponchador y atrajo a multitudes récord al Astrodome.", wiki: "Nolan_Ryan" },
            { nombre: "Lance Berkman", posicion: "JARDINERO", anios: "1999 - 2010", desc: "'Puma'. Un bateador ambidiestro letal que junto a Bagwell y Biggio formó el legendario grupo apodado 'Las Abejas Asesinas'.", wiki: "Lance_Berkman" },
            { nombre: "Justin Verlander", posicion: "LANZADOR ABRIDOR", anios: "2017 - Presente", desc: "Llegó para cambiar el rumbo del equipo, liderando la rotación en las Series Mundiales de 2017 y 2022 y ganando dos Cy Young.", wiki: "Justin_Verlander" }
        ]
    },
    TEX: {
        codigo: "TEX",
        comboNombre: "Rangers",
        videoUrl: "https://www.youtube.com/embed/3s9c7I9VLN4",
        videoTitulo: "El Corazón de Texas",
        videoDesc: "Desde sus orígenes difíciles hasta convertirse en campeones mundiales, una historia texana de bateo y perseverancia.",
        leyendas: [
            { nombre: "Nolan Ryan", posicion: "LANZADOR ABRIDOR", anios: "1989 - 1993", desc: "Lanzó sus últimos dos juegos sin hit ni carrera con los Rangers y alcanzó aquí su inalcanzable ponche número 5,000.", wiki: "Nolan_Ryan" },
            { nombre: "Iván Rodríguez", posicion: "RECEPTOR", anios: "1991 - 2002", desc: "'Pudge'. Uno de los mejores receptores de la historia, famoso por el cañón en su brazo derecho y ganador de 13 Guantes de Oro.", wiki: "Iván_Rodríguez" },
            { nombre: "Adrián Beltré", posicion: "TERCERA BASE", anios: "2011 - 2018", desc: "Aportó defensa de élite, bateó más de 3,000 hits y se ganó el corazón total de la afición con su peculiar sentido del humor.", wiki: "Adrián_Beltré" },
            { nombre: "Michael Young", posicion: "CAMPOCORTO", anios: "2000 - 2012", desc: "Míster Ranger. Líder en juegos y hits, siempre dispuesto a cambiar de posición para ayudar a llevar al equipo a la cima.", wiki: "Michael_Young_(baseball)" },
            { nombre: "Juan González", posicion: "JARDINERO", anios: "1989 - 1999", desc: "'Igor'. Una máquina ofensiva de poder y remolcadas que ganó dos premios MVP y le dio a Texas sus primeros títulos divisionales.", wiki: "Juan_González_(baseball)" },
            { nombre: "Corey Seager", posicion: "CAMPOCORTO", anios: "2022 - Presente", desc: "La pieza clave del campeonato. Su ofensiva monumental en 2023 le otorgó el MVP de la Serie Mundial que consagró a la franquicia.", wiki: "Corey_Seager" }
        ]
    },
    SEA: {
        codigo: "SEA",
        comboNombre: "Mariners",
        videoUrl: "https://www.youtube.com/embed/jEPzBuVb4Tc",
        videoTitulo: "Magia en el Noroeste",
        videoDesc: "El hogar de superestrellas generacionales que revolucionaron la forma de jugar, ver y disfrutar el béisbol moderno en Seattle.",
        leyendas: [
            { nombre: "Ken Griffey Jr.", posicion: "JARDINERO CENTRAL", anios: "1989 - 1999", desc: "El swing más hermoso del béisbol. Su carisma y estilo salvaron al equipo en los 90s con jugadas que desafiaban la gravedad.", wiki: "Ken_Griffey_Jr." },
            { nombre: "Edgar Martínez", posicion: "BATEADOR DESIGNADO", anios: "1987 - 2004", desc: "El bateador designado por excelencia. Su histórico doblete de 1995 es considerado el momento más icónico de la franquicia.", wiki: "Edgar_Martínez" },
            { nombre: "Ichiro Suzuki", posicion: "JARDINERO DERECHO", anios: "2001 - 2012", desc: "Rompió el récord de hits en una sola temporada (262). Un artista de contacto rápido con un potente brazo desde el jardín.", wiki: "Ichiro_Suzuki" },
            { nombre: "Félix Hernández", posicion: "LANZADOR ABRIDOR", anios: "2005 - 2019", desc: "'El Rey'. Dueño absoluto del montículo en la ciudad durante su carrera, lanzó un Juego Perfecto en el verano de 2012.", wiki: "Félix_Hernández" },
            { nombre: "Randy Johnson", posicion: "LANZADOR ABRIDOR", anios: "1989 - 1998", desc: "'The Big Unit'. Uno de los zurdos más intimidantes de la historia que se consolidó en Seattle ganando su primer premio Cy Young.", wiki: "Randy_Johnson" },
            { nombre: "Jay Buhner", posicion: "JARDINERO DERECHO", anios: "1988 - 2001", desc: "'The Bone'. Favorito incondicional de los aficionados por su intensa actitud defensiva y su enorme poder con el madero.", wiki: "Jay_Buhner" }
        ]
    },
    ATH: {
        codigo: "ATH",
        comboNombre: "Athletics",
        videoUrl: "https://www.youtube.com/embed/bsY6i3agwgs",
        videoTitulo: "Dinamismo Verde y Oro",
        videoDesc: "La evolución de una franquicia que construyó dinastías imponentes y revolucionó el juego apostando por métricas sabermétricas.",
        leyendas: [
            { nombre: "Rickey Henderson", posicion: "JARDINERO IZQUIERDO", anios: "1979 - 1995", desc: "El mejor primer bate de la historia. Dueño absoluto del récord histórico de bases robadas y principal arma ofensiva del club.", wiki: "Rickey_Henderson" },
            { nombre: "Reggie Jackson", posicion: "JARDINERO DERECHO", anios: "1967 - 1975", desc: "'Mr. October'. Comenzó su gran leyenda en Oakland, liderando a los Atléticos a ganar tres Series Mundiales consecutivas en los 70s.", wiki: "Reggie_Jackson" },
            { nombre: "Dennis Eckersley", posicion: "LANZADOR RELEVISTA", anios: "1987 - 1995", desc: "Transformó el rol del lanzador cerrador, dominando la liga con un control tan milimétrico que le valió el Cy Young y el MVP.", wiki: "Dennis_Eckersley" },
            { nombre: "Catfish Hunter", posicion: "LANZADOR ABRIDOR", anios: "1965 - 1974", desc: "El as de la dinastía. Ganó el Cy Young y lanzó un Juego Perfecto, siendo clave para los históricos triunfos del equipo verde.", wiki: "Catfish_Hunter" },
            { nombre: "Rollie Fingers", posicion: "LANZADOR RELEVISTA", anios: "1968 - 1976", desc: "Reconocible por su espectacular bigote encerado, fue el as del bullpen que aseguró los últimos outs de la dinastía de los 70s.", wiki: "Rollie_Fingers" },
            { nombre: "Jimmie Foxx", posicion: "PRIMERA BASE", anios: "1925 - 1935", desc: "'La Bestia'. Ganó títulos y Series Mundiales cuando la franquicia jugaba en Filadelfia; uno de los grandes sluggers de la historia.", wiki: "Jimmie_Foxx" }
        ]
    },
    LAA: {
        codigo: "LAA",
        comboNombre: "Angels",
        videoUrl: "https://www.youtube.com/embed/op5kzr4oEmg",
        videoTitulo: "Béisbol bajo el Sol de California",
        videoDesc: "Las estrellas internacionales y leyendas de casa que han iluminado el estado dorado, llevando espectáculo al condado de Orange.",
        leyendas: [
            { nombre: "Vladimir Guerrero", posicion: "JARDINERO DERECHO", anios: "2004 - 2009", desc: "Un bateador libre y feroz que podía conectar cualquier lanzamiento, y que lideró ofensivamente la mejor década del equipo.", wiki: "Vladimir_Guerrero" },
            { nombre: "Tim Salmon", posicion: "JARDINERO DERECHO", anios: "1992 - 2006", desc: "El 'Mr. Angel'. Lideró el corazón de la alineación durante 14 años y fue pieza fundamental del ansiado campeonato mundial de 2002.", wiki: "Tim_Salmon" },
            { nombre: "Mike Trout", posicion: "JARDINERO CENTRAL", anios: "2011 - Presente", desc: "El talento generacional de la franquicia. Ganador de tres premios MVP y considerado por muchos el jugador más completo del siglo XXI.", wiki: "Mike_Trout" },
            { nombre: "Nolan Ryan", posicion: "LANZADOR ABRIDOR", anios: "1972 - 1979", desc: "Su paso por California cimentó su estatus como el rey del ponche moderno y donde lanzó cuatro de sus inolvidables juegos sin hit.", wiki: "Nolan_Ryan" },
            { nombre: "Garret Anderson", posicion: "JARDINERO IZQUIERDO", anios: "1994 - 2008", desc: "Líder histórico del club en hits y dobles. Su batazo limpia bases en el Juego 7 de la Serie Mundial 2002 es un clásico absoluto.", wiki: "Garret_Anderson" },
            { nombre: "Shohei Ohtani", posicion: "BATEADOR/LANZADOR", anios: "2018 - 2023", desc: "El unicornio japonés. Hizo historia en Anaheim ganando múltiples MVPs rompiendo la barrera de batear y lanzar con nivel de élite.", wiki: "Shohei_Ohtani" }
        ]
    }
};

const MAPA_COMBO_A_CODIGO = {};
Object.values(DATOS_LEYENDAS).forEach(eq => MAPA_COMBO_A_CODIGO[eq.comboNombre.toLowerCase()] = eq.codigo);

document.addEventListener("DOMContentLoaded", () => {

    const comboInput = document.getElementById("combo-input");
    const comboItems = document.querySelectorAll("#combo-lista li");

    const heroTitle = document.getElementById("titulo-leyendas");
    const videoIframe = document.getElementById("video-iframe");
    const videoTitle = document.getElementById("video-titulo");
    const videoDesc = document.getElementById("video-desc");
    const contenedorLeyendas = document.getElementById("contenedor-leyendas");


    async function cargarLeyendas(codigo) {
        const datos = DATOS_LEYENDAS[codigo] || DATOS_LEYENDAS.NYY;

        localStorage.setItem("equipoSeleccionado", datos.codigo);
        if (comboInput) comboInput.value = datos.comboNombre;

        if (typeof window.actualizarHeaderLive === "function") {
            window.actualizarHeaderLive();
        }

        heroTitle.textContent = `Nuestras Leyendas: El Templo de la Fama de los ${datos.comboNombre}`;


        videoIframe.src = datos.videoUrl;
        videoTitle.textContent = datos.videoTitulo;
        videoDesc.textContent = datos.videoDesc;


        contenedorLeyendas.innerHTML = "<p style='color: #8e8e93; font-size: 16px; width: 100%; text-align: center;'>Conectando con el Salón de la Fama y cargando imágenes oficiales...</p>";


        const tarjetasHTML = await Promise.all(datos.leyendas.map(async (leyenda) => {
            let imgUrl = "images/logo.png";

            if (leyenda.wiki) {
                try {

                    let res = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${leyenda.wiki}`);
                    if (!res.ok) {

                        res = await fetch(`https://es.wikipedia.org/api/rest_v1/page/summary/${leyenda.wiki}`);
                    }
                    const data = await res.json();


                    if (data.originalimage && data.originalimage.source) {
                        imgUrl = data.originalimage.source;
                    } else if (data.thumbnail && data.thumbnail.source) {
                        imgUrl = data.thumbnail.source;
                    }
                } catch (e) {
                    console.warn(`No se encontró foto en Wiki para: ${leyenda.nombre}`);
                }
            }

            return `
                <article class="legend-card">
                    <img src="${imgUrl}" alt="${leyenda.nombre}" class="card-img" onerror="this.src='images/logo.png'">
                    <div class="card-content">
                        <div class="card-meta">
                            <span class="position">${leyenda.posicion}</span>
                            <span class="years">${leyenda.anios}</span>
                        </div>
                        <h3 class="card-title">${leyenda.nombre}</h3>
                        <p class="card-desc">${leyenda.desc}</p>
                    </div>
                </article>
            `;
        }));


        contenedorLeyendas.innerHTML = tarjetasHTML.join('');
    }


    comboItems.forEach(item => {
        item.addEventListener("click", () => {
            const nombre = item.textContent.trim().toLowerCase();
            const codigo = MAPA_COMBO_A_CODIGO[nombre];
            if (codigo) {
                const nuevaUrl = `${window.location.pathname}?equipo=${codigo}`;
                window.history.replaceState({ path: nuevaUrl }, "", nuevaUrl);

                cargarLeyendas(codigo);
            }
        });
    });

    const urlParams = new URLSearchParams(window.location.search);
    const equipoInicial = urlParams.get("equipo")?.toUpperCase() || localStorage.getItem("equipoSeleccionado") || "NYY";
    cargarLeyendas(equipoInicial);




    const filterButtons = document.querySelectorAll('.btn-filter');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {

            filterButtons.forEach(b => b.classList.remove('active'));


            btn.classList.add('active');


            videoIframe.className = 'thumb-video';


            const filterName = btn.getAttribute('data-filter');

            if (filterName !== 'normal') {
                videoIframe.classList.add(`filter-${filterName}`);
            }
        });
    });

});