// Primitive Data Types
//String, Number, Symbol, Boolean, ndefined, Null
//Arrays, Functions, Objects = object
//(typeof)

//assigning to primitive value any changes
//are made directly to that value

//assigning non-primitive value to variable is done by reference
//so any the changes will affect the references

let number = 1;
let number2 = number;
number2 = 4;

console.log("the first value is " + number);
console.log("the second number is " + number2);

let person = {name:"bob"};
let person2 = person;
person2.name = "john";

console.log("the name os the first person " + person.name);
console.log("the name of the second person " + person2.name);