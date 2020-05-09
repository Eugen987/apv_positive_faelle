const request = require('request');
const fs = require('fs');
const url = "https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/Inzidenzen/FeatureServer/0/query?f=json&where=ID%3D%2708222%27&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=OBJECTID%20asc&resultOffset=0&resultRecordCount=6&resultType=standard&cacheHint=true";

const job = () => {
    request({
        url: url,
        json: true
    }, function (error, response, body) {
        if(error){
            console.log(error);
        }
        else {
            if (response.statusCode === 200){
                //console.log(body.features) // Print the json response
                for (let feature of body.features){
                    let attributes = feature.attributes;
                    fs.appendFile('./data/fallZahlenRKI.csv',
                        `${attributes.Datenstand.split(',')[0]};${attributes.Altersgruppe};${attributes.EW_M};${attributes.EW_W};${attributes.Faelle_M};${attributes.Faelle_W};${attributes.Inzidenz_M};${attributes.Inzidenz_W}\n`,
                        (err) =>{
                            if(err){
                                console.log(err);
                                return;
                            }
                            console.log('SUCCESS');
                        });
                }
            }
            else {
                console.log("statuscode = "+response.statusCode);
            }
        }
    })
}


job();
setInterval(job, 24*60*60*1000);