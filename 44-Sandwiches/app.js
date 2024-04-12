function make_Sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log('\nMaking a sandwich  with  the following items\n');
    items.forEach(function (singleitem) { return console.log('-' + singleitem); });
    console.log('\nNow enjoy sandwich\n');
}
;
make_Sandwich("chicken", 'Chesse', 'Egg', 'Tomato');
make_Sandwich('Bread', 'Butter', 'iceberg');
make_Sandwich('Onions', 'Cucumber', 'Tomato', 'Pepper');
