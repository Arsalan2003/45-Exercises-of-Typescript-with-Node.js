//Making a Function
function makeShirt(size, printmessage) {
    if (size === void 0) { size = 'Large'; }
    if (printmessage === void 0) { printmessage = 'I Love Typescript'; }
    console.log("Creating a ".concat(size, " shirt with the ").concat(printmessage, " prints on it"));
}
;
//Calling a function with by-default values
makeShirt();
//Calling a function now with  medium size and  default message 
makeShirt('Medium');
//Calling a function now with small siza and also different print message
makeShirt('Small', 'I Love Javascript');
