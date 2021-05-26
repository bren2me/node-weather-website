const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=a7d2d9f441801cf2609ae59ef824b15f&query=' + longitude +',' + latitude 
    // const urx = 'http://api.weatherstack.com/current?access_key=a7d2d9f441801cf2609ae59ef824b15f&query=42.3605,0'
    console.log(url)
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather services', undefined)
        } else if (body.error) {
            callback('Unable to find this place. Try again.', undefined)
        } else {
            callback(undefined, {
                weather_description: body.current.weather_descriptions[0],
                temperature: body.current.temperature
            })
        }
    })
}

module.exports = forecast