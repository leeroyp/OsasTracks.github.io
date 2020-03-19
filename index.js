const express = require('express')
var Spotify = require('node-spotify-api');
const app = express()
const port = 3000

var spotify = new Spotify({
        id: '96cba94b0188420d9b0947302e101419',
        secret: 'd6d4076155934e91b382b9d192b9bd3d'
    });

app.use(express.static('public'));
app.get('/', (req, res) => res.send('Hello World!'))

// The req.query.userInput below is being passed in from script.js in the queryURL
// http://localhost:3000/spotifylist?userinput="+ userInput
// So the value in req.query.userInput becomes userInput (whatever the user typed into the text input)
app.get('/spotifylist', (req, res) => {

    console.log('show me req.query ', req.query);
    
    spotify
    .search({type: 'track', query:  req.query.userinput})
    .then(function(response){
        console.log('response', response);
        // res.json sends the response value back to script.js
        // It's the response value in each .then(function (response) { ... })
        res.json({msg: response});
    })
    .catch(function(err){
        console.log('error', error);
        res.json({msg: response});
    });
  
})


app.get('/getmultiple', (req, res) => {

    console.log('show me req.query ', req.query);
    console.log("SPORTIFY", spotify)
    
    // You can use spotify.request() instead of spotify.search()
    // When you use spotify.request() you can give request actual API endpoints like below.
    // You can get these endpoints right out of the spotify API Here: https://developer.spotify.com/documentation/web-api/reference-beta/
    spotify
    .request('https://api.spotify.com/v1/artists?ids=3TVXtAsR1Inumwj472S9r4,2YZyLoL8N0Wb9xBt1NhZWg,1uNFoZAHBGtllmzznpCI3s,06HL4z0CvFAxyc27GXpf02,66CXWjxzNUsdJxJ2JdwvnR,6KImCVD70vtIoJWnq6nGn3,6qqNVTkY8uBg9cP3Jd7DAH,1Xyo4u8uXC1ZmMpatF05PJ')
    .then(function(response) {
        console.log('response', response);
        res.json({msg: response});
    })
    .catch(function(error) {
        console.log('error', error);
        res.json({msg: error});
    });
})

app.get('/toptracks', (req, res) => {

    console.log('show me req.query ', req.query);
    console.log("SPORTIFY", spotify)
    
    // You can use spotify.request() instead of spotify.search()
    // When you use spotify.request() you can give request actual API endpoints like below.
    // You can get these endpoints right out of the spotify API Here: https://developer.spotify.com/documentation/web-api/reference-beta/
    spotify
    .request('https://api.spotify.com/v1/tracks?ids=5yY9lUy8nbvjM1Uyo1Uqoc,5ry2OE6R2zPQFDO85XkgRb,6DCZcSspjsKoFjzjrWoCdn,2G7V7zsVDxg1yRsu7Ew9RJ,5bvnqVuq7UFl0txSlHpsfS,4eLPsYPBmXABThSJ821sqY,7ycBtnsMtyVbbwTfJwRjSP,6PBZN8cbwkqm1ERj2BGXJ1,1bkN9nIkkCnXeG4yitVS1J')
    .then(function(response) {
        console.log('response', response);
        res.json({msg: response});
    })
    .catch(function(error) {
        console.log('error', error);
        res.json({msg: error});
    });
})

app.get('/albumpics', (req, res) => {

    spotify
    .request('https://api.spotify.com/v1/albums/?ids=1lXY618HWkwYKJWBRYR4MK,40GMAhriYJRO1rsY4YdrZb,0ptlfJfwGTy0Yvrk14JK1I,2ZUFSbIkmFkGag000RWOpA')
    .then(function(response) {
        console.log('response', response);
        res.json({msg: response});
    })
    .catch(function(error) {
        console.log('error', error);
        res.json({msg: error});
    });
})



app.listen(port, () => console.log(`Example app listening on port ${port}!`))