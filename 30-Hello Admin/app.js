var userName = ['Arsalan', 'Kashan', 'Jawaid', 'Admin', 'Majid'];
userName.forEach(function (oneuser) {
    if (oneuser === 'Admin') {
        console.log("Hello ".concat(oneuser, ", Would you like to see status report."));
    }
    else {
        console.log("Hello ".concat(oneuser, ", Thank you for logging in again"));
    }
});
