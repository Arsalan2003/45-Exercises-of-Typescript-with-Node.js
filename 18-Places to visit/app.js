var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//making an array of countries and print its original order
var countriesToVisit = ["Saudi Arabia", "Palestine", "Turkey", "Qatar"];
console.log("Original Order", countriesToVisit);
//print an array in alphabetical order without modifying actual list
console.log("Alphabetical Order:", __spreadArray([], countriesToVisit, true).sort());
//show that the array is still in its original order
console.log("Still In Original Order:", countriesToVisit);
//print the array in reverse order with out chaning actual list
console.log("Reverse Order:", __spreadArray([], countriesToVisit, true).reverse());
//show that the array is still in its original order
console.log("Still In Original Order:", countriesToVisit);
//Change the original order now
console.log("Original Order Reversed:", countriesToVisit.reverse());
//print the array to show that its back to its original order
console.log("Back To Original Order:", countriesToVisit.reverse());
//print the array to show that its order has been changed into alphabetical order now
console.log("Sorted in Alphabetical Order:", countriesToVisit.sort());
//Change the original order again, now in reverser order again
console.log("Original Array Reverse Again:", countriesToVisit.reverse());
