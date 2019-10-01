const api = require("./index");
const fips = require('./data/fips');

module.exports.county = async event => {
    try {
        const county = event.queryStringParameters.name;
        const state = event.pathParameters.state;
        if(!county){
            return {
                statusCode: 400,
                body: JSON.stringify({message: `missing county name (orange, seminole ..etc)`}),
            };
        }
        if(!state){
            return {
                statusCode: 400,
                body: JSON.stringify({message: `missing state name (Florida, fl ..etc)`}),
            };
        }
        const stateId = Object.keys(fips).filter((key) => {
            const obj = fips[key];
            const abbrev = obj.abbreviation.toLowerCase();
            const name = obj.name.toLowerCase();
            if(abbrev === state || name === state){
                return key;
            }
        })[0];

        if(!stateId){
            return {
                statusCode: 400,
                body: JSON.stringify({message: `state not found - ${state}`}),
            };
        }
        const rawResponse = await api.countyAPI(county,stateId, fips[stateId]);
        let response = rawResponse;


        return {
            statusCode: 200,
            body: JSON.stringify({response}),
        };
    } catch(e){
        console.error(e);
        return {
            statusCode: 500,
            body: JSON.stringify({error: e}),
        };
    }
};
