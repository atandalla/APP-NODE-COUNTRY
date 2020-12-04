const fs = require('fs');
const csv = require('csv-parser');

datosCountry = []
datosCsv = []
reedDatos = []

const leerCSV = (archivo) => {

    fs.createReadStream(archivo)
        .pipe(csv(["Country Name", "Country Code", "Indicator Name", "Indicator Code", "1960", "1961", "1962", "1963", "1964", "1965", "1966", "1967", "1968", "1969", "1970", "1971", "1972", "1973", "1974", "1975", "1976", "1977", "1978", "1979", "1980", "1981", "1982", "1983", "1984", "1985", "1986", "1987", "1988", "1989", "1990", "1991", "1992", "1993", "1994", "1995", "1996", "1997", "1998", "1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019"]))
        .on('data', (row) => {
            datosCsv.push(row)

        })
        .on('end', () => {
            let data = JSON.stringify(datosCsv);
            fs.writeFile('resultados/data.json', data, (err) => {
                if (err) throw new Error('No se pudo grabar', err);
            });
        });
}

const leerDatos = () => {

    try {
        reedDatos = require('../resultados/data.json');

    } catch (error) {
        reedDatos = [];
    }

}





// const guardarArchivo = (archivo, pais, anio) => {

//     leerCsv();

//     let porHacer = {
//         archivo,
//         pais = doc_pais,
//         anio = doc_anio
//     };

//     datosCountry.push(porHacer);
//     guardarDatos();

//     return porHacer;

// }


// Buscador e Impresion del Listado según el CÓDIGO

const mostrarListado = (archivo, cod, anio) => {
    leerCSV(archivo);
    leerDatos()

    let index = reedDatos.findIndex(tarea => tarea['Country Code'] === cod);

    if (index >= 0) {
        let valor = reedDatos[index][anio]
        let indicador = reedDatos[index]['Indicator Name']
        let name = reedDatos[index]['Country Name']

        if (indicador == "") {
            return false
        } else {

            let obCountry = {
                    indicador,
                    name,
                    anio,
                    valor

                }
                // console.log(obCountry)
            datosCountry.push(obCountry)
            return datosCountry;
        }


    }

    return false;
}


// mostrarListado('ECU', '2004')


module.exports = {
    mostrarListado,

}