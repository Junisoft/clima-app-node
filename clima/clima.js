const axios = require('axios');

const getClima = async(lat, lon) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=087652e8226c030fae32e01bd0062509`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}