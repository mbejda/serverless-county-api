var shapefile = require("shapefile");

const normalize = function(input){
    return input.replace(/\s+/g, '-').toLowerCase();
};

const countyAPI = async (inputRaw, stateId) => {
    const input = normalize(inputRaw);

    return new Promise((resolve, reject)=> {

        const path = "data/county/2019/tl_2019_us_county.shp";
        const response = [];

        shapefile.open(path)
            .then(source => source.read()
                .then(function log(result) {
                    if(!result.value || !result.value.properties){
                        return resolve(response);
                    }
                    const name = normalize(result.value.properties.NAME);
                    if(input === name && result.value.properties.STATEFP === stateId){

                        const name = result.value.properties.NAMELSAD;
                        delete result.value.properties;
                        result.value.properties = {
                            name: name
                        };
                        response.push(result.value);
                    }

                    return source.read().then(log);
                }))
            .catch(error => console.error(error.stack));
    });
};

module.exports.countyAPI = async (text, stateId) => {
    try{
        return countyAPI(text, stateId);
    }catch(error){
        return Promise.reject(error);
    }
};
