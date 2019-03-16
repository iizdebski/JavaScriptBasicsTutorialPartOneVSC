
// event object
// event type
//event target
//event.preventDefault();


/*
document.body.addEventListener('click', function (event){

    console.log(event.type);
    
})
*/


document.getElementById('link').addEventListener('click', function (event){
    event.preventDefault();

    console.log(event.target);
    
})