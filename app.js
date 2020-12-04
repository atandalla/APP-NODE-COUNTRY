const argv = require('./config/yargs').argv;
const colors = require('colors');

//Destruccturacion
const { crearArchivo, listarArchivo, mostrarListado } = require('./buscador/buscar'); //(./) busque al mismo nivel

let comando = argv._[0]; ///(_)el guion bajo es la intruccion

switch (comando) {
    case 'guardar':
        crearArchivo(argv.archivo, argv.pais, argv.anio)
            .then(mensaje => { console.log(mensaje); })
            .catch(err => { console.log(err); })
        break;

    case 'mostrar':

        let listado = mostrarListado(argv.archivo, argv.pais, argv.anio)

        console.log(colors.red.bgWhite.bold('========RESULTADO DE LA BUSQUEDA========='));
        console.table(listado)
        console.log(colors.black.bgWhite(`Datos: ${listado.indicador}`));
        console.log(colors.black.bgWhite(`País: ${listado.name}`));
        console.log(colors.black.bgWhite(`Año: ${listado.anio}`));
        console.log(colors.black.bgWhite(`Valor ${listado.valor}`));


        break;




}