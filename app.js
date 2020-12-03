const { getLugarLatLon } = require('./lugar/lugar');
const { getClima } = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).help().argv;

//console.log(argv.direccion);

// getLugarLatLon(argv.direccion).then(resp => {
//     console.log(resp);
// }).catch(err => console.log('Error: ', err))

// getClima(35, 139)
//     .then(resp => console.log(resp))
//     .catch(err => console.log('Error: ', err))

const getInfo = async(direccion) => {
    try {
        const respLatLon = await getLugarLatLon(direccion);
        const respClima = await getClima(respLatLon.lat, respLatLon.lon);

        return `El clima de ${direccion} es de ${respClima}`;
    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`;
    }
}

getInfo(argv.direccion)
    .then(resp => console.log(resp))
    .catch(err => console.log(err))