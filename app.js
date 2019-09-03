
const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar') ;
const clima = require('./clima/clima') ;

//  lugar.getLugarLatLng(argv.direccion)
//                 .then(console.log);

// clima.getClima(26.20999,-98.230003)
//     .then(console.log)
//     .catch(console.log)
 
const getInfo = async (direccion)=>{

    try {

        const coord = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coord.lat, coord.lon);
        return `el clima de ${coord.direccion} es de ${temp}`
             
    } catch (error) {
        return `No de pudo determinar el clima de ${direccion}`
    }

}

getInfo(argv.direccion)
        .then(console.log)
        .catch(console.log)
    

 


    




