const coreModules = [
  {
    chapter: "INTRODUCCIÓN",
    eyebrow: "ANATOMÍA · VISIÓN GENERAL",
    title: "Sistema óseo",
    emphasis: "esquelético",
    subtitle: "Estructura, movimiento, protección y vida.",
    description: "Anatomía humana · Exploración del cuerpo.",
    image: "portada-esqueleto.webp",
    alt: "Modelo tridimensional de un esqueleto humano de cuerpo completo",
    caption: "SISTEMA ÓSEO · ANATOMÍA HUMANA",
    note: "El esqueleto adulto típico reúne 206 huesos, pero el sistema incluye también cartílago y estructuras de unión.",
    takeawayLabel: "DURACIÓN DE LA CLASE",
    takeaway: "280 min de exposición y explicación + 80 min para actividades, ejercicios, quiz y pausas.",
    chips: ["ANATOMÍA HUMANA", "46 DIAPOSITIVAS", "CLASE DE 6 HORAS"],
    chipDescriptions: [
      "La presentación estudia la anatomía del sistema esquelético: sus huesos, tejidos asociados, organización y funciones.",
      "El contenido está organizado en 46 diapositivas para recorrer los temas de forma progresiva.",
      "La clase está planificada para seis horas: 280 minutos de exposición y explicación, más 80 minutos para actividades, preguntas y pausas."
    ],
    detailsTitle: "No es solo una colección de huesos",
    details: [
      {label:"SOSTÉN", title:"Una estructura para el cuerpo", text:"El esqueleto proporciona soporte a los tejidos blandos y ayuda a conservar la forma corporal."},
      {label:"VIDA", title:"Tejido que se renueva", text:"El hueso contiene células y vasos sanguíneos; su matriz se forma, se degrada y se adapta."},
      {label:"TRABAJO EN EQUIPO", title:"Un sistema conectado", text:"Huesos, cartílagos, articulaciones, ligamentos y tendones cooperan con los músculos."}
    ],
    hotspots: [
      {x:50,y:20,label:"Cráneo",text:"Protege el encéfalo y da soporte a estructuras de la cara."},
      {x:50,y:42,label:"Caja torácica",text:"Las costillas y el esternón rodean y protegen órganos del tórax."},
      {x:50,y:72,label:"Extremidades",text:"Huesos largos y articulaciones contribuyen al soporte y la locomoción."}
    ],
    sourceTitle:"OpenStax · Funciones del sistema esquelético",
    sourceUrl:"https://openstax.org/books/anatomy-and-physiology-2e/pages/6-1-the-functions-of-the-skeletal-system",
    question:"¿Cuál afirmación describe mejor un hueso?",
    answers:["Es un tejido vivo que se remodela.","Es una pieza sólida sin células.","Está formado únicamente por calcio."],
    correct:0,
    explanation:"El hueso es un tejido conectivo vivo con células, matriz extracelular y vasos sanguíneos."
  },
  {
    chapter: "FUNCIONES",
    eyebrow: "FISIOLOGÍA · CINCO FUNCIONES",
    title: "Mucho más",
    emphasis: "que sostener el cuerpo.",
    subtitle: "El esqueleto participa en procesos mecánicos y metabólicos.",
    description: "Además de sostenernos, los huesos protegen órganos, funcionan como palancas para el movimiento, producen células sanguíneas y almacenan minerales y lípidos.",
    image: "funciones-del-sistema.jpg",
    alt: "Modelo tridimensional anatómico de la caja torácica humana",
    caption: "PROTECCIÓN SIN INMOVILIDAD",
    note: "Una misma pieza cumple varios papeles: la caja torácica protege órganos y se mueve durante la respiración.",
    takeawayLabel: "CINCO VERBOS",
    takeaway: "Sostener · proteger · mover · producir células sanguíneas · almacenar.",
    chips: ["BIOMECÁNICA", "HEMATOPOYESIS", "HOMEOSTASIS"],
    detailsTitle: "De la palanca a la sangre",
    details: [
      {label:"MECÁNICA", title:"Sostén y movimiento", text:"Los músculos tiran de los huesos; estos actúan como palancas y las articulaciones permiten el movimiento."},
      {label:"PROTECCIÓN", title:"Órganos bajo resguardo", text:"El cráneo protege el encéfalo; las vértebras, la médula espinal; la caja torácica, corazón y pulmones."},
      {label:"METABOLISMO", title:"Minerales y células", text:"La matriz ósea intercambia sobre todo calcio y fosfato; la médula roja realiza hematopoyesis."}
    ],
    hotspots: [
      {x:50,y:32,label:"Esternón",text:"El esternón se articula con las costillas y ayuda a proteger el mediastino."},
      {x:72,y:47,label:"Costillas",text:"Las costillas se elevan y descienden con los músculos durante la ventilación."},
      {x:50,y:68,label:"Columna torácica",text:"Las vértebras torácicas articulan con las costillas y protegen la médula espinal."}
    ],
    sourceTitle:"OpenStax · Funciones del sistema esquelético",
    sourceUrl:"https://openstax.org/books/anatomy-and-physiology-2e/pages/6-1-the-functions-of-the-skeletal-system",
    question:"¿Dónde se producen normalmente eritrocitos, leucocitos y plaquetas?",
    answers:["En el cartílago articular.","En la médula ósea roja.","En el periostio."],
    correct:1,
    explanation:"La médula ósea roja es el principal tejido hematopoyético."
  },
  {
    chapter: "ORGANIZACIÓN",
    eyebrow: "ANATOMÍA · EJES Y REGIONES",
    title: "Dos divisiones,",
    emphasis: "un esqueleto coordinado.",
    subtitle: "Axial al centro; apendicular en las cinturas y las extremidades.",
    description: "En el recuento adulto más habitual, 80 huesos forman el esqueleto axial y 126 el apendicular. Juntos suman 206.",
    image: "que-es-sistema-oseo.jpg",
    alt: "Modelo tridimensional de un esqueleto humano completo",
    caption: "EJE CENTRAL Y EXTREMIDADES",
    note: "La cintura escapular y la pélvica conectan las extremidades con el eje del cuerpo.",
    takeawayLabel: "RECUENTO ADULTO",
    takeaway: "80 axiales + 126 apendiculares = 206 huesos en el recuento de referencia.",
    chips: ["AXIAL · 80", "APENDICULAR · 126", "RECUENTO TÍPICO"],
    detailsTitle: "¿Qué pertenece a cada división?",
    details: [
      {label:"EJE", title:"Esqueleto axial", text:"Incluye cráneo, huesecillos del oído, hioides, columna vertebral, costillas y esternón."},
      {label:"CINTURAS", title:"Puentes anatómicos", text:"La cintura escapular y la pélvica conectan el eje con las extremidades."},
      {label:"MOVIMIENTO", title:"Esqueleto apendicular", text:"Comprende las cinturas y los huesos de las extremidades superiores e inferiores."}
    ],
    hotspots: [
      {x:50,y:20,label:"Cráneo",text:"Parte del esqueleto axial."},
      {x:50,y:47,label:"Eje vertebral",text:"La columna pertenece al esqueleto axial."},
      {x:50,y:74,label:"Cintura pélvica",text:"La pelvis conecta el esqueleto axial con las extremidades inferiores."}
    ],
    sourceTitle:"OpenStax · Clasificación y recuento de los huesos",
    sourceUrl:"https://openstax.org/books/anatomy-and-physiology-2e/pages/6-2-bone-classification",
    question:"¿Cuál estructura pertenece al esqueleto axial?",
    answers:["La escápula.","El fémur.","El esternón."],
    correct:2,
    explanation:"El esternón pertenece a la caja torácica, parte del esqueleto axial."
  },
  {
    chapter: "TEJIDO ÓSEO",
    eyebrow: "HISTOLOGÍA · ARQUITECTURA DEL HUESO",
    title: "Por fuera compacto.",
    emphasis: "Por dentro, una red.",
    subtitle: "El hueso combina resistencia con una estructura ligera y vascularizada.",
    description: "La capa cortical compacta resiste cargas; el hueso trabecular distribuye fuerzas y rodea espacios medulares. Ambos son tejido óseo vivo.",
    image: "tipos-de-huesos.jpg",
    alt: "Modelo tridimensional de un húmero humano",
    caption: "EL HUESO ES MÁS QUE SU SUPERFICIE",
    note: "El hueso compacto se organiza en osteonas; las trabéculas se orientan según las cargas que reciben.",
    takeawayLabel: "COMPOSICIÓN",
    takeaway: "Colágeno aporta resistencia a la tensión; los cristales minerales aportan rigidez.",
    chips: ["HUESO CORTICAL", "TRABÉCULAS", "MATRIZ EXTRACELULAR"],
    detailsTitle: "La microestructura explica la función",
    details: [
      {label:"EXTERIOR", title:"Hueso compacto", text:"Tejido denso organizado en osteonas; forma gran parte de la corteza de los huesos."},
      {label:"INTERIOR", title:"Hueso trabecular", text:"Una red de trabéculas separadas por espacios medulares; organiza material donde se necesita resistencia."},
      {label:"RECUBRIMIENTOS", title:"Periostio y endostio", text:"Membranas que revisten la superficie externa e interna del hueso y alojan células y vasos."}
    ],
    hotspots: [
      {x:50,y:18,label:"Epífisis",text:"Los extremos de un hueso largo contienen abundante hueso trabecular."},
      {x:50,y:49,label:"Diáfisis",text:"El cuerpo de un hueso largo está rodeado por una capa robusta de tejido compacto."},
      {x:50,y:81,label:"Cavidad medular",text:"La cavidad del cuerpo del hueso contiene médula ósea."}
    ],
    sourceTitle:"OpenStax · Estructura del hueso",
    sourceUrl:"https://openstax.org/books/anatomy-and-physiology-2e/pages/6-3-bone-structure",
    question:"¿Qué componente de la matriz aporta gran parte de la resistencia a la tensión?",
    answers:["Las fibras de colágeno.","El líquido sinovial.","El cartílago articular."],
    correct:0,
    explanation:"El colágeno de la matriz orgánica contribuye a resistir tensión; el mineral aporta dureza."
  },
  {
    chapter: "CLASIFICACIÓN",
    eyebrow: "MORFOLOGÍA · CINCO FORMAS",
    title: "La forma",
    emphasis: "también da pistas.",
    subtitle: "Los huesos se clasifican por su morfología, no solo por su tamaño.",
    description: "La clasificación relaciona la forma de cada hueso con tareas como actuar como palanca, proteger órganos o estabilizar una articulación.",
    image: "tipos-de-huesos.jpg",
    alt: "Húmero humano en modelo anatómico tridimensional",
    caption: "LA MORFOLOGÍA SE RELACIONA CON LA FUNCIÓN",
    note: "Largo no significa necesariamente grande: las falanges también se clasifican como huesos largos.",
    takeawayLabel: "CINCO CATEGORÍAS",
    takeaway: "Largos · cortos · planos · irregulares · sesamoideos.",
    chips: ["FORMA", "FUNCIÓN", "EJEMPLOS ANATÓMICOS"],
    detailsTitle: "Cinco categorías útiles",
    details: [
      {label:"PALANCA", title:"Huesos largos", text:"Más largos que anchos; ejemplos: fémur y húmero. Facilitan la acción de palanca."},
      {label:"PROTECCIÓN", title:"Planos e irregulares", text:"El cráneo y las costillas son planos; las vértebras son irregulares y protegen la médula."},
      {label:"ESTABILIDAD", title:"Cortos y sesamoideos", text:"Carpos y tarsos son cortos; la rótula es sesamoidea y se desarrolla dentro de un tendón."}
    ],
    hotspots: [
      {x:50,y:17,label:"Epífisis",text:"Un extremo ensanchado caracteriza la morfología de un hueso largo."},
      {x:50,y:50,label:"Diáfisis",text:"El cuerpo alargado es la parte característica de un hueso largo."},
      {x:50,y:82,label:"Húmero",text:"El húmero es un hueso largo del brazo."}
    ],
    sourceTitle:"OpenStax · Clasificación de los huesos",
    sourceUrl:"https://openstax.org/books/anatomy-and-physiology-2e/pages/6-2-bone-classification",
    question:"¿Cómo se clasifica la rótula?",
    answers:["Hueso corto.","Hueso sesamoideo.","Hueso plano."],
    correct:1,
    explanation:"La rótula se forma en un tendón y se clasifica como hueso sesamoideo."
  },
  {
    chapter: "CRÁNEO",
    eyebrow: "ANATOMÍA REGIONAL · ENCÉFALO Y CARA",
    title: "El cráneo",
    emphasis: "protege y da forma.",
    subtitle: "Neurocráneo y esqueleto facial forman el armazón de la cabeza.",
    description: "En el adulto, el cráneo tiene 22 huesos: ocho del neurocráneo y catorce de la cara. La mayoría se unen mediante suturas; la mandíbula es móvil.",
    image: "craneo.jpg",
    alt: "Representación tridimensional texturizada de un cráneo humano",
    caption: "PROTECCIÓN Y SOPORTE PARA LA CABEZA",
    note: "Aunque solemos decir «el cráneo», sus huesos faciales también sostienen dientes y forman las órbitas y la cavidad nasal.",
    takeawayLabel: "RECUENTO",
    takeaway: "8 huesos del neurocráneo + 14 huesos faciales = 22 huesos craneales.",
    chips: ["NEUROCRÁNEO · 8", "CARA · 14", "MANDÍBULA MÓVIL"],
    detailsTitle: "Dos regiones, funciones complementarias",
    details: [
      {label:"NEUROCRÁNEO", title:"Rodea el encéfalo", text:"Ocho huesos forman la caja craneana que aloja y protege el encéfalo."},
      {label:"CARA", title:"Soporte facial", text:"Catorce huesos sostienen estructuras faciales, participan en la cavidad nasal y alojan los dientes."},
      {label:"ARTICULACIÓN", title:"La mandíbula", text:"La mandíbula es el único hueso craneal con movimiento amplio; se articula con el temporal para masticar y hablar."}
    ],
    hotspots: [
      {x:50,y:31,label:"Neurocráneo",text:"La caja craneana rodea el encéfalo."},
      {x:39,y:59,label:"Órbita",text:"Las órbitas son cavidades óseas que alojan los globos oculares y estructuras asociadas."},
      {x:53,y:76,label:"Mandíbula",text:"La mandíbula es el hueso móvil de la cabeza y participa en la masticación."}
    ],
    sourceTitle:"OpenStax · El cráneo",
    sourceUrl:"https://openstax.org/books/anatomy-and-physiology-2e/pages/7-2-the-skull",
    question:"¿Cuál hueso del cráneo es móvil?",
    answers:["El frontal.","La mandíbula.","El parietal."],
    correct:1,
    explanation:"La mandíbula es el único hueso craneal móvil; se articula con el hueso temporal."
  },
  {
    chapter: "ARTICULACIONES",
    eyebrow: "ARTROLOGÍA · ESTRUCTURA Y MOVIMIENTO",
    title: "Una articulación",
    emphasis: "es más que un punto de unión.",
    subtitle: "Estabilidad y movilidad dependen del diseño de cada articulación.",
    description: "Las articulaciones se pueden clasificar por el tejido que une los huesos y por cuánto movimiento permiten. Las sinoviales son las más móviles.",
    image: "componentes.jpg",
    alt: "Modelo tridimensional del hueso coxal humano",
    caption: "LA FORMA ARTICULAR ORIENTA EL MOVIMIENTO",
    note: "Cada articulación tiene un compromiso distinto entre amplitud de movimiento y estabilidad.",
    takeawayLabel: "CLAVE ESTRUCTURAL",
    takeaway: "En una articulación sinovial, las superficies están separadas por una cavidad articular.",
    chips: ["FIBROSA", "CARTILAGINOSA", "SINOVIAL"],
    detailsTitle: "Tejido, cavidad y movimiento",
    details: [
      {label:"SIN CAVIDAD", title:"Fibrosas y cartilaginosas", text:"Suturas craneales son fibrosas; la sínfisis púbica es cartilaginosa. Su movimiento es limitado o nulo."},
      {label:"CAVIDAD", title:"Articulaciones sinoviales", text:"Incluyen cavidad, cápsula articular, membrana sinovial, líquido sinovial y cartílago articular."},
      {label:"GEOMETRÍA", title:"Seis tipos sinoviales", text:"Planas, bisagra, pivote, condíleas, silla de montar y esferoideas; cada forma permite movimientos característicos."}
    ],
    hotspots: [
      {x:43,y:32,label:"Acetábulo",text:"La cavidad del hueso coxal recibe la cabeza del fémur y forma la articulación de la cadera."},
      {x:58,y:48,label:"Superficie articular",text:"El cartílago articular recubre las superficies de los huesos en articulaciones sinoviales."},
      {x:50,y:71,label:"Pelvis",text:"La cintura pélvica transfiere cargas entre el tronco y las extremidades inferiores."}
    ],
    sourceTitle:"OpenStax · Articulaciones sinoviales",
    sourceUrl:"https://openstax.org/books/anatomy-and-physiology-2e/pages/9-4-synovial-joints",
    question:"¿Qué estructura reduce la fricción sobre las superficies óseas de una articulación sinovial?",
    answers:["El cartílago articular.","El periostio.","La médula ósea."],
    correct:0,
    explanation:"El cartílago articular recubre los extremos óseos y proporciona superficies de bajo rozamiento."
  },
  {
    chapter: "MAPA ANATÓMICO",
    eyebrow: "ANATOMÍA REGIONAL · CRÁNEO Y COLUMNA",
    title: "Un eje que",
    emphasis: "protege y distribuye cargas.",
    subtitle: "La columna vertebral une movilidad, soporte y protección neurológica.",
    description: "La columna adulta suele describirse con 24 vértebras móviles, además del sacro y el cóccix fusionados. Sus discos intervertebrales ayudan a distribuir cargas.",
    image: "columna-vertebral.jpg",
    alt: "Modelo 3D de una vértebra cervical visto desde arriba",
    caption: "UNA VÉRTEBRA: UNA PIEZA DEL EJE",
    note: "Las vértebras rodean el conducto vertebral, por donde pasa la médula espinal.",
    takeawayLabel: "REGIONES VERTEBRALES",
    takeaway: "7 cervicales · 12 torácicas · 5 lumbares · sacro y cóccix fusionados habitualmente.",
    chips: ["CERVICAL", "TORÁCICA", "LUMBAR", "SACRO"],
    detailsTitle: "El eje del tronco, de arriba abajo",
    details: [
      {label:"CERVICAL", title:"Movilidad del cuello", text:"Siete vértebras sostienen la cabeza; atlas y axis permiten movimientos especializados."},
      {label:"TORÁCICA", title:"Conexión con las costillas", text:"Doce vértebras se articulan con las costillas y contribuyen a formar la caja torácica."},
      {label:"LUMBAR Y SACRO", title:"Carga y transferencia", text:"Las lumbares soportan gran parte de la carga del tronco; el sacro la transmite a la pelvis."}
    ],
    hotspots: [
      {x:50,y:34,label:"Foramen vertebral",text:"Los forámenes vertebrales alineados forman el conducto que aloja la médula espinal."},
      {x:33,y:49,label:"Apófisis",text:"Las apófisis vertebrales ofrecen palancas y puntos de inserción para músculos y ligamentos."},
      {x:60,y:67,label:"Cuerpo vertebral",text:"El cuerpo transmite buena parte de las cargas de compresión."}
    ],
    sourceTitle:"OpenStax · Columna vertebral",
    sourceUrl:"https://openstax.org/books/anatomy-and-physiology-2e/pages/7-3-the-vertebral-column",
    question:"¿Qué estructura discurre por el conducto vertebral?",
    answers:["El tendón de Aquiles.","La médula espinal.","El líquido sinovial de la cadera."],
    correct:1,
    explanation:"Los forámenes vertebrales se alinean para formar un conducto que protege la médula espinal."
  },
  {
    chapter: "CRECIMIENTO",
    eyebrow: "DESARROLLO · FORMACIÓN Y REMODELACIÓN",
    title: "El esqueleto",
    emphasis: "se construye y se renueva.",
    subtitle: "Crecimiento y reparación dependen de procesos celulares coordinados.",
    description: "La osificación forma tejido óseo durante el desarrollo. Después, la remodelación sustituye tejido antiguo por nuevo y ayuda a adaptar el hueso a sus cargas.",
    image: "que-es-sistema-oseo.jpg",
    alt: "Esqueleto humano en modelo tridimensional con vista anterior",
    caption: "FORMACIÓN, CRECIMIENTO, ADAPTACIÓN",
    note: "Osteoblastos forman matriz; osteoclastos la reabsorben; osteocitos ayudan a mantener y regular el tejido.",
    takeawayLabel: "EQUILIBRIO CELULAR",
    takeaway: "La salud del hueso depende de la coordinación entre formación y resorción.",
    chips: ["OSIFICACIÓN", "PLACAS EPIFISARIAS", "REMODELACIÓN"],
    detailsTitle: "Tres procesos a distinguir",
    details: [
      {label:"FORMACIÓN", title:"Dos vías de osificación", text:"La osificación intramembranosa forma hueso a partir de mesénquima; la endocondral sustituye un molde de cartílago."},
      {label:"CRECIMIENTO", title:"La placa epifisaria", text:"En huesos largos, el cartílago de la placa permite crecer en longitud mientras permanece abierta."},
      {label:"RENOVACIÓN", title:"Remodelación y reparación", text:"Resorción y formación renuevan tejido; tras una fractura, el hueso pasa por etapas de reparación y remodelación."}
    ],
    hotspots: [
      {x:50,y:18,label:"Crecimiento",text:"Durante el desarrollo, las placas epifisarias contribuyen al crecimiento longitudinal de los huesos."},
      {x:50,y:50,label:"Remodelación",text:"El tejido óseo se reemplaza de manera coordinada en respuesta a señales celulares y cargas."},
      {x:50,y:79,label:"Adaptación",text:"La carga mecánica influye en la remodelación; la respuesta depende también de nutrición y fisiología."}
    ],
    sourceTitle:"OpenStax · Formación y desarrollo óseo",
    sourceUrl:"https://openstax.org/books/anatomy-and-physiology-2e/pages/6-4-bone-formation-and-development",
    question:"¿Qué célula forma matriz ósea nueva?",
    answers:["Osteoclasto.","Osteoblasto.","Condrocito articular."],
    correct:1,
    explanation:"Los osteoblastos sintetizan matriz ósea; los osteoclastos participan en la resorción."
  },
  {
    chapter: "MÉDULA Y MINERALES",
    eyebrow: "FISIOLOGÍA · RESERVA Y HEMATOPOYESIS",
    title: "Dentro del hueso",
    emphasis: "también ocurren procesos vitales.",
    subtitle: "La médula y la matriz ósea participan en funciones metabólicas.",
    description: "La médula roja produce células sanguíneas; la amarilla almacena lípidos. La matriz ósea mantiene una reserva intercambiable de minerales, sobre todo calcio y fosfato.",
    image: "medula-osea.jpg",
    alt: "Modelo tridimensional de húmero que muestra el eje y los extremos de un hueso largo",
    caption: "UNA CAVIDAD, DISTINTOS TEJIDOS",
    note: "La médula ósea no es lo mismo que el tejido óseo: ocupa espacios dentro de ciertos huesos.",
    takeawayLabel: "DOS RESERVAS",
    takeaway: "Médula: formación sanguínea y lípidos. Matriz: reserva mineral.",
    chips: ["MÉDULA ROJA", "MÉDULA AMARILLA", "CALCIO + FOSFATO"],
    detailsTitle: "El interior del hueso está activo",
    details: [
      {label:"SANGRE", title:"Médula roja", text:"Es tejido hematopoyético: produce eritrocitos, leucocitos y plaquetas."},
      {label:"ENERGÍA", title:"Médula amarilla", text:"Contiene abundante tejido adiposo, que almacena triglicéridos."},
      {label:"RESERVA", title:"Minerales en equilibrio", text:"El hueso almacena y libera calcio y fosfato; su regulación también involucra riñones, intestino y hormonas."}
    ],
    hotspots: [
      {x:50,y:18,label:"Extremo del hueso",text:"Los extremos de muchos huesos largos contienen espacios de tejido trabecular."},
      {x:50,y:49,label:"Cavidad medular",text:"La cavidad medular del cuerpo de un hueso largo puede contener médula ósea."},
      {x:50,y:81,label:"Matriz",text:"La matriz extracelular mineralizada actúa como reserva de minerales."}
    ],
    sourceTitle:"OpenStax · Médula y almacenamiento mineral",
    sourceUrl:"https://openstax.org/books/anatomy-and-physiology-2e/pages/6-1-the-functions-of-the-skeletal-system",
    question:"¿Qué tipo de médula realiza hematopoyesis?",
    answers:["La médula amarilla.","La médula roja.","El cartílago hialino."],
    correct:1,
    explanation:"La hematopoyesis ocurre en la médula ósea roja."
  },
  {
    chapter: "SALUD ÓSEA",
    eyebrow: "APLICACIÓN · PREVENCIÓN Y CLÍNICA",
    title: "La salud ósea",
    emphasis: "se construye a lo largo de la vida.",
    subtitle: "La carga adecuada, la nutrición y el contexto individual importan.",
    description: "Alimentación variada con calcio, vitamina D y proteínas; ejercicio con carga y fortalecimiento adaptado; buena técnica, prevención de caídas y valoración individual de riesgos.",
    image: "portada-esqueleto.webp",
    alt: "Modelo anatómico de esqueleto completo en una sala de exhibición",
    caption: "LA SALUD TAMBIÉN ES PARTE DE LA ANATOMÍA",
    note: "Osteoporosis y osteoartritis no son sinónimos: afectan principalmente al tejido óseo y a la articulación, respectivamente.",
    takeawayLabel: "PREVENCIÓN",
    takeaway: "El movimiento y una nutrición adecuada apoyan la masa ósea; el cuidado se adapta a la persona.",
    chips: ["CARGA MECÁNICA", "NUTRICIÓN", "PREVENCIÓN"],
    detailsTitle: "Conectar estructura y salud",
    details: [
      {label:"HÁBITOS", title:"Nutrición y movimiento", text:"Calcio, vitamina D, proteínas suficientes y ejercicio de carga y fuerza, adaptado a cada persona, apoyan la salud ósea."},
      {label:"DISTINCIÓN", title:"Osteoporosis ≠ osteoartritis", text:"La osteoporosis reduce la resistencia ósea; la osteoartritis afecta las articulaciones y el cartílago articular."},
      {label:"PREVENCIÓN", title:"Cuidar y valorar riesgos", text:"Técnica apropiada, evitar tabaco, limitar alcohol y prevenir caídas. Las recomendaciones dependen de la edad, la salud y los factores de riesgo."}
    ],
    hotspots: [
      {x:50,y:21,label:"Cráneo",text:"La protección es una función esquelética; la prevención también considera riesgos de lesión."},
      {x:50,y:48,label:"Tronco",text:"El movimiento adecuado aplica cargas al esqueleto y participa en la salud musculoesquelética."},
      {x:50,y:76,label:"Extremidades",text:"Fortalecer músculos y equilibrio ayuda a la movilidad; el ejercicio debe ajustarse a cada persona."}
    ],
    sourceTitle:"OpenStax · Ejercicio, nutrición y tejido óseo",
    sourceUrl:"https://openstax.org/books/anatomy-and-physiology-2e/pages/6-6-exercise-nutrition-hormones-and-bone-tissue",
    question:"¿Cuál comparación es correcta?",
    answers:["La osteoporosis afecta sobre todo la resistencia ósea; la osteoartritis, las articulaciones.","Son dos nombres para la misma enfermedad.","La osteoartritis solo afecta la médula ósea."],
    correct:0,
    explanation:"Son trastornos distintos, aunque una persona pueda tener más de una condición."
  },
  {
    chapter: "INTEGRACIÓN",
    eyebrow: "SÍNTESIS · DE LA CÉLULA AL MOVIMIENTO",
    title: "El sistema óseo",
    emphasis: "en una sola imagen.",
    subtitle: "206 huesos: axial y apendicular, tejido vivo y función compartida.",
    description: "El adulto típico tiene 206 huesos: 80 axiales y 126 apendiculares. Sus cinco funciones principales son soporte, protección, movimiento, hematopoyesis y reserva mineral.",
    image: "funciones-del-sistema.jpg",
    alt: "Modelo tridimensional de la caja torácica y la columna",
    caption: "LA ANATOMÍA SE ENTIENDE CONECTANDO ESCALAS",
    note: "Una pregunta clínica suele requerir observar estructura, función, mecanismo y contexto, no memorizar un nombre aislado.",
    takeawayLabel: "RESUMEN DEL ATLAS",
    takeaway: "Huesos, músculos, tendones, ligamentos y articulaciones trabajan en conjunto; el tejido óseo se remodela continuamente.",
    chips: ["INTEGRA", "RELACIONA", "EXPLICA"],
    detailsTitle: "Las ideas esenciales",
    details: [
      {label:"206 HUESOS", title:"80 axiales + 126 apendiculares", text:"Es el recuento adulto habitual: eje central, cinturas y extremidades."},
      {label:"CINCO FUNCIONES", title:"Soporte, protección y más", text:"Movimiento, hematopoyesis y reserva mineral completan las funciones principales."},
      {label:"SISTEMA VIVO", title:"Renovación y cooperación", text:"El hueso se remodela y trabaja con músculos, tendones, ligamentos y articulaciones."}
    ],
    hotspots: [
      {x:50,y:30,label:"Estructura",text:"La forma y organización de un tejido ofrecen pistas sobre su función."},
      {x:50,y:49,label:"Protección",text:"Caja torácica, cráneo y columna ilustran cómo el esqueleto rodea estructuras vulnerables."},
      {x:50,y:70,label:"Movimiento",text:"El sistema esquelético trabaja con músculos, tendones y articulaciones."}
    ],
    sourceTitle:"OpenStax · Funciones del sistema esquelético",
    sourceUrl:"https://openstax.org/books/anatomy-and-physiology-2e/pages/6-1-the-functions-of-the-skeletal-system",
    question:"¿Qué combinación explica mejor un movimiento voluntario?",
    answers:["Hueso, músculo y articulación trabajando en conjunto.","Cartílago aislado, sin músculos.","Médula ósea y suturas craneales."],
    correct:0,
    explanation:"Los músculos generan fuerza, los huesos actúan como palancas y las articulaciones permiten el movimiento."
  },
  {
    chapter: "REPASO ACTIVO",
    eyebrow: "COMPROBACIÓN · IDEAS CLAVE",
    title: "El esqueleto",
    emphasis: "se adapta y se renueva.",
    subtitle: "«El esqueleto no es solo la estructura que nos sostiene: es un tejido vivo que protege, se adapta y se renueva».",
    description: "¿Qué cambiaría en nuestra vida si el tejido óseo dejara de renovarse?",
    image: "que-es-sistema-oseo.jpg",
    alt: "Esqueleto humano completo en una imagen tridimensional",
    caption: "RECUERDA: FORMA, FUNCIÓN Y ADAPTACIÓN",
    note: "Las cifras y clasificaciones son herramientas: comprender las relaciones entre estructura y función es el objetivo.",
    takeawayLabel: "PREGUNTA PARA CONVERSAR",
    takeaway: "Relaciona la remodelación ósea con el crecimiento, la reparación y el movimiento.",
    chips: ["REPASO", "RAZONAMIENTO ANATÓMICO", "FIN DEL ATLAS"],
    detailsTitle: "Tres ideas para recordar",
    details: [
      {label:"01", title:"El hueso está vivo", text:"Su matriz y sus células cambian y responden a señales y cargas."},
      {label:"02", title:"La anatomía tiene organización", text:"Las divisiones axial y apendicular, y las formas óseas, ayudan a orientarse."},
      {label:"03", title:"La función es compartida", text:"El esqueleto actúa junto con cartílago, articulaciones, músculos y médula."}
    ],
    hotspots: [
      {x:50,y:20,label:"Forma",text:"Observa qué forma tiene cada hueso y qué función puede facilitar."},
      {x:50,y:49,label:"Organización",text:"Relaciona regiones axiales con cinturas y extremidades."},
      {x:50,y:76,label:"Función",text:"Explica cómo las fuerzas llegan al hueso a través de músculos y articulaciones."}
    ],
    sourceTitle:"OpenStax · Funciones del sistema esquelético",
    sourceUrl:"https://openstax.org/books/anatomy-and-physiology-2e/pages/6-1-the-functions-of-the-skeletal-system",
    question:"¿Qué respuesta integra mejor el contenido del atlas?",
    answers:["El hueso es una estructura viva que se organiza y funciona con otros tejidos.","Todos los huesos tienen la misma forma y función.","Las articulaciones son huesos independientes."],
    correct:0,
    explanation:"Esa respuesta une tejido, organización y función en lugar de aislar los conceptos."
  }
];

const blocks = [
  {title:"Introducción al sistema óseo", minutes:25},
  {title:"Funciones y componentes", minutes:35},
  {title:"Clasificación y estructura de los huesos", minutes:45},
  {title:"Anatomía y división del esqueleto", minutes:55},
  {title:"Articulaciones, cartílagos y ligamentos", minutes:40},
  {title:"Formación, crecimiento y médula ósea", minutes:40},
  {title:"Enfermedades, prevención y cuidado", minutes:30},
  {title:"Repaso visual y conclusiones", minutes:10}
];

const corePlacements = [
  {number:1,block:1},
  {number:5,block:2},
  {number:15,block:4},
  {number:12,block:3},
  {number:10,block:3},
  {number:16,block:4},
  {number:23,block:5},
  {number:17,block:4},
  {number:28,block:6},
  {number:29,block:6},
  {number:35,block:7},
  {number:36,block:8},
  {number:37,block:8}
];

const visualAssets = {
  femaleSkeleton:"https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d2/3D_Female_Skeleton_Anatomy.png/960px-3D_Female_Skeleton_Anatomy.png",
  femur:"https://upload.wikimedia.org/wikipedia/commons/a/a2/Femur_-_animation.gif",
  vertebraT10:"https://thumb.wikimedia.org/wikipedia/commons/thumb/1/18/BodyParts3D_FJ3154_Tenth_thoracic_vertebra.stl/960px-BodyParts3D_FJ3154_Tenth_thoracic_vertebra.stl.png",
  humerus:"https://thumb.wikimedia.org/wikipedia/commons/thumb/1/10/Human_humerus_1.stl/960px-Human_humerus_1.stl.png",
  acetabulum:"https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f5/Acetabulum_04_lateral_view_%28Right_hip_bone%29.png/960px-Acetabulum_04_lateral_view_%28Right_hip_bone%29.png"
};

const coreSpeakerNotes = new Map([
  [1,"Presenta la clase como una exploración del esqueleto: una estructura viva que sostiene el cuerpo, protege órganos y permite el movimiento. La sesión contempla seis horas: 280 minutos para explicar y 80 minutos para actividades, preguntas y pausas."],
  [5,"Aclara que las cinco funciones se complementan. Por ejemplo, la caja torácica protege órganos y se mueve durante la respiración; la médula roja participa en la hematopoyesis."],
  [10,"La clasificación depende de la forma relativa de cada hueso, no de su tamaño. Pide al grupo que proponga otros ejemplos de cada tipo."],
  [12,"Compara la corteza compacta con la red trabecular. Ambas son tejido vivo; la disposición del tejido contribuye a combinar resistencia y ligereza."],
  [15,"El recuento de 80 huesos axiales y 126 apendiculares es el recuento adulto de referencia. Algunas variaciones anatómicas individuales son posibles."],
  [16,"Distingue neurocráneo y viscerocráneo. La mandíbula es el hueso móvil del cráneo; las suturas unen la mayoría de los demás huesos craneales."],
  [17,"La columna adulta se describe normalmente con 7 vértebras cervicales, 12 torácicas y 5 lumbares; sacro y cóccix suelen estar fusionados. Los discos distribuyen cargas."],
  [23,"Explica que las articulaciones se clasifican tanto por el tejido que une los huesos como por el movimiento que permiten. Las sinoviales suelen tener la mayor movilidad."],
  [28,"Separa formación, crecimiento y remodelación. El cierre de la placa epifisaria termina el crecimiento longitudinal de ese hueso, pero no la remodelación."],
  [29,"No confundas médula ósea con tejido óseo. La médula roja es hematopoyética y la amarilla contiene más tejido adiposo."],
  [35,"Recalca que las medidas de cuidado dependen de la edad y la salud. El sol no es la única fuente de vitamina D ni garantiza por sí solo niveles adecuados. No hay una recomendación única; los riesgos individuales se valoran con personal sanitario."],
  [36,"Usa la imagen como mapa final: relaciona recuento y divisiones con las funciones, el tejido vivo y el trabajo conjunto con músculos y articulaciones."],
  [37,"Cierra con la pregunta: «¿Qué cambiaría en nuestra vida si el tejido óseo dejara de renovarse?». Invita a relacionar la respuesta con remodelación, fracturas y salud."]
]);

coreModules.forEach((module, index) => {
  const placement = corePlacements[index];
  module.slideNumber = placement.number;
  module.blockNumber = placement.block;
  module.chapter = `BLOQUE ${placement.block} · ${blocks[placement.block - 1].title}`;
  module.eyebrow = `DIAPOSITIVA ${String(placement.number).padStart(2,"0")} · ${module.eyebrow}`;
  module.speakerNotes = coreSpeakerNotes.get(placement.number) || module.description;
  if (placement.number === 17) {
    module.image = visualAssets.vertebraT10;
    module.alt = "Vista tridimensional de una décima vértebra torácica humana";
    module.caption = "VÉRTEBRA TORÁCICA T10 · VISTA 3D";
  }
});

const additionalSlides = [
  {
    slideNumber:2,blockNumber:1,eyebrow:"CONCEPTO FUNDAMENTAL",
    title:"¿Qué es el sistema",emphasis:"óseo esquelético?",
    subtitle:"Un conjunto de estructuras rígidas y flexibles que se conectan.",
    description:"Lo forman huesos, cartílagos, articulaciones y ligamentos asociados a la estabilidad articular. En conjunto contribuyen al soporte, la protección y el movimiento.",
    image:"que-es-sistema-oseo.jpg",
    detailsTitle:"Estructuras que trabajan en conjunto",
    details:[
      ["HUESOS","Soporte y protección","El tejido óseo forma el armazón que sostiene el cuerpo y protege órganos."],
      ["CARTÍLAGOS","Flexibilidad y amortiguación","El cartílago cubre superficies articulares y da soporte flexible a ciertas estructuras."],
      ["UNIONES","Articulaciones y ligamentos","Las articulaciones son los puntos donde se encuentran dos o más huesos. Los ligamentos unen hueso con hueso y ayudan a estabilizar; los tendones unen músculo con hueso." ]
    ],
    sourceTitle:"OpenStax · Divisiones del sistema esquelético",
    sourceUrl:"https://openstax.org/books/anatomy-and-physiology-2e/pages/7-1-divisions-of-the-skeletal-system",
    question:"¿Qué estructura conecta hueso con hueso y contribuye a estabilizar una articulación?",
    answers:["El tendón.","El ligamento.","El cartílago articular."],correct:1,
    explanation:"Los ligamentos conectan hueso con hueso; los tendones conectan músculo con hueso.",
    speakerNotes:"El sistema no está formado únicamente por huesos. Nombra cada componente y explica que una articulación integra superficies, tejidos de soporte y, según el tipo, una cavidad."
  },
  {
    slideNumber:3,blockNumber:1,eyebrow:"IMPORTANCIA Y FUNCIÓN",
    title:"¿Por qué es",emphasis:"tan importante?",
    subtitle:"El esqueleto hace posible el soporte, la protección y el movimiento.",
    description:"Sin el esqueleto el cuerpo no tendría una estructura firme para mantener su forma, resguardar órganos y coordinar movimientos junto con los músculos.",
    image:"portada-esqueleto.webp",
    detailsTitle:"Cinco contribuciones esenciales",
    details:[
      ["FORMA","Mantiene la estructura","Sostiene tejidos blandos y ayuda a conservar la forma corporal."],
      ["PROTECCIÓN","Resguarda órganos","Cráneo, columna y caja torácica protegen estructuras delicadas."],
      ["ACTIVIDAD","Permite movimiento y sangre","Actúa con músculos y articulaciones; la médula roja produce células sanguíneas."]
    ],
    question:"¿Qué sistema genera la fuerza que, transmitida por los tendones, mueve los huesos?",
    answers:["El sistema muscular.","El sistema respiratorio.","El sistema tegumentario."],correct:0,
    explanation:"Los músculos generan fuerza y los tendones la transmiten a los huesos.",
    speakerNotes:"La importancia del esqueleto se entiende mejor al vincular estructura y función: soporte, protección, movimiento, hematopoyesis y reserva mineral."
  },
  {
    slideNumber:4,blockNumber:1,eyebrow:"FISIOLOGÍA · FUNCIONES DEL ESQUELETO",
    title:"¿Cómo trabaja",emphasis:"el sistema esquelético?",
    subtitle:"Sus funciones se entienden al relacionar cada estructura con lo que hace.",
    description:"El esqueleto sostiene los tejidos blandos y protege órganos. Para producir movimiento, los músculos tiran de los huesos mediante tendones y los desplazan alrededor de las articulaciones. La médula ósea roja produce células sanguíneas; además, el tejido óseo almacena e intercambia calcio y fosfato, mientras la médula amarilla almacena lípidos.",
    image:visualAssets.femaleSkeleton,
    alt:"Modelo 3D de un esqueleto humano femenino en vista anterior",
    caption:"MODELO 3D · ESQUELETO HUMANO",
    detailsTitle:"Mecanismos y ejemplos anatómicos",
    details:[
      ["PROTECCIÓN","Órganos bajo resguardo","Esta función reduce el riesgo de lesión de órganos delicados: el cráneo rodea el encéfalo, las vértebras rodean la médula espinal y la caja torácica resguarda corazón y pulmones."],
      ["SOPORTE Y MOVIMIENTO","Huesos como palancas","El esqueleto sostiene los tejidos y participa en el movimiento: los músculos generan fuerza, los tendones la transmiten a los huesos y estos se desplazan en las articulaciones. Al flexionar el codo, el bíceps tira del radio."],
      ["HEMATOPOYESIS Y RESERVA","Médula y minerales","Hematopoyesis significa producción de células sanguíneas: ocurre principalmente en la médula ósea roja, que forma eritrocitos, leucocitos y plaquetas. Además, el tejido óseo almacena e intercambia calcio y fosfato; la médula amarilla almacena triglicéridos."]
    ],
    question:"Al flexionar el codo, ¿qué sucede cuando se contrae el bíceps?",
    answers:["El bíceps tira del radio mediante su tendón y el antebrazo se mueve en la articulación.","El hueso se acorta para producir la fuerza.","El cartílago tira directamente del músculo."],correct:0,
    explanation:"El músculo genera la fuerza, el tendón la transmite al radio y el movimiento ocurre en la articulación del codo.",
    speakerNotes:"Explica las cinco funciones con ejemplos visibles: el esqueleto sostiene el cuerpo; el cráneo, la columna y la caja torácica protegen órganos; y, durante el movimiento, el músculo se contrae, el tendón transmite la fuerza y el hueso actúa como palanca alrededor de una articulación. Añade las funciones metabólicas: la médula ósea roja realiza hematopoyesis —forma eritrocitos, leucocitos y plaquetas—; la matriz ósea sirve de reserva intercambiable de calcio y fosfato; y la médula amarilla almacena triglicéridos. Aclara que huesos, articulaciones y músculos trabajan como una unidad, no de forma aislada."
  },
  {
    slideNumber:6,blockNumber:2,eyebrow:"MATRIZ Y TEJIDO ÓSEO",
    title:"¿De qué está",emphasis:"compuesto un hueso?",
    subtitle:"La matriz mineralizada y las células aportan propiedades complementarias.",
    description:"Colágeno, minerales, células, vasos sanguíneos y nervios contribuyen a la resistencia, el mantenimiento y la sensibilidad del tejido óseo.",
    image:"tipos-de-huesos.jpg",
    detailsTitle:"Materiales y células del hueso",
    details:[
      ["MATRIZ ORGÁNICA","Colágeno","Aporta resistencia a la tensión y cierta flexibilidad."],
      ["MINERALES","Hidroxiapatita","Los cristales minerales aportan dureza y resistencia a la compresión."],
      ["TEJIDO VIVO","Células y vasos","Las células forman, mantienen y remodelan el tejido; vasos y nervios lo recorren."]
    ],
    question:"¿Qué componente de la matriz contribuye especialmente a la resistencia a la tensión?",
    answers:["El colágeno.","El líquido sinovial.","La queratina."],correct:0,
    explanation:"El colágeno aporta resistencia a la tensión; los minerales contribuyen a la rigidez.",
    speakerNotes:"Explica la combinación entre colágeno y mineral: el hueso no es una pieza de calcio puro. Su matriz y sus células lo hacen resistente y vivo."
  },
  {
    slideNumber:7,blockNumber:2,eyebrow:"RECUENTO ADULTO",
    title:"¿Cuántos huesos",emphasis:"tenemos?",
    subtitle:"206 es el recuento de referencia para el esqueleto adulto típico.",
    description:"Durante el desarrollo algunos elementos óseos se fusionan. El recuento puede variar ligeramente entre personas por diferencias anatómicas.",
    image:visualAssets.femaleSkeleton,
    alt:"Modelo 3D de un esqueleto humano femenino en vista anterior",
    caption:"MODELO 3D · ESQUELETO HUMANO",
    detailsTitle:"El número cambia con el desarrollo",
    details:[
      ["ADULTO","206 huesos","Es el recuento anatómico de referencia para un adulto."],
      ["DESARROLLO","Fusiones progresivas","Al nacer existen más elementos óseos y cartilaginosos; algunas estructuras se fusionan al crecer."],
      ["VARIACIÓN","Diferencias individuales","El recuento puede variar ligeramente entre personas."]
    ],
    question:"¿Cuál es el recuento habitual de referencia del esqueleto adulto?",
    answers:["126 huesos.","206 huesos.","Más de 300 huesos."],correct:1,
    explanation:"206 es el recuento adulto típico; puede haber variaciones anatómicas individuales.",
    speakerNotes:"Aclara que la cifra de 206 es una referencia didáctica, no una promesa de que cada individuo tenga exactamente el mismo recuento."
  },
  {
    slideNumber:8,blockNumber:2,eyebrow:"COMPONENTES DEL SISTEMA",
    title:"Huesos, cartílagos,",emphasis:"articulaciones y ligamentos.",
    subtitle:"La función del sistema emerge del trabajo coordinado de sus tejidos.",
    description:"Los huesos sostienen y protegen; el cartílago amortigua; las articulaciones conectan; y los ligamentos refuerzan uniones entre huesos.",
    image:"componentes.jpg",
    detailsTitle:"Una red de estructuras",
    details:[
      ["HUESOS","Armazón","Sostienen tejidos y protegen órganos."],
      ["CARTÍLAGOS","Superficies y soporte","Aportan flexibilidad y amortiguación en distintas regiones."],
      ["ARTICULACIONES","Unión y movimiento","Conectan huesos; los ligamentos contribuyen a su estabilidad."]
    ],
    question:"¿Qué elemento conecta directamente un músculo con un hueso?",
    answers:["El ligamento.","El tendón.","La sutura."],correct:1,
    explanation:"Los tendones conectan músculo con hueso; los ligamentos conectan hueso con hueso.",
    speakerNotes:"Las estructuras no trabajan de forma aislada. En una articulación sinovial también participan cápsula, membrana y líquido sinovial."
  },
  {
    slideNumber:9,blockNumber:2,eyebrow:"SISTEMA ÓSEO Y MUSCULAR",
    title:"El movimiento",emphasis:"es un trabajo en equipo.",
    subtitle:"El músculo genera fuerza; el tendón la transmite; el hueso actúa como palanca.",
    description:"Al flexionar el codo, por ejemplo, el bíceps se contrae y transmite fuerza al antebrazo a través de su tendón. La articulación del codo permite el movimiento.",
    image:"ligamentos.jpg",
    detailsTitle:"De la contracción al movimiento",
    details:[
      ["FUERZA","Músculo","La contracción muscular produce la fuerza."],
      ["TRANSMISIÓN","Tendón","El tendón transmite la fuerza del músculo al hueso."],
      ["PALANCA","Hueso y articulación","El hueso se mueve alrededor de una articulación y produce un movimiento coordinado."]
    ],
    question:"En el ejemplo del codo, ¿qué estructura transmite la fuerza del bíceps al antebrazo?",
    answers:["El tendón.","El cartílago articular.","La médula ósea."],correct:0,
    explanation:"El tendón transmite la fuerza muscular al hueso.",
    speakerNotes:"Compara el brazo extendido y flexionado. Recalca que los músculos tiran de los huesos y no los empujan."
  },
  {
    slideNumber:11,blockNumber:3,eyebrow:"ANATOMÍA DE UN HUESO LARGO",
    title:"El fémur",emphasis:"un hueso largo en movimiento.",
    subtitle:"Explora el hueso más largo del cuerpo con el modelo 3D animado.",
    description:"El fémur transmite cargas entre la cadera y la rodilla. Su extremo proximal articula con el acetábulo; el cuerpo forma la diáfisis y el extremo distal participa en la articulación de la rodilla.",
    image:visualAssets.femur,
    alt:"Animación tridimensional de un fémur humano en rotación",
    caption:"FÉMUR HUMANO · MODELO 3D ANIMADO",
    note:"Mira el fémur girar y selecciona los puntos para identificar sus regiones principales.",
    takeawayLabel:"HUESO MÁS LARGO",
    takeaway:"El fémur conecta la cadera con la rodilla y soporta cargas durante la postura y la locomoción.",
    chips:["HUESO LARGO","DIÁFISIS","EPÍFISIS PROXIMAL Y DISTAL"],
    detailsTitle:"Tres regiones del fémur",
    details:[
      ["EXTREMO PROXIMAL","Cabeza y cuello","La cabeza del fémur se articula con el acetábulo; el cuello conecta la cabeza con el cuerpo."],
      ["DIÁFISIS","Cuerpo del fémur","La diáfisis es el eje largo del hueso y rodea la cavidad medular."],
      ["EXTREMO DISTAL","Cóndilos","Los cóndilos femorales participan en la articulación de la rodilla."]
    ],
    hotspots:[
      {x:50,y:23,label:"Extremo proximal",text:"La cabeza femoral se articula con el acetábulo de la pelvis."},
      {x:50,y:50,label:"Diáfisis",text:"El cuerpo alargado del fémur rodea la cavidad medular."},
      {x:50,y:77,label:"Extremo distal",text:"Los cóndilos femorales participan en la articulación de la rodilla."}
    ],
    question:"¿Con qué estructura se articula la cabeza del fémur?",
    answers:["Con el acetábulo de la pelvis.","Con la cavidad glenoidea de la escápula.","Con la caja torácica."],correct:0,
    explanation:"La cabeza del fémur encaja en el acetábulo y forma parte de la articulación de la cadera.",
    speakerNotes:"Deja que la animación muestre el fémur en distintos ángulos. Usa los puntos para relacionar cabeza y acetábulo, diáfisis y cavidad medular, cóndilos y rodilla."
  },
  {
    slideNumber:13,blockNumber:3,eyebrow:"HISTOLOGÍA ÓSEA",
    title:"El hueso",emphasis:"visto al microscopio.",
    subtitle:"Una arquitectura microscópica sostiene el tejido compacto.",
    description:"Osteonas, laminillas, osteocitos, lagunas, canalículos y canales centrales organizan la matriz y permiten el mantenimiento del tejido.",
    image:"tipos-de-huesos.jpg",
    detailsTitle:"Dentro de una osteona",
    details:[
      ["OSTEONAS","Unidades estructurales","Son unidades organizativas características del hueso compacto."],
      ["OSTEOCITOS","Células maduras","Se alojan en lagunas y participan en el mantenimiento del tejido."],
      ["CANALES","Comunicación y nutrición","Canalículos conectan espacios celulares; canales centrales alojan vasos y nervios."]
    ],
    question:"¿Qué tipo de célula ósea madura se encuentra en lagunas?",
    answers:["Osteocito.","Osteoclasto.","Fibroblasto."],correct:0,
    explanation:"Los osteocitos son células óseas maduras ubicadas en lagunas.",
    speakerNotes:"Aunque a simple vista parezca sólido, el hueso tiene una organización microscópica especializada. Usa el zoom para pasar del hueso completo a la osteona."
  },
  {
    slideNumber:14,blockNumber:3,eyebrow:"CÉLULAS DEL TEJIDO ÓSEO",
    title:"Cuatro células,",emphasis:"un tejido en renovación.",
    subtitle:"Formación, mantenimiento y resorción están coordinados.",
    description:"Osteoblastos forman matriz; osteocitos mantienen y perciben estímulos mecánicos; osteoclastos reabsorben tejido; células osteoprogenitoras pueden originar células formadoras.",
    image:"medula-osea.jpg",
    detailsTitle:"Quién hace qué",
    details:[
      ["FORMACIÓN","Osteoblastos","Sintetizan matriz ósea nueva."],
      ["MANTENIMIENTO","Osteocitos","Mantienen el tejido y participan en la respuesta a estímulos mecánicos."],
      ["RESORCIÓN","Osteoclastos y progenitoras","Los osteoclastos reabsorben hueso; células osteoprogenitoras pueden originar osteoblastos."]
    ],
    question:"¿Qué célula participa en la resorción del tejido óseo?",
    answers:["Osteoblasto.","Osteoclasto.","Osteocito."],correct:1,
    explanation:"Los osteoclastos reabsorben tejido óseo.",
    speakerNotes:"La remodelación ósea resulta de un equilibrio regulado entre la formación por osteoblastos y la resorción por osteoclastos."
  },
  {
    slideNumber:18,blockNumber:4,eyebrow:"ANATOMÍA REGIONAL · TÓRAX",
    title:"La caja torácica",emphasis:"protege y participa al respirar.",
    subtitle:"Costillas, esternón y vértebras torácicas forman su armazón.",
    description:"La caja torácica incluye 12 pares de costillas, el esternón y las vértebras torácicas. Protege órganos y participa en los movimientos respiratorios.",
    image:"funciones-del-sistema.jpg",
    detailsTitle:"Costillas y sus uniones",
    details:[
      ["VERDADERAS","Pares 1–7","Se unen al esternón mediante sus propios cartílagos costales."],
      ["FALSAS","Pares 8–12","No todas se unen directamente al esternón; las 8–10 se conectan indirectamente."],
      ["FLOTANTES","Pares 11–12","No tienen unión anterior al esternón."]
    ],
    question:"¿Qué pares de costillas se consideran flotantes en la clasificación habitual?",
    answers:["1–2.","8–10.","11–12."],correct:2,
    explanation:"Los pares 11 y 12 no tienen unión anterior al esternón y suelen llamarse flotantes.",
    speakerNotes:"La caja protege órganos torácicos y se mueve con la acción de los músculos respiratorios y el diafragma. Las categorías de costillas describen sus conexiones anteriores."
  },
  {
    slideNumber:19,blockNumber:4,eyebrow:"ANATOMÍA REGIONAL · EXTREMIDAD SUPERIOR",
    title:"De la clavícula",emphasis:"a las falanges.",
    subtitle:"La extremidad superior combina movilidad y precisión.",
    description:"De proximal a distal: cintura escapular, húmero, radio y ulna (cúbito), carpo, metacarpo y falanges.",
    image:visualAssets.humerus,
    alt:"Modelo 3D renderizado de un húmero humano aislado",
    caption:"HÚMERO HUMANO · MODELO 3D",
    detailsTitle:"Mapa óseo de una mano y un brazo",
    details:[
      ["CINTURA Y BRAZO","Clavícula, escápula y húmero","La cintura escapular conecta el miembro superior con el esqueleto axial."],
      ["ANTEBRAZO","Radio y ulna","Estos dos huesos participan en la pronación y supinación."],
      ["MANO","Carpo, metacarpo y falanges","Cada mano tiene 8 carpianos, 5 metacarpianos y 14 falanges."]
    ],
    question:"¿Cuántos huesos del carpo hay habitualmente en cada muñeca?",
    answers:["5.","8.","14."],correct:1,
    explanation:"Cada muñeca tiene ocho huesos del carpo.",
    speakerNotes:"Recorre el miembro desde proximal a distal. Menciona que la rotación del antebrazo combina movimientos del radio y la ulna, y que la mano permite agarre y precisión."
  },
  {
    slideNumber:20,blockNumber:4,eyebrow:"ANATOMÍA REGIONAL · EXTREMIDAD INFERIOR",
    title:"De la pelvis",emphasis:"a los dedos del pie.",
    subtitle:"La extremidad inferior soporta peso y permite la locomoción.",
    description:"La ruta ósea incluye hueso coxal, fémur, rótula, tibia y fíbula (peroné), tarsianos, metatarsianos y falanges.",
    image:visualAssets.femur,
    alt:"Animación tridimensional de un fémur humano en rotación",
    caption:"FÉMUR HUMANO · ANIMACIÓN 3D",
    detailsTitle:"Mapa óseo de una pierna y un pie",
    details:[
      ["MUSLO Y RODILLA","Fémur y rótula","El fémur es el hueso del muslo; la rótula se desarrolla dentro de un tendón."],
      ["PIERNA","Tibia y fíbula","La tibia y la fíbula se extienden entre la rodilla y el tobillo."],
      ["PIE","Tarsianos, metatarsianos y falanges","Cada pie tiene 7 tarsianos, 5 metatarsianos y 14 falanges."]
    ],
    question:"¿Cuántos huesos tarsianos hay habitualmente en cada pie?",
    answers:["5.","7.","14."],correct:1,
    explanation:"Cada pie tiene siete huesos tarsianos.",
    speakerNotes:"Las extremidades inferiores soportan gran parte del peso y permiten caminar, correr, saltar y mantener el equilibrio."
  },
  {
    slideNumber:21,blockNumber:4,eyebrow:"ANATOMÍA REGIONAL · ACETÁBULO",
    title:"El acetábulo",emphasis:"recibe la cabeza del fémur.",
    subtitle:"La cavidad del hueso coxal forma parte de la articulación de la cadera.",
    description:"La superficie articular semilunar del acetábulo se relaciona con la cabeza femoral; juntos forman una articulación sinovial esferoidea que soporta cargas y permite movimiento.",
    image:visualAssets.acetabulum,
    alt:"Vista lateral tridimensional del acetábulo del hueso coxal derecho",
    caption:"ACETÁBULO DERECHO · MODELO 3D",
    detailsTitle:"La cavidad articular de la cadera",
    details:[
      ["CAVIDAD","Acetábulo","La cavidad del hueso coxal se articula con la cabeza del fémur."],
      ["SUPERFICIE","Cara semilunar","La superficie articular recibe la cabeza femoral; la fosa acetabular queda en la zona central."],
      ["MOVIMIENTO","Articulación de la cadera","La geometría esferoidea permite movimiento en varios ejes y transmite cargas."]
    ],
    question:"¿Qué estructura se articula con el acetábulo?",
    answers:["La cabeza del fémur.","La cabeza del húmero.","El extremo del sacro."],correct:0,
    explanation:"La cabeza del fémur encaja en el acetábulo para formar la articulación de la cadera.",
    speakerNotes:"En este modelo se ve el acetábulo del hueso coxal derecho. La cavidad recibe la cabeza femoral; evita confundir la fosa central con toda la superficie articular."
  },
  {
    slideNumber:22,blockNumber:5,eyebrow:"ARTROLOGÍA · CONCEPTO",
    title:"¿Qué es una",emphasis:"articulación?",
    subtitle:"Una unión entre huesos o entre hueso y cartílago.",
    description:"Las articulaciones mantienen unidas estructuras, aportan estabilidad, permiten movimiento con distinta amplitud y transmiten o distribuyen cargas.",
    image:"articulaciones.jpg",
    detailsTitle:"La unión también tiene función",
    details:[
      ["UNIÓN","Continuidad anatómica","Una articulación relaciona dos o más huesos o un hueso y un cartílago."],
      ["ESTABILIDAD","Control del movimiento","Tejidos de soporte ayudan a conservar la relación entre las superficies."],
      ["MOVILIDAD","Amplitud variable","Hay articulaciones prácticamente inmóviles y otras con movimiento amplio."]
    ],
    sourceTitle:"OpenStax · Clasificación de las articulaciones",
    sourceUrl:"https://openstax.org/books/anatomy-and-physiology-2e/pages/9-1-classification-of-joints",
    question:"¿Qué puede unir una articulación?",
    answers:["Solo dos músculos.","Dos o más huesos, o hueso y cartílago.","Únicamente dos tendones."],correct:1,
    explanation:"Las articulaciones son uniones entre huesos o entre hueso y cartílago.",
    speakerNotes:"Usa rodilla, hombro, codo, cadera y articulaciones vertebrales como ejemplos. Destaca que estabilidad y amplitud de movimiento varían según la articulación."
  },
  {
    slideNumber:24,blockNumber:5,eyebrow:"ANATOMÍA DE UNA ARTICULACIÓN SINOVIAL",
    title:"Una articulación sinovial",emphasis:"tiene una cavidad.",
    subtitle:"Cápsula, membrana, líquido y cartílago colaboran en su función.",
    description:"El cartílago articular reduce fricción y distribuye cargas; la cápsula envuelve la articulación; la membrana sinovial produce el líquido que lubrica las superficies.",
    image:"articulaciones.jpg",
    detailsTitle:"Componentes y estructuras accesorias",
    details:[
      ["SUPERFICIES","Cartílago articular","Recubre extremos óseos y contribuye a reducir fricción y distribuir cargas."],
      ["ENVOLTURA","Cápsula y membrana sinovial","La cápsula rodea la articulación; la membrana sinovial reviste su cara interna."],
      ["LUBRICACIÓN","Líquido sinovial","Lubrica la articulación. Algunas tienen meniscos, discos o bursas."]
    ],
    question:"¿Qué tejido produce el líquido sinovial?",
    answers:["La membrana sinovial.","El periostio.","El ligamento cruzado."],correct:0,
    explanation:"La membrana sinovial produce el líquido sinovial.",
    speakerNotes:"En el corte de rodilla, distingue los componentes básicos de una articulación sinovial de sus estructuras accesorias, como meniscos y bursas."
  },
  {
    slideNumber:25,blockNumber:5,eyebrow:"TEJIDO CARTILAGINOSO",
    title:"El cartílago",emphasis:"es flexible y resistente.",
    subtitle:"Su estructura permite amortiguar, distribuir cargas y dar soporte.",
    description:"Hay cartílagos hialinos, elásticos y fibrocartílagos. El cartílago articular reduce fricción; el tejido cartilaginoso también da forma a estructuras y participa en el crecimiento de huesos largos.",
    image:"cartilago.jpg",
    detailsTitle:"Tipos y funciones",
    details:[
      ["HIALINO","Superficies y moldes","Está en superficies articulares y participa en el molde cartilaginoso de ciertos huesos en desarrollo."],
      ["ELÁSTICO","Flexibilidad","Aporta flexibilidad a estructuras como la oreja."],
      ["FIBROCARTÍLAGO","Resistencia a cargas","Está adaptado a resistir compresión y tensión; aparece, por ejemplo, en discos intervertebrales."]
    ],
    question:"¿Por qué suele ser limitada la reparación del cartílago articular?",
    answers:["Porque carece de vasos sanguíneos propios.","Porque se convierte rápidamente en tendón.","Porque contiene demasiados osteocitos."],correct:0,
    explanation:"El cartílago articular es avascular, lo que limita su capacidad de reparación.",
    speakerNotes:"No describas el cartílago como un material inerte. Es un tejido especializado; sin embargo, al carecer de vasos sanguíneos propios, su reparación puede ser limitada."
  },
  {
    slideNumber:26,blockNumber:5,eyebrow:"LIGAMENTOS Y TENDONES",
    title:"Se parecen,",emphasis:"pero no conectan lo mismo.",
    subtitle:"Ligamento une hueso con hueso; tendón une músculo con hueso.",
    description:"Ambos tejidos conectivos contribuyen a la función musculoesquelética, pero cumplen conexiones distintas. Los ligamentos estabilizan articulaciones; los tendones transmiten fuerza muscular.",
    image:"ligamentos.jpg",
    detailsTitle:"Una diferencia para recordar",
    details:[
      ["LIGAMENTO","Hueso con hueso","Contribuye a la estabilidad articular y limita movimientos excesivos."],
      ["TENDÓN","Músculo con hueso","Transmite la fuerza que produce el músculo."],
      ["EJEMPLOS","Rodilla y tobillo","Los ligamentos cruzados estabilizan la rodilla; el tendón de Aquiles llega al calcáneo."]
    ],
    question:"¿Qué conecta el tendón de Aquiles?",
    answers:["Músculos de la pantorrilla con el calcáneo.","Fémur con tibia.","Rótula con fémur."],correct:0,
    explanation:"El tendón de Aquiles transmite fuerza desde los músculos de la pantorrilla al calcáneo.",
    speakerNotes:"Pide al grupo que repita la diferencia en una frase: ligamento, hueso con hueso; tendón, músculo con hueso."
  },
  {
    slideNumber:27,blockNumber:6,eyebrow:"OSIFICACIÓN Y OSTEOGÉNESIS",
    title:"Los huesos",emphasis:"se forman por dos vías.",
    subtitle:"Osificación intramembranosa y endocondral.",
    description:"La osificación intramembranosa forma hueso a partir de tejido mesenquimático; la endocondral sustituye progresivamente un molde de cartílago.",
    image:"tipos-de-huesos.jpg",
    detailsTitle:"Dos procesos de formación ósea",
    details:[
      ["INTRAMEMBRANOSA","Desde mesénquima","Participa, por ejemplo, en la formación de muchos huesos planos del cráneo."],
      ["ENDOCONDRAL","Desde un molde cartilaginoso","El tejido óseo sustituye progresivamente cartílago y es el proceso principal en los huesos largos."],
      ["RESULTADO","Tejido en desarrollo","Los dos procesos producen hueso, aunque parten de tejidos iniciales distintos."]
    ],
    question:"¿Qué proceso sustituye progresivamente un molde de cartílago?",
    answers:["Osificación endocondral.","Osificación intramembranosa.","Hematopoyesis."],correct:0,
    explanation:"La osificación endocondral reemplaza un molde cartilaginoso.",
    speakerNotes:"Compara ambos procesos como rutas distintas de osteogénesis. El molde de cartílago no se transforma directamente en hueso; es sustituido progresivamente."
  },
  {
    slideNumber:30,blockNumber:6,eyebrow:"HEMATOPOYESIS",
    title:"¿Cómo se producen",emphasis:"las células sanguíneas?",
    subtitle:"La médula roja alberga la hematopoyesis.",
    description:"Eritrocitos transportan oxígeno, leucocitos participan en la defensa y plaquetas en la coagulación. Se originan a partir de células madre hematopoyéticas.",
    image:"medula-osea.jpg",
    detailsTitle:"Tres productos de la hematopoyesis",
    details:[
      ["ERITROCITOS","Transporte de oxígeno","Los glóbulos rojos transportan oxígeno en la sangre."],
      ["LEUCOCITOS","Defensa inmunitaria","Los glóbulos blancos participan en la respuesta de defensa."],
      ["PLAQUETAS","Coagulación","Las plaquetas intervienen en la hemostasia y la coagulación."]
    ],
    question:"¿De qué células se originan las células sanguíneas?",
    answers:["Células madre hematopoyéticas.","Osteocitos maduros.","Condrocitos articulares."],correct:0,
    explanation:"Las células sanguíneas se originan a partir de células madre hematopoyéticas.",
    speakerNotes:"La hematopoyesis es una función vital de la médula ósea roja. Distingue las funciones generales de eritrocitos, leucocitos y plaquetas."
  },
  {
    slideNumber:31,blockNumber:6,eyebrow:"REMODELACIÓN Y REPARACIÓN ÓSEA",
    title:"El hueso",emphasis:"se adapta y se repara.",
    subtitle:"La renovación celular responde a señales y a las cargas que recibe.",
    description:"Los osteoclastos reabsorben tejido; los osteoblastos forman matriz nueva y esta se mineraliza. Tras una fractura, la reparación pasa por etapas hasta recuperar progresivamente continuidad y función.",
    image:"enfermedades.jpg",
    detailsTitle:"El ciclo de renovación",
    details:[
      ["RESORCIÓN","Osteoclastos","Retiran tejido óseo durante la remodelación."],
      ["FORMACIÓN","Osteoblastos","Producen matriz nueva que luego se mineraliza."],
      ["MANTENIMIENTO","Osteocitos y reparación","Contribuyen al mantenimiento del tejido; la reparación de fracturas progresa por fases."]
    ],
    sourceTitle:"OpenStax · Fracturas y reparación ósea",
    sourceUrl:"https://openstax.org/books/anatomy-and-physiology-2e/pages/6-5-fractures-bone-repair",
    question:"¿Qué par de células participa directamente en resorción y formación ósea?",
    answers:["Osteoclastos y osteoblastos.","Eritrocitos y leucocitos.","Condrocitos y miocitos."],correct:0,
    explanation:"Los osteoclastos reabsorben hueso y los osteoblastos forman matriz.",
    speakerNotes:"El hueso se adapta continuamente. La reparación de fracturas tiene etapas; el ritmo y el resultado dependen de la lesión, el tratamiento y factores individuales."
  },
  {
    slideNumber:32,blockNumber:7,eyebrow:"SALUD ÓSEA · OSTEOPOROSIS",
    title:"La osteoporosis",emphasis:"reduce la resistencia ósea.",
    subtitle:"Puede aumentar el riesgo de fracturas sin síntomas evidentes.",
    description:"La edad, algunos tratamientos, la genética y otros factores influyen en el riesgo. Las fracturas pueden afectar vértebras, cadera y muñeca.",
    image:"enfermedades.jpg",
    detailsTitle:"Comprender y prevenir riesgos",
    details:[
      ["RESISTENCIA","Riesgo de fractura","La enfermedad se caracteriza por menor resistencia ósea y mayor riesgo de fractura."],
      ["SILENCIOSA","Sin síntomas evidentes","Puede avanzar sin señales claras hasta que ocurre una fractura."],
      ["PREVENCIÓN","Evaluación individual","Ejercicio apropiado, alimentación adecuada y evaluación de riesgos contribuyen al cuidado."]
    ],
    sourceTitle:"MedlinePlus · Osteoporosis",
    sourceUrl:"https://medlineplus.gov/osteoporosis.html",
    question:"¿La osteoporosis siempre causa síntomas evidentes al inicio?",
    answers:["Sí, siempre produce dolor intenso.","No, puede desarrollarse sin síntomas evidentes.","Solo afecta las articulaciones."],correct:1,
    explanation:"La osteoporosis puede avanzar sin síntomas claros y manifestarse mediante una fractura.",
    speakerNotes:"Aclara que la prevención y el tratamiento dependen del riesgo y la historia clínica de cada persona. No presentes hábitos generales como sustituto de una valoración sanitaria."
  },
  {
    slideNumber:33,blockNumber:7,eyebrow:"ALTERACIONES ÓSEAS Y ARTICULARES",
    title:"No todas las alteraciones",emphasis:"afectan lo mismo.",
    subtitle:"Distinguir hueso, cartílago, articulación y columna ayuda a comprenderlas.",
    description:"La osteoartritis afecta cartílago y otros tejidos articulares; la artritis inflamatoria causa inflamación articular; la escoliosis describe una curvatura lateral; raquitismo y osteomalacia alteran la mineralización; las fracturas interrumpen la continuidad ósea.",
    image:"enfermedades.jpg",
    detailsTitle:"Ejemplos de alteraciones",
    details:[
      ["OSTEOARTRITIS","Articulación","Puede producir dolor, rigidez y limitación del movimiento."],
      ["ESCOLIOSIS","Columna","Se caracteriza por una curvatura lateral de la columna vertebral."],
      ["MINERALIZACIÓN Y FRACTURA","Hueso","Raquitismo y osteomalacia alteran la mineralización; una fractura interrumpe la continuidad ósea."]
    ],
    sourceTitle:"NIAMS · Osteoartritis",
    sourceUrl:"https://www.niams.nih.gov/health-topics/osteoarthritis",
    question:"¿Qué estructura se afecta principalmente en la osteoartritis?",
    answers:["La articulación y sus tejidos, incluido el cartílago.","Solo la médula ósea roja.","Únicamente los ligamentos del cráneo."],correct:0,
    explanation:"La osteoartritis afecta cartílago y otros tejidos de la articulación.",
    speakerNotes:"Separa enfermedades óseas y articulares. La osteoporosis afecta la resistencia ósea; la osteoartritis afecta principalmente una articulación."
  },
  {
    slideNumber:34,blockNumber:7,eyebrow:"FRACTURAS Y RECUPERACIÓN",
    title:"Una fractura",emphasis:"interrumpe la continuidad del hueso.",
    subtitle:"Su clasificación y recuperación dependen de características y contexto.",
    description:"Puede ser cerrada o abierta, completa o incompleta, desplazada o no desplazada. La recuperación depende de la lesión, su estabilidad, la salud y el seguimiento adecuados.",
    image:"enfermedades.jpg",
    detailsTitle:"Factores que influyen en la recuperación",
    details:[
      ["LESIÓN","Tipo y localización","Las características de la fractura y el hueso afectado influyen en el abordaje."],
      ["ESTABILIDAD","Alineación y soporte","La estabilidad y la alineación forman parte de la atención de la fractura."],
      ["SEGUIMIENTO","Salud y tratamiento","Edad, nutrición, salud general y tratamiento pueden influir en la recuperación."]
    ],
    sourceTitle:"OpenStax · Fracturas y reparación ósea",
    sourceUrl:"https://openstax.org/books/anatomy-and-physiology-2e/pages/6-5-fractures-bone-repair",
    question:"¿Qué debe hacerse ante una sospecha de fractura?",
    answers:["Intentar enderezar el hueso por cuenta propia.","Buscar valoración sanitaria y evitar manipularlo.","Esperar sin pedir ayuda aunque haya dolor intenso."],correct:1,
    explanation:"Una sospecha de fractura requiere valoración sanitaria; no se debe intentar enderezar el hueso por cuenta propia.",
    speakerNotes:"La información es educativa. Ante una posible fractura se debe buscar atención sanitaria y no intentar reducirla o enderezarla por cuenta propia."
  },
  {
    slideNumber:38,blockNumber:4,eyebrow:"ANATOMÍA REGIONAL · MANO Y MUÑECA",
    title:"La mano combina",emphasis:"estabilidad y precisión.",
    subtitle:"Carpo, metacarpo y falanges organizan los movimientos de la mano.",
    description:"Cada mano típica tiene 27 huesos: ocho carpianos en la muñeca, cinco metacarpianos en la palma y catorce falanges en los dedos. La oposición del pulgar y la movilidad de sus articulaciones permiten agarres precisos y de fuerza.",
    image:"huesos-mano-numerados.png",
    alt:"Ilustración anatómica de los huesos de la mano con carpianos, metacarpianos y falanges numerados",
    caption:"HUESOS DE LA MANO · CARPO, METACARPO Y FALANGES",
    detailsTitle:"Tres regiones, 27 huesos por mano",
    details:[
      ["CARPO","Ocho huesos de la muñeca","Dos filas de huesos cortos conectan el antebrazo con la mano y permiten movilidad y estabilidad de la muñeca."],
      ["METACARPO","Cinco huesos de la palma","Los metacarpianos conectan el carpo con los dedos y contribuyen a formar el arco de la palma."],
      ["FALANGES","Catorce huesos de los dedos","Cada dedo tiene tres falanges, excepto el pulgar, que tiene dos; sus articulaciones permiten flexión y extensión."]
    ],
    sourceTitle:"OpenStax · Esqueleto apendicular",
    sourceUrl:"https://openstax.org/books/anatomy-and-physiology-2e/pages/7-5-appendicular-skeleton",
    question:"¿Cuántas falanges tiene normalmente el pulgar?",
    answers:["Dos.","Tres.","Cuatro."],correct:0,
    explanation:"El pulgar tiene dos falanges; los otros dedos tienen tres cada uno.",
    speakerNotes:"Sigue la imagen desde la muñeca hacia las puntas de los dedos: carpo, metacarpo y falanges. El total habitual es 27 huesos por mano. Destaca que el pulgar tiene solo dos falanges y su oposición es clave para la prensión."
  },
  {
    slideNumber:39,blockNumber:4,eyebrow:"ANATOMÍA REGIONAL · PELVIS",
    title:"La pelvis",emphasis:"transfiere cargas y protege.",
    subtitle:"La cintura pélvica conecta las extremidades inferiores con el tronco.",
    description:"Cada hueso coxal adulto se forma por la fusión del ilion, el isquion y el pubis. El acetábulo recibe la cabeza del fémur; junto al sacro, la pelvis transmite cargas y rodea estructuras de la cavidad pélvica.",
    image:"pelvis-modelo-3d.gif",
    alt:"Modelo tridimensional animado de la pelvis ósea humana en rotación",
    caption:"PELVIS ÓSEA · MODELO 3D ANIMADO",
    detailsTitle:"Piezas que forman el anillo pélvico",
    details:[
      ["ILION","Porción superior","Es la porción amplia y superior del hueso coxal, donde se insertan músculos del tronco y la cadera."],
      ["ISQUION Y PUBIS","Porciones inferior y anterior","El isquion soporta carga al sentarse; el pubis forma la parte anterior de la pelvis y se une al lado opuesto en la sínfisis púbica."],
      ["ACETÁBULO","Articulación de la cadera","La cavidad acetabular del hueso coxal recibe la cabeza femoral y forma parte de una articulación sinovial esferoidea."]
    ],
    sourceTitle:"OpenStax · Esqueleto apendicular",
    sourceUrl:"https://openstax.org/books/anatomy-and-physiology-2e/pages/7-5-appendicular-skeleton",
    question:"¿Qué estructura del hueso coxal recibe la cabeza del fémur?",
    answers:["El acetábulo.","El foramen vertebral.","La cavidad glenoidea."],correct:0,
    explanation:"La cabeza femoral articula con el acetábulo para formar la articulación de la cadera.",
    speakerNotes:"Aclara que el hueso coxal adulto resulta de la fusión del ilion, el isquion y el pubis. El acetábulo recibe la cabeza femoral. El sacro pertenece al esqueleto axial, mientras los huesos coxales forman la cintura pélvica del esqueleto apendicular."
  },
  {
    slideNumber:40,blockNumber:4,eyebrow:"ANATOMÍA REGIONAL · PIE",
    title:"Los metatarsianos",emphasis:"distribuyen cargas al caminar.",
    subtitle:"La arquitectura del pie combina apoyo, adaptación y propulsión.",
    description:"Los cinco metatarsianos enlazan el tarso con las falanges. Su disposición contribuye a distribuir las fuerzas durante el apoyo y a transferirlas hacia los dedos al impulsar el cuerpo en cada paso.",
    image:"metatarsianos-izquierdos-3d.gif",
    alt:"Animación tridimensional de los cinco huesos metatarsianos del pie izquierdo",
    caption:"METATARSIANOS DEL PIE IZQUIERDO · MODELO 3D ANIMADO",
    detailsTitle:"El antepié como estructura de carga",
    details:[
      ["BASE","Articulación con el tarso","Las bases metatarsianas se articulan con huesos del tarso y forman parte de la arquitectura del mediopié."],
      ["CUERPO","Distribución de fuerzas","Los cuerpos de los metatarsianos transmiten cargas entre el tarso y las cabezas metatarsianas."],
      ["CABEZA","Apoyo y propulsión","Las cabezas metatarsianas se relacionan con las falanges proximales y participan en el apoyo del antepié durante la marcha."]
    ],
    sourceTitle:"OpenStax · Esqueleto apendicular",
    sourceUrl:"https://openstax.org/books/anatomy-and-physiology-2e/pages/7-5-appendicular-skeleton",
    question:"¿Cuántos metatarsianos hay normalmente en un pie?",
    answers:["Cinco.","Siete.","Catorce."],correct:0,
    explanation:"Cada pie tiene cinco metatarsianos, uno asociado a cada dedo.",
    speakerNotes:"Usa la animación para distinguir los cinco metatarsianos. Relaciona su posición entre el tarso y los dedos con la transmisión de carga, recordando que el equilibrio del pie depende también del conjunto de huesos, articulaciones, ligamentos y músculos."
  },
  {
    slideNumber:41,blockNumber:3,eyebrow:"HISTOLOGÍA · HUESO COMPACTO",
    title:"La osteona",emphasis:"organiza el hueso compacto.",
    subtitle:"La microarquitectura conecta resistencia mecánica y nutrición celular.",
    description:"En el hueso compacto, las osteonas agrupan laminillas concéntricas alrededor de un conducto central con vasos y nervios. Los osteocitos ocupan lagunas y se comunican mediante canalículos; los conductos perforantes conectan los vasos entre osteonas.",
    image:"diagrama-hueso-compacto.jpg",
    alt:"Diagrama de un hueso largo y un corte ampliado de hueso compacto con osteonas, laminillas, vasos y conductos",
    caption:"HUESO COMPACTO · ORGANIZACIÓN EN OSTEONAS",
    detailsTitle:"De la escala del hueso a la osteona",
    details:[
      ["OSTEONA","Unidad cilíndrica","Conjunto de laminillas concéntricas que rodean un conducto central; es una organización característica del hueso compacto."],
      ["CONDUCTO CENTRAL","Vasos y nervios","El conducto de Havers contiene vasos sanguíneos y nervios que recorren longitudinalmente la osteona."],
      ["LAGUNAS Y CANALÍCULOS","Comunicación celular","Los osteocitos ocupan lagunas conectadas por canalículos, por donde se intercambian señales y nutrientes."]
    ],
    sourceTitle:"OpenStax · Estructura del tejido óseo",
    sourceUrl:"https://openstax.org/books/anatomy-and-physiology-2e/pages/6-3-bone-structure",
    question:"¿Dónde se localizan los osteocitos maduros?",
    answers:["En lagunas de la matriz ósea.","Dentro del líquido sinovial.","En la cavidad articular."],correct:0,
    explanation:"Los osteocitos maduros ocupan lagunas de la matriz y se conectan mediante canalículos.",
    speakerNotes:"Lee el diagrama de afuera hacia adentro: periostio, laminillas y osteonas. El conducto central permite el paso de vasos y nervios; osteocitos en lagunas se conectan por canalículos. No confundas una osteona, propia del hueso compacto, con las trabéculas del hueso esponjoso."
  },
  {
    slideNumber:46,blockNumber:8,eyebrow:"CIERRE · GRACIAS POR APRENDER",
    title:"¡Gracias!",emphasis:"El esqueleto también cuenta tu historia.",
    subtitle:"Explora la ilustración y recuerda cómo estructura, movimiento y vida se conectan.",
    description:"Gracias, profesora y estudiantes, por acompañar este recorrido por el sistema óseo. Pulsa cada punto del esqueleto para repasar una idea clave y compartir una reflexión final.",
    image:"https://thumb.wikimedia.org/wikipedia/commons/thumb/9/95/Skeleton-2632153.jpg/960px-Skeleton-2632153.jpg",
    alt:"Modelo anatómico fotográfico de un esqueleto humano con referencias de inserciones musculares",
    caption:"GRACIAS · ESTRUCTURA · MOVIMIENTO · VIDA",
    note:"Selecciona los puntos de la ilustración para abrir cada recuerdo anatómico.",
    takeawayLabel:"PARA LLEVAR",
    takeaway:"El hueso es tejido vivo: sostiene, protege, participa en el movimiento y se renueva.",
    chips:["GRACIAS","ESTRUCTURA","MOVIMIENTO"],
    detailsTitle:"Tres ideas para llevar contigo",
    details:[
      ["SOSTÉN Y PROTECCIÓN","La arquitectura del cuerpo","El esqueleto sostiene los tejidos y resguarda órganos como el encéfalo, la médula espinal, el corazón y los pulmones."],
      ["MOVIMIENTO","Una acción coordinada","Los músculos generan fuerza, los tendones la transmiten y los huesos se mueven alrededor de las articulaciones."],
      ["VIDA Y ADAPTACIÓN","Un tejido que cambia","Las células remodelan el tejido óseo; la médula roja produce células sanguíneas y la matriz guarda minerales." ]
    ],
    hotspotPositions:[[50,18],[50,42],[50,72]],
    sourceTitle:"OpenStax · Funciones del sistema esquelético",
    sourceUrl:"https://openstax.org/books/anatomy-and-physiology-2e/pages/6-1-the-functions-of-the-skeletal-system",
    question:"¿Qué idea resume mejor el recorrido de hoy?",
    answers:["El esqueleto es una estructura viva que trabaja con otros sistemas.","Todos los huesos cumplen una única función.","El movimiento ocurre sin músculos ni articulaciones."],correct:0,
    explanation:"El sistema esquelético está vivo y sus funciones dependen de la colaboración entre huesos, articulaciones, músculos y médula.",
    speakerNotes:"Agradece al grupo y cierra invitando a que cada estudiante comparta una estructura o función que ahora comprende mejor. Pulsen los puntos de la ilustración para recapitular sostén y protección, coordinación del movimiento y actividad del tejido óseo."
  },
  {
    slideNumber:42,blockNumber:4,eyebrow:"ANATOMÍA REGIONAL · ATLAS Y AXIS",
    title:"El axis",emphasis:"permite rotar la cabeza.",
    subtitle:"La segunda vértebra cervical forma un pivote para el movimiento de rotación.",
    description:"El axis (C2) se reconoce por la apófisis odontoides o dens, que se proyecta hacia el atlas (C1). Junto con ligamentos especializados, este pivote permite gran parte de la rotación de la cabeza y mantiene protegido el conducto vertebral.",
    image:"https://upload.wikimedia.org/wikipedia/commons/e/ed/Cervical_vertebra_2_close-up_top_animation.gif",
    alt:"Animación tridimensional superior de la segunda vértebra cervical humana, el axis",
    caption:"AXIS · C2 · MODELO 3D ANIMADO",
    note:"La apófisis odontoides del axis actúa como pivote de rotación dentro del atlas.",
    detailsTitle:"Una articulación especializada del cuello",
    details:[
      ["C1 · ATLAS","Anillo que sostiene el cráneo","El atlas recibe los cóndilos occipitales y soporta el cráneo; se articula con el axis."],
      ["DENS","Pivote óseo","La apófisis odontoides del axis se proyecta dentro del atlas y sirve como eje para la rotación."],
      ["C2 · AXIS","Rotación y protección","El axis permite el giro de la cabeza en la articulación atlantoaxoidea; el conducto vertebral resguarda la médula espinal."]
    ],
    hotspotPositions:[[50,22],[50,50],[50,78]],
    sourceTitle:"OpenStax · Columna vertebral",
    sourceUrl:"https://openstax.org/books/anatomy-and-physiology-2e/pages/7-3-the-vertebral-column",
    question:"¿Qué estructura del axis sirve como pivote para la rotación de la cabeza?",
    answers:["La apófisis odontoides o dens.","El disco entre L4 y L5.","El acetábulo."],correct:0,
    explanation:"La apófisis odontoides de C2 se articula con C1 y forma el pivote de rotación atlantoaxoidea.",
    speakerNotes:"Identifica el axis como C2 y el dens como su rasgo distintivo. Relaciona la forma del dens con la rotación de la articulación atlantoaxoidea; menciona que ligamentos mantienen la estabilidad y que el conducto vertebral protege la médula."
  },
  {
    slideNumber:43,blockNumber:5,eyebrow:"ARTROLOGÍA · ARTICULACIÓN SINOVIAL",
    title:"Una articulación sinovial",emphasis:"reduce fricción y permite movilidad.",
    subtitle:"Cavidad, líquido, cartílago y cápsula cooperan para facilitar el movimiento.",
    description:"En una articulación sinovial, las superficies óseas recubiertas de cartílago hialino se enfrentan a través de una cavidad articular. La membrana sinovial produce líquido sinovial; la cápsula fibrosa y los ligamentos aportan contención y estabilidad.",
    image:"https://upload.wikimedia.org/wikipedia/commons/7/7e/Anatomy_and_physiology_of_animals_Synovial_joint.jpg",
    alt:"Diagrama anatómico en corte de una articulación sinovial",
    caption:"ARTICULACIÓN SINOVIAL · ESTRUCTURAS Y MOVILIDAD",
    note:"El cartílago articular recubre las superficies; el líquido sinovial está dentro de la cavidad.",
    detailsTitle:"Componentes de una articulación móvil",
    details:[
      ["CARTÍLAGO ARTICULAR","Superficies de baja fricción","El cartílago hialino recubre los extremos óseos y distribuye presión; no contiene vasos sanguíneos."],
      ["CAVIDAD SINOVIAL","Espacio con líquido","La cavidad contiene líquido sinovial, que lubrica y contribuye a nutrir el cartílago articular."],
      ["CÁPSULA Y LIGAMENTOS","Contención y estabilidad","La cápsula rodea la articulación; los ligamentos refuerzan la unión entre huesos y limitan desplazamientos excesivos."]
    ],
    hotspotPositions:[[50,25],[50,50],[50,75]],
    sourceTitle:"Wikimedia Commons · Articulación sinovial",
    sourceUrl:"https://commons.wikimedia.org/wiki/File:Anatomy_and_physiology_of_animals_Synovial_joint.jpg",
    question:"¿Qué tejido recubre normalmente las superficies óseas de una articulación sinovial?",
    answers:["Cartílago hialino articular.","Periostio dentro de la cavidad.","Médula ósea roja."],correct:0,
    explanation:"El cartílago hialino recubre las superficies articulares; el líquido sinovial ocupa la cavidad.",
    speakerNotes:"Explica el diagrama de las superficies óseas hacia afuera: cartílago articular, cavidad con líquido sinovial y cápsula. Distingue ligamento (hueso con hueso) de tendón (músculo con hueso)."
  },
  {
    slideNumber:44,blockNumber:6,eyebrow:"FISIOLOGÍA ÓSEA · REMODELACIÓN CELULAR",
    title:"El hueso se remodela",emphasis:"con células especializadas.",
    subtitle:"La resorción y la formación se acoplan para renovar la matriz.",
    description:"Los osteoclastos degradan matriz mineralizada durante la resorción. Después, osteoblastos producen osteoide y favorecen su mineralización; algunos quedan incorporados como osteocitos. El equilibrio se adapta a señales hormonales y cargas mecánicas.",
    image:"https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6f/Bone_regeneration_-_Bone_remodeling_cycle_2_-_Pre-Osteoblast_Osteoblast_Bone-lining_cell_etc_--_Smart-Servier.png/960px-Bone_regeneration_-_Bone_remodeling_cycle_2_-_Pre-Osteoblast_Osteoblast_Bone-lining_cell_etc_--_Smart-Servier.png",
    alt:"Ilustración biomédica de células implicadas en la remodelación ósea: osteoclastos, osteoblastos y osteocitos",
    caption:"REMODELACIÓN ÓSEA · CÉLULAS Y MATRIZ",
    note:"La renovación depende del acoplamiento entre resorción por osteoclastos y formación por osteoblastos.",
    detailsTitle:"Células que mantienen el tejido",
    details:[
      ["OSTEOCLASTOS","Resorción ósea","Células multinucleadas que degradan matriz y participan en la liberación de minerales."],
      ["OSTEOBLASTOS","Formación de osteoide","Sintetizan la matriz orgánica nueva; esta puede mineralizarse y formar tejido óseo."],
      ["OSTEOCITOS","Mantenimiento y señalización","Osteoblastos incorporados a la matriz que detectan cargas y coordinan respuestas del tejido."]
    ],
    hotspotPositions:[[50,25],[50,52],[50,78]],
    sourceTitle:"Wikimedia Commons · Ciclo de remodelación ósea",
    sourceUrl:"https://commons.wikimedia.org/wiki/File:Bone_regeneration_-_Bone_remodeling_cycle_2_-_Pre-Osteoblast_Osteoblast_Bone-lining_cell_etc_--_Smart-Servier.png",
    question:"¿Qué célula produce la matriz ósea nueva?",
    answers:["Osteoblasto.","Osteoclasto.","Condrocito articular."],correct:0,
    explanation:"Los osteoblastos sintetizan osteoide; los osteoclastos resorben matriz y los osteocitos ayudan a mantener el tejido.",
    speakerNotes:"Compara las funciones sin tratarlas como procesos aislados: osteoclastos resorben, osteoblastos forman y osteocitos detectan señales mecánicas y participan en la coordinación. El equilibrio cambia con edad, hormonas, actividad y enfermedad."
  },
  {
    slideNumber:45,blockNumber:7,eyebrow:"TRAUMATOLOGÍA · REPARACIÓN DE FRACTURAS",
    title:"Reparar una fractura",emphasis:"es un proceso gradual.",
    subtitle:"La consolidación pasa por fases superpuestas de reparación y remodelación.",
    description:"Tras la fractura se forma un hematoma y se inicia la respuesta inflamatoria. Luego aparece un callo blando fibrocartilaginoso, que da paso a un callo óseo; finalmente el tejido se remodela según las cargas. El tiempo y el resultado dependen de la lesión y de la persona.",
    image:"https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a9/Fracture_repair_--_Smart-Servier.jpg/960px-Fracture_repair_--_Smart-Servier.jpg",
    alt:"Ilustración médica de la reparación de una fractura ósea y sus fases",
    caption:"REPARACIÓN ÓSEA · DE LA FRACTURA A LA REMODELACIÓN",
    note:"Las fases se solapan; no constituyen una secuencia instantánea ni igual para todas las fracturas.",
    detailsTitle:"Fases generales de la consolidación",
    details:[
      ["HEMATOMA","Inflamación inicial","Los vasos lesionados forman un coágulo local y comienzan señales inflamatorias de reparación."],
      ["CALLO BLANDO Y ÓSEO","Puente de reparación","Tejido fibrocartilaginoso estabiliza inicialmente la zona; después se sustituye por callo óseo."],
      ["REMODELACIÓN","Adaptación de la estructura","El hueso recién formado se reorganiza y adapta progresivamente a las cargas mecánicas."]
    ],
    hotspotPositions:[[50,25],[50,52],[50,78]],
    sourceTitle:"Wikimedia Commons · Reparación de fracturas",
    sourceUrl:"https://commons.wikimedia.org/wiki/File:Fracture_repair_--_Smart-Servier.jpg",
    question:"¿Qué tejido forma primero un puente en el callo blando?",
    answers:["Tejido fibrocartilaginoso.","Hueso compacto maduro en toda la fractura.","Cartílago articular."],correct:0,
    explanation:"El callo blando incluye tejido fibrocartilaginoso y es reemplazado después por callo óseo.",
    speakerNotes:"Presenta hematoma, callo blando, callo óseo y remodelación como fases generales que se solapan. Evita dar tiempos universales: la curación depende del tipo de fractura, estabilidad, localización, salud y tratamiento."
  }
];

const sourceByBlock = [
  ["OpenStax · Funciones del sistema esquelético","https://openstax.org/books/anatomy-and-physiology-2e/pages/6-1-the-functions-of-the-skeletal-system"],
  ["OpenStax · Funciones del sistema esquelético","https://openstax.org/books/anatomy-and-physiology-2e/pages/6-1-the-functions-of-the-skeletal-system"],
  ["OpenStax · Estructura y clasificación ósea","https://openstax.org/books/anatomy-and-physiology-2e/pages/6-3-bone-structure"],
  ["OpenStax · Esqueleto axial y apendicular","https://openstax.org/books/anatomy-and-physiology-2e/pages/7-1-divisions-of-the-skeletal-system"],
  ["OpenStax · Articulaciones sinoviales","https://openstax.org/books/anatomy-and-physiology-2e/pages/9-4-synovial-joints"],
  ["OpenStax · Formación y desarrollo óseo","https://openstax.org/books/anatomy-and-physiology-2e/pages/6-4-bone-formation-and-development"],
  ["MedlinePlus · Osteoporosis y salud ósea","https://medlineplus.gov/osteoporosis.html"],
  ["OpenStax · Funciones del sistema esquelético","https://openstax.org/books/anatomy-and-physiology-2e/pages/6-1-the-functions-of-the-skeletal-system"]
];

const hotspotPositions = [[50,28],[69,51],[42,74]];
const supplementalModules = additionalSlides.map(slide => {
  const [sourceTitle,sourceUrl] = sourceByBlock[slide.blockNumber - 1];
  return {
    slideNumber:slide.slideNumber,
    blockNumber:slide.blockNumber,
    chapter:`BLOQUE ${slide.blockNumber} · ${blocks[slide.blockNumber - 1].title}`,
    eyebrow:`DIAPOSITIVA ${String(slide.slideNumber).padStart(2,"0")} · ${slide.eyebrow}`,
    title:slide.title,
    emphasis:slide.emphasis,
    subtitle:slide.subtitle,
    description:slide.description,
    image:slide.image,
    alt:slide.alt || `${slide.title} ${slide.emphasis}`,
    caption:slide.caption || `${slide.title} ${slide.emphasis}`.toLocaleUpperCase("es"),
    note:"Explora los puntos de la imagen y relaciona la estructura con su función.",
    takeawayLabel:"IDEA CLAVE",
    takeaway:slide.takeaway || slide.description,
    chips:slide.details.map(([label]) => label),
    detailsTitle:slide.detailsTitle,
    details:slide.details.map(([label,title,text]) => ({label,title,text})),
    hotspots:slide.details.map(([label,title,text],index) => ({
      x:(slide.hotspotPositions || hotspotPositions)[index][0],
      y:(slide.hotspotPositions || hotspotPositions)[index][1],
      label,
      text:`${title}: ${text}`
    })),
    sourceTitle:slide.sourceTitle || sourceTitle,
    sourceUrl:slide.sourceUrl || sourceUrl,
    question:slide.question,
    answers:slide.answers,
    correct:slide.correct,
    explanation:slide.explanation,
    speakerNotes:slide.speakerNotes
  };
});

const modules = [...coreModules,...supplementalModules].sort((a,b) => a.slideNumber - b.slideNumber);

const $ = id => document.getElementById(id);
const presentation = $("presentation");
let current = 0;
let renderTimer = 0;
let zoomed = false;
let lastHotspot = 0;

function setZoomed(value) {
  zoomed = value;
  $("imageViewport").classList.toggle("is-zoomed", zoomed);
  $("zoomBtn").setAttribute("aria-pressed", String(zoomed));
  $("zoomBtn").innerHTML = zoomed ? `− <span>Reducir</span>` : `＋ <span>Ampliar</span>`;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;"
  })[character]);
}

function getChipExplanation(module, chip, index) {
  if (module.chipDescriptions?.[index]) {
    return {title:chip, text:module.chipDescriptions[index]};
  }
  const words = chip.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLocaleLowerCase("es")
    .split(/[^a-z0-9]+/).filter(word => word.length > 2);
  const details = module.details.map(detail => Array.isArray(detail)
    ? {label:detail[0],title:detail[1],text:detail[2]}
    : detail
  );
  const rankedDetails = details.map(detail => {
    const content = `${detail.label} ${detail.title} ${detail.text}`.normalize("NFD")
      .replace(/[\u0300-\u036f]/g,"").toLocaleLowerCase("es");
    return {detail, score:words.reduce((score,word) => score + (content.includes(word) ? 1 : 0),0)};
  }).sort((a,b) => b.score - a.score);
  const matched = rankedDetails[0]?.score ? rankedDetails[0].detail : details[index];
  if (matched) {
    return {title:chip, text:`${matched.title}: ${matched.text}`};
  }
  return {title:chip, text:module.takeaway || module.description};
}

function render(index, animate = true) {
  current = Math.max(0, Math.min(modules.length - 1, index));
  const module = modules[current];
  presentation.classList.toggle("is-opening", module.slideNumber === 1);
  window.clearTimeout(renderTimer);
  presentation.classList.remove("is-entering");
  presentation.classList.toggle("is-leaving", animate && !window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  renderTimer = window.setTimeout(() => {
    const block = blocks[module.blockNumber - 1];
    $("chapterLabel").textContent = module.chapter;
    $("blockMeta").textContent = `BLOQUE ${module.blockNumber} DE ${blocks.length} · ${block.minutes} MIN`;
    $("chapterProgressText").innerHTML = `${String(module.slideNumber).padStart(2,"0")} <span>—</span> ${String(modules.length).padStart(2,"0")}`;
    $("progressTrack").setAttribute("aria-valuenow", String(module.slideNumber));
    $("progressTrack").setAttribute("aria-valuemax", String(modules.length));
    $("progressBar").style.width = `${(module.slideNumber / modules.length) * 100}%`;
    $("moduleNumber").textContent = String(module.slideNumber).padStart(2,"0");
    $("eyebrow").textContent = module.eyebrow;
    $("title").innerHTML = `${escapeHtml(module.title)}<br><em>${escapeHtml(module.emphasis)}</em>`;
    $("subtitle").textContent = module.subtitle;
    $("description").textContent = module.description;
    $("heroImage").src = module.image.startsWith("https://") ? module.image : `images/${module.image}`;
    $("heroImage").alt = module.alt;
    $("imageCaption").textContent = module.caption;
    $("imageNoteText").textContent = module.note;
    $("chips").innerHTML = module.chips.map((chip,index) =>
      `<button class="chip-button" type="button" data-chip="${index}" aria-controls="chipExplanation" aria-expanded="false" aria-pressed="false">${escapeHtml(chip)}</button>`
    ).join("");
    $("chipExplanation").hidden = true;
    $("chipExplanationTitle").textContent = "";
    $("chipExplanationText").textContent = "";
    $("chips").querySelectorAll(".chip-button").forEach(button => button.addEventListener("click", () => {
      const detail = getChipExplanation(module, module.chips[Number(button.dataset.chip)], Number(button.dataset.chip));
      $("chips").querySelectorAll(".chip-button").forEach(chipButton => {
        const active = chipButton === button;
        chipButton.classList.toggle("active", active);
        chipButton.setAttribute("aria-pressed", String(active));
        chipButton.setAttribute("aria-expanded", String(active));
      });
      $("chipExplanationTitle").textContent = detail.title;
      $("chipExplanationText").textContent = detail.text;
      $("chipExplanation").hidden = false;
    }));
    $("takeawayLabel").textContent = module.takeawayLabel;
    $("takeawayText").textContent = module.takeaway;
    $("detailsTitle").textContent = module.detailsTitle;
    $("speakerNotesText").textContent = module.speakerNotes;
    $("speakerNotes").open = false;
    $("detailGrid").innerHTML = module.details.map((detail, index) =>
      `<article class="detail-card" style="--card-index:${index}"><span class="detail-label">${escapeHtml(detail.label)}</span><h3>${escapeHtml(detail.title)}</h3><p>${escapeHtml(detail.text)}</p></article>`
    ).join("");
    $("sourceLink").href = module.sourceUrl;
    $("sourceLink").textContent = `${module.sourceTitle} ↗`;
    $("prevBtn").disabled = current === 0;
    $("nextBtn").disabled = false;
    $("nextBtn").innerHTML = current === modules.length - 1 ? `<span>Volver al inicio</span> <span aria-hidden="true">↺</span>` : `<span>Siguiente</span> <span aria-hidden="true">→</span>`;
    $("heroImage").style.transform = "";
    $("visualCard").style.setProperty("--tilt-x", "0deg");
    $("visualCard").style.setProperty("--tilt-y", "0deg");
    zoomed = false;
    $("imageViewport").classList.remove("is-zoomed");
    $("zoomBtn").setAttribute("aria-pressed","false");
    $("zoomBtn").innerHTML = `＋ <span>Ampliar</span>`;
    lastHotspot = 0;
    $("hotspots").innerHTML = module.hotspots.map((spot, index) =>
      `<button class="hotspot ${index === 0 ? "active" : ""}" type="button" data-hotspot="${index}" style="--hotspot-x:${spot.x}%;--hotspot-y:${spot.y}%" aria-label="Explorar ${escapeHtml(spot.label)}" aria-pressed="${index === 0}"><span class="hotspot-ring"></span><span class="hotspot-label">${escapeHtml(spot.label)}</span></button>`
    ).join("");
    $("hotspotTopics").hidden = module.slideNumber !== 4;
    $("hotspotTopics").innerHTML = module.slideNumber === 4
      ? module.hotspots.map((spot,index) => `<button class="hotspot-topic ${index === 0 ? "active" : ""}" type="button" data-hotspot="${index}" aria-pressed="${index === 0}">${escapeHtml(spot.label)}</button>`).join("")
      : "";
    $("hotspotNote").textContent = module.hotspots[0].text;
    document.querySelectorAll(".hotspot").forEach(button => button.addEventListener("click", () => selectHotspot(Number(button.dataset.hotspot))));
    $("hotspotTopics").querySelectorAll(".hotspot-topic").forEach(button => button.addEventListener("click", () => selectHotspot(Number(button.dataset.hotspot))));
    renderQuestion(module);
    renderModuleList();
    presentation.classList.remove("is-leaving");
    if (animate) {
      presentation.classList.add("is-entering");
      requestAnimationFrame(() => requestAnimationFrame(() => presentation.classList.remove("is-entering")));
    }
  }, animate && !window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 150 : 0);
}

function selectHotspot(index) {
  const spot = modules[current].hotspots[index];
  if (!spot) return;
  lastHotspot = index;
  document.querySelectorAll(".hotspot").forEach((button, buttonIndex) => {
    const active = buttonIndex === index;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  $("hotspotTopics").querySelectorAll(".hotspot-topic").forEach((button,buttonIndex) => {
    const active = buttonIndex === index;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  $("hotspotNote").textContent = spot.text;
}

function renderQuestion(module) {
  document.querySelectorAll(".retry-btn").forEach(button => button.remove());
  $("questionText").textContent = module.question;
  $("answerFeedback").textContent = "";
  $("answerFeedback").className = "answer-feedback";
  $("answerList").innerHTML = module.answers.map((answer, index) =>
    `<button class="answer-option" type="button" data-answer="${index}"><span class="answer-letter">${String.fromCharCode(65 + index)}</span><span>${escapeHtml(answer)}</span></button>`
  ).join("");
  $("answerList").querySelectorAll("button").forEach(button => button.addEventListener("click", () => {
    const selected = Number(button.dataset.answer);
    const correct = selected === module.correct;
    $("answerList").querySelectorAll("button").forEach((option, index) => {
      option.disabled = true;
      if (index === module.correct) option.classList.add("correct");
      else if (index === selected) option.classList.add("incorrect");
    });
    $("answerFeedback").textContent = `${correct ? "¡Exacto!" : "Repasa esta idea."} ${module.explanation}`;
    $("answerFeedback").classList.add(correct ? "is-correct" : "is-incorrect");
    $("answerList").insertAdjacentHTML("afterend", `<button class="retry-btn" type="button" id="retryQuestion">Intentar otra vez</button>`);
    $("retryQuestion").addEventListener("click", () => {
      $("retryQuestion").remove();
      renderQuestion(module);
      $("answerList").querySelector("button")?.focus();
    }, {once:true});
  }));
}

function renderModuleList() {
  const query = $("moduleSearch").value.trim().toLocaleLowerCase("es");
  const matches = modules.map((module, index) => ({module, index})).filter(({module}) =>
    `${module.chapter} ${module.eyebrow} ${module.title} ${module.emphasis} ${module.subtitle}`.toLocaleLowerCase("es").includes(query)
  );
  $("moduleList").innerHTML = matches.length
    ? matches.map(({module, index}) =>
      `<button class="module-card ${index === current ? "active" : ""}" type="button" data-module="${index}" aria-current="${index === current ? "step" : "false"}"><span class="module-card-number">${String(module.slideNumber).padStart(2,"0")}</span><span class="module-card-copy"><small>${escapeHtml(module.chapter)}</small><strong>${escapeHtml(`${module.title} ${module.emphasis}`)}</strong><span>${escapeHtml(module.subtitle)}</span></span><span class="module-card-arrow" aria-hidden="true">↗</span></button>`
    ).join("")
    : `<p class="empty-search">No encontramos ese tema. Prueba con otra palabra.</p>`;
  $("moduleList").querySelectorAll(".module-card").forEach(button => button.addEventListener("click", () => {
    render(Number(button.dataset.module));
    closeOverview();
  }));
}

function closeOverview() {
  $("overview").classList.add("hidden");
  $("overviewBtn").setAttribute("aria-expanded","false");
}

$("prevBtn").addEventListener("click", () => render(current - 1));
$("nextBtn").addEventListener("click", () => render(current === modules.length - 1 ? 0 : current + 1));
$("homeBtn").addEventListener("click", event => {
  event.preventDefault();
  render(0);
  closeOverview();
  window.scrollTo({top:0,behavior:"smooth"});
});
$("overviewBtn").addEventListener("click", () => {
  const opened = $("overview").classList.toggle("hidden") === false;
  $("overviewBtn").setAttribute("aria-expanded", String(opened));
  if (opened) {
    renderModuleList();
    $("moduleSearch").focus();
  }
});
$("closeOverview").addEventListener("click", closeOverview);
$("moduleSearch").addEventListener("input", renderModuleList);
$("zoomBtn").addEventListener("click", () => {
  setZoomed(!zoomed);
});

$("visualCard").addEventListener("pointermove", event => {
  if (event.pointerType === "touch" || zoomed) return;
  const bounds = event.currentTarget.getBoundingClientRect();
  const x = (event.clientX - bounds.left) / bounds.width - .5;
  const y = (event.clientY - bounds.top) / bounds.height - .5;
  event.currentTarget.style.setProperty("--tilt-y", `${x * 7}deg`);
  event.currentTarget.style.setProperty("--tilt-x", `${-y * 5}deg`);
});
$("visualCard").addEventListener("pointerleave", event => {
  event.currentTarget.style.setProperty("--tilt-x", "0deg");
  event.currentTarget.style.setProperty("--tilt-y", "0deg");
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !$("overview").classList.contains("hidden")) {
    closeOverview();
    $("overviewBtn").focus();
    return;
  }
  if (event.key === "Escape" && zoomed) {
    setZoomed(false);
    return;
  }
  if (event.target.matches("input,textarea,select,[contenteditable=true]")) return;
  if (["ArrowRight","PageDown"].includes(event.key)) {
    event.preventDefault();
    render(Math.min(modules.length - 1, current + 1));
  }
  if (["ArrowLeft","PageUp"].includes(event.key)) {
    event.preventDefault();
    render(Math.max(0, current - 1));
  }
});

render(0, false);
