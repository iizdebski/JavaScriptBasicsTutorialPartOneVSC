// Select the element ot group of elements that we want to affect.
// Decide the effect we want to apply to the selection

document.getElementsByClassName('class');
//node-list array-like objects
//index based, length property but no array methods;

const special = document.getElementsByClassName('special');
console.log(special);

special[2].style.color = 'blue';