let count=0;
function sandwiches(...args){
    count++;
    console.log(`sandwich ${count} has : ${args.join('-')} ingredients`);
}
sandwiches('veggies', 'ketchup');
sandwiches('bread', 'chicken', 'mayo');
sandwiches('ketchup', 'bread', 'beef', 'sauce', 'mayo');