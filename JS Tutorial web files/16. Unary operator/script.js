// unary operator

/* let text = "string";

console.log(typeof text); //operand

//binary

let number = 3;

// ternary

//condition ? (runs if true) : (runs if false)

let result = 9;

// result%2===0 ? console.log("even number") : console.log("odd number");

let expression = result%2;

function response (text){
    console.log(text + " number");
}

expression === 0 ? response("even") : response("odd"); */

// let dice = 7;
/*
if(dice===1){
    console.log("You got one");
}
else if (dice ===2){
    console.log("You got two");
}
else{
    console.log("You did not roll the dice");
} */

/* switch(dice){
    case 1:
    console.log("You got one");
    break;
    case 2:
    console.log("You got two");
    break;
    default:
    console.log("You did not roll the dice");
    break;
}  */

function displayDayOfTheWeek(day){

    switch(day){
        case 1:
        console.log("Today is Monday");
        break;
        case 2:
        console.log("Today is Tuesday");
        break;
        case 3:
        console.log("Today is Wednesday");
        break;
        case 4:
        console.log("Today is Thursday");
        break;
        case 5:
        console.log("Today is Friday");
        break;
        case 6:
        console.log("Today is Saturday");
        break;
        case 7:
        console.log("INVALID DAY!!!!!!!!!");
        break;
    }
}


displayDayOfTheWeek(4);
displayDayOfTheWeek(3);
displayDayOfTheWeek(2);
displayDayOfTheWeek(1);
displayDayOfTheWeek(6);