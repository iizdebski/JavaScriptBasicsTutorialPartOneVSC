// Selecrt the element or group of elements that we want to affect.
// Decide the effect we want to apply to the selection.

document.getElementsByTagName('element');
//node-list array-like objects
//index based, length property but no arra methods;

const list = document.getElementsByTagName('li');

//console.log(list.length);
console.log(list);

list[0].style.color='red';

// list.forEach(function(item){
//    console.log(item);
// })

const betterList = [...list];

console.log(betterList);
betterList.forEach(item => console.log(item)
)