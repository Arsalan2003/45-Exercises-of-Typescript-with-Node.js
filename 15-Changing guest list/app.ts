let guestList = ["Hunzala", "Abu Huraira", "Aiman", "Javeriya"];

let dontCome = guestList[2];

console.log(dontCome, "Nhi AA Skti");

guestList.splice(2, 1, "Kishwa");


guestList.forEach(guest => console.log(`Assalamualaikum ${guest}, Would you like to attend my marriage ceremony`));



