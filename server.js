const auth_link = "https://www.strava.com/oauth/token"

function getActivites(res){

    const activities_link = `https://www.strava.com/api/v3/athlete/activities?access_token=${res.access_token}`
    fetch(activities_link)
        .then((res) => console.log(res.json()))
}

function reAuthorize(){
    fetch(auth_link,{
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'

        },

        body: JSON.stringify({

            client_id: '51319',
            client_secret: 'bf2677a9816b7219d66140ae3bfb64de916d2e05 ',
            refresh_token: 'afb67a354f0275d0cf21146df85d73d3cf8fc4d3',
            grant_type: 'refresh_token'
        })
    })
    .then(res => getActivites(res))
      
}

