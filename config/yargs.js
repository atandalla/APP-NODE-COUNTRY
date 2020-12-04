let opciones = {
    archivo: {
        demand: true,
        alias: 'f',
        desc: 'Permite establecer el path del archivo CSV que contiene los datos a analizar'
    },
    pais: {
        demand: true,
        alias: 'c',
        desc: 'Permite determinar el país a analizar a través de su código ISO'
    },
    anio: {
        demand: true,
        alias: 'y',
        desc: 'Permite especificar el año para el cual se requiere las estadísticas'
    }
}



const argv = require('yargs')
    .command('mostrar', 'Imprime en pantalla el resultado de la búsqueda', opciones)
    .command('guardar', 'Genera un archivo de texto con el resultado de la búsqueda', opciones)
    .help()
    .argv;


module.exports = {
    argv
}