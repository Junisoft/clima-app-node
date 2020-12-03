const axios = require('axios');

const getLugarLatLon = async(direccion) => {
    const encodeURL = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURL}`,
        headers: { 'x-rapidapi-key': '8579892badmshba414c90ce48787p19cfd0jsnae39ca983516' }
    });

    const resp = await instance.get();
    const data = resp.data.Results || [];

    // if (data.length === 0) {
    //     throw new Error(`No hay resultados para ${direccion}`)
    // }

    // const info = data[0];
    // const dir = info.name;
    // const lat = info.lat;
    // const lon = info.lon;
    const dir = direccion;
    const lat = 35;
    const lon = 139;

    return {
        dir,
        lat,
        lon
    }
}

module.exports = {
    getLugarLatLon
}