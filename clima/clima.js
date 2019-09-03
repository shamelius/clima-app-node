
const axios =require('axios');

const getClima = async (lat, lon)=>{

 const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=933e36d41abf7678ec44dd3c768e01ca&units=metric`);

 return resp.data.main.temp;
        
}

module.exports = {
    getClima
}


