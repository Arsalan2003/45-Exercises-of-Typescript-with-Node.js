var Current_username = ['Arsalan', 'Aiman', 'Rizwan', 'Muaviya', 'Waqar'];
var New_user = ['Husnain', 'Anas', 'Ayesha', 'Arsalan', 'Aiman'];
New_user.forEach(function (new_one_user) {
    var OurCondition = Current_username.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    if (OurCondition) {
        console.log("Sorry ".concat(new_one_user, ", is already taken!"));
    }
    else {
        console.log("This username ".concat(new_one_user, " is available"));
    }
});
