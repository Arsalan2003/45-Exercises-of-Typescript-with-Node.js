//Define  the function to show the magicians names
function show_Magicians(magicians: string[]){
    magicians.forEach(name =>console.log(name));
}

//Fucntions to make magicians great through .()map it will  modify array
function make_Great (magicians: string[]){
    return magicians.map(name => `The Great ${name}`);
}

//Define an array of magicians names
let magicians_names = ['Harry Poter', 'Joker', 'Scatlet Witch']

//Call make_great functions to modify magicians names
let great_magicians = make_Great(magicians_names)

//Call show_magicians that show modified list of magicians
show_Magicians (great_magicians)