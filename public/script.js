var baseURL = "http://localhost:3000/spotifylist?userinput=";
// var baseURL = "http://localhost:3000/spotifylist";

function artistSearch(userInput) {

    var queryURL = baseURL + userInput;
    console.log("QUERY URL", queryURL)

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        var userImage = (response.msg.tracks.items[0].album.images[0].url)
        var image = $("<img>").attr("src", userImage);

        //   Appending the image
        $('#artistImage-search').append(image)

        console.log(response)

    })
}

function getMultiple() {

    var multipleArtists = 'http://localhost:3000/getmultiple'

    $.ajax({
        url: multipleArtists,
        method: "GET"
    }).then(function (response) {

        // console.log(response)
        // console.log("GET IMAGE", response.msg.artists[0].images[0])

        var artistImage1 = (response.msg.artists[0].images[0].url)
        var image1 = $("<img>").attr("src", artistImage1);

        $('#artist-image1').append(image1)
        $('#artist-name1').append(response.msg.artists[0].name)
        $("#frame").attr("src", 'http://p.scdn.co/mp3-preview/b646c809227bb466c7a365469e66693c34d820c2?cid=162b7dc01f3a4a2ca32ed3cec83d1e02')

        var artistImage2 = (response.msg.artists[1].images[0].url)
        var image2 = $("<img>").attr("src", artistImage2);

        $('#artist-image2').append(image2)
        $('#artist-name2').append(response.msg.artists[1].name)
        $("#frame2").attr("src", 'https://p.scdn.co/mp3-preview/dca63100f96e4000e719433d36131a9b5a5883c9?cid=162b7dc01f3a4a2ca32ed3cec83d1e02')

        var artistImage3 = (response.msg.artists[2].images[0].url)
        var image3 = $("<img>").attr("src", artistImage3);

        $('#artist-image3').append(image3)
        $('#artist-name3').append(response.msg.artists[2].name)
        $("#frame3").attr("src", 'http://p.scdn.co/mp3-preview/8e5925d32ed44650ea3829ae6719d7a443c421b4?cid=162b7dc01f3a4a2ca32ed3cec83d1e02')

        var artistImage4 = (response.msg.artists[3].images[0].url)
        var image4 = $("<img>").attr("src", artistImage4);

        $('#artist-image4').append(image4)
        $('#artist-name4').append(response.msg.artists[3].name)
        $("#frame4").attr("src", 'https://p.scdn.co/mp3-preview/fc529bd7c299b310b459e9e08afcf5fd6bb9a71f?cid=a46f5c5745a14fbf826186da8da5ecc3')

        var artistImage5 = (response.msg.artists[4].images[0].url)
        var image5 = $("<img>").attr("src", artistImage5);

        $('#artist-image5').append(image5)
        $('#artist-name5').append(response.msg.artists[4].name)
        $("#frame5").attr("src", 'http://p.scdn.co/mp3-preview/6b6b87770df5e36c2a8f039ed9db12c9afded9d5?cid=a46f5c5745a14fbf826186da8da5ecc3')

        var artistImage6 = (response.msg.artists[5].images[0].url)
        var image6 = $("<img>").attr("src", artistImage6);

        $('#artist-image6').append(image6)
        $('#artist-name6').append(response.msg.artists[5].name)
        $("#frame6").attr("src", 'http://p.scdn.co/mp3-preview/2dbeaa922270b3372d221f09c773a38696aed573?cid=a46f5c5745a14fbf826186da8da5ecc3')

        var artistImage7 = (response.msg.artists[6].images[0].url)
        var image7 = $("<img>").attr("src", artistImage7);

        $('#artist-image7').append(image7)
        $('#artist-name7').append(response.msg.artists[6].name)
        $("#frame7").attr("src", 'https://p.scdn.co/mp3-preview/11fadb5f777b56f8800d67365bc0b50bfe0d827a?cid=162b7dc01f3a4a2ca32ed3cec83d1e02')

        var artistImage8 = (response.msg.artists[7].images[0].url)
        var image8 = $("<img>").attr("src", artistImage8);

        $('#artist-image8').append(image8)
        $('#artist-name8').append(response.msg.artists[7].name)
        $("#frame8").attr("src", 'http://p.scdn.co/mp3-preview/8999706b82c8271c92b1ad8c1fc2b5f9a9af166f?cid=6313d40896f64a2ead4f67035049a647')
        
        // console.log(response);
    })
}

function getAlbumTracks() {

    var toptracks = 'http://localhost:3000/toptracks'

    $.ajax({
        url: toptracks,
        method: "GET"
    }).then(function (response) {
        // console.log(response)
    }
)}

getAlbumTracks()

// Once user inputs their artist selection, the search button will activate the API endpoint and return a response
$('#search').on('click', function () {
    $('.remove').empty()
    $('.container').addClass('hide')
    $('.search').removeClass('hide')
    event.preventDefault();
    var userInput = $('#form').val().trim();
    $('#artistName-search').append(JSON.stringify(userInput));
    artistSearch(userInput);
});

$(document).ready(function () {
    getMultiple()
})

$('#artist-image1').on('click', function () {
    $('.container').addClass('hide')

    var toptracks = 'http://localhost:3000/toptracks'

    $.ajax({
        url: toptracks,
        method: "GET"
    }).then(function (response) {
        // $('#drake-tracks').append('hello')
        $("#drake-tracks").attr("src", 'https://api.spotify.com/v1/playlists/2D2A7VKm7GMjNlN4Bu1WE7/tracks')
        // $('#drake-tracks').append(response.msg.tracks[0].external_urls)
        // console.log(response)
        // console.log(response.msg.tracks[0].external_urls)
    })
    
})

$('#artist-image2').on('click', function () {
    console.log('clicked2')
})

$('#artist-image3').on('click', function () {
    console.log('clicked3')
})

$('#artist-image4').on('click', function () {
    console.log('clicked4')
})

$('#artist-image5').on('click', function () {
    console.log('clicked5')
})

$('#artist-image6').on('click', function () {
    console.log('clicked6')
})

$('#artist-image7').on('click', function () {
    console.log('clicked7')
})

$('#artist-image8').on('click', function () {
    console.log('clicked8')
})

///   When they click on the picture, it sends them to a page of their top tracks
///   Find API for image of the artist

///   Genre - 12 different categories - based on the category selected, generate a random playlist 

/// response.msg.items[0]