var guestList = ["Hunzala", "Abu Huraira", "Aiman", "Javeriya"];
var dontCome = guestList[2];
console.log(dontCome, "Nhi AA Skti");
guestList.splice(2, 1, "Kishwa");
guestList.forEach(function (guest) { return console.log("Assalamualaikum ".concat(guest, ", Would you like to attend my marriage ceremony")); });
