// String
let name = "john";
let lastName = "pepper"

let fullName = name + " " + lastName; // concatgenation

console.log(fullName)
//Obj
let person = {
    name : "john", // properties
    lastName : "pepper",
    fullName:function(){
        console.log(this.name + " " + this.lastName)
    } 
}

console.log(person.name);
person.fullName();

//String obj

let human = "John Pepper";

let length = human.length;

console.log(human.toLowerCase());
console.log(human.toUpperCase());

console.log(human.charAt(1));
console.log(human.charAt(human.length-1))

console.log(human.indexOf("e"));

console.log(human.toLowerCase().startsWith("john"));
console.log(human.toLowerCase().endsWith("pepper"));

console.log(human.slice(0,3));
console.log(human.slice(-5));

console.log(human.includes("zzz"));