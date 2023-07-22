const listaProductos = [
    {
        "id": "1",
        "nombre": "Memoria kingston",
        "precio": 3500,
        "stock": 5,
        "descripcion": "Memoria ram potente podras jugar muchos juegos DDR4 16GB 3200Mhz",
        "tipo": "memoria ram",
         "img": "/archivos/ramkingstonfury.jpg"
    },
    {
        "id": "2",
        "nombre": "Procesador Intel Celeron",
        "precio": 270000,
        "stock": 10,
        "descripcion": "Microprocesador celeron G4900 3.10GHz Socket 1151 OEM Coffe Lake",
        "tipo": "procesador",
        "img": "/archivos/intel_celeron.jpg"
    },
    {
        "id": "3",
        "nombre": "ASUS Phoenix GeForce GTX 1630 ",
        "precio": 130000,
        "stock": 10,
        "descripcion": "Placa de Video 4GB GDDR6 con esta placa podras jugar todos los dias",
        "tipo": "tarjeta grafica",
        "img": "/archivos/gtx_1630.jpg"
    },
    {
        "id": "4",
        "nombre": " ASUS GeForce GTX 1650 ",
        "precio": 250000,
        "stock": 10,
        "descripcion": "Placa de Video 4GB GDDR6 apta para gaming gama media-baja",
        "tipo": "tarjeta grafica",
        "img": "/archivos/gtx_1650.jpg"
    },
    {
        "id": "5",
        "nombre": "Mother Asrock B365M BULK",
        "precio": 25000,
        "stock": 1,
        "descripcion": "Motherboard de gama media-baja, pero muy funcional a la hora de viciar",
        "tipo": "motherboard",
        "img": "/archivos/asrock_b365m.jpg"
    },
    {
        "id": "6",
        "nombre": "Mother Asrock Z390",
        "precio": 30000,
        "stock": 4,
        "descripcion": "Con esta mother, podras disfrutar de tus entregas favoritas incluso mediante wifi!",
        "tipo": "motherboard",
        "img": "/archivos/asrock_z390.jpg"
    },
    {
        "id": "7",
        "nombre": "Fuente ASUS 550W",
        "precio": 20000,
        "stock": 2,
        "descripcion": "Con esta fuente certificada 80plus Bronze de Asus podes estar tranquilo/a de que no corres riesgos electricos con tus componentes",
        "tipo": "fuente",
        "img": "/archivos/asusfuente.jpg"
    },
    {
        "id": "8",
        "nombre": "Fuente Corsair 750W",
        "precio": 35000,
        "stock": 7,
        "descripcion": "Si buscas una fuente que sabes que no te va a dejar tirado y encima siempre te haces lio con los cables, esta corsair modular es para vos sin dudas!",
        "tipo": "fuente",
        "img": "/archivos/corsairfuente.jpg"
    },
    {
        "id": "9",
        "nombre": "Zotac GeForce RTX 3090",
        "precio": 473000,
        "stock": 3,
        "descripcion": "Con esta placa de 24GB GDDR6X no vas a haber juego que no puedas disfrutar ni trabajo de renderizado que se te escape",
        "tipo": "tarjeta grafica",
        "img": "/archivos/rtx3090.jpg"
    },
    {
        "id": "10",
        "nombre": "Memoria ram Corsair Vengeance",
        "precio": 18705.58,
        "stock": 12,
        "descripcion": "Si buscas calidad en una memoria ram, ya podes dejar de buscar con esta memoria DDR4 8GB 2400MHz para realizar todas las actividades que precises!",
        "tipo": "memoria ram",
        "img": "/archivos/vengeancecorsair.jpg"
    }
]


function getData(){
    return new Promise ((res,rej) => {
        setTimeout(()=> {
            if(listaProductos.length === 0){
            rej("Ups!! Esto es un error en la base de datos!");
            console.log("fallo en getData, del lado del servidor.")
             }
             else
             {
            res(listaProductos)}
        }, 1500)
    })
    
}

export default getData;