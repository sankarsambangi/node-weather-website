const request = require('request')

const geocode = (address, callback) => {
    const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic2Fua2Fyc2FtYmFuZ2kiLCJhIjoiY2s0anVnOTI5MDEwcDNucnNwaXpwcDhlOSJ9.CqmMIBGZRVuYLkhCs2CcJw'

    request({ url: geocodeUrl, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to mapbox', undefined)
        } else if (body.features && body.features.length == 0) {
            callback('No matching results', undefined)
        } 
        else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })           
        }
    })
}

module.exports = geocode