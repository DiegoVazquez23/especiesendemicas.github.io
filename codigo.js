// Datos de ejemplo para simular una base de datos
const speciesData = [
    {
        id: 1,
        name: "Ajolote mexicano",
        scientificName: "Ambystoma mexicanum",
        category: "fauna",
        status: "en_peligro",
        region: "centro",
        image: "https://www.interactiveaquariumcancun.com/hs-fs/hubfs/Ajolote%20nadando%20(1)-1.jpg?width=1600&height=1067&name=Ajolote%20nadando%20(1)-1.jpg",
        source: "CONABIO",
        description: "El ajolote es una especie de salamandra que conserva sus características larvarias en su vida adulta (neotenia). Es endémico del sistema lacustre de la Cuenca de México y ha tenido una gran importancia cultural en México.",
        distribution: "Originalmente se encontraba en los lagos de Xochimilco y Chalco en la Ciudad de México. Actualmente su hábitat natural está casi desaparecido.",
        conservation: "En peligro crítico de extinción debido a la pérdida de hábitat, contaminación y especies invasoras."
    },
    {
        id: 2,
        name: "Dalia",
        scientificName: "Dahlia pinnata",
        category: "flora",
        status: "vulnerable",
        region: "centro",
        image: "https://www.gob.mx/cms/uploads/article/main_image/68180/35812649_678513409146246_5236294569594716160_o.jpg",
        source: "SEMARNAT",
        description: "Flor nacional de México con más de 40 especies diferentes, conocida por su belleza y variedad de colores. Fue descubierta por los españoles durante la conquista.",
        distribution: "Originaria de los estados de México, Puebla, Veracruz y Morelos. Actualmente cultivada en muchas partes del mundo.",
        conservation: "Algunas especies silvestres están en estado vulnerable debido a la pérdida de hábitat."
    },
    {
        id: 3,
        name: "Vaquita marina",
        scientificName: "Phocoena sinus",
        category: "fauna",
        status: "en_peligro",
        region: "norte",
        image: "https://i0.wp.com/www.mexicoambiental.com/wp-content/uploads/2019/04/Vaquita-marina.jpg?resize=620%2C330&ssl=1",
        source: "UICN",
        description: "El mamífero marino más pequeño y en mayor peligro de extinción, endémico del Golfo de California. Es tímida y evita las embarcaciones.",
        distribution: "Exclusivamente en la parte norte del Golfo de California, México.",
        conservation: "En peligro crítico con menos de 10 individuos estimados. Amenazada por la pesca ilegal de totoaba."
    },
    {
        id: 4,
        name: "Zempasúchil",
        scientificName: "Tagetes erecta",
        category: "flora",
        status: "estable",
        region: "centro",
        image: "https://live.staticflickr.com/1709/24685211719_468216e636_b.jpg",
        source: "CONABIO",
        description: "Flor tradicional mexicana utilizada en las ofrendas del Día de Muertos por su color amarillo intenso y aroma característico. También conocida como cempasúchil o flor de muerto.",
        distribution: "Originaria de México y Centroamérica, actualmente cultivada en muchas regiones del país.",
        conservation: "Estado estable debido a su cultivo extensivo con fines ornamentales y culturales."
    },
    {
        id: 5,
        name: "Lobo mexicano",
        scientificName: "Canis lupus baileyi",
        category: "fauna",
        status: "en_peligro",
        region: "norte",
        image: "https://nupec.com/wp-content/uploads/2022/12/wolf-in-a-forest-2021-08-26-16-38-16-utc.jpg",
        source: "SEMARNAT",
        description: "Subespecie del lobo gris, es el lobo más pequeño de Norteamérica. Fue exterminado en estado silvestre pero ha sido reintroducido.",
        distribution: "Originalmente en Sierra Madre Occidental y Oriental, actualmente en áreas de reintroducción en Chihuahua y Sonora.",
        conservation: "En peligro de extinción, con programas de reproducción en cautiverio y reintroducción."
    },
    {
        id: 6,
        name: "Pino azteca",
        scientificName: "Pinus hartwegii",
        category: "flora",
        status: "estable",
        region: "centro",
        image: "https://inaturalist-open-data.s3.amazonaws.com/photos/268230/original.jpg",
        source: "CONABIO",
        description: "Pino endémico de las altas montañas de México, resistente a condiciones extremas y de gran importancia ecológica.",
        distribution: "Sierra Madre Oriental y Occidental, Eje Neovolcánico, a altitudes de 3000 a 4000 msnm.",
        conservation: "Estado estable, aunque afectado por tala selectiva en algunas áreas."
    },
    {
        id: 7,
        name: "Totoaba",
        scientificName: "Totoaba macdonaldi",
        category: "fauna",
        status: "en_peligro",
        region: "norte",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Totoaba.jpg",
        source: "UICN",
        description: "Pez endémico del Golfo de California, de gran tamaño y valor comercial. Su pesca ilegal amenaza también a la vaquita marina.",
        distribution: "Golfo de California, principalmente en la parte norte.",
        conservation: "En peligro crítico debido a la pesca ilegal para el mercado asiático."
    },
    {
        id: 8,
        name: "Quetzal mesoamericano",
        scientificName: "Pharomachrus mocinno",
        category: "fauna",
        status: "amenazada",
        region: "sur",
        image: "https://www.fundacionunam.org.mx/wp-content/uploads/2015/12/animalesEXTINCION2.jpg",
        source: "CONABIO",
        description: "Ave de plumaje verde iridiscente y cola larga, sagrada para las culturas mesoamericanas. Habita en bosques nubosos.",
        distribution: "Selvas altas del sureste de México (Chiapas) y Centroamérica.",
        conservation: "Amenazada por pérdida de hábitat y captura ilegal."
    },
    {
        id: 9,
        name: "Maguey pulquero",
        scientificName: "Agave salmiana",
        category: "flora",
        status: "estable",
        region: "centro",
        image: "https://static.inaturalist.org/photos/3784005/large.JPG",
        source: "SEMARNAT",
        description: "Planta utilizada desde la época prehispánica para producir pulque. De crecimiento lento y gran importancia cultural.",
        distribution: "Regiones áridas y semiáridas del centro de México.",
        conservation: "Estado estable, aunque algunas variedades están en riesgo por sobreexplotación."
    },
    {
        id: 10,
        name: "Perrito de la pradera mexicano",
        scientificName: "Cynomys mexicanus",
        category: "fauna",
        status: "en_peligro",
        region: "norte",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSavDqz3F7GUEtEqnG1Gu8vAYmbYB80L50n3g&s",
        source: "UICN",
        description: "Roedor social que vive en colonias. Especie clave para los ecosistemas de pastizales.",
        distribution: "Áreas limitadas de Coahuila, Nuevo León y San Luis Potosí.",
        conservation: "En peligro por pérdida de hábitat y exterminio como plaga."
    },
    {
        id: 11,
        name: "Orquídea monja blanca",
        scientificName: "Lycaste skinneri",
        category: "flora",
        status: "vulnerable",
        region: "sur",
        image: "https://inaturalist-open-data.s3.amazonaws.com/photos/5704759/original.jpeg",
        source: "CONABIO",
        description: "Orquídea de gran belleza con flores blancas y aroma dulce. Flor nacional de Guatemala pero también endémica de Chiapas.",
        distribution: "Selvas húmedas de Chiapas y Centroamérica.",
        conservation: "Vulnerable por colecta ilegal y destrucción de su hábitat."
    },
    {
        id: 12,
        name: "Cacomixtle",
        scientificName: "Bassariscus sumichrasti",
        category: "fauna",
        status: "amenazada",
        region: "sur",
        image: "https://cdn1.matadornetwork.com/blogs/2/2020/03/Cacomixtle-1200x900.jpg",
        source: "SEMARNAT",
        description: "Mamífero nocturno parecido a un gato con cola anillada. Habita en bosques tropicales.",
        distribution: "Desde el centro de México hasta Panamá, en zonas boscosas.",
        conservation: "Amenazado por pérdida de hábitat y caza furtiva."
    },
    {
        id: 13,
        name: "Guacamaya roja",
        scientificName: "Ara macao cyanoptera",
        category: "fauna",
        status: "en_peligro",
        region: "sur",
        image: "https://blog.mexicodestinationclub.com/es/wp-content/uploads/2018/10/guacamaya-718x400.png",
        source: "CONABIO",
        description: "Subespecie de guacamaya roja endémica de México, conocida por su plumaje colorido y su gran tamaño.",
        distribution: "Selvas de Chiapas, Oaxaca y Tabasco.",
        conservation: "En peligro por pérdida de hábitat y tráfico ilegal como mascota."
    },
    {
        id: 14,
        name: "Nochebuena",
        scientificName: "Euphorbia pulcherrima",
        category: "flora",
        status: "estable",
        region: "centro",
        image: "https://www.uag.mx/contenido/hZt5wTFF2K/todo-lo-que-debes-saber-de-la-flor-de-nochebuena_rsn.jpg",
        source: "SEMARNAT",
        description: "Planta ornamental conocida mundialmente como símbolo de la Navidad. Originaria de México y Centroamérica.",
        distribution: "Originalmente de Guerrero, Morelos y Michoacán. Actualmente cultivada en todo el mundo.",
        conservation: "Estado estable debido a su cultivo extensivo."
    },
    {
        id: 15,
        name: "Ocelote",
        scientificName: "Leopardus pardalis",
        category: "fauna",
        status: "vulnerable",
        region: "sur",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGOITwx3GVbVGLK8dCXV-5AvoZukLZ-rkiog&s",
        source: "UICN",
        description: "Felino de tamaño mediano con un pelaje manchado característico. Es un depredador importante en los ecosistemas tropicales.",
        distribution: "Selvas del sureste de México y Centroamérica.",
        conservation: "Vulnerable debido a la pérdida de hábitat y caza furtiva por su piel."
    },
    {
        id: 16,
        name: "Zopilote rey",
        scientificName: "Sarcoramphus papa",
        category: "fauna",
        status: "amenazada",
        region: "sur",
        image: "https://static.inaturalist.org/photos/67203378/large.jpeg",
        source: "CONABIO",
        description: "Ave carroñera de gran tamaño y colorido plumaje. Desempeña un papel crucial en los ecosistemas al limpiar carroña.",
        distribution: "Selvas del sureste de México, Centroamérica y Sudamérica.",
        conservation: "Amenazada por pérdida de hábitat y envenenamiento secundario."
    },
    {
        id: 17,
        name: "Helecho arborescente",
        scientificName: "Cyathea mexicana",
        category: "flora",
        status: "vulnerable",
        region: "sur",
        image: "https://inaturalist-open-data.s3.amazonaws.com/photos/108997607/large.jpg",
        source: "SEMARNAT",
        description: "Helecho de gran tamaño que puede alcanzar varios metros de altura. Es una especie relicta de épocas geológicas pasadas.",
        distribution: "Bosques nubosos de Chiapas y Oaxaca.",
        conservation: "Vulnerable debido a la destrucción de su hábitat y recolección excesiva."
    },
    {
        id: 18,
        name: "Armadillo de cola desnuda",
        scientificName: "Cabassous centralis",
        category: "fauna",
        status: "vulnerable",
        region: "sur",
        image: "https://static.inaturalist.org/photos/106214403/large.jpeg",
        source: "UICN",
        description: "Armadillo de hábitos nocturnos con una cola característica sin placas óseas. Especializado en alimentarse de hormigas y termitas.",
        distribution: "Selvas del sureste de México hasta Colombia.",
        conservation: "Vulnerable por pérdida de hábitat y caza para consumo humano."
    },
    {
        id: 19,
        name: "Pino chino",
        scientificName: "Pinus ayacahuite",
        category: "flora",
        status: "estable",
        region: "centro",
        image: "https://static.inaturalist.org/photos/62397622/large.jpeg",
        source: "CONABIO",
        description: "Pino de gran altura con acículas largas y suaves. Valorado por su madera y como árbol ornamental.",
        distribution: "Sierra Madre del Sur y Eje Neovolcánico.",
        conservation: "Estado estable aunque afectado por tala selectiva en algunas áreas."
    },
    {
        id: 20,
        name: "Tucán pico de canoa",
        scientificName: "Ramphastos sulfuratus",
        category: "fauna",
        status: "amenazada",
        region: "sur",
        image: "https://inaturalist-open-data.s3.amazonaws.com/photos/5456585/original.jpg",
        source: "SEMARNAT",
        description: "Ave colorida con un enorme pico multicolor. Importante dispersor de semillas en las selvas tropicales.",
        distribution: "Selvas del sureste de México hasta Colombia.",
        conservation: "Amenazada por pérdida de hábitat y captura para el comercio de mascotas."
    },
    {
        id: 21,
        name: "Venado cola blanca",
        scientificName: "Odocoileus virginianus mexicanus",
        category: "fauna",
        status: "estable",
        region: "centro",
        image: "https://www.gob.mx/cms/uploads/article/main_image/75871/17861818_1311157518938803_5192662973946597958_nnevado_1VEANDO_COLA_BLANCA_.jpg",
        source: "UICN",
        description: "Subespecie de venado cola blanca adaptada a diversos hábitats. Es una especie cinegética importante.",
        distribution: "Bosques y matorrales del centro y sur de México.",
        conservation: "Estado estable aunque algunas poblaciones están en declive por caza excesiva."
    },
    {
        id: 22,
        name: "Copal",
        scientificName: "Bursera bipinnata",
        category: "flora",
        status: "vulnerable",
        region: "centro",
        image: "https://inaturalist-open-data.s3.amazonaws.com/photos/70104019/original.jpeg",
        source: "CONABIO",
        description: "Árbol resinoso utilizado desde la época prehispánica para ceremonias religiosas y medicinales.",
        distribution: "Bosques tropicales secos del centro y sur de México.",
        conservation: "Vulnerable por sobreexplotación de su resina y pérdida de hábitat."
    },
    {
        id: 23,
        name: "Jaguar",
        scientificName: "Panthera onca",
        category: "fauna",
        status: "en_peligro",
        region: "sur",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/1200px-Standing_jaguar.jpg",
        source: "SEMARNAT",
        description: "El felino más grande de América y tercero en el mundo. Es un depredador tope crucial para el equilibrio ecológico.",
        distribution: "Selvas del sureste de México hasta Argentina.",
        conservation: "En peligro por pérdida de hábitat y caza furtiva."
    },
    {
        id: 24,
        name: "Ahuehuete",
        scientificName: "Taxodium mucronatum",
        category: "flora",
        status: "estable",
        region: "centro",
        image: "https://algarabia.com/wp-content/uploads/2022/05/algarabia-20-pkjvra6kdxlinx293y3zyodszqe4vnkvu381jhj6ao.jpg",
        source: "UICN",
        description: "Árbol nacional de México, conocido por su longevidad y gran tamaño. El Árbol del Tule es famoso por su enorme tronco.",
        distribution: "Riberas de ríos y zonas pantanosas del centro y sur de México.",
        conservation: "Estado estable aunque algunas poblaciones están amenazadas por desecación de humedales."
    },
    {
        id: 25,
        name: "Cenzontle",
        scientificName: "Mimus polyglottos",
        category: "fauna",
        status: "estable",
        region: "centro",
        image: "https://inaturalist-open-data.s3.amazonaws.com/photos/142697277/original.jpg",
        source: "CONABIO",
        description: "Ave conocida por su capacidad de imitar el canto de otras aves y sonidos del ambiente. Importante en la cultura mexicana.",
        distribution: "Todo México en diversos hábitats, desde zonas urbanas hasta bosques.",
        conservation: "Estado estable y adaptable a ambientes modificados por el hombre."
    },
    {
        id: 26,
        name: "Peyote",
        scientificName: "Lophophora williamsii",
        category: "flora",
        status: "amenazada",
        region: "norte",
        image: "https://inaturalist-open-data.s3.amazonaws.com/photos/7899361/original.jpeg",
        source: "SEMARNAT",
        description: "Cactus pequeño y sin espinas con propiedades psicoactivas. Usado tradicionalmente en rituales indígenas.",
        distribution: "Desiertos del norte y centro de México.",
        conservation: "Amenazada por sobreexplotación y tráfico ilegal."
    },
    {
        id: 27,
        name: "Tecolote bajeño",
        scientificName: "Glaucidium brasilianum",
        category: "fauna",
        status: "estable",
        region: "sur",
        image: "https://static.inaturalist.org/photos/166991696/large.jpg",
        source: "UICN",
        description: "Pequeño búho de hábitos diurnos. Controlador natural de roedores e insectos.",
        distribution: "Bosques y matorrales del centro y sur de México.",
        conservation: "Estado estable aunque sensible a pesticidas y pérdida de hábitat."
    },
    {
        id: 28,
        name: "Izote",
        scientificName: "Yucca guatemalensis",
        category: "flora",
        status: "estable",
        region: "sur",
        image: "https://inaturalist-open-data.s3.amazonaws.com/photos/248208/large.jpg",
        source: "CONABIO",
        description: "Planta de la familia de los agaves con flores blancas comestibles. Importante en la gastronomía tradicional.",
        distribution: "Zonas áridas y semiáridas del centro y sur de México.",
        conservation: "Estado estable debido a su cultivo como planta ornamental y alimenticia."
    },
    {
        id: 29,
        name: "Mapache pigmeo",
        scientificName: "Procyon pygmaeus",
        category: "fauna",
        status: "en_peligro",
        region: "sur",
        image: "https://inaturalist-open-data.s3.amazonaws.com/photos/908082/original.jpg",
        source: "SEMARNAT",
        description: "Subespecie de mapache endémica de la isla Cozumel. Más pequeño que sus parientes continentales.",
        distribution: "Exclusivamente en la isla Cozumel, Quintana Roo.",
        conservation: "En peligro crítico por desarrollo turístico y especies invasoras."
    },
    {
        id: 30,
        name: "Pino piñonero",
        scientificName: "Pinus cembroides",
        category: "flora",
        status: "estable",
        region: "norte",
        image: "https://inaturalist-open-data.s3.amazonaws.com/photos/236967/original.jpg",
        source: "UICN",
        description: "Pino de tamaño mediano que produce piñones comestibles. Importante en los ecosistemas áridos.",
        distribution: "Zonas semiáridas del norte y centro de México.",
        conservation: "Estado estable aunque afectado por tala ilegal en algunas regiones."
    },
    {
        id: 31,
        name: "Tortuga de caja",
        scientificName: "Terrapene carolina mexicana",
        category: "fauna",
        status: "vulnerable",
        region: "centro",
        image: "https://inaturalist-open-data.s3.amazonaws.com/photos/24069708/original.jpeg",
        source: "CONABIO",
        description: "Tortuga terrestre que puede cerrar completamente su caparazón para protegerse. Subespecie endémica de México.",
        distribution: "Bosques templados del centro y este de México.",
        conservation: "Vulnerable por pérdida de hábitat y comercio ilegal como mascota."
    },
    {
        id: 32,
        name: "Ceiba",
        scientificName: "Ceiba pentandra",
        category: "flora",
        status: "estable",
        region: "sur",
        image: "https://inaturalist-open-data.s3.amazonaws.com/photos/32279278/large.jpg",
        source: "SEMARNAT",
        description: "Árbol gigantesco sagrado para las culturas mesoamericanas. Puede alcanzar más de 60 metros de altura.",
        distribution: "Selvas húmedas del sureste de México.",
        conservation: "Estado estable aunque algunas poblaciones están amenazadas por deforestación."
    },
    {
        id: 33,
        name: "Coatí de nariz blanca",
        scientificName: "Nasua narica",
        category: "fauna",
        status: "estable",
        region: "sur",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNtaXdSekKrrwPpGCPa0s0Zrenv7diKngqjw&s",
        source: "UICN",
        description: "Mamífero omnívoro pariente de los mapaches. Vive en grupos y es muy sociable.",
        distribution: "Bosques y selvas del centro y sur de México.",
        conservation: "Estado estable aunque vulnerable a la caza y pérdida de hábitat."
    },
    {
        id: 34,
        name: "Flor de mayo",
        scientificName: "Plumeria rubra",
        category: "flora",
        status: "estable",
        region: "sur",
        image: "https://inaturalist-open-data.s3.amazonaws.com/photos/78400/large.jpg",
        source: "CONABIO",
        description: "Planta ornamental con flores muy aromáticas. Utilizada en jardinería y en ceremonias tradicionales.",
        distribution: "Bosques tropicales del sureste de México.",
        conservation: "Estado estable debido a su cultivo extensivo como ornamental."
    },
    {
        id: 35,
        name: "Pájaro bandera",
        scientificName: "Euptilotis neoxenus",
        category: "fauna",
        status: "amenazada",
        region: "centro",
        image: "https://elmunicipalqro.com/wp-content/uploads/2023/09/Coa.jpg",
        source: "SEMARNAT",
        description: "Ave de la familia de los quetzales con plumaje verde iridiscente. Endémica de las barrancas del occidente de México.",
        distribution: "Bosques de pino-encino de la Sierra Madre Occidental.",
        conservation: "Amenazada por pérdida de hábitat y captura ilegal."
    },
    {
        id: 36,
        name: "Chicozapote",
        scientificName: "Manilkara zapota",
        category: "flora",
        status: "estable",
        region: "sur",
        image: "https://static.inaturalist.org/photos/35706732/medium.jpg",
        source: "UICN",
        description: "Árbol que produce el chicle natural. Su fruto es comestible y muy apreciado.",
        distribution: "Selvas del sureste de México y Centroamérica.",
        conservation: "Estado estable aunque algunas poblaciones están amenazadas por deforestación."
    },
    {
        id: 37,
        name: "Iguana negra",
        scientificName: "Ctenosaura pectinata",
        category: "fauna",
        status: "vulnerable",
        region: "sur",
        image: "https://iguanas.shop/wp-content/uploads/2018/12/ctenosaura-pectinata-hero.jpg",
        source: "CONABIO",
        description: "Lagarto grande y robusto que habita en zonas tropicales. Importante en el control de insectos.",
        distribution: "Costas del Pacífico desde Sinaloa hasta Chiapas.",
        conservation: "Vulnerable por pérdida de hábitat y caza para consumo humano."
    },
    {
        id: 38,
        name: "Palo de rosa",
        scientificName: "Tabebuia rosea",
        category: "flora",
        status: "estable",
        region: "sur",
        image: "https://oem.com.mx/elsoldetampico/img/16364987/1681670539/BASE_LANDSCAPE/1200/image.webp",
        source: "SEMARNAT",
        description: "Árbol ornamental que produce espectaculares flores rosadas. Madera valiosa en ebanistería.",
        distribution: "Selvas del sureste de México y Centroamérica.",
        conservation: "Estado estable aunque afectado por tala selectiva en algunas áreas."
    },
    {
        id: 39,
        name: "Zorro gris",
        scientificName: "Urocyon cinereoargenteus",
        category: "fauna",
        status: "estable",
        region: "norte",
        image: "https://www.fundacionunam.org.mx/wp-content/uploads/2017/09/zorra_contenido2.jpg",
        source: "UICN",
        description: "Pequeño cánido omnívoro que puede trepar árboles. Importante controlador de roedores.",
        distribution: "Diversos hábitats en todo México, especialmente en el norte.",
        conservation: "Estado estable aunque algunas poblaciones están en declive."
    },
    {
        id: 40,
        name: "Copalchi",
        scientificName: "Hintonia latiflora",
        category: "flora",
        status: "vulnerable",
        region: "centro",
        image: "https://inaturalist-open-data.s3.amazonaws.com/photos/21038354/large.jpg",
        source: "CONABIO",
        description: "Planta medicinal utilizada tradicionalmente para tratar la diabetes y fiebres.",
        distribution: "Bosques tropicales secos del centro y occidente de México.",
        conservation: "Vulnerable por sobreexplotación de su corteza medicinal."
    },
    {
        id: 41,
        name: "Tortuga casquito",
        scientificName: "Kinosternon integrum",
        category: "fauna",
        status: "amenazada",
        region: "centro",
        image: "https://www.gob.mx/cms/uploads/press/main_image/259788/post_Tortuga_casquito_de_Puerto_Vallarta__Foto_Taggert_Butterfield_.jpg",
        source: "SEMARNAT",
        description: "Tortuga semiacuática pequeña con caparazón flexible. Endémica de los sistemas fluviales del centro de México.",
        distribution: "Ríos y arroyos del Eje Neovolcánico.",
        conservation: "Amenazada por contaminación de cuerpos de agua y captura ilegal."
    },
    {
        id: 42,
        name: "Palo mulato",
        scientificName: "Bursera simaruba",
        category: "flora",
        status: "estable",
        region: "sur",
        image: "https://inaturalist-open-data.s3.amazonaws.com/photos/1709197/original.jpg",
        source: "UICN",
        description: "Árbol con corteza rojiza que se desprende en láminas. Resina utilizada en medicina tradicional.",
        distribution: "Selvas y bosques tropicales del sureste de México.",
        conservation: "Estado estable y resistente a perturbaciones."
    },
    {
        id: 43,
        name: "Chara pecho negro",
        scientificName: "Cyanocorax dickeyi",
        category: "fauna",
        status: "en_peligro",
        region: "centro",
        image: "https://live.staticflickr.com/65535/51065011448_c2104324ed_b.jpg",
        source: "CONABIO",
        description: "Ave endémica de la Sierra Madre Occidental con llamativo plumaje azul y negro. Vive en grupos ruidosos.",
        distribution: "Bosques de pino-encino de la Sierra Madre Occidental.",
        conservation: "En peligro por pérdida de hábitat y fragmentación de bosques."
    },
    {
        id: 44,
        name: "Huanacaxtle",
        scientificName: "Enterolobium cyclocarpum",
        category: "flora",
        status: "estable",
        region: "sur",
        image: "https://img1.wsimg.com/isteam/ip/b3c70235-12b7-463c-b0eb-b033222ea800/arbol-de-guanacaste.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1280",
        source: "SEMARNAT",
        description: "Árbol grande con frutos en forma de oreja. Importante en la restauración de suelos degradados.",
        distribution: "Selvas secas del Pacífico mexicano.",
        conservation: "Estado estable aunque afectado por deforestación en algunas áreas."
    },
    {
        id: 45,
        name: "Sapo de cresta",
        scientificName: "Incilius cristatus",
        category: "fauna",
        status: "en_peligro",
        region: "centro",
        image: "https://inaturalist-open-data.s3.amazonaws.com/photos/531358/original.JPG",
        source: "UICN",
        description: "Sapo endémico con crestas craneales características. Especialista en arroyos de montaña.",
        distribution: "Bosques nublados de Veracruz y Puebla.",
        conservation: "En peligro crítico por contaminación de arroyos y quitridiomicosis."
    },
    {
        id: 46,
        name: "Guayacán",
        scientificName: "Guaiacum coulteri",
        category: "flora",
        status: "amenazada",
        region: "sur",
        image: "https://www.debate.com.mx/__export/1718555122325/sites/debate/img/2024/06/16/guayacan-4.jpg_347796135.jpg",
        source: "CONABIO",
        description: "Árbol de crecimiento lento con madera extremadamente dura. Flores azules muy llamativas.",
        distribution: "Bosques tropicales secos del Pacífico mexicano.",
        conservation: "Amenazada por tala ilegal y sobreexplotación de su madera."
    },
    {
        id: 47,
        name: "Rana de árbol de Morelet",
        scientificName: "Agalychnis moreletii",
        category: "fauna",
        status: "en_peligro",
        region: "sur",
        image: "https://inaturalist-open-data.s3.amazonaws.com/photos/61830653/original.jpg",
        source: "SEMARNAT",
        description: "Rana arborícola con ojos rojos y cuerpo verde brillante. Endémica de las selvas del sureste.",
        distribution: "Selvas húmedas de Chiapas y Guatemala.",
        conservation: "En peligro por pérdida de hábitat y quitridiomicosis."
    },
    {
        id: 48,
        name: "Palo santo",
        scientificName: "Bursera graveolens",
        category: "flora",
        status: "estable",
        region: "sur",
        image: "https://inaturalist-open-data.s3.amazonaws.com/photos/1436324/original.JPG",
        source: "UICN",
        description: "Árbol aromático cuya resina se usa en perfumería y ceremonias. Madera utilizada en artesanías.",
        distribution: "Bosques secos del Pacífico mexicano.",
        conservation: "Estado estable aunque afectado por tala selectiva."
    },
    {
        id: 49,
        name: "Mosquero cardenalito",
        scientificName: "Pyrocephalus rubinus mexicanus",
        category: "fauna",
        status: "amenazada",
        region: "centro",
        image: "https://static.inaturalist.org/photos/166991696/large.jpg",
        source: "CONABIO",
        description: "Ave pequeña con plumaje rojo brillante en los machos. Subespecie endémica del centro de México.",
        distribution: "Valles y llanuras del centro de México.",
        conservation: "Amenazada por pérdida de hábitat y uso de pesticidas."
    },
    {
        id: 50,
        name: "Pitaya",
        scientificName: "Stenocereus queretaroensis",
        category: "flora",
        status: "estable",
        region: "centro",
        image: "https://www.sabermas.umich.mx/images/stories/61/ARTICULO9B.jpg",
        source: "SEMARNAT",
        description: "Cactus columnar que produce frutos dulces muy apreciados. Cultivado tradicionalmente en el Bajío.",
        distribution: "Regiones áridas del centro y occidente de México.",
        conservation: "Estado estable debido a su cultivo como frutal."
    },
    {
        id: 51,
        name: "Teporingo",
        scientificName: "Romerolagus diazi",
        category: "fauna",
        status: "en_peligro",
        region: "centro",
        image: "https://www.mexicodesconocido.com.mx/wp-content/uploads/2018/09/conejo-de-los-volcanes.jpg",
        source: "UICN",
        description: "También conocido como conejo de los volcanes, es el conejo más pequeño de México y endémico del Eje Neovolcánico.",
        distribution: "Slopes of Popocatépetl, Iztaccíhuatl y Pelado volcanoes.",
        conservation: "En peligro por pérdida de hábitat y depredación por especies introducidas."
    },
    {
        id: 52,
        name: "Magnolia mexicana",
        scientificName: "Magnolia dealbata",
        category: "flora",
        status: "en_peligro",
        region: "sur",
        image: "https://inaturalist-open-data.s3.amazonaws.com/photos/50032286/medium.jpeg",
        source: "CONABIO",
        description: "Árbol con flores grandes y aromáticas, considerado un fósil viviente por su antigüedad evolutiva.",
        distribution: "Bosques nubosos de Oaxaca y Veracruz.",
        conservation: "En peligro por deforestación y cambio climático."
    },
    {
        id: 53,
        name: "Tapir centroamericano",
        scientificName: "Tapirus bairdii",
        category: "fauna",
        status: "en_peligro",
        region: "sur",
        image: "https://static.inaturalist.org/photos/119218040/large.jpg",
        source: "SEMARNAT",
        description: "El mamífero terrestre más grande de Mesoamérica, crucial para la dispersión de semillas.",
        distribution: "Selvas de Chiapas y Península de Yucatán.",
        conservation: "En peligro por caza y pérdida de hábitat."
    },
    {
        id: 54,
        name: "Orquídea negra",
        scientificName: "Prosthechea cochleata",
        category: "flora",
        status: "vulnerable",
        region: "sur",
        image: "https://img.travesiasdigital.com/cdn-cgi/image/width=1000,quality=90,format=auto,onerror=redirect/2019/05/ver-orquideas-en-el-mundo.jpg",
        source: "CONABIO",
        description: "Orquídea epífita con flores de color púrpura oscuro casi negro. Flor emblemática de Belice pero presente en México.",
        distribution: "Selvas húmedas de Quintana Roo y Campeche.",
        conservation: "Vulnerable por colecta ilegal y deforestación."
    },
    {
        id: 55,
        name: "Cotorra serrana occidental",
        scientificName: "Rhynchopsitta pachyrhyncha",
        category: "fauna",
        status: "en_peligro",
        region: "norte",
        image: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Rhynchopsitta_pachyrhyncha_-captive_-three-8a.jpg",
        source: "UICN",
        description: "Loro endémico de los bosques de coníferas del norte de México, uno de los más amenazados del país.",
        distribution: "Sierra Madre Occidental (Chihuahua y Durango).",
        conservation: "En peligro por tala ilegal y tráfico de especies."
    },
    {
        id: 56,
        name: "Pino real",
        scientificName: "Pinus montezumae",
        category: "flora",
        status: "estable",
        region: "centro",
        image: "https://inaturalist-open-data.s3.amazonaws.com/photos/4673593/large.jpeg",
        source: "SEMARNAT",
        description: "Pino de gran altura con acículas largas, nombrado en honor al emperador Moctezuma.",
        distribution: "Eje Neovolcánico y Sierra Madre Oriental.",
        conservation: "Estado estable aunque afectado por incendios forestales."
    },
    {
        id: 57,
        name: "Hocofaisán",
        scientificName: "Crax rubra",
        category: "fauna",
        status: "amenazada",
        region: "sur",
        image: "https://inaturalist-open-data.s3.amazonaws.com/photos/131084819/large.jpg",
        source: "CONABIO",
        description: "Ave grande y colorida que habita en el suelo de las selvas. Los machos tienen protuberancias amarillas en el pico.",
        distribution: "Selvas de Veracruz, Oaxaca y Península de Yucatán.",
        conservation: "Amenazada por caza y pérdida de hábitat."
    },
    {
        id: 58,
        name: "Colorín",
        scientificName: "Erythrina coralloides",
        category: "flora",
        status: "estable",
        region: "centro",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Naked_Coral_Tree_-_Erythrina_coralloides_03.JPG/1200px-Naked_Coral_Tree_-_Erythrina_coralloides_03.JPG",
        source: "UICN",
        description: "Árbol con vistosas flores rojas utilizadas en la medicina tradicional. Atrae a colibríes y otras aves.",
        distribution: "Bosques tropicales secos del centro de México.",
        conservation: "Estado estable aunque afectado por urbanización."
    },
    {
        id: 59,
        name: "Murciélago magueyero menor",
        scientificName: "Leptonycteris yerbabuenae",
        category: "fauna",
        status: "amenazada",
        region: "norte",
        image: "https://www.dgcs.unam.mx/boletin/bdboletin/multimedia/WAV131018/627(1).jpg",
        source: "SEMARNAT",
        description: "Murciélago nectarívoro crucial para la polinización de cactáceas como el agave.",
        distribution: "Zonas áridas del norte y centro de México.",
        conservation: "Amenazado por pérdida de hábitat y uso de pesticidas."
    },
    {
        id: 60,
        name: "Peyotillo",
        scientificName: "Lophophora diffusa",
        category: "flora",
        status: "vulnerable",
        region: "norte",
        image: "https://inaturalist-open-data.s3.amazonaws.com/photos/85540007/large.jpg",
        source: "CONABIO",
        description: "Cactus pequeño sin espinas, pariente del peyote pero con menor contenido de mescalina.",
        distribution: "Desiertos de San Luis Potosí y Querétaro.",
        conservation: "Vulnerable por colecta ilegal y tráfico."
    },
    {
        id: 61,
        name: "Salamandra de pie plano",
        scientificName: "Chiropterotriton magnipes",
        category: "fauna",
        status: "en_peligro",
        region: "centro",
        image: "https://inaturalist-open-data.s3.amazonaws.com/photos/338437/large.jpg",
        source: "UICN",
        description: "Salamandra endémica con pies palmeados que habita en cuevas húmedas.",
        distribution: "Cuevas de la Sierra Madre Oriental en San Luis Potosí.",
        conservation: "En peligro crítico por contaminación de acuíferos."
    },
    {
        id: 62,
        name: "Palo fierro",
        scientificName: "Olneya tesota",
        category: "flora",
        status: "estable",
        region: "norte",
        image: "https://inaturalist-open-data.s3.amazonaws.com/photos/73644003/original.jpg",
        source: "SEMARNAT",
        description: "Árbol del desierto con madera extremadamente dura, utilizado en artesanías.",
        distribution: "Desierto de Sonora y Baja California.",
        conservation: "Estado estable aunque afectado por tala selectiva."
    },
    {
        id: 63,
        name: "Rana fisgona mayor",
        scientificName: "Eleutherodactylus grandis",
        category: "fauna",
        status: "en_peligro",
        region: "sur",
        image: "https://www.gaceta.unam.mx/wp-content/uploads/2024/08/240829-Aca1-des-f1-Ranita-fisgona.jpg",
        source: "CONABIO",
        description: "Rana endémica de gran tamaño que habita en las bromelias de los árboles.",
        distribution: "Selvas de Los Tuxtlas, Veracruz.",
        conservation: "En peligro por deforestación y cambio climático."
    },
    {
        id: 64,
        name: "Palo blanco",
        scientificName: "Tabebuia donnel-smithii",
        category: "flora",
        status: "vulnerable",
        region: "sur",
        image: "https://static.inaturalist.org/photos/29561142/medium.jpg",
        source: "UICN",
        description: "Árbol que produce espectaculares flores amarillas a inicios de la primavera.",
        distribution: "Selvas caducifolias de Chiapas y Oaxaca.",
        conservation: "Vulnerable por deforestación para agricultura."
    },
    {
        id: 65,
        name: "Pájaro carpintero imperial",
        scientificName: "Campephilus imperialis",
        category: "fauna",
        status: "extinto",
        region: "norte",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO8VCkhPjKH6ra4ps_JJEPbVbRrGrazHJzvg&s",
        source: "SEMARNAT",
        description: "El pájaro carpintero más grande del mundo, endémico de los bosques de pino de México.",
        distribution: "Antiguamente en Sierra Madre Occidental (último avistamiento en 1956).",
        conservation: "Considerado extinto debido a la tala de bosques maduros."
    },
    {
        id: 66,
        name: "Pitahaya dulce",
        scientificName: "Stenocereus thurberi",
        category: "flora",
        status: "estable",
        region: "norte",
        image: "https://www.gob.mx/cms/uploads/image/file/287332/pitahaya4.jpg",
        source: "CONABIO",
        description: "Cactus columnar que produce frutos dulces muy apreciados en el noroeste de México.",
        distribution: "Desiertos de Sonora y Baja California.",
        conservation: "Estado estable aunque afectado por sobreexplotación de frutos."
    },
    {
        id: 67,
        name: "Mono araña de manos negras",
        scientificName: "Ateles geoffroyi",
        category: "fauna",
        status: "en_peligro",
        region: "sur",
        image: "https://pasopacifico.org/wp-content/uploads/2024/02/2424561636_e5fa3a7b95_o-copy-1024x682.jpg",
        source: "UICN",
        description: "Primate con extremidades largas y cola prensil, crucial para la dispersión de semillas.",
        distribution: "Selvas de Chiapas, Tabasco y Península de Yucatán.",
        conservation: "En peligro por deforestación y caza."
    },
    {
        id: 68,
        name: "Palo de arco",
        scientificName: "Lysiloma acapulcense",
        category: "flora",
        status: "estable",
        region: "sur",
        image: "https://i0.wp.com/forestanativa.com/wp-content/uploads/2019/07/img_2011-1.jpg?w=1082&h=609&ssl=1",
        source: "SEMARNAT",
        description: "Árbol utilizado tradicionalmente para fabricar arcos y otros utensilios.",
        distribution: "Bosques tropicales secos del Pacífico mexicano.",
        conservation: "Estado estable aunque afectado por tala selectiva."
    },
    {
        id: 69,
        name: "Lagarto alicante",
        scientificName: "Phrynosoma orbiculare",
        category: "fauna",
        status: "vulnerable",
        region: "centro",
        image: "https://oem.com.mx/elheraldodechiapas/img/13996783/1726632105/BASE_LANDSCAPE/480/image.webp",
        source: "CONABIO",
        description: "Lagarto cornudo con cuerpo aplanado que se alimenta principalmente de hormigas.",
        distribution: "Zonas áridas del Altiplano Central.",
        conservation: "Vulnerable por pérdida de hábitat y colecta ilegal."
    },
    {
        id: 70,
        name: "Tlachichinole",
        scientificName: "Hamelia patens",
        category: "flora",
        status: "estable",
        region: "sur",
        image: "https://inaturalist-open-data.s3.amazonaws.com/photos/14131597/original.jpeg",
        source: "UICN",
        description: "Arbusto con flores rojas que atrae colibríes. Usado en medicina tradicional para tratar heridas.",
        distribution: "Selvas y bosques tropicales del sureste.",
        conservation: "Estado estable y ampliamente distribuido."
    },
    {
        id: 71,
        name: "Cangrejo de agua dulce",
        scientificName: "Pseudothelphusa dugesi",
        category: "fauna",
        status: "en_peligro",
        region: "centro",
        image: "https://static.inaturalist.org/photos/3041877/large.jpg",
        source: "SEMARNAT",
        description: "Cangrejo endémico de los ríos del centro de México, indicador de calidad del agua.",
        distribution: "Ríos de Morelos y Estado de México.",
        conservation: "En peligro por contaminación de ríos y extracción de agua."
    },
    {
        id: 72,
        name: "Palo de rosa de Michoacán",
        scientificName: "Tabebuia rosea var. michoacana",
        category: "flora",
        status: "amenazada",
        region: "centro",
        image: "https://i0.wp.com/nubedemonte.com/wp-content/uploads/2021/03/lapacho-rosado.jpg?resize=1900%2C1425&ssl=1",
        source: "CONABIO",
        description: "Variedad endémica del palo de rosa con flores más intensamente rosadas.",
        distribution: "Bosques tropicales caducifolios de Michoacán.",
        conservation: "Amenazada por deforestación para cultivos de aguacate."
    },
    {
        id: 73,
        name: "Cacique mexicano",
        scientificName: "Cassiculus melanicterus",
        category: "fauna",
        status: "estable",
        region: "centro",
        image: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/616066511/320",
        source: "UICN",
        description: "Ave de plumaje amarillo y negro que construye nidos colgantes espectaculares.",
        distribution: "Bosques tropicales del Pacífico mexicano.",
        conservation: "Estado estable aunque sensible a perturbaciones."
    },
    {
        id: 74,
        name: "Palo de Brasil",
        scientificName: "Haematoxylum brasiletto",
        category: "flora",
        status: "estable",
        region: "sur",
        image: "https://media.admagazine.com/photos/618a6377af428eae6e0b59ba/4:3/w_1416,h_1062,c_limit/77575.jpg",
        source: "SEMARNAT",
        description: "Árbol pequeño con madera rojiza utilizada para obtener tintes naturales.",
        distribution: "Bosques secos de la costa del Pacífico.",
        conservation: "Estado estable aunque afectado por tala selectiva."
    },
    {
        id: 75,
        name: "Rana de Tláloc",
        scientificName: "Tlalocohyla smithii",
        category: "fauna",
        status: "en_peligro",
        region: "sur",
        image: "https://holacarolina.org/wp-content/uploads/2022/04/WhatsApp-Image-2022-04-19-at-7.53.41-PM.jpeg",
        source: "CONABIO",
        description: "Rana arborícola endémica con llamativos colores verdes y amarillos.",
        distribution: "Selvas húmedas de Chiapas y Oaxaca.",
        conservation: "En peligro por deforestación y cambio climático."
    },
    {
        id: 76,
        name: "Palo de hule",
        scientificName: "Castilla elastica",
        category: "flora",
        status: "estable",
        region: "sur",
        image: "https://inaturalist-open-data.s3.amazonaws.com/photos/273741654/medium.jpeg",
        source: "UICN",
        description: "Árbol que produce látex natural, utilizado por culturas prehispánicas para hacer pelotas de hule.",
        distribution: "Selvas húmedas del sureste de México.",
        conservation: "Estado estable aunque afectado por deforestación."
    },
    {
        id: 77,
        name: "Mosquero real",
        scientificName: "Onychorhynchus coronatus mexicanus",
        category: "fauna",
        status: "vulnerable",
        region: "sur",
        image: "https://inaturalist-open-data.s3.amazonaws.com/photos/5864947/large.jpeg",
        source: "SEMARNAT",
        description: "Ave pequeña con una espectacular cresta roja que despliega durante el cortejo.",
        distribution: "Selvas húmedas de Chiapas y Oaxaca.",
        conservation: "Vulnerable por pérdida de hábitat."
    },
    {
        id: 78,
        name: "Palo de zope",
        scientificName: "Simarouba glauca",
        category: "flora",
        status: "estable",
        region: "sur",
        image: "https://inaturalist-open-data.s3.amazonaws.com/photos/59825163/original.jpeg",
        source: "CONABIO",
        description: "Árbol con propiedades medicinales contra la malaria y enfermedades gastrointestinales.",
        distribution: "Selvas de la Península de Yucatán.",
        conservation: "Estado estable aunque afectado por deforestación."
    },
    {
        id: 79,
        name: "Culebra listonada de Zempoaltepec",
        scientificName: "Thamnophis scaliger",
        category: "fauna",
        status: "en_peligro",
        region: "sur",
        image: "https://inaturalist-open-data.s3.amazonaws.com/photos/10964814/large.jpg",
        source: "UICN",
        description: "Serpiente endémica de las montañas de Oaxaca, especialista en ambientes acuáticos.",
        distribution: "Alrededores del Cerro Zempoaltepec, Oaxaca.",
        conservation: "En peligro por contaminación de arroyos."
    },
    {
        id: 80,
        name: "Palo de Campeche",
        scientificName: "Haematoxylum campechianum",
        category: "flora",
        status: "estable",
        region: "sur",
        image: "https://inaturalist-open-data.s3.amazonaws.com/photos/115898889/large.jpeg",
        source: "SEMARNAT",
        description: "Árbol histórico cuya madera producía el tinte azul utilizado en Europa durante siglos.",
        distribution: "Selvas de Campeche y Quintana Roo.",
        conservation: "Estado estable aunque históricamente sobreexplotado."
    },
    {
        id: 81,
        name: "Tortuga del bolsón",
        scientificName: "Gopherus flavomarginatus",
        category: "fauna",
        status: "en_peligro",
        region: "norte",
        image: "https://oem.com.mx/elsoldelalaguna/img/18735168/1604736432/BASE_LANDSCAPE/480/image.webp",
        source: "CONABIO",
        description: "La tortuga terrestre más grande de Norteamérica, endémica del Bolsón de Mapimí.",
        distribution: "Zona del Bolsón de Mapimí (Durango, Chihuahua, Coahuila).",
        conservation: "En peligro crítico por pérdida de hábitat y tráfico ilegal."
    },
    {
        id: 82,
        name: "Palo de rosa de Tehuantepec",
        scientificName: "Tabebuia rosea var. angustata",
        category: "flora",
        status: "amenazada",
        region: "sur",
        image: "https://escapadas.mexicodesconocido.com.mx/wp-content/uploads/2023/04/palo-de-rosa-depositphotos.jpg",
        source: "UICN",
        description: "Variedad del palo de rosa con flores más pequeñas y hojas angostas.",
        distribution: "Istmo de Tehuantepec (Oaxaca).",
        conservation: "Amenazada por expansión agrícola y ganadera."
    },
    {
        id: 83,
        name: "Chara enana",
        scientificName: "Cyanolyca nana",
        category: "fauna",
        status: "en_peligro",
        region: "sur",
        image: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/242620021/1800",
        source: "SEMARNAT",
        description: "Ave pequeña endémica de los bosques nubosos del sureste, una de las charas más raras de México.",
        distribution: "Bosques nubosos de Oaxaca y Veracruz.",
        conservation: "En peligro por fragmentación de hábitat."
    },
    {
        id: 84,
        name: "Palo mulato de Guerrero",
        scientificName: "Bursera excelsa",
        category: "flora",
        status: "vulnerable",
        region: "sur",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9gnoXRc_JEZ9GgZG2Evpe0-I0e2KTsgXVwQ&s",
        source: "CONABIO",
        description: "Árbol endémico con corteza que se desprende en láminas rojizas, pariente del palo mulato común.",
        distribution: "Bosques secos de Guerrero.",
        conservation: "Vulnerable por deforestación para cultivos ilícitos."
    },
    {
        id: 85,
        name: "Sapo de cresta de la Sierra Madre",
        scientificName: "Incilius mazatlanensis",
        category: "fauna",
        status: "vulnerable",
        region: "norte",
        image: "https://inaturalist-open-data.s3.amazonaws.com/photos/531358/original.JPG",
        source: "UICN",
        description: "Sapo con crestas craneales prominentes, endémico de la Sierra Madre Occidental.",
        distribution: "Arroyos de montaña en Sinaloa y Durango.",
        conservation: "Vulnerable por contaminación de arroyos."
    },
    {
        id: 86,
        name: "Palo de hule de Jalisco",
        scientificName: "Ficus petiolaris subsp. palmeri",
        category: "flora",
        status: "amenazada",
        region: "centro",
        image: "https://www.gob.mx/cms/uploads/image/file/369470/hule_hevea_1.jpg",
        source: "SEMARNAT",
        description: "Variedad de higuera estranguladora endémica de cañones del occidente de México.",
        distribution: "Cañones de Jalisco y Colima.",
        conservation: "Amenazada por urbanización y desarrollo turístico."
    },
    {
        id: 87,
        name: "Lagartija espinosa de Cuatro Ciénegas",
        scientificName: "Sceloporus cyanogenys",
        category: "fauna",
        status: "en_peligro",
        region: "norte",
        image: "https://inaturalist-open-data.s3.amazonaws.com/photos/434653066/medium.jpeg",
        source: "CONABIO",
        description: "Lagartija endémica de las pozas de Cuatro Ciénegas, con coloración azulada.",
        distribution: "Exclusivamente en Cuatro Ciénegas, Coahuila.",
        conservation: "En peligro por extracción de agua y especies invasoras."
    },
    {
        id: 88,
        name: "Palo de rosa de Baja California",
        scientificName: "Tabebuia impetiginosa var. palmeri",
        category: "flora",
        status: "vulnerable",
        region: "norte",
        image: "https://tribunadeloscabos.s3.us-west-2.amazonaws.com/2022/12/planta-choyera.jpeg",
        source: "UICN",
        description: "Variedad del palo de rosa adaptada a los ambientes áridos de Baja California.",
        distribution: "Sierras de Baja California Sur.",
        conservation: "Vulnerable por cambio climático y sequías prolongadas."
    },
    {
        id: 89,
        name: "Rana de árbol de la Sierra Madre",
        scientificName: "Sarcohyla bistincta",
        category: "fauna",
        status: "en_peligro",
        region: "centro",
        image: "https://inaturalist-open-data.s3.amazonaws.com/photos/26757031/large.jpeg",
        source: "SEMARNAT",
        description: "Rana arborícola endémica de los bosques nubosos del centro de México.",
        distribution: "Bosques nubosos de Hidalgo y Veracruz.",
        conservation: "En peligro por deforestación y quitridiomicosis."
    },
    {
        id: 90,
        name: "Palo de rosa de Oaxaca",
        scientificName: "Tabebuia rosea var. oaxacana",
        category: "flora",
        status: "amenazada",
        region: "sur",
        image: "https://frankcoronado.com/wp-content/uploads/2021/01/guayacan-rosado-1.jpg",
        source: "CONABIO",
        description: "Variedad endémica del palo de rosa con flores de color rosa más intenso.",
        distribution: "Valles Centrales de Oaxaca.",
        conservation: "Amenazada por expansión urbana en Oaxaca."
    },
    {
        id: 91,
        name: "Carpintero de Strickland",
        scientificName: "Picoides stricklandi",
        category: "fauna",
        status: "vulnerable",
        region: "centro",
        image: "https://inaturalist-open-data.s3.amazonaws.com/photos/8301558/original.jpg",
        source: "UICN",
        description: "Pájaro carpintero endémico de los bosques de pino-encino del centro de México.",
        distribution: "Eje Neovolcánico Transversal.",
        conservation: "Vulnerable por tala selectiva de bosques maduros."
    },
    {
        id: 92,
        name: "Palo de rosa de la Mixteca",
        scientificName: "Tabebuia rosea var. mixtecana",
        category: "flora",
        status: "en_peligro",
        region: "sur",
        image: "https://inaturalist-open-data.s3.amazonaws.com/photos/48615788/large.jpeg",
        source: "SEMARNAT",
        description: "Variedad del palo de rosa adaptada a las condiciones áridas de la Mixteca.",
        distribution: "Mixteca Alta (Oaxaca y Puebla).",
        conservation: "En peligro por desertificación y sobrepastoreo."
    },
    {
        id: 93,
        name: "Salamandra de la Sierra de Juárez",
        scientificName: "Pseudoeurycea juarezi",
        category: "fauna",
        status: "en_peligro",
        region: "sur",
        image: "https://inaturalist-open-data.s3.amazonaws.com/photos/11886585/medium.jpg",
        source: "CONABIO",
        description: "Salamandra endémica de los bosques nubosos de la Sierra de Juárez en Oaxaca.",
        distribution: "Sierra de Juárez, Oaxaca.",
        conservation: "En peligro crítico por cambio climático y deforestación."
    },
    {
        id: 94,
        name: "Palo de rosa de los Tuxtlas",
        scientificName: "Tabebuia rosea var. tuxtlensis",
        category: "flora",
        status: "en_peligro",
        region: "sur",
        image: "https://i.etsystatic.com/11300650/r/il/d23755/2711659455/il_1588xN.2711659455_ibwk.jpg",
        source: "UICN",
        description: "Variedad del palo de rosa endémica de la región de Los Tuxtlas en Veracruz.",
        distribution: "Reserva de la Biosfera Los Tuxtlas.",
        conservation: "En peligro por deforestación para ganadería."
    },
    {
        id: 95,
        name: "Rana de árbol de Los Tuxtlas",
        scientificName: "Ecnomiohyla valancifer",
        category: "fauna",
        status: "en_peligro",
        region: "sur",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUPbrQyhKczGwSMikTI235tFR8rtYxbs4hMw&s",
        source: "SEMARNAT",
        description: "Rana arborícola endémica de la reserva de Los Tuxtlas, una de las más grandes de México.",
        distribution: "Selvas de Los Tuxtlas, Veracruz.",
        conservation: "En peligro crítico por deforestación."
    },
    {
        id: 96,
        name: "Palo de rosa de la Selva Lacandona",
        scientificName: "Tabebuia rosea var. lacandonica",
        category: "flora",
        status: "vulnerable",
        region: "sur",
        image: "https://2img.net/h/2.bp.blogspot.com/-OrTdCyAHUCU/ThN_XF0RvLI/AAAAAAAAACI/iKoGZ8YPRL4/s1600/aaaa.jpg",
        source: "CONABIO",
        description: "Variedad del palo de rosa adaptada a las condiciones húmedas de la Selva Lacandona.",
        distribution: "Selva Lacandona, Chiapas.",
        conservation: "Vulnerable por deforestación y actividades ilegales."
    },
    {
        id: 97,
        name: "Salamandra de la Sierra Mazateca",
        scientificName: "Pseudoeurycea mazateca",
        category: "fauna",
        status: "en_peligro",
        region: "sur",
        image: "https://inaturalist-open-data.s3.amazonaws.com/photos/11887022/medium.jpg",
        source: "UICN",
        description: "Salamandra endémica de los bosques nubosos de la Sierra Mazateca en Oaxaca.",
        distribution: "Sierra Mazateca, Oaxaca.",
        conservation: "En peligro crítico por cambio climático."
    },
    {
        id: 98,
        name: "Palo de rosa del Soconusco",
        scientificName: "Tabebuia rosea var. soconuscana",
        category: "flora",
        status: "amenazada",
        region: "sur",
        image: "https://www.semahn.chiapas.gob.mx/portal/media/noticias/fotos/1648.jpg",
        source: "SEMARNAT",
        description: "Variedad del palo de rosa endémica de la región del Soconusco en Chiapas.",
        distribution: "Planicie costera del Soconusco.",
        conservation: "Amenazada por expansión de cultivos de café y palma."
    },
    {
        id: 99,
        name: "Rana de árbol de la Sierra Madre del Sur",
        scientificName: "Exerodonta abdivita",
        category: "fauna",
        status: "en_peligro",
        region: "sur",
        image: "https://static.inaturalist.org/photos/20797296/medium.jpg",
        source: "CONABIO",
        description: "Rana arborícola endémica de los bosques nubosos de Guerrero.",
        distribution: "Sierra Madre del Sur, Guerrero.",
        conservation: "En peligro por deforestación para cultivos ilícitos."
    },
    {
    id: 100,
    name: "Siempreviva de la Sierra Madre Oriental",
    scientificName: "Echeveria strictiflora",
    category: "flora",
    status: "vulnerable",
    region: "centro",
    image: "https://inaturalist-open-data.s3.amazonaws.com/photos/156318270/large.jpg",
    source: "CONABIO",
    description: "Planta suculenta endémica con rosetas compactas y flores rojas en forma de campana. Crece en acantilados calcáreos.",
    distribution: "Cañones y paredes rocosas de la Sierra Madre Oriental (Hidalgo, Querétaro, San Luis Potosí).",
    conservation: "Vulnerable por colecta ilegal para el mercado de plantas ornamentales y destrucción de su hábitat."
    },
    {
    id: 101,
    name: "Rata canguro de San José",
    scientificName: "Dipodomys gravipes",
    category: "fauna",
    status: "en_peligro_critico",
    region: "norte",
    image: "https://fundacionjcangelcraftacparalaeducacion.wordpress.com/wp-content/uploads/2018/10/rata-canguro-dipodomys-foto-i.jpg",
    source: "UICN",
    description: "Roedor nocturno con patas traseras largas para saltar. Almacena semillas en sus mejillas y es clave para dispersar plantas del desierto.",
    distribution: "Exclusiva del valle de San José (Baja California).",
    conservation: "En peligro crítico por agricultura intensiva. No se avista desde 1986, posiblemente extinta."
    },
    {
    id: 102,
    name: "Salamandra de chocolate",
    scientificName: "Bolitoglossa mexicana",
    category: "fauna",
    status: "vulnerable",
    region: "sur",
    image: "https://inaturalist-open-data.s3.amazonaws.com/photos/115438927/original.jpeg",
    source: "CONABIO",
    description: "Salamandra arbórea con coloración café oscuro y patas palmeadas. Se alimenta de insectos en bromelias y es exclusiva de selvas húmedas.",
    distribution: "Selvas de Chiapas y Tabasco (menos del 5,000 km² de hábitat remanente).",
    conservation: "Vulnerable por deforestación para cultivos de palma africana."
    }
];

const commentsData = {
    // (Aqui se almacenan los comentarios)
};

// Estado de la aplicación
let currentUser = null;
let isAdmin = false;
let currentPage = "home";
let currentSpeciesId = null;
let darkMode = false;
let language = localStorage.getItem('language') || 'es';

// Diccionario de traducciones
const translations = {
    es: {
        // Títulos principales
        mainTitle: "Especies Endémicas de México",
        searchTitle: "Buscar especies endémicas",
        featuredSpecies: "Especies destacadas",
        allSpecies: "Todas las especies endémicas",
        statsTitle: "Estadísticas de especies",
        contactTitle: "Contacto y ayuda",
        helpTitle: "Centro de ayuda",
        
        // Navbar
        home: "Inicio",
        species: "Especies",
        stats: "Estadísticas",
        contact: "Contacto",
        help: "Ayuda",
        login: "Iniciar sesión",
        register: "Registrarse",
        logout: "Cerrar sesión",
        admin: "Admin",
        addSpecies: "Añadir especie",
        
        // Search
        searchPlaceholder: "Buscar por nombre de especie...",
        searchButton: "Buscar",
        allCategories: "Todas las categorías",
        flora: "Flora",
        fauna: "Fauna",
        allRegions: "Todas las regiones",
        north: "Norte",
        center: "Centro",
        south: "Sur",
        allStatus: "Todos los estados",
        endangered: "En peligro",
        threatened: "Amenazada",
        vulnerable: "Vulnerable",
        stable: "Estable",
        
        // Species detail
        backToList: "← Volver al listado",
        scientificName: "Nombre científico",
        source: "Fuente",
        description: "Descripción",
        distribution: "Distribución",
        conservation: "Conservación",
        comments: "Comentarios",
        noComments: "No hay comentarios aún. Sé el primero en comentar.",
        addComment: "Agregar comentario",
        commentPlaceholder: "Escribe tu comentario...",
        postComment: "Publicar comentario",
        
        // Modals
        loginTitle: "Iniciar sesión",
        registerTitle: "Registrarse",
        forgotPassword: "¿Olvidaste tu contraseña?",
        forgotTitle: "Recuperar contraseña",
        forgotInstructions: "Te enviaremos un enlace para restablecer tu contraseña.",
        sendLink: "Enviar enlace",
        fullName: "Nombre completo",
        email: "Correo electrónico",
        password: "Contraseña",
        confirmPassword: "Confirmar contraseña",
        minPassword: "(mínimo 8 caracteres)",
        institutionalEmail: "(@cua.uam.mx)",
        addSpeciesTitle: "Agregar nueva especie",
        editSpeciesTitle: "Editar especie",
        commonName: "Nombre común",
        category: "Categoría",
        selectCategory: "Selecciona una categoría",
        conservationStatus: "Estado de conservación",
        selectStatus: "Selecciona un estado",
        region: "Región",
        selectRegion: "Selecciona una región",
        imageUrl: "Imagen (URL)",
        saveSpecies: "Guardar especie",
        saveChanges: "Guardar cambios",
        deleteConfirm: "Confirmar eliminación",
        deleteMessage: "¿Estás seguro que deseas eliminar esta especie? Esta acción no se puede deshacer.",
        confirmDelete: "Sí, eliminar",
        cancel: "Cancelar",
        
        // Messages
        loginError: "Credenciales incorrectas",
        registerSuccess: "¡Registro exitoso! Ahora puedes iniciar sesión.",
        forgotSuccess: "¡Se ha enviado un enlace de recuperación a tu correo!",
        addSuccess: "¡Especie agregada correctamente!",
        editSuccess: "¡Cambios guardados correctamente!",
        deleteSuccess: "Especie eliminada correctamente",
        
        // Footer
        rights: "© 2025 Especies Endémicas de México. Todos los derechos reservados.",
        sources: "Fuentes: CONABIO, SEMARNAT, UICN Creada por: Diego Jovani Vázquez Hernández",
        
        // Help
        faqTitle: "Preguntas frecuentes",
        guidesTitle: "Guías de uso",
        needHelpTitle: "¿Necesitas más ayuda?",
        contactFormTitle: "Formulario de contacto",
        sendMessage: "Enviar mensaje"
    },
    en: {
        // Títulos principales
        mainTitle: "Especies Endémicas de México",
        searchTitle: "Search endemic species",
        featuredSpecies: "Featured species",
        allSpecies: "All endemic species",
        statsTitle: "Species statistics",
        contactTitle: "Contact and help",
        helpTitle: "Help center",
        
        // Navbar
        home: "Home",
        species: "Species",
        stats: "Statistics",
        contact: "Contact",
        help: "Help",
        login: "Login",
        register: "Register",
        logout: "Logout",
        admin: "Admin",
        addSpecies: "Add species",
        
        // Search
        searchPlaceholder: "Search by species name...",
        searchButton: "Search",
        allCategories: "All categories",
        flora: "Flora",
        fauna: "Fauna",
        allRegions: "All regions",
        north: "North",
        center: "Center",
        south: "South",
        allStatus: "All statuses",
        endangered: "Endangered",
        threatened: "Threatened",
        vulnerable: "Vulnerable",
        stable: "Stable",
        
        // Species detail
        backToList: "← Back to list",
        scientificName: "Scientific name",
        source: "Source",
        description: "Description",
        distribution: "Distribution",
        conservation: "Conservation",
        comments: "Comments",
        noComments: "No comments yet. Be the first to comment.",
        addComment: "Add comment",
        commentPlaceholder: "Write your comment...",
        postComment: "Post comment",
        
        // Modals
        loginTitle: "Login",
        registerTitle: "Register",
        forgotPassword: "Forgot password?",
        forgotTitle: "Recover password",
        forgotInstructions: "We'll send you a link to reset your password.",
        sendLink: "Send link",
        fullName: "Full name",
        email: "Email",
        password: "Password",
        confirmPassword: "Confirm password",
        minPassword: "(minimum 8 characters)",
        institutionalEmail: "(@cua.uam.mx)",
        addSpeciesTitle: "Add new species",
        editSpeciesTitle: "Edit species",
        commonName: "Common name",
        category: "Category",
        selectCategory: "Select a category",
        conservationStatus: "Conservation status",
        selectStatus: "Select a status",
        region: "Region",
        selectRegion: "Select a region",
        imageUrl: "Image (URL)",
        saveSpecies: "Save species",
        saveChanges: "Save changes",
        deleteConfirm: "Confirm deletion",
        deleteMessage: "Are you sure you want to delete this species? This action cannot be undone.",
        confirmDelete: "Yes, delete",
        cancel: "Cancel",
        
        // Messages
        loginError: "Invalid credentials",
        registerSuccess: "Registration successful! You can now log in.",
        forgotSuccess: "A recovery link has been sent to your email!",
        addSuccess: "Species added successfully!",
        editSuccess: "Changes saved successfully!",
        deleteSuccess: "Species deleted successfully",
        
        // Footer
        rights: "© 2025 Endemic Species of Mexico. All rights reserved.",
        sources: "Sources: CONABIO, SEMARNAT, IUCN Created by: Diego Jovani Vázquez Hernández",
        
        // Help
        faqTitle: "Frequently asked questions",
        guidesTitle: "Usage guides",
        needHelpTitle: "Need more help?",
        contactFormTitle: "Contact form",
        sendMessage: "Send message"
    }
};

// Elementos del DOM
const authButtons = document.getElementById("authButtons");
const userInfo = document.createElement("div");
userInfo.className = "user-info";
userInfo.innerHTML = `
    <img src="https://cdn-icons-png.freepik.com/256/17/17004.png" alt="Foto de perfil">
    <span id="userName"></span>
`;

const logoutBtn = document.createElement("button");
logoutBtn.className = "logout-btn";
logoutBtn.id = "logoutBtn";

const adminBtn = document.createElement("button");
adminBtn.className = "admin-btn";
adminBtn.id = "adminBtn";

const addSpeciesBtn = document.createElement("button");
addSpeciesBtn.className = "add-species-btn";
addSpeciesBtn.innerHTML = "➕";
addSpeciesBtn.id = "addSpeciesBtn";

// Funciones de utilidad
function showPage(page) {
    document.getElementById("homePage").style.display = "none";
    document.getElementById("speciesPage").style.display = "none";
    document.getElementById("speciesDetailPage").style.display = "none";
    document.getElementById("statsPage").style.display = "none";
    document.getElementById("contactPage").style.display = "none";
    document.getElementById("helpPage").style.display = "none";

    document.getElementById(`${page}Page`).style.display = "block";
    currentPage = page;

    if (page === "species") {
        renderFullSpeciesList();
    }
    
    // Actualizar el idioma al cambiar de página
    updateContentLanguage();
}

function updateAdminUI() {
    const t = translations[language];
    
    if (currentUser) {
        authButtons.innerHTML = "";
        userInfo.querySelector("#userName").textContent = currentUser.name;
        authButtons.appendChild(userInfo);
        
        if (isAdmin) {
            adminBtn.textContent = t.admin;
            addSpeciesBtn.title = t.addSpecies;
            authButtons.appendChild(adminBtn);
            authButtons.appendChild(addSpeciesBtn);
        }
        
        logoutBtn.textContent = t.logout;
        authButtons.appendChild(logoutBtn);
        document.body.classList.add("admin-visible");
    } else {
        authButtons.innerHTML = `
            <button class="login-btn" id="loginBtn">${t.login}</button>
            <button class="register-btn" id="registerBtn">${t.register}</button>
            <button class="help-btn" id="helpBtn">${t.help}</button>
        `;
        document.body.classList.remove("admin-visible");
    }
}

function renderSpeciesList(species = speciesData.slice(0, 6)) {
    const grid = document.getElementById("speciesGrid");
    grid.innerHTML = "";
    
    const t = translations[language];
    
    species.forEach(specie => {
        const card = document.createElement("div");
        card.className = "species-card";
        card.dataset.id = specie.id;
        card.innerHTML = `
            <img src="${specie.image}" alt="${specie.name}">
            <div class="species-info">
                <h3>${specie.name}</h3>
                <div class="species-meta">
                    <span>${specie.category === "flora" ? t.flora : t.fauna}</span>
                    <span>${getStatusText(specie.status)}</span>
                </div>
                <p class="species-description">${specie.description.substring(0, 100)}...</p>
                <a href="#" class="view-btn view-species-btn">${language === "es" ? "Ver detalles" : "View details"}</a>
            </div>
        `;
        grid.appendChild(card);
    });
    
    document.querySelectorAll(".view-species-btn").forEach(btn => {
        btn.addEventListener("click", function(e) {
            e.preventDefault();
            const card = this.closest(".species-card");
            showSpeciesDetail(parseInt(card.dataset.id));
        });
    });
}

function renderFullSpeciesList() {
    const grid = document.getElementById("fullSpeciesGrid");
    grid.innerHTML = "";
    
    const t = translations[language];
    
    speciesData.forEach(specie => {
        const card = document.createElement("div");
        card.className = "species-card";
        card.dataset.id = specie.id;
        card.innerHTML = `
            <img src="${specie.image}" alt="${specie.name}">
            <div class="species-info">
                <h3>${specie.name}</h3>
                <div class="species-meta">
                    <span>${specie.category === "flora" ? t.flora : t.fauna}</span>
                    <span>${getStatusText(specie.status)}</span>
                </div>
                <p class="species-description">${specie.description.substring(0, 100)}...</p>
                <a href="#" class="view-btn view-species-btn">${language === "es" ? "Ver detalles" : "View details"}</a>
            </div>
        `;
        grid.appendChild(card);
    });
    
    document.querySelectorAll(".view-species-btn").forEach(btn => {
        btn.addEventListener("click", function(e) {
            e.preventDefault();
            const card = this.closest(".species-card");
            showSpeciesDetail(parseInt(card.dataset.id));
        });
    });
}

function showSpeciesDetail(id) {
    const specie = speciesData.find(s => s.id === id);
    if (!specie) return;
    
    currentSpeciesId = id;
    const t = translations[language];
    
    document.getElementById("detailName").textContent = specie.name;
    document.getElementById("detailImage").src = specie.image;
    document.getElementById("detailImage").alt = specie.name;
    document.getElementById("detailCategory").textContent = specie.category === "flora" ? t.flora : t.fauna;
    document.getElementById("detailStatus").textContent = getStatusText(specie.status);
    document.getElementById("detailRegion").textContent = getRegionText(specie.region);
    document.getElementById("scientificNameValue").textContent = specie.scientificName;
    document.getElementById("sourceValue").textContent = specie.source;
    document.getElementById("detailDescription").textContent = specie.description;
    document.getElementById("detailDistribution").textContent = specie.distribution;
    document.getElementById("detailConservation").textContent = specie.conservation;
    
    // Actualizar títulos
    document.getElementById("backToListBtn").textContent = t.backToList;
    document.getElementById("scientificNameValue").previousElementSibling.textContent = t.scientificName + ":";
    document.getElementById("sourceValue").previousElementSibling.textContent = t.source + ":";
    document.getElementById("descriptionTitle").textContent = t.description;
    document.getElementById("distributionTitle").textContent = t.distribution;
    document.getElementById("conservationTitle").textContent = t.conservation;
    document.getElementById("commentsTitle").textContent = t.comments;
    document.getElementById("addCommentTitle").textContent = t.addComment;
    document.getElementById("commentText").placeholder = t.commentPlaceholder;
    document.getElementById("postCommentBtn").textContent = t.postComment;
    
    renderComments(id);
    document.getElementById("commentFormContainer").style.display = currentUser ? "block" : "none";
    
    showPage("speciesDetail");
}

function renderComments(speciesId) {
    const commentsList = document.getElementById("commentsList");
    commentsList.innerHTML = "";
    
    const comments = commentsData[speciesId] || [];
    const t = translations[language];
    
    if (comments.length === 0) {
        commentsList.innerHTML = `<p>${t.noComments}</p>`;
        return;
    }
    
    comments.forEach(comment => {
        const commentDiv = document.createElement("div");
        commentDiv.className = "comment";
        commentDiv.innerHTML = `
            <div class="comment-author">${comment.author} <small>(${comment.date})</small></div>
            <div class="comment-text">${comment.text}</div>
        `;
        commentsList.appendChild(commentDiv);
    });
}

function getStatusText(status) {
    const t = translations[language];
    const statusMap = {
        "en_peligro": t.endangered,
        "amenazada": t.threatened,
        "vulnerable": t.vulnerable,
        "estable": t.stable
    };
    return statusMap[status] || status;
}

function getRegionText(region) {
    const t = translations[language];
    const regionMap = {
        "norte": t.north,
        "centro": t.center,
        "sur": t.south
    };
    return regionMap[region] || region;
}

function showModal(modalId) {
    document.getElementById(modalId).style.display = "flex";
    updateModalLanguage(modalId);
}

function updateModalLanguage(modalId) {
    const t = translations[language];
    const modal = document.getElementById(modalId);
    
    if (!modal) return;
    
    switch(modalId) {
        case 'loginModal':
            modal.querySelector('h2').textContent = t.loginTitle;
            modal.querySelector('label[for="loginEmail"]').textContent = t.email;
            modal.querySelector('label[for="loginPassword"]').textContent = t.password;
            modal.querySelector('#forgotPassword').textContent = t.forgotPassword;
            modal.querySelector('#loginSubmitBtn').textContent = t.login;
            break;
            
        case 'registerModal':
            modal.querySelector('h2').textContent = t.registerTitle;
            modal.querySelector('label[for="registerName"]').textContent = t.fullName;
            modal.querySelector('label[for="registerEmail"]').textContent = t.email + ' ' + t.institutionalEmail;
            modal.querySelector('label[for="registerPassword"]').textContent = t.password + ' ' + t.minPassword;
            modal.querySelector('label[for="registerConfirmPassword"]').textContent = t.confirmPassword;
            modal.querySelector('#registerSubmitBtn').textContent = t.register;
            break;
            
        case 'forgotPasswordModal':
            modal.querySelector('h2').textContent = t.forgotTitle;
            modal.querySelector('label[for="forgotEmail"]').textContent = t.email;
            modal.querySelector('#forgotInstructions').textContent = t.forgotInstructions;
            modal.querySelector('#forgotSubmitBtn').textContent = t.sendLink;
            break;
            
        case 'addSpeciesModal':
            modal.querySelector('h2').textContent = t.addSpeciesTitle;
            modal.querySelector('label[for="speciesName"]').textContent = t.commonName;
            modal.querySelector('label[for="speciesScientific"]').textContent = t.scientificName;
            modal.querySelector('label[for="speciesCategory"]').textContent = t.category;
            modal.querySelector('#speciesCategory option[value=""]').textContent = t.selectCategory;
            modal.querySelector('#speciesCategory option[value="flora"]').textContent = t.flora;
            modal.querySelector('#speciesCategory option[value="fauna"]').textContent = t.fauna;
            modal.querySelector('label[for="speciesStatus"]').textContent = t.conservationStatus;
            modal.querySelector('#speciesStatus option[value=""]').textContent = t.selectStatus;
            modal.querySelector('#speciesStatus option[value="en_peligro"]').textContent = t.endangered;
            modal.querySelector('#speciesStatus option[value="amenazada"]').textContent = t.threatened;
            modal.querySelector('#speciesStatus option[value="vulnerable"]').textContent = t.vulnerable;
            modal.querySelector('#speciesStatus option[value="estable"]').textContent = t.stable;
            modal.querySelector('label[for="speciesRegion"]').textContent = t.region;
            modal.querySelector('#speciesRegion option[value=""]').textContent = t.selectRegion;
            modal.querySelector('#speciesRegion option[value="norte"]').textContent = t.north;
            modal.querySelector('#speciesRegion option[value="centro"]').textContent = t.center;
            modal.querySelector('#speciesRegion option[value="sur"]').textContent = t.south;
            modal.querySelector('label[for="speciesImage"]').textContent = t.imageUrl;
            modal.querySelector('label[for="speciesSource"]').textContent = t.source;
            modal.querySelector('label[for="speciesDescription"]').textContent = t.description;
            modal.querySelector('label[for="speciesDistribution"]').textContent = t.distribution;
            modal.querySelector('label[for="speciesConservation"]').textContent = t.conservation;
            modal.querySelector('#addSpeciesSubmitBtn').textContent = t.saveSpecies;
            break;
            
        case 'editSpeciesModal':
            modal.querySelector('h2').textContent = t.editSpeciesTitle;
            modal.querySelector('label[for="editSpeciesName"]').textContent = t.commonName;
            modal.querySelector('label[for="editSpeciesScientific"]').textContent = t.scientificName;
            modal.querySelector('label[for="editSpeciesCategory"]').textContent = t.category;
            modal.querySelector('#editSpeciesCategory option[value=""]').textContent = t.selectCategory;
            modal.querySelector('#editSpeciesCategory option[value="flora"]').textContent = t.flora;
            modal.querySelector('#editSpeciesCategory option[value="fauna"]').textContent = t.fauna;
            modal.querySelector('label[for="editSpeciesStatus"]').textContent = t.conservationStatus;
            modal.querySelector('#editSpeciesStatus option[value=""]').textContent = t.selectStatus;
            modal.querySelector('#editSpeciesStatus option[value="en_peligro"]').textContent = t.endangered;
            modal.querySelector('#editSpeciesStatus option[value="amenazada"]').textContent = t.threatened;
            modal.querySelector('#editSpeciesStatus option[value="vulnerable"]').textContent = t.vulnerable;
            modal.querySelector('#editSpeciesStatus option[value="estable"]').textContent = t.stable;
            modal.querySelector('label[for="editSpeciesRegion"]').textContent = t.region;
            modal.querySelector('#editSpeciesRegion option[value=""]').textContent = t.selectRegion;
            modal.querySelector('#editSpeciesRegion option[value="norte"]').textContent = t.north;
            modal.querySelector('#editSpeciesRegion option[value="centro"]').textContent = t.center;
            modal.querySelector('#editSpeciesRegion option[value="sur"]').textContent = t.south;
            modal.querySelector('label[for="editSpeciesImage"]').textContent = t.imageUrl;
            modal.querySelector('label[for="editSpeciesSource"]').textContent = t.source;
            modal.querySelector('label[for="editSpeciesDescription"]').textContent = t.description;
            modal.querySelector('label[for="editSpeciesDistribution"]').textContent = t.distribution;
            modal.querySelector('label[for="editSpeciesConservation"]').textContent = t.conservation;
            modal.querySelector('#editSpeciesSubmitBtn').textContent = t.saveChanges;
            break;
            
        case 'deleteConfirmModal':
            modal.querySelector('h2').textContent = t.deleteConfirm;
            modal.querySelector('p').textContent = t.deleteMessage;
            modal.querySelector('#confirmDeleteBtn').textContent = t.confirmDelete;
            modal.querySelector('#cancelDeleteBtn').textContent = t.cancel;
            break;
    }
}

function hideModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

function clearFormErrors(formId) {
    document.querySelectorAll(`#${formId} .error-message`).forEach(el => {
        el.style.display = "none";
    });
}

function showError(elementId) {
    document.getElementById(elementId).style.display = "block";
}

function showSuccess(elementId) {
    const t = translations[language];
    const el = document.getElementById(elementId);
    el.textContent = t[elementId.replace('Success', '')] || el.textContent;
    el.style.display = "block";
    setTimeout(() => {
        el.style.display = "none";
    }, 3000);
}

function isValidEmail(email) {
    return email.endsWith("@cua.uam.mx");
}

function loginUser(email, password) {
    if (email === "diego.vazquez.h@cua.uam.mx" && password === "12345678") {
        currentUser = {
            name: "Diego Vázquez",
            email: "diego.vazquez.h@cua.uam.mx"
        };
        isAdmin = true;
        return true;
    } else if (email === "usuario@cua.uam.mx" && password === "12345678") {
        currentUser = {
            name: "Usuario Ejemplo",
            email: "usuario@cua.uam.mx"
        };
        isAdmin = false;
        return true;
    }
    return false;
}

function updateContentLanguage() {
    const t = translations[language];
    
    // Actualizar título principal
    document.getElementById("mainTitle").textContent = t.mainTitle;
    
    // Actualizar navbar
    document.querySelectorAll('.nav-link').forEach(link => {
        const page = link.dataset.page;
        link.textContent = t[page];
    });
    
    // Actualizar botones de autenticación
    updateAdminUI();
    
    // Actualizar página de inicio
    if (document.getElementById("homePage").style.display !== "none") {
        document.getElementById("searchTitle").textContent = t.searchTitle;
        document.getElementById("searchInput").placeholder = t.searchPlaceholder;
        document.getElementById("searchBtn").textContent = t.searchButton;
        document.querySelector('label[for="category"]').textContent = t.category;
        document.getElementById("category").options[0].text = t.allCategories;
        document.getElementById("category").options[1].text = t.flora;
        document.getElementById("category").options[2].text = t.fauna;
        document.querySelector('label[for="region"]').textContent = t.region;
        document.getElementById("region").options[0].text = t.allRegions;
        document.getElementById("region").options[1].text = t.north;
        document.getElementById("region").options[2].text = t.center;
        document.getElementById("region").options[3].text = t.south;
        document.querySelector('label[for="status"]').textContent = t.conservationStatus;
        document.getElementById("status").options[0].text = t.allStatus;
        document.getElementById("status").options[1].text = t.endangered;
        document.getElementById("status").options[2].text = t.threatened;
        document.getElementById("status").options[3].text = t.vulnerable;
        document.getElementById("status").options[4].text = t.stable;
        document.getElementById("featuredSpeciesTitle").textContent = t.featuredSpecies;
    }
    
    // Actualizar página de especies
    if (document.getElementById("speciesPage").style.display !== "none") {
        document.getElementById("allSpeciesTitle").textContent = t.allSpecies;
    }
    
    // Actualizar página de detalles de especie
    if (document.getElementById("speciesDetailPage").style.display !== "none") {
        const specie = speciesData.find(s => s.id === currentSpeciesId);
        if (specie) {
            document.getElementById("backToListBtn").textContent = t.backToList;
            document.getElementById("scientificNameValue").previousElementSibling.textContent = t.scientificName + ":";
            document.getElementById("sourceValue").previousElementSibling.textContent = t.source + ":";
            document.getElementById("descriptionTitle").textContent = t.description;
            document.getElementById("distributionTitle").textContent = t.distribution;
            document.getElementById("conservationTitle").textContent = t.conservation;
            document.getElementById("commentsTitle").textContent = t.comments;
            document.getElementById("addCommentTitle").textContent = t.addComment;
            document.getElementById("commentText").placeholder = t.commentPlaceholder;
            document.getElementById("postCommentBtn").textContent = t.postComment;
        }
    }
    
    // Actualizar página de estadísticas
    if (document.getElementById("statsPage").style.display !== "none") {
        document.getElementById("statsTitle").textContent = t.statsTitle;
        document.getElementById("downloadStatsBtn").textContent = language === "es" ? 
            "Descargar estadísticas (CSV)" : "Download statistics (CSV)";
    }
    
    // Actualizar página de contacto
    if (document.getElementById("contactPage").style.display !== "none") {
        document.getElementById("contactTitle").textContent = t.contactTitle;
        document.getElementById("faqTitle").textContent = t.faqTitle;
        document.getElementById("contactFormTitle").textContent = t.contactFormTitle;
        document.querySelector('#contactForm label[for="contactName"]').textContent = t.fullName;
        document.querySelector('#contactForm label[for="contactEmail"]').textContent = t.email;
        document.querySelector('#contactForm label[for="contactMessage"]').textContent = language === "es" ? "Mensaje" : "Message";
        document.getElementById("sendMessageBtn").textContent = t.sendMessage;
    }
    
    // Actualizar página de ayuda
    if (document.getElementById("helpPage").style.display !== "none") {
        document.getElementById("helpCenterTitle").textContent = t.helpTitle;
        document.getElementById("guidesTitle").textContent = t.guidesTitle;
        document.getElementById("needHelpTitle").textContent = t.needHelpTitle;
        document.querySelector('#helpForm label[for="helpName"]').textContent = t.fullName;
        document.querySelector('#helpForm label[for="helpEmail"]').textContent = t.email;
        document.querySelector('#helpForm label[for="helpMessage"]').textContent = language === "es" ? "Mensaje" : "Message";
        document.getElementById("sendHelpBtn").textContent = t.sendMessage;
    }
    
    // Actualizar footer
    document.getElementById("footerRights").textContent = t.rights;
    document.getElementById("footerSources").textContent = t.sources;
}

// Inicialización
document.addEventListener("DOMContentLoaded", function() {
    // Configurar idioma inicial
    document.getElementById("languageBtn").textContent = language === "es" ? "EN" : "ES";
    updateContentLanguage();
    
    renderSpeciesList();
    
    // Configurar eventos
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            showPage(this.dataset.page);
        });
    });
    
    document.getElementById("backToListBtn").addEventListener("click", function(e) {
        e.preventDefault();
        showPage(currentPage === "speciesDetail" ? "species" : "home");
    });
    
    document.getElementById("darkModeBtn").addEventListener("click", function() {
        darkMode = !darkMode;
        if (darkMode) {
            document.body.classList.add("dark-mode");
            this.textContent = "☀️";
        } else {
            document.body.classList.remove("dark-mode");
            this.textContent = "🌙";
        }
    });
    
    document.getElementById("languageBtn").addEventListener("click", function() {
        language = language === "es" ? "en" : "es";
        localStorage.setItem('language', language);
        this.textContent = language === "es" ? "EN" : "ES";
        updateContentLanguage();
    });
    
    document.getElementById("accessibilityBtn").addEventListener("click", function() {
        alert(language === "es" ? "Opciones de accesibilidad en desarrollo" : "Accessibility options in development");
    });
    
    addSpeciesBtn.addEventListener("click", function() {
        showModal("addSpeciesModal");
    });
    
    // Event listeners para los botones de autenticación
    document.addEventListener("click", function(e) {
        if (e.target.id === "loginBtn" || e.target.closest("#loginBtn")) {
            showModal("loginModal");
        }
        if (e.target.id === "registerBtn" || e.target.closest("#registerBtn")) {
            showModal("registerModal");
        }
        if (e.target.id === "helpBtn" || e.target.closest("#helpBtn")) {
            showPage("help");
        }
    });
    
    document.getElementById("closeLoginModal").addEventListener("click", () => hideModal("loginModal"));
    document.getElementById("closeRegisterModal").addEventListener("click", () => hideModal("registerModal"));
    document.getElementById("closeForgotPasswordModal").addEventListener("click", () => hideModal("forgotPasswordModal"));
    document.getElementById("closeAddSpeciesModal").addEventListener("click", () => hideModal("addSpeciesModal"));
    document.getElementById("closeEditSpeciesModal").addEventListener("click", () => hideModal("editSpeciesModal"));
    document.getElementById("closeDeleteConfirmModal").addEventListener("click", () => hideModal("deleteConfirmModal"));
    
    document.getElementById("loginForm").addEventListener("submit", function(e) {
        e.preventDefault();
        clearFormErrors("loginForm");
        
        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;
        
        if (!email) {
            showError("loginEmailError");
            return;
        }
        
        if (!password) {
            showError("loginPasswordError");
            return;
        }
        
        if (loginUser(email, password)) {
            hideModal("loginModal");
            updateAdminUI();
            showPage(currentPage); // Actualizar la vista
        } else {
            showError("loginError");
        }
    });
    
    document.getElementById("forgotPassword").addEventListener("click", function(e) {
        e.preventDefault();
        hideModal("loginModal");
        showModal("forgotPasswordModal");
    });
    
    document.getElementById("registerForm").addEventListener("submit", function(e) {
        e.preventDefault();
        clearFormErrors("registerForm");
        
        const name = document.getElementById("registerName").value;
        const email = document.getElementById("registerEmail").value;
        const password = document.getElementById("registerPassword").value;
        const confirmPassword = document.getElementById("registerConfirmPassword").value;
        
        if (!name) {
            showError("registerNameError");
            return;
        }
        
        if (!email || !isValidEmail(email)) {
            showError("registerEmailError");
            return;
        }
        
        if (!password || password.length < 8) {
            showError("registerPasswordError");
            return;
        }
        
        if (password !== confirmPassword) {
            showError("registerConfirmError");
            return;
        }
        
        showSuccess("registerSuccess");
        setTimeout(() => {
            hideModal("registerModal");
            document.getElementById("loginEmail").value = email;
            document.getElementById("loginPassword").value = password;
            showModal("loginModal");
        }, 2000);
    });
    
    document.getElementById("forgotPasswordForm").addEventListener("submit", function(e) {
        e.preventDefault();
        clearFormErrors("forgotPasswordForm");
        
        const email = document.getElementById("forgotEmail").value;
        
        if (!email) {
            showError("forgotEmailError");
            return;
        }
        
        showSuccess("forgotSuccess");
        setTimeout(() => {
            hideModal("forgotPasswordModal");
        }, 2000);
    });
    
    document.getElementById("commentForm").addEventListener("submit", function(e) {
        e.preventDefault();
        
        if (!currentUser || !currentSpeciesId) return;
        
        const commentText = document.getElementById("commentText").value;
        
        if (!commentsData[currentSpeciesId]) {
            commentsData[currentSpeciesId] = [];
        }
        
        const newComment = {
            id: commentsData[currentSpeciesId].length + 1,
            author: currentUser.name,
            date: new Date().toISOString().split('T')[0],
            text: commentText
        };
        
        commentsData[currentSpeciesId].push(newComment);
        renderComments(currentSpeciesId);
        document.getElementById("commentText").value = "";
    });
    
    logoutBtn.addEventListener("click", function() {
        currentUser = null;
        isAdmin = false;
        updateAdminUI();
        showPage(currentPage); // Actualizar la vista
    });
    
    adminBtn.addEventListener("click", function() {
        alert(language === "es" ? "Panel de administración en desarrollo" : "Admin panel in development");
    });
    
    document.getElementById("searchBtn").addEventListener("click", function() {
        const searchTerm = document.getElementById("searchInput").value.toLowerCase();
        const category = document.getElementById("category").value;
        const region = document.getElementById("region").value;
        const status = document.getElementById("status").value;
        
        const filteredSpecies = speciesData.filter(specie => {
            const matchesSearch = specie.name.toLowerCase().includes(searchTerm) || 
                                specie.scientificName.toLowerCase().includes(searchTerm);
            const matchesCategory = !category || specie.category === category;
            const matchesRegion = !region || specie.region === region;
            const matchesStatus = !status || specie.status === status;
            
            return matchesSearch && matchesCategory && matchesRegion && matchesStatus;
        });
        
        if (currentPage === "species") {
            renderFullSpeciesList(filteredSpecies);
        } else {
            renderSpeciesList(filteredSpecies.slice(0, 6));
        }
    });
    
    document.getElementById("category").addEventListener("change", function() {
        document.getElementById("searchBtn").click();
    });
    
    document.getElementById("region").addEventListener("change", function() {
        document.getElementById("searchBtn").click();
    });
    
    document.getElementById("status").addEventListener("change", function() {
        document.getElementById("searchBtn").click();
    });
    
    document.getElementById("downloadStatsBtn").addEventListener("click", function(e) {
        e.preventDefault();
        if (!isAdmin) {
            alert(language === "es" ? 
                "Solo los administradores pueden descargar estadísticas" : 
                "Only administrators can download statistics");
            return;
        }
        
        alert(language === "es" ? 
            "Descargando estadísticas en formato CSV..." : 
            "Downloading statistics in CSV format...");
    });
    
    document.getElementById("editSpeciesBtn").addEventListener("click", function() {
        if (!currentSpeciesId) return;
        
        const specie = speciesData.find(s => s.id === currentSpeciesId);
        if (!specie) return;
        
        document.getElementById("editSpeciesId").value = specie.id;
        document.getElementById("editSpeciesName").value = specie.name;
        document.getElementById("editSpeciesScientific").value = specie.scientificName;
        document.getElementById("editSpeciesCategory").value = specie.category;
        document.getElementById("editSpeciesStatus").value = specie.status;
        document.getElementById("editSpeciesRegion").value = specie.region;
        document.getElementById("editSpeciesImage").value = specie.image;
        document.getElementById("editSpeciesSource").value = specie.source;
        document.getElementById("editSpeciesDescription").value = specie.description;
        document.getElementById("editSpeciesDistribution").value = specie.distribution;
        document.getElementById("editSpeciesConservation").value = specie.conservation;
        
        showModal("editSpeciesModal");
    });
    
    document.getElementById("deleteSpeciesBtn").addEventListener("click", function() {
        if (!currentSpeciesId) return;
        
        document.getElementById("speciesToDeleteId").value = currentSpeciesId;
        showModal("deleteConfirmModal");
    });
    
    document.getElementById("confirmDeleteBtn").addEventListener("click", function() {
        const id = parseInt(document.getElementById("speciesToDeleteId").value);
        
        const index = speciesData.findIndex(s => s.id === id);
        if (index !== -1) {
            speciesData.splice(index, 1);
            hideModal("deleteConfirmModal");
            showPage("species");
            renderFullSpeciesList();
            alert(translations[language].deleteSuccess);
        }
    });
    
    document.getElementById("cancelDeleteBtn").addEventListener("click", function() {
        hideModal("deleteConfirmModal");
    });
    
    document.getElementById("addSpeciesForm").addEventListener("submit", function(e) {
        e.preventDefault();
        
        if (!isAdmin) return;
        
        const newId = speciesData.length > 0 ? Math.max(...speciesData.map(s => s.id)) + 1 : 1;
        
        const newSpecie = {
            id: newId,
            name: document.getElementById("speciesName").value,
            scientificName: document.getElementById("speciesScientific").value,
            category: document.getElementById("speciesCategory").value,
            status: document.getElementById("speciesStatus").value,
            region: document.getElementById("speciesRegion").value,
            image: document.getElementById("speciesImage").value,
            source: document.getElementById("speciesSource").value,
            description: document.getElementById("speciesDescription").value,
            distribution: document.getElementById("speciesDistribution").value,
            conservation: document.getElementById("speciesConservation").value
        };
        
        speciesData.push(newSpecie);
        
        showSuccess("addSpeciesSuccess");
        this.reset();
        
        setTimeout(() => {
            hideModal("addSpeciesModal");
            renderFullSpeciesList();
            showPage("species");
        }, 2000);
    });
    
    document.getElementById("editSpeciesForm").addEventListener("submit", function(e) {
        e.preventDefault();
        
        if (!isAdmin || !currentSpeciesId) return;
        
        const specie = speciesData.find(s => s.id === currentSpeciesId);
        if (!specie) return;
        
        specie.name = document.getElementById("editSpeciesName").value;
        specie.scientificName = document.getElementById("editSpeciesScientific").value;
        specie.category = document.getElementById("editSpeciesCategory").value;
        specie.status = document.getElementById("editSpeciesStatus").value;
        specie.region = document.getElementById("editSpeciesRegion").value;
        specie.image = document.getElementById("editSpeciesImage").value;
        specie.source = document.getElementById("editSpeciesSource").value;
        specie.description = document.getElementById("editSpeciesDescription").value;
        specie.distribution = document.getElementById("editSpeciesDistribution").value;
        specie.conservation = document.getElementById("editSpeciesConservation").value;
        
        showSuccess("editSpeciesSuccess");
        
        setTimeout(() => {
            hideModal("editSpeciesModal");
            showSpeciesDetail(currentSpeciesId);
            renderFullSpeciesList();
        }, 2000);
    });
    
    window.addEventListener("click", function(e) {
        if (e.target.classList.contains("modal")) {
            e.target.style.display = "none";
        }
    });
});
