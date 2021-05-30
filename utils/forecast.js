const request = require('postman-request')

const wskey = process.env.WEATHER_STACK;

const getForecast = (geocodes, callback)=>{
    let weather_url = `http://api.weatherstack.com/current?access_key=${wskey}&query=${geocodes[1]+','+geocodes[0]}`;
    request({url: weather_url, json: true}, (err, res, body) => {
        try{
            if(err){
                callback("Error connecting to weather services. Try again!");
            }else if(body.error){
                callback("Error processing the request. Retry for a different location!")
            }else{
                callback(undefined, "Current temperature: " + body.current.temperature);
            }
        }catch(e){
            console.log(e.message);
        }
    })
}

module.exports = getForecast