
const axios =require('axios');

const getLugarLatLng = async (dir)=>{

   
    const encodeUlr = encodeURI(dir) ;
    
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${dir}`,
        headers: {'x-rapidapi-key': '494a86e4f9msh1a2d899cd8955a7p198b93jsn1d4d3d34953d'}
      });

         const resp =  await instance.get();

         if (resp.data.Results.lenght === 0){

            throw new Error(`localizacion no fue encontrada: ${dir}`);
         }

         const data = resp.data.Results[0];
         const direccion    = data.name;
         const lat          = data.lat;
         const lon          = data.lon
    
      return {
            direccion,
            lat,
            lon
      }
            
}

module.exports = {
    getLugarLatLng
}


