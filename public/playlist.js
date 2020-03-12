var genreImage1 = ('https://i1.sndcdn.com/avatars-000397998705-vl0181-t200x200.jpg')
var image1 = $("<img>").attr("src", genreImage1);
$('#genre-image1').append(image1)


var genreImage2 = ('https://s3.amazonaws.com/production.mediajoint.prx.org/public/piece_images/276992/Folder.jpg')
var image2 = $("<img>").attr("src", genreImage2);
$('#genre-image2').append(image2)

var genreImage3 = ('https://iphone-image.apkpure.com/v2/app/3/7/6/3766fda390ee6d13b55d3e3e95b66f6f.jpg?w=200')
var image3 = $("<img>").attr("src", genreImage3);
$('#genre-image3').append(image3)

var genreImage4 = ('https://e-cdns-images.dzcdn.net/images/cover/bcc1b9018d8a76db8e42f62b43acc8bb/200x200-000000-80-0-0.jpg')
var image4 = $("<img>").attr("src", genreImage4);
$('#genre-image4').append(image4)

var genreImage5 = ('https://feistymomma.com/wp-content/uploads/2019/11/countrymusicclipart-200x200.jpg')
var image5 = $("<img>").attr("src", genreImage5);
$('#genre-image5').append(image5)

var genreImage6 = ('https://www.rcmuzik.com/wp-content/uploads/2014/10/popmusic-album-cover-200x200.png')
var image6 = $("<img>").attr("src", genreImage6);
$('#genre-image6').append(image6)

var genreImage7 = ('https://indieheads.net/wp-content/uploads/2019/05/cropped-9765102f-1bae-4cf9-8bda-3a4d81273b29.png')
var image7 = $("<img>").attr("src", genreImage7);
$('#genre-image7').append(image7)

var genreImage8 = ('https://i.pinimg.com/236x/d6/bf/01/d6bf01c6a0764ebe47448c5239be704f--rastafari-quotes-reggae-music.jpg')
var image8 = $("<img>").attr("src", genreImage8);
$('#genre-image8').append(image8)


$('#genre-image1').on('click', function () {
    $("#hiphop").attr("src", 'https://open.spotify.com/embed/playlist/37i9dQZF1DWY6tYEFs22tT')
    $('#hiphop').removeClass('hide')
    $('.container').addClass('hide')
    console.log('clicked1')
})

$('#genre-image2').on('click', function () {
    $("#jazz").attr("src", 'https://open.spotify.com/embed/playlist/37i9dQZF1DX7YCknf2jT6s')
    $('#jazz').removeClass('hide')
    $('.container').addClass('hide')
    console.log('clicked2')
})

$('#genre-image3').on('click', function () {
    $("#rnb").attr("src", 'https://open.spotify.com/embed/playlist/37i9dQZF1DX2WkIBRaChxW')
    $('#rnb').removeClass('hide')
    $('.container').addClass('hide')
    console.log('clicked3')
})

$('#genre-image4').on('click', function () {
    $("#rock").attr("src", 'https://open.spotify.com/embed/playlist/37i9dQZF1DX8jpyvTAre41')
    $('#rock').removeClass('hide')
    $('.container').addClass('hide')
    console.log('clicked4')
})

$('#genre-image5').on('click', function () {
    $("#country").attr("src", 'https://open.spotify.com/embed/playlist/37i9dQZF1DWSK8os4XIQBk')
    $('#country').removeClass('hide')
    $('.container').addClass('hide')
    console.log('clicked5')
})

$('#genre-image6').on('click', function () {
    $("#pop").attr("src", 'https://open.spotify.com/embed/playlist/37i9dQZF1DXarRysLJmuju')
    $('#pop').removeClass('hide')
    $('.container').addClass('hide')
    console.log('clicked6')
})

$('#genre-image7').on('click', function () {
    $("#indie").attr("src", 'https://open.spotify.com/embed/playlist/37i9dQZF1DX7XNgsy4UFju')
    $('#indie').removeClass('hide')
    $('.container').addClass('hide')
    console.log('clicked7')
})

$('#genre-image8').on('click', function () {
    $("#reggea").attr("src", 'https://open.spotify.com/embed/playlist/37i9dQZF1DXbSbnqxMTGx9')
    $('#reggea').removeClass('hide')
    $('.container').addClass('hide')
    console.log('clicked8')
})