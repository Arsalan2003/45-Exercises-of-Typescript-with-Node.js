function show_Magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_Great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
var magicians_names = ['Harry Poter', 'Joker', 'Scatlet Witch'];
var great_magicians = make_Great(magicians_names);
console.log(great_magicians);
show_Magicians(great_magicians);
