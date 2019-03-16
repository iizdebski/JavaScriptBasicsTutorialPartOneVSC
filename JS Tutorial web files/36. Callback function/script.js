//VERY POWERFULL ARRAY METHODS forEach, filter, map, reduce;
// THEY ALL ITERATE OVER ARRAY - NO NEED FOR LOOP
// WE PASS CALLBACK FUNCTION EITHER BY DECLARING SEPARATELY OR ANONYMOUS
// FILTER AND MAP RETURN NEW ARRAY, REDUCE CAN RETURN MORE THAN JUST ARRAY

const numbers = [0,1,2,3,4,5];
//show all numbers
for (let i=0; i<numbers.length; i++){
    console.log(numbers[i]);
}
// get even numbers
const even = [];
for (let i=0; i<numbers.length; i++){
    if(numbers[i]%2 ===0){
        even.push(numbers[i]);
    }
}
console.log(even);