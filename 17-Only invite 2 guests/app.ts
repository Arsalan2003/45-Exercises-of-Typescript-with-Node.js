// Creating a guest list Array
let guestList = ["Hunzala", "Abu Huraira", "Aiman", "Javeriya"];

// Making variable for those who not come 
let dontCome = guestList[2];

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
let middleindex: number = Math.floor (guestList.length / 2);

// Adding new guest on middle index array
guestList.splice(middleindex, 0, "Hadi");

//print a message of update list
console.log("updated list of our guest");

// Sending invitation to each guest with their names 
guestList.forEach(guest => console.log(`Assalamualaikum ${guest}, Would you like to attend my marriage ceremony`));

//Inform that only 2 guest can be invited for ceremony
console.log("Unfortunately, I don't have budget to afford guest so i can only invite 2 guest");

//Using while loop to remove guests from the array until only two names remain
while(guestList.length > 2){
    let removedguest = guestList.pop();
    console.log(`Sorry, ${removedguest} i can't invite to you on my ceremony`);
}
//Sending an invitation to last 2 guests on the list
console.log("Invitations to the last 2 guests");
guestList.forEach(lasttwo=>console.log(`Lucky ${lasttwo} you are still invited`));

//removing last two guests from the list
guestList.pop();
guestList.pop();


console.log("Empty List:", guestList);
