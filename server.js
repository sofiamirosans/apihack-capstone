const strava = require('strava-v3')
strava.config({c2879ebb4098792b968d0a061c4403f663cf46a4})
const payload = await strava.athlete.get('access_token')
console.log(payload)

const strava = require('strava-v3');
strava.athlete.get({},function(err,payload,limits) {
    if(!err) {
        console.log(payload);
    }
    else {
        console.log(err);
    }
});

var strava = require('strava-v3')
strava.config({
  "access_token"  : "c2879ebb4098792b968d0a061c4403f663cf46a4",
  "client_id"     : "51319",
  "client_secret" : "bf2677a9816b7219d66140ae3bfb64de916d2e05",
  "redirect_uri"  : "afb67a354f0275d0cf21146df85d73d3cf8fc4d3",
});

