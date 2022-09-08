// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title=123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// document.all[10].textContent='Hello';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);
// var headerTitle=document.getElementById('header-title');
// var header=document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent='Hello';
// headerTitle.innerText='GoodBye';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML='<h3>Hello</h3>';
// header.style.borderBottom='solid 3px #000';
// var addItems=document.getElementsByClassName('title');
// var requiredElement = addItems[0];
// requiredElement.style.color='green';
// requiredElement.style.fontWeight='bold';

// var items=document.getElementsByClassName('list-group-item');
// for(var i=0;i<items.length;i++){
//     if(i==2){
//         items[i].style.backgroundColor='green';
//         items[i].style.fontWeight='bold';
//     }
//     else{
//         items[i].style.fontWeight='bold';
//     }
// }

// var li=document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent='Hello 2';
// li[1].style.fontWeight='bold';
// li[1].style.backgroundColor='green';

// for(var i=0;i<li.length;i++){
//     li[1].style.backgroundColor='#f4f4f4';
// }

// var header=document.querySelector('#main-header');
// header.style.borderBottom='solid 4px #ccc';

// var secondItem=document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor='green';

// var thirdItem=document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.display='none';

// var secondItem=document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color='green';

// var oddItems=document.querySelector('.list-group-item:nth-child(odd)');

// for(var i=0;i<oddItems.length;i++){
//     odd[i].style.backgroundColor='green';
// }


// var itemList=document.querySelector('#items');
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentElement.parentElement);

// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentNode.parentNode);

// console.log(itemList.childNodes);
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor='yellow';

// console.log(itemList.firstChild);
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent='Hello 1';


// console.log(itemList.lastChild);
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent='Hello 4';

// console.log(itemList.nextSibling);
// console.log(itemList.nextElementSibling);

// console.log(itemList.previousSibling);
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color='green';

// var newDiv=document.createElement('div');
// newDiv.className='hello';
// newDiv.id='hello1';
// newDiv.setAttribute('title','Hello Div');
// var newDivText=document.createTextNode('Hello world');
// newDiv.appendChild(newDivText);
// var container=document.querySelector('header .container');
// var h1=document.querySelector('header h1');
// console.log(newDiv);
// newDiv.style.fontSize='30px';
// container.insertBefore(newDiv,h1);

// var newDiv=document.createElement('h1');
// var newDivText=document.createTextNode('Hello');
// newDiv.appendChild(newDivText);
// var parentDiv=document.querySelector('header .container');
// parentDiv.insertBefore(newDiv,parentDiv.firstElementChild);


// var newItem=document.createElement('li');
// var newItemText=document.createTextNode('Hello');
// newItem.className="list-group-item";
// newItem.appendChild(newItemText);
// var parentItem=document.getElementById('items');
// parentItem.insertBefore(newItem,parentItem.firstElementChild);


var form=document.getElementById('addForm');
var itemList=document.getElementById('items');
var filter=document.getElementById('filter');

form.addEventListener('submit',addItem);
itemList.addEventListener('click',removeItem);
filter.addEventListener('keyup',filterItems);

function addItem(e){
    e.preventDefault();
    var newItem=document.getElementById('item').value;
    var newDescription=document.getElementById('description').value;
    var newProduct=newItem+"\n"+newDescription;
    var li = document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(newProduct));

    var deleteBtn=document.createElement('button');
    deleteBtn.className='btn btn-danger btn-sm float-right delete'
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);
    itemList.appendChild(li);
    console.log(li);

    var editBtn=document.createElement('button');
    editBtn.className='btn btn-primary btn-sm float-right edit'
    editBtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(editBtn);
    itemList.appendChild(li);
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you Sure?')){
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function filterItems(e){
    var text=e.target.value.toLowerCase();
    console.log(text);
    var items=itemList.getElementsByTagName('li');
    console.log(items);
    Array.from(items).forEach(function(item,description){
        var itemName=item.firstChild.textContent+description.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!=-1){
            item.style.display="block";
        }
        else{
            item.style.display="none";
        }
    });
}
