


let toDoList = [];

function addItem(arr){
    let answer = prompt("what would you like to do today");
    let correct = answer.toLowerCase().trim();

if(checkDuplicate(arr, correct)){
    arr.push(correct);
    showItems(toDoList);
}else{
    alert("item won't be added to the list. Item already exists");
}
}

function checkDuplicate(arr, item){
    let exists = false;
    let index = arr.indexOf(item);

    if(index != -1){
        exists = false;        
    }else{
        exists = true;
    }
    return exists;
}

// remove item function
function removeItem(list){
    let answer=prompt('Which item would you like to DELETE from the list');
    let correct = answer.trim().toLowerCase();

    let index = list.indexOf(correct);   

    if(!checkDuplicate(list,correct)){
        let removedItem = list.splice(index,1);
        console.log(removedItem);
        alert(`Your removed "${removedItem}" from your list `)
    }
    else{
        console.log('no such value exists');
    }
}

// function show items

function showItems(list){
    let listValues = 'Your list items are : ';

    for (let i = 0; i<list.length;i++){
        listValues += `List item Nr${i+1} : ${list[i]}`;
    }
    alert(listValues);
}

addItem(toDoList);
addItem(toDoList);
addItem(toDoList);
removeItem(toDoList);

console.log(toDoList);