//Variable
var alienColor = "Green";
//Using if and else-if statements
//First version
if (alienColor === "Green") {
    console.log("(Version: 1)You have earned 5 points for shooting green alien");
}
else if (alienColor === "Yellow") {
    console.log("You have earned 10 points for shooting yellow alien");
}
else if (alienColor === "Red") {
    console.log("You have earned 15 points for shooting red alien");
}
;
//Second Version
var alienColor2 = "Yellow";
if (alienColor2 === "Green") {
    console.log("You have earned 5 points for shooting green alien");
}
else if (alienColor2 === "Yellow") {
    console.log("(Version: 2)You have earned 10 points for shooting yellow alien");
}
else if (alienColor2 === "Red") {
    console.log("You have earned 15 points for shooting red alien");
}
;
//Third version
var alienColor3 = "Red";
if (alienColor3 === "Yellow") {
    console.log("You have earned 10 points for shooting yellow alien");
}
else if (alienColor3 === "Green") {
    console.log("You have earned 5 points for shooting green alien");
}
else if (alienColor3 === "Red") {
    console.log("(Version: 3)You have earned 15 points for shooting red alien");
}
;
