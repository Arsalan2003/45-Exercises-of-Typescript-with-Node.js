//Define the make_album function
function Make_Album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
//Calling three functions and creating 3 variables  with different values
var album1 = Make_Album('Arsalan', 'Album_title 1');
var album2 = Make_Album('Hunzala', 'Album_title 2');
//Calling three functions and  creating 3 variables  with different  values
var album3 = Make_Album('Ubaid', 'Album-title 3', 10);
//print values  of our object  created  my function
console.log(album1),
    console.log(album2),
    console.log(album3);
