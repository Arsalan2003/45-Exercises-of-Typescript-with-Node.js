let Current_username = ['Arsalan', 'Aiman', 'Rizwan', 'Muaviya', 'Waqar'];

let New_user = ['Husnain', 'Anas', 'Ayesha', 'Arsalan', 'Aiman'];

New_user.forEach(new_one_user =>{
    let OurCondition = Current_username.some(current_one_user =>current_one_user.toLowerCase() === new_one_user.toLowerCase())

    if(OurCondition){
        console.log(`Sorry ${new_one_user}, is already taken!`)
    }
    else{
        console.log(`This username ${new_one_user} is available`);
    }})