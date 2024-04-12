//Define  the function to show the magicians names
function show_Magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//Fucntions to make magicians great through .()map it will  modify array
function make_Great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
//Define an array of magicians names
var magicians_names = ['Harry Poter', 'Joker', 'Scatlet Witch'];
//Making a copy of original array through.slice() function
var copy_magicians_name = magicians_names.slice();
//modify the copied array to include "The Great" with their names
var copy_great_magicians = make_Great(copy_magicians_name);
//Show both arrays original and copied
//Original
console.log("\nOriginal Array\n");
show_Magicians(magicians_names);
//Copied
console.log("\nCopied Array\n");
show_Magicians(copy_great_magicians);
