const request = require('postman-request')

const mapboxkey = "pk.eyJ1IjoicHV0dGEiLCJhIjoiY2twYXh1OXp3MDVuazJ2cnJ4eTV1Yjg4MiJ9.oZnG5N9wDxbH1eAa2ZSTMw"

const getGeocode = (location, callback)=>{
    let mapbox_url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=${mapboxkey}&limit=1`;
    request({url: mapbox_url, json: true}, (err, res, body)=>{
        try {
            if(err){
                callback("Error connecting to the location service!")
            }else if(body.error){
                callback("Error fetching geocode. Retry with different location!")
            }else{
                callback(undefined, {
                    lattitude: body.features[0].center[0],
                    longitude: body.features[0].center[1]
                })
            }
        } catch (e) {
            e.stackTrace();
        }
    })
}

module.exports = getGeocode