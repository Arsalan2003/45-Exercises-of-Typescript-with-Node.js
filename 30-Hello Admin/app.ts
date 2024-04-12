//Creating an array
let userName = ['Arsalan', 'Kashan', 'Jawaid', 'Admin', 'Majid'];

//using foreach loop on array
userName.forEach(oneuser => {
    if(oneuser === 'Admin'){
        console.log(`Hello ${oneuser}, Would you like to see status report.`)
    }
    else{
        console.log(`Hello ${oneuser}, Thank you for logging in again`)
    }
});