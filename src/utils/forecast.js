const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=d592c3804243fb7690ada1484ed52b21&query=' + latitude + ', ' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        }
        else if (body.error) {
            callback('Unable to find location. Try another search.', undefined)
        }
        else {
            weather = {
                description: body.current.weather_descriptions[0],
                temperature: body.current.temperature,
                feelslike: body.current.feelslike,
                humidity: body.current.humidity
            }
            callback(undefined, 'It is ' + weather.description + '. The temprature is: ' + weather.temperature + ', it feels like: ' + weather.feelslike + '. The humidity percentage is: ' + weather.humidity + '%')
        }
    })
}

module.exports = forecast