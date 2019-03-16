// Select the element or group of elements that we want to affect
// Decide the effect we want to apply to the selection

//childNotes - returns all childNotes including whitespace 
//which is trated as a text-node
//children
//firstChild
//lastChild

const result = document.querySelector('#result');
const allChildren = result.childNodes;

console.log(allChildren);

const children = result.children;
//console.log(children);
console.log(result.firstChild);
console.log(result.lastChild);