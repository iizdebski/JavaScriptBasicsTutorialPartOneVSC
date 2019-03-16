// create code and execute whenever you want/need
//adds behavior to objects (methods)

//define

function nameOfFunction(){
    // code that will be executed
}

// call of invoke

nameOfFunction();
//obj.method() string.toLowerCase()

//function declarations dunction expressions

//declaration 
function nameOfFunction(){
    //code that will be executed    
}

//expression

let varName = function nameOfFunction(){
    //code that will be executed
}
varName();

//parameters and arguments

function nameOfFFunction(firstPara,secondPara){
    //code wil be executed with these parameters
}

//call

nameOfFunction(firstArg, secondArg)

//return statement

function nameOfFunction(){
    //code
    return//code will not run    
}

//assign function invocation to variable

function sayHello(){
    return "Hello There Stranger"
}

let varName = sayHello();
// console.log(varName) === 'Hello There Stranger'

//any variable outside code block is said to have GLOBAL SCOPE!!!
//can be accessed anywhere in the program
//IT IS NOT A GOOD PRACTICE!!!!!!!!!

let sayHi = 'Hello';

function getGreeting(){
    console.log(sayHi);
}

getGreeting();

if(5>2){
    console.log(sayHi)
}