//Making a Function
function makeShirt (size: string = 'Large', printmessage: string = 'I Love Typescript'){
    console.log(`Creating a ${size} shirt with the ${printmessage} prints on it`)
};

//Calling a function with by-default values
makeShirt();

//Calling a function now with  medium size and  default message 
makeShirt('Medium');


//Calling a function now with small siza and also different print message
makeShirt('Small', 'I Love Javascript');
