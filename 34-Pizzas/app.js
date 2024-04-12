//Creating an array
var pizzas = ["Chicken Fajita", "B.B.Q Chicken", "Chicken Tikka"];
//using for-loop 
for (var _i = 0, pizzas_1 = pizzas; _i < pizzas_1.length; _i++) {
    var onePizza = pizzas_1[_i];
    console.log("I like ".concat(onePizza, " pizza"));
}
//print  a message  outside  of the for loop
console.log("Pizza is Love");
