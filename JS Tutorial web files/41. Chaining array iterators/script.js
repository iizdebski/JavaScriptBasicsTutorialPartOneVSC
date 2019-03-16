// CHAINING ARRAY ITERATORS

const fruits = ['oranges', 'pear', 'banana', 'oranges', 'pear', 'banana', 'apple',
'oranges'];

const sale = fruits.filter(function(fruit){
    return fruit === 'oranges';
}).map(function(name){
    return `${name} are on sale`
})

console.log(sale);