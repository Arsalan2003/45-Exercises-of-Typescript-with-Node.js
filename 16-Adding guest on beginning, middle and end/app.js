// Creating a guest list Array
var guestList = ["Hunzala", "Abu Huraira", "Aiman", "Javeriya"];
// Making variable for those who not come 
var dontCome = guestList[2];
// print the name of guest who can't come
console.log(dontCome, "Nhi AA Skti");
// Add or remove values from guest list array
guestList.splice(2, 1, "Kishwa");
// Message print for 2 more guest
console.log("Good News! 3 more guest will join us on my wedding ceremony");
//Adding new guest on beginning index of array
guestList.unshift("Farhan");
//Addding new guest on the ending index of array
guestList.push("ubaid");
// Get a  middle index  of guest list array
var middleindex = Math.floor(guestList.length / 2);
// Adding new guest on middle index array
guestList.splice(middleindex, 0, "Hadi");
//print a message of update list
console.log("updated list of our guest");
// Sending invitation to each guest with their names 
guestList.forEach(function (guest) { return console.log("Assalamualaikum ".concat(guest, ", Would you like to attend my marriage ceremony")); });
