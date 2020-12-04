const argv = require('./config/yargs').argv;
const colors = require('colors');

//Destruccturacion
const { guardarArchivo, mostrarListado } = require('./buscador/buscar');

let comando = argv._[0];

switch (comando) {

    case 'mostrar':

        let country = mostrarListado(argv.archivo, argv.pais, argv.anio)

        console.log(colors.red('==========RESULTADO DE LA BUSQUEDA========='));

        console.log(colors.cyan(`Datos: ${country.indicador}`));
        console.log(colors.cyan(`País: ${country.name}`));
        console.log(colors.cyan(`Año: ${country.anio}`));
        console.log(colors.cyan(`Valor: ${country.valor}`));


        break;


    case 'guardar':
        guardarArchivo(argv.archivo, argv.pais, argv.anio)
            .then(mensaje => { console.log(mensaje); })
            .catch(err => { console.log(err); })
        break;






}