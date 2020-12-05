const fs = require('fs');
const { reederCSV, leerDatos } = require('../buscador/buscar');
datosCountry = []
saveCountry = []

//Creación de la Carpeta Resultados

fs.mkdirSync('./resultados', { recursive: true });
////////////////// Guardar Datos /////////////////

const guardarArchivo = (archivo, cod, anio) => {

    reederCSV(archivo);
    leerDatos()

    let index = reedDatos.findIndex(country => country['Country Code'] === cod);
    let valor = reedDatos[index][anio]

    return new Promise((resolve, reject) => {

        let saveCountry = {
            archivo,
            cod,
            anio,
            valor
        };

        datosCountry.push(saveCountry);

        let data = JSON.stringify(datosCountry);
        fs.writeFile(`resultados/${cod}-${anio}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`Archivo guardado exitósamente: resultados/${cod}-${anio}.txt`.yellow);
        });

        return datosCountry;

    })
}

//Exportar Módulos
module.exports = {
    guardarArchivo
}