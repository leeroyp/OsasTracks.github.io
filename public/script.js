function testify(userInput) {

    // var artist = $(this).a'ttr("artist-name")
    var queryURL = "http://localhost:3000/spotifylist?userinput=" + userInput;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        // console.log(response)
        console.log(response.msg.tracks.items[0].album.name)
    })

    // var artDiv =$("<div class='movie'></div>");
    // var test = response.msgpopularity
    // var test = response
    // console.log(test)
    // var pOne = $("<p>").text('Popoularity: ' + test)

    // displayMovieInfo()
}

    //Once user inputs their artist selection, the search button will activate the API endpoint and return a response
$('#search').on('click', function () {
    event.preventDefault();
    var userInput = $('#form').val().trim();
    testify(userInput);
    $('#name').append(JSON.stringify(userInput));
    // artistInfo()
});


// function artistInfo(){

    // var artist = $(this).attr("artist-name")

    // $('#name').append(userInput);
    // $('#name').append(GetArtistAlbums);
// };