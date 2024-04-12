//Define a function to create  a car object with  optional options...
function create_Car(Manufacturer, Model, ...options){
    let car ={
        Manufacturer: Manufacturer,
        Model: Model
    };
//Add additional options to the car object 
    options.forEach(options =>{
        let[key, value]= options.split(":");
        car[key.trim()]= value.trim();

    });

    return car;
}
//Call the function to create a car object 
    let my_car =create_Car("Honda","Civic type-r", "Color: Chrome Black", "Year: 2024");

//print the variable to ensure all the  information is stored  correctly  in the car  object
    console.log(my_car);


