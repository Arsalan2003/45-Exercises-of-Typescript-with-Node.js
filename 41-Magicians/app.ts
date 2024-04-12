//Define a function to print each magician name from an array
function show_Magicians(Magicians: string[]){
    Magicians.forEach(name => console.log(name));

}
//Define an array  containing magicians name
let magician_names =['Harry Potter', 'Joker', 'Scarlet witch'];

//Call the function  to print each magician name
show_Magicians(magician_names);