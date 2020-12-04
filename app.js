const argv = require('./config/yargs').argv;

//Destruccturacion
const { crearArchivo, listarArchivo, mostrarListado } = require('./buscador/buscar'); //(./) busque al mismo nivel

let comando = argv._[0]; ///(_)el guion bajo es la intruccion

switch (comando) {
    case 'guardar':
        crearArchivo(argv.base, argv.limite)
            .then(mensaje => { console.log(mensaje); })
            .catch(err => { console.log(err); })
        break;

    case 'mostrar':
        listarArchivo(argv.archivo)
            .catch(err => { console.log(err); })
        break;

    case 'listar':
        let listado = mostrarListado();
        break;






}