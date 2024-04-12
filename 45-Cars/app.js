//Define a function to create  a car object with  optional options...
function create_Car(Manufacturer, Model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        Manufacturer: Manufacturer,
        Model: Model
    };
    //Add additional options to the car object 
    options.forEach(function (options) {
        var _a = options.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
//Call the function to create a car object 
var my_car = create_Car("Honda", "Civic type-r", "Color: Chrome Black", "Year: 2024");
//print the variable to ensure all the  information is stored  correctly  in the car  object
console.log(my_car);
