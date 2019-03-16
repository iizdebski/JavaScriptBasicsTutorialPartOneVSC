//ARRAY ITERATORS
//filter
//loop through array
//call a callback function
//returns new array
/*filter change size of array (but not the value) by looking at condition 
map changes the values in the array but does not change the size;*/

const numbers = [0, 1, 2, 3, 4, 5];
//for loop
/*let even = []
for (let i = 0; i<numbers.length; i++){
    if(numbers[i]%2 ===0){
        even.push(numbers[i]);
    }
}
console.log(even);
*/

const even = numbers.filter(function(number){
    return number %2 ===0;
})
const big = numbers.filter(function(number){
    return number > 5;
})
console.log(big);

console.log(even);