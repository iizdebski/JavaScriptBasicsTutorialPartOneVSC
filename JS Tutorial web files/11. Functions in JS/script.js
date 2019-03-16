// Functions IN JAVASCRIPT

// Declaration, Invoke, Return, Parameters, Expression

/*function add(){
    return 10+2;
}

console.log(add()); 

function add(){
    let sum = 10+3;
    return sum;
}

console.log(add()); 

function add (num1, num2){
    let sum = num1 * num2;
    return sum;
}

console.log(add(10, 35));
console.log(add(4, 60)); */

function add (num1, num2){
    let sum = num1*num2;
    return sum;
}

let result = add(12, 56);
console.log(result);

let result2 = function(num1, num2){
    let sum = num1/num2;
    return sum;
}
console.log(result2(24,3));