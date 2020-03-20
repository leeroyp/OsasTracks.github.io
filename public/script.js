var baseURL = "http://localhost:3000/spotifylist?userinput=";
// var baseURL = "http://localhost:3000/spotifylist";

function artistSearch(userInput) {

    var queryURL = baseURL + userInput;
    // console.log("QUERY URL", queryURL)

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        var userImage = (response.msg.tracks.items[0].album.images[0].url)
        var image = $("<img>").attr("src", userImage)

        //   Appending the image
        $('#artistImage-search').append(image)

        // console.log(response)

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

function artistPlaylist() {

    var multipleArtists = 'http://localhost:3000/getmultiple'

    $.ajax({
        url: multipleArtists,
        method: "GET"
    }).then(function (response) {

        $('#artist-image1').on('click', function () {

            $("#drake").attr("src", 'https://open.spotify.com/embed/playlist/37i9dQZF1DX7QOv5kjbU68')
            $("drakeInfo").removeClass('hide')
            $('#drake').removeClass('hide')
            $('#drakeBio').removeClass('hide')
            $('.artistpage').addClass('hide')

            var artistImage1 = (response.msg.artists[0].images[0].url)
            var image1 = $("<img>").attr("src", artistImage1);

            $('#drakeImage').append(image1)
        })

        $('#artist-image2').on('click', function () {
            $("#kendrick").attr("src", 'https://open.spotify.com/embed/playlist/37i9dQZF1DX5EkyRFIV92g')
            $('#kendrick').removeClass('hide')
            $('#kendrickBio').removeClass('hide')
            $('.artistpage').addClass('hide')
            // console.log(response)

            var artistImage2 = (response.msg.artists[1].images[0].url)
            var image2 = $("<img>").attr("src", artistImage2);

            $('#kendrickImage').append(image2)
    
        })

        $('#artist-image3').on('click', function () {
            $('#jb').attr("src", 'https://open.spotify.com/embed/playlist/37i9dQZF1DXc2aPBXGmXrt')
            $('#jb').removeClass('hide')
            $('#jbBio').removeClass('hide')
            $('.artistpage').addClass('hide')
            // console.log(response)

            var artistImage3 = (response.msg.artists[2].images[0].url)
            var image3 = $("<img>").attr("src", artistImage3);

            $('#jbImage').append(image3)
        })

        $('#artist-image4').on('click', function () {
            $('#Swift').attr("src", 'https://open.spotify.com/embed/playlist/37i9dQZF1DX5KpP2LN299J')
            $('#Swift').removeClass('hide')
            $('#swiftBio').removeClass('hide')
            $('.artistpage').addClass('hide')
            // console.log(response)

            var artistImage4 = (response.msg.artists[3].images[0].url)
            var image4 = $("<img>").attr("src", artistImage4);

            $('#swiftImage').append(image4)
        })

        $('#artist-image5').on('click', function () {
            $('#ariana').attr("src", 'https://open.spotify.com/embed/playlist/37i9dQZF1DX1PfYnYcpw8w')
            $('#ariana').removeClass('hide')
            $('#arianaBio').removeClass('hide')
            $('.artistpage').addClass('hide')
            // console.log(response)

            var artistImage5 = (response.msg.artists[4].images[0].url)
            var image5 = $("<img>").attr("src", artistImage5);

            $('#arianaImage').append(image5)
        })

        $('#artist-image6').on('click', function () {
            $('#harry').attr("src", 'https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO3ZsXzq')
            $('#harry').removeClass('hide')
            $('#harryBio').removeClass('hide')
            $('.artistpage').addClass('hide')
            // console.log(response)

            var artistImage6 = (response.msg.artists[5].images[0].url)
            var image6 = $("<img>").attr("src", artistImage6);

            $('#harryImage').append(image6)
        })

        $('#artist-image7').on('click', function () {
            $('#billie').attr("src", 'https://open.spotify.com/embed/playlist/37i9dQZF1DX6cg4h2PoN9y')
            $('#billie').removeClass('hide')
            $('#billieBio').removeClass('hide')
            $('.artistpage').addClass('hide')
            // console.log(response)

            var artistImage7 = (response.msg.artists[6].images[0].url)
            var image7 = $("<img>").attr("src", artistImage7);

            $('#billieImage').append(image7)
        })

        $('#artist-image8').on('click', function () {
            $('#weeknd').attr("src", 'https://open.spotify.com/embed/playlist/37i9dQZF1DX6bnzK9KPvrz')
            $('#weeknd').removeClass('hide')
            $('#weekndBio').removeClass('hide')
            $('.artistpage').addClass('hide')
            // console.log(response)

            var artistImage8 = (response.msg.artists[7].images[0].url)
            var image8 = $("<img>").attr("src", artistImage8);

            $('#weekndImage').append(image8)
        })

        relatedArtists()

    })
}

artistPlaylist()

function relatedArtists() {

    var drakeRelatedArtists = 'http://localhost:3000/drakerelatedartists'
    var kendrickRelatedArtists = 'http://localhost:3000/kendrickrelatedartists'
    var bieberRelatedArtists = 'http://localhost:3000/bieberrelatedartists'
    var swiftRelatedArtists = 'http://localhost:3000/swiftrelatedartists'
    var arianaRelatedArtists = 'http://localhost:3000/arianarelatedartists'
    var harryRelatedArtists = 'http://localhost:3000/harryrelatedartists'
    var billieRelatedArtists = 'http://localhost:3000/billierelatedartists'
    var weekndRelatedArtists = 'http://localhost:3000/weekndrelatedartists'

    $.ajax({
        url: drakeRelatedArtists,
        method: "GET"
    }).then(function (response) {

        $('#artist-image1').on('click', function () {

            $('.similarTitle1').removeClass('hide')

            var similarArtist1 = (response.msg.artists[0].images[2].url)
            var similarArtistName1 = (response.msg.artists[0].name)
            var similarArtist2 = (response.msg.artists[1].images[2].url)
            var similarArtistName2 = (response.msg.artists[1].name)
            var similarArtist3 = (response.msg.artists[2].images[2].url)
            var similarArtistName3 = (response.msg.artists[2].name)
            var similarArtist4 = (response.msg.artists[3].images[2].url)
            var similarArtistName4 = (response.msg.artists[3].name)

            var imageSimilar1 = $("<img>").attr("src", similarArtist1);
            var imageSimilar2 = $("<img>").attr("src", similarArtist2);
            var imageSimilar3 = $("<img>").attr("src", similarArtist3);
            var imageSimilar4 = $("<img>").attr("src", similarArtist4);

            $('#similarArtist1').append(imageSimilar1)
            $('#similarname1').append(similarArtistName1)
            $('#similarArtist2').append(imageSimilar2)
            $('#similarname2').append(similarArtistName2)
            $('#similarArtist3').append(imageSimilar3)
            $('#similarname3').append(similarArtistName3)
            $('#similarArtist4').append(imageSimilar4)
            $('#similarname4').append(similarArtistName4)


        })

    })

    $.ajax({
        url: kendrickRelatedArtists,
        method: "GET"
    }).then(function (response) {

        $('#artist-image2').on('click', function () {

            $('.similarTitle2').removeClass('hide')

            var similarArtist5 = (response.msg.artists[0].images[2].url)
            var similarArtistName5 = (response.msg.artists[0].name)
            var similarArtist6 = (response.msg.artists[1].images[2].url)
            var similarArtistName6 = (response.msg.artists[1].name)
            var similarArtist7 = (response.msg.artists[2].images[2].url)
            var similarArtistName7 = (response.msg.artists[2].name)
            var similarArtist8 = (response.msg.artists[3].images[2].url)
            var similarArtistName8 = (response.msg.artists[3].name)

            var imageSimilar5 = $("<img>").attr("src", similarArtist5);
            var imageSimilar6 = $("<img>").attr("src", similarArtist6);
            var imageSimilar7 = $("<img>").attr("src", similarArtist7);
            var imageSimilar8 = $("<img>").attr("src", similarArtist8);

            $('#similarArtist5').append(imageSimilar5)
            $('#similarname5').append(similarArtistName5)
            $('#similarArtist6').append(imageSimilar6)
            $('#similarname6').append(similarArtistName6)
            $('#similarArtist7').append(imageSimilar7)
            $('#similarname7').append(similarArtistName7)
            $('#similarArtist8').append(imageSimilar8)
            $('#similarname8').append(similarArtistName8)

        })

    })

    $.ajax({
        url: bieberRelatedArtists,
        method: "GET"
    }).then(function (response) {

        $('#artist-image3').on('click', function () {

            $('.similarTitle3').removeClass('hide')

            var similarArtist9 = (response.msg.artists[0].images[2].url)
            var similarArtistName9 = (response.msg.artists[0].name)
            var similarArtist10 = (response.msg.artists[1].images[2].url)
            var similarArtistName10 = (response.msg.artists[1].name)
            var similarArtist11 = (response.msg.artists[2].images[2].url)
            var similarArtistName11 = (response.msg.artists[2].name)
            var similarArtist12 = (response.msg.artists[3].images[2].url)
            var similarArtistName12 = (response.msg.artists[3].name)

            var imageSimilar9 = $("<img>").attr("src", similarArtist9);
            var imageSimilar10 = $("<img>").attr("src", similarArtist10);
            var imageSimilar11 = $("<img>").attr("src", similarArtist11);
            var imageSimilar12 = $("<img>").attr("src", similarArtist12);

            $('#similarArtist9').append(imageSimilar9)
            $('#similarname9').append(similarArtistName9)
            $('#similarArtist10').append(imageSimilar10)
            $('#similarname10').append(similarArtistName10)
            $('#similarArtist11').append(imageSimilar11)
            $('#similarname11').append(similarArtistName11)
            $('#similarArtist12').append(imageSimilar12)
            $('#similarname12').append(similarArtistName12)

        })

    })

    $.ajax({
        url: swiftRelatedArtists,
        method: "GET"
    }).then(function (response) {

        $('#artist-image4').on('click', function () {

            $('.similarTitle4').removeClass('hide')

            var similarArtist13 = (response.msg.artists[0].images[2].url)
            var similarArtistName13 = (response.msg.artists[0].name)
            var similarArtist14 = (response.msg.artists[1].images[2].url)
            var similarArtistName14 = (response.msg.artists[1].name)
            var similarArtist15 = (response.msg.artists[2].images[2].url)
            var similarArtistName15 = (response.msg.artists[2].name)
            var similarArtist16 = (response.msg.artists[3].images[2].url)
            var similarArtistName16 = (response.msg.artists[3].name)

            var imageSimilar13 = $("<img>").attr("src", similarArtist13);
            var imageSimilar14 = $("<img>").attr("src", similarArtist14);
            var imageSimilar15 = $("<img>").attr("src", similarArtist15);
            var imageSimilar16 = $("<img>").attr("src", similarArtist16);

            $('#similarArtist13').append(imageSimilar13)
            $('#similarname13').append(similarArtistName13)
            $('#similarArtist14').append(imageSimilar14)
            $('#similarname14').append(similarArtistName14)
            $('#similarArtist15').append(imageSimilar15)
            $('#similarname15').append(similarArtistName15)
            $('#similarArtist16').append(imageSimilar16)
            $('#similarname16').append(similarArtistName16)

        })

    })

    $.ajax({
        url: arianaRelatedArtists,
        method: "GET"
    }).then(function (response) {

        $('#artist-image5').on('click', function () {

            $('.similarTitle5').removeClass('hide')

            var similarArtist17 = (response.msg.artists[0].images[2].url)
            var similarArtistName17 = (response.msg.artists[0].name)
            var similarArtist18 = (response.msg.artists[1].images[2].url)
            var similarArtistName18 = (response.msg.artists[1].name)
            var similarArtist19 = (response.msg.artists[2].images[2].url)
            var similarArtistName19 = (response.msg.artists[2].name)
            var similarArtist20 = (response.msg.artists[3].images[2].url)
            var similarArtistName20 = (response.msg.artists[3].name)

            var imageSimilar17 = $("<img>").attr("src", similarArtist17);
            var imageSimilar18 = $("<img>").attr("src", similarArtist18);
            var imageSimilar19 = $("<img>").attr("src", similarArtist19);
            var imageSimilar20 = $("<img>").attr("src", similarArtist20);

            $('#similarArtist17').append(imageSimilar17)
            $('#similarname17').append(similarArtistName17)
            $('#similarArtist18').append(imageSimilar18)
            $('#similarname18').append(similarArtistName18)
            $('#similarArtist19').append(imageSimilar19)
            $('#similarname19').append(similarArtistName19)
            $('#similarArtist20').append(imageSimilar20)
            $('#similarname20').append(similarArtistName20)

        })

    })

    $.ajax({
        url: harryRelatedArtists,
        method: "GET"
    }).then(function (response) {

        $('#artist-image6').on('click', function () {

            $('.similarTitle6').removeClass('hide')

            var similarArtist21 = (response.msg.artists[0].images[2].url)
            var similarArtistName21 = (response.msg.artists[0].name)
            var similarArtist22 = (response.msg.artists[1].images[2].url)
            var similarArtistName22 = (response.msg.artists[1].name)
            var similarArtist23 = (response.msg.artists[2].images[2].url)
            var similarArtistName23 = (response.msg.artists[2].name)
            var similarArtist24 = (response.msg.artists[3].images[2].url)
            var similarArtistName24 = (response.msg.artists[3].name)

            var imageSimilar21 = $("<img>").attr("src", similarArtist21);
            var imageSimilar22 = $("<img>").attr("src", similarArtist22);
            var imageSimilar23 = $("<img>").attr("src", similarArtist23);
            var imageSimilar24 = $("<img>").attr("src", similarArtist24);

            $('#similarArtist21').append(imageSimilar21)
            $('#similarname21').append(similarArtistName21)
            $('#similarArtist22').append(imageSimilar22)
            $('#similarname22').append(similarArtistName22)
            $('#similarArtist23').append(imageSimilar23)
            $('#similarname23').append(similarArtistName23)
            $('#similarArtist24').append(imageSimilar24)
            $('#similarname24').append(similarArtistName24)

        })

    })

    $.ajax({
        url: billieRelatedArtists,
        method: "GET"
    }).then(function (response) {

        $('#artist-image7').on('click', function () {

            $('.similarTitle7').removeClass('hide')

            var similarArtist25 = (response.msg.artists[0].images[2].url)
            var similarArtistName25 = (response.msg.artists[0].name)
            var similarArtist26 = (response.msg.artists[1].images[2].url)
            var similarArtistName26 = (response.msg.artists[1].name)
            var similarArtist27 = (response.msg.artists[2].images[2].url)
            var similarArtistName27 = (response.msg.artists[2].name)
            var similarArtist28 = (response.msg.artists[3].images[2].url)
            var similarArtistName28 = (response.msg.artists[3].name)

            var imageSimilar25 = $("<img>").attr("src", similarArtist25);
            var imageSimilar26 = $("<img>").attr("src", similarArtist26);
            var imageSimilar27 = $("<img>").attr("src", similarArtist27);
            var imageSimilar28 = $("<img>").attr("src", similarArtist28);

            $('#similarArtist25').append(imageSimilar25)
            $('#similarname25').append(similarArtistName25)
            $('#similarArtist26').append(imageSimilar26)
            $('#similarname26').append(similarArtistName26)
            $('#similarArtist27').append(imageSimilar27)
            $('#similarname27').append(similarArtistName27)
            $('#similarArtist28').append(imageSimilar28)
            $('#similarname28').append(similarArtistName28)

        })

    })

    $.ajax({
        url: weekndRelatedArtists,
        method: "GET"
    }).then(function (response) {

        $('#artist-image8').on('click', function () {

            $('.similarTitle8').removeClass('hide')

            var similarArtist29 = (response.msg.artists[0].images[2].url)
            var similarArtistName29 = (response.msg.artists[0].name)
            var similarArtist30 = (response.msg.artists[1].images[2].url)
            var similarArtistName30 = (response.msg.artists[1].name)
            var similarArtist31 = (response.msg.artists[2].images[2].url)
            var similarArtistName31 = (response.msg.artists[2].name)
            var similarArtist32 = (response.msg.artists[3].images[2].url)
            var similarArtistName32 = (response.msg.artists[3].name)

            var imageSimilar29 = $("<img>").attr("src", similarArtist29);
            var imageSimilar30 = $("<img>").attr("src", similarArtist30);
            var imageSimilar31 = $("<img>").attr("src", similarArtist31);
            var imageSimilar32 = $("<img>").attr("src", similarArtist32);

            $('#similarArtist29').append(imageSimilar29)
            $('#similarname29').append(similarArtistName29)
            $('#similarArtist30').append(imageSimilar30)
            $('#similarname30').append(similarArtistName30)
            $('#similarArtist31').append(imageSimilar31)
            $('#similarname31').append(similarArtistName31)
            $('#similarArtist32').append(imageSimilar32)
            $('#similarname32').append(similarArtistName32)

        })

    })

}

// added class artistpage on html and changed .artistpage from .container