const request = require('request')
const chalk = require('chalk')

const forecast = (latitude, longitude, callback) => {
    const forecastUrl = 'https://api.darksky.net/forecast/23e3e95f5b5047846bf5317e0b8f4c84/'+ latitude + ',' + longitude + '?units=si'

    request({ url: forecastUrl, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to internet', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            const data = body.daily.data[0].summary + ' It\'s currently '+ body.currently.temperature +' degrees out.'+
            ' There is '+ body.currently.precipProbability +'% chance of rain.'
            
            callback(undefined, data)
        }
    })
}

module.exports = forecast