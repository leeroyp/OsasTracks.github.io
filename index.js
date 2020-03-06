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


app.get('/spotifylist', (req, res) => {

    console.log('show me req.query ', req.query);
    
    spotify
    .search({type: 'track', query:  req.query.userinput})
    .then(function(response){
        console.log('response', response);
        res.json({msg: response});
    })
    .catch(function(err){
        console.log('error', error);
        res.json({msg: response});
    });
    // res.json({msg: "hello"});
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))