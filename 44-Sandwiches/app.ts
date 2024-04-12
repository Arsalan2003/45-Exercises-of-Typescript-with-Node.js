function make_Sandwich(...items: string[]){
    console.log('\nMaking a sandwich  with  the following items\n');

    items.forEach(singleitem=> console.log('-' + singleitem))

    console.log('\nNow enjoy sandwich\n')

};

make_Sandwich("chicken", 'Chesse', 'Egg', 'Tomato');

make_Sandwich('Bread', 'Butter', 'iceberg');

make_Sandwich('Onions', 'Cucumber', 'Tomato', 'Pepper');
