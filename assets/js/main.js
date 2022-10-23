

let items = document.querySelectorAll('.item');
let fruit = document.querySelector('.fruit');
let vegetables = document.querySelector('.vegetables');

let dragItem;

for (const item of items) {
    item.ondragstart = e=>{
        dragItem = item;
    }
}
console.log(dragItem);

fruit.ondragover = e=>{
    e.preventDefault();
}
fruit.ondrop = e =>{
    if (dragItem.name == 'fruit') {
        fruit.appendChild(dragItem);
    }
    else{
        alert('Vegetables');
    }
}

vegetables.ondragover = e=>{
    e.preventDefault();
}
vegetables.ondrop = e =>{
    if (dragItem.name == 'vegetables') {
        vegetables.appendChild(dragItem);
    }
    else{
        alert('Fruit');
    }
}