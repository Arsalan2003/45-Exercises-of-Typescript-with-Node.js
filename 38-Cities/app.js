//Describe a function
function describeCity(city, country) {
    if (country === void 0) { country = 'Pakistan'; }
    console.log("".concat(city, " is in ").concat(country));
}
;
//Calling a function
describeCity('Karachi');
describeCity('Islamabad');
describeCity("Gaza", 'Palestine');
