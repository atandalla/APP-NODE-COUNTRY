const fs = require('fs');
const csv = require('csv-parser');
const neatCsv = require('neat-csv');

const leerCSV = () => {
    const filePath = ('datos.csv');
    fs.readFile(filePath, (error, data) => {
        if (error) {
            return console.log('error reading file');
        }
        neatCsv(data)
            .then((parsedData) => console.log(parsedData[3]));
    });

}

let datosCountry = [];

const guardarDatos = () => {
    let data = JSON.stringify(datosCountry);
    console.log(`el json ${data}`);
    fs.writeFile(`resultados/${data}.txt`, data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    });
}

// const leerDatos = () => {

//     try {
//         reedData = require('../datos.csv');
//         console.log()

//     } catch (error) {
//         reedData = [];
//     }

// }


const guardarArchivo = (archivo, pais, anio) => {

    leerDatos();

    let porHacer = {
        archivo,
        pais,
        anio
    };

    datosCountry.push(porHacer);
    guardarDatos();

    return porHacer;

}

const mostrarListado = () => {
    leerCSV()

}


module.exports = {
    guardarArchivo,
    mostrarListado,

}