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
let language = "es";

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
logoutBtn.textContent = "Cerrar sesión";
logoutBtn.id = "logoutBtn";

const adminBtn = document.createElement("button");
adminBtn.className = "admin-btn";
adminBtn.textContent = "Admin";
adminBtn.id = "adminBtn";

const addSpeciesBtn = document.createElement("button");
addSpeciesBtn.className = "add-species-btn";
addSpeciesBtn.innerHTML = "➕";
addSpeciesBtn.id = "addSpeciesBtn";
addSpeciesBtn.title = "Añadir especie";

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
}

function updateAdminUI() {
    if (currentUser) {
        authButtons.innerHTML = "";
        userInfo.querySelector("#userName").textContent = currentUser.name;
        authButtons.appendChild(userInfo);
        
        if (isAdmin) {
            authButtons.appendChild(adminBtn);
            authButtons.appendChild(addSpeciesBtn);
        }
        
        authButtons.appendChild(logoutBtn);
        document.body.classList.add("admin-visible");
    } else {
        authButtons.innerHTML = `
            <button class="login-btn" id="loginBtn">Iniciar sesión</button>
            <button class="register-btn" id="registerBtn">Registrarse</button>
            <button class="help-btn" id="helpBtn">Ayuda</button>
        `;
        document.body.classList.remove("admin-visible");
    }
}

function renderSpeciesList(species = speciesData.slice(0, 6)) {
    const grid = document.getElementById("speciesGrid");
    grid.innerHTML = "";
    
    species.forEach(specie => {
        const card = document.createElement("div");
        card.className = "species-card";
        card.dataset.id = specie.id;
        card.innerHTML = `
            <img src="${specie.image}" alt="${specie.name}">
            <div class="species-info">
                <h3>${specie.name}</h3>
                <div class="species-meta">
                    <span>${specie.category === "flora" ? "Flora" : "Fauna"}</span>
                    <span>${getStatusText(specie.status)}</span>
                </div>
                <p class="species-description">${specie.description.substring(0, 100)}...</p>
                <a href="#" class="view-btn view-species-btn">Ver detalles</a>
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
    
    speciesData.forEach(specie => {
        const card = document.createElement("div");
        card.className = "species-card";
        card.dataset.id = specie.id;
        card.innerHTML = `
            <img src="${specie.image}" alt="${specie.name}">
            <div class="species-info">
                <h3>${specie.name}</h3>
                <div class="species-meta">
                    <span>${specie.category === "flora" ? "Flora" : "Fauna"}</span>
                    <span>${getStatusText(specie.status)}</span>
                </div>
                <p class="species-description">${specie.description.substring(0, 100)}...</p>
                <a href="#" class="view-btn view-species-btn">Ver detalles</a>
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
    
    document.getElementById("detailName").textContent = specie.name;
    document.getElementById("detailImage").src = specie.image;
    document.getElementById("detailImage").alt = specie.name;
    document.getElementById("detailCategory").textContent = specie.category === "flora" ? "Flora" : "Fauna";
    document.getElementById("detailStatus").textContent = getStatusText(specie.status);
    document.getElementById("detailRegion").textContent = getRegionText(specie.region);
    document.getElementById("scientificNameValue").textContent = specie.scientificName;
    document.getElementById("sourceValue").textContent = specie.source;
    document.getElementById("detailDescription").textContent = specie.description;
    document.getElementById("detailDistribution").textContent = specie.distribution;
    document.getElementById("detailConservation").textContent = specie.conservation;
    
    renderComments(id);
    document.getElementById("commentFormContainer").style.display = currentUser ? "block" : "none";
    
    showPage("speciesDetail");
}

function renderComments(speciesId) {
    const commentsList = document.getElementById("commentsList");
    commentsList.innerHTML = "";
    
    const comments = commentsData[speciesId] || [];
    
    if (comments.length === 0) {
        commentsList.innerHTML = "<p>No hay comentarios aún. Sé el primero en comentar.</p>";
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
    const statusMap = {
        "en_peligro": "En peligro",
        "amenazada": "Amenazada",
        "vulnerable": "Vulnerable",
        "estable": "Estable"
    };
    return statusMap[status] || status;
}

function getRegionText(region) {
    const regionMap = {
        "norte": "Norte",
        "centro": "Centro",
        "sur": "Sur"
    };
    return regionMap[region] || region;
}

function showModal(modalId) {
    document.getElementById(modalId).style.display = "flex";
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
    const el = document.getElementById(elementId);
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

// Inicialización
document.addEventListener("DOMContentLoaded", function() {
    renderSpeciesList();
    
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
        this.textContent = language === "es" ? "EN" : "ES";
        alert("Funcionalidad de cambio de idioma en desarrollo");
    });
    
    document.getElementById("accessibilityBtn").addEventListener("click", function() {
        alert("Opciones de accesibilidad en desarrolo");
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
        alert("Panel de administración en desarrollo");
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
            alert("Solo los administradores pueden descargar estadísticas");
            return;
        }
        
        alert("Descargando estadísticas en formato CSV...");
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
            alert("Especie eliminada correctamente");
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
