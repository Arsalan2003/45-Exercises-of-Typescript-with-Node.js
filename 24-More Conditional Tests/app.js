var apple = "apple";
var uppercaseApple = "APPLE";
var five = 5;
var ten = 10;
var batsman = ["Babar Azam", "ABD Viliers", "Virat Kohli", "Kane Williamson"];
//Test for equality and inequality with strings
console.log("Is apple is equal to apple");
console.log(apple == "apple");
console.log("Is apple is not equal to apple");
console.log(apple != 'apple');
//Tests using lowercase function
console.log("\nIs APPLE is equal to apple after converting into lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple");
console.log("\nIs APPLE is not equal to apple after converting into lowercase?");
console.log(uppercaseApple.toLowerCase() != "apple");
//Numerical Tests
//Equal or not equal to
console.log("Is 5 is equal to 10?");
console.log(five == 10);
console.log("is 5 is not equal to 10?");
console.log(five != 10);
//Greater or smaller than
console.log("\nFive is greater than 10");
console.log(five > 10);
console.log("\nIs five less than 10?");
console.log(five < 10);
//Greater than or equal to
console.log("\nIs ten is greater or equal to 5?");
console.log(ten >= 5);
//Less than or equal to
console.log("\n is ten is less than or equal to 5?");
console.log(ten <= 5);
//Tests using "and" & "or" operators
//Using "And"(&&)
console.log("\nten is not equal to 5 and five is less than 10");
console.log(ten != 5 && five <= 10);
console.log("\nten is equal to 5 and five is greater than 10");
console.log(ten == 5 && five >= 10);
//Using "Or"(||)
console.log("\nfive is equal to 10 Or ten is greater than 5");
console.log(five == 10 || ten > 5);
console.log("\nfive is equal to 10 Or 5 is greater than 10");
console.log(five == 10 || five > 10);
//Test whether a name is in array
console.log("\n Is Babar Azam include in my batsman array");
console.log(batsman.includes("Babar Azam"));
//Not include
console.log("\n Is Babar Azam not included in my batsman array");
console.log(!batsman.includes("Babar Azam"));
