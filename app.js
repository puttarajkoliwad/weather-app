const forecast = require('./utils/forecast')
const geocode = require('./utils/geocode')

let location = process.argv[2]

if(!location){
    console.log('Please provide address!')
}else{
    geocode(location, (error, res)=>{
        if(error){
            console.log(error)
        }else{
            forecast([res.lattitude, res.longitude], (err, resp) =>{
                if(err){
                    console.log(err);
                }else{
                    console.log(resp);
                }
            } )
        }
    })
}