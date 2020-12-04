const fs = require('fs');
const csv = require('csv-parser');

datosCountry = []
datosCsv = []

const leerCSV = () => {

    fs.createReadStream('datos.csv')
        .pipe(csv(["Country Name", "Country Code", "Indicator Name", "Indicator Code", "1960", "1961", "1962", "1963", "1964", "1965", "1966", "1967", "1968", "1969", "1970", "1971", "1972", "1973", "1974", "1975", "1976", "1977", "1978", "1979", "1980", "1981", "1982", "1983", "1984", "1985", "1986", "1987", "1988", "1989", "1990", "1991", "1992", "1993", "1994", "1995", "1996", "1997", "1998", "1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019"]))
        .on('data', (row) => {
            datosCsv.push(row)

        })
        .on('end', () => {

            //console.log(datosCsv[5]['Country Name']);
        });
}

console.log(datosCsv)

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


// const guardarArchivo = (archivo, pais, anio) => {

//     leerCsv();
//     for (let i = 0; i <= datosCsv.length; i++) {
//         if (doc[i]['Country Name'] === pais) {
//             let doc_pais = doc[i]['Country Name']
//             let doc_anio = doc[i][`${pais}`]
//         } else {
//             console.log('No existe')
//         }
//     }

//     let porHacer = {
//         archivo,
//         pais = doc_pais,
//         anio = doc_anio
//     };

//     datosCountry.push(porHacer);
//     guardarDatos();

//     return porHacer;

// }

const mostrarListado = (archivo, pais, anio) => {
    leerCSV();

    console.log(`entro ${datosCsv[5]['Country Name']}`)

    for (let i = 0; i <= datosCsv.length; i++) {
        if (datosCsv[i]['Country Name'] === pais) {
            let doc_pais = datosCsv[i]['Country Name']
            let doc_anio = datosCsv[i][`${pais}`]

            let porHacer = {
                archivo,
                doc_pais,
                doc_anio
            };
            console.log(porHacer)
            return porHacer
        } else {
            console.log('No existe')
        }
    }

}


module.exports = {
    mostrarListado,

}