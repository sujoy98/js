let val;

// returns the entire document
val = document;
console.log(val);

// returns all of the html collection in an array format
val = document.all;
console.log(val);

// to access any particular element we use index numbers
val = document.all[4];
console.log(val);

// we can also view total numbers of element in the DOM by length property (all the elements)
val = document.all.length;
console.log(val);

// we can also get these seperate values
val = document.head;
console.log(val);

val = document.body;
console.log(val);

val = document.doctype;
console.log(val);

val = document.domain;
console.log(val);

val = document.URL;
console.log(val);

val = document.characterSet;
console.log(val);

val = document.contentType;
console.log(val);

// FORMS
// returns a HTML Collection and it will have all the form the html file 
val = document.forms;
console.log(val);

// we can access any form by using index values
val = document.forms[0];
console.log(val);

// we can fetch details form these form
val = document.forms[0].id;
console.log(val);

val = document.forms[0].method; // get or post
console.log(val);

val = document.forms[0].action;
console.log(val);


// LINKS
// retunns all the links in array format
val = document.links;
console.log(val);

// we can get specific links with index values
val = document.links[0];
console.log(val);

// we can fetch details form these links
val = document.links[0].id;
console.log(val);

val = document.links[0].className;
console.log(val);

// collection of classes 
val = document.links[0].classList; // returns a DOM token list
console.log(val);

val = document.links[0].classList[1]; // content of the classList
console.log(val); 


// IMAGES
val = document.images;
console.log(val);

// SCRIPTS -> list out all the scripts in array format
val = document.scripts;
console.log(val);

// we can view specific script
val = document.scripts[2];
console.log(val);


// we can get attributes form the scripts
val = document.scripts[2].getAttribute('src');
console.log(`Src:- ${val}`);


// All these are returning values in an array format but can not use any kind of array operation on them, to solve this issue we need to TypeCast these HTML collection into array.

let scripts = document.scripts;

// THIS WILL GIVE AN ERROR
// scripts.forEach(function(script) {
//     console.log(script);
// });

let scriptsArr = Array.from(scripts); // TypeCasted to Array type

// returns all the scripts on traversing 
scriptsArr.forEach(function(script){
    console.log(script);
});

// we can also get the attributes of each of the script on traversing
scriptsArr.forEach(function(script){
    console.log(script.getAttribute('src'));
});


// SINGLE ELEMENT SELECTOR

    // .getElementById()

console.log(document.getElementById('task-title'));

// Get things form the element
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);


// its better to create a variable with element id task-title and make the changes
const taskTitle = document.getElementById('task-title');

// Change styling (css) -> any css color format(rgb,rgba,hexcode,color-name)

// document.getElementById('task-title').style.background = 'grey';
// document.getElementById('task-title').style.color = 'white';
// document.getElementById('task-title').style.padding = '5px';

taskTitle.style.background = 'grey';
taskTitle.style.color = 'white';
taskTitle.style.padding = '5px';

// it disappear the item in the webpage
// document.getElementById('task-title').style.display= 'none';

// change content

// Task changes to Task List
// document.getElementById('task-title').textContent = 'Task List';

taskTitle.textContent = 'Task List';


// Task changes to My Task
// document.getElementById('task-title').innerText = 'My Task';
taskTitle.innerText = 'My Task';

// we can also insert HTML

// document.getElementById('task-title').innerHTML = '<span style="color:red">Tasks Edited</span>';

taskTitle.innerHTML = '<span style="color:red">Tasks Edited</span>';


// SINGLE ELEMENT SELECTOR

    // document.querySelector(); -> newer and much more powerfull

// to get element by id in query selector we need to use # before the id form the HTML file
console.log(document.querySelector('#task-title'));

// to get things by class name we need to use . before the class name just like css
console.log(document.querySelector('.card-title'));

// we also can get the element itself
console.log(document.querySelector('h5')); // -> this will return the first h5 tag from the HTML file

// we can also use sub-class like css
console.log(document.querySelector('ul li'));

// we need to use pseudo css class to target any specific element

// last-child -> last element
document.querySelector('li:last-child').style.color = 'red';

// first-child -> first element
document.querySelector('li:first-child').style.color = 'green';

// nth-child(n) -> 1 to nth
document.querySelector('li:nth-child(2)').style.color = 'purple';

// to change the textContent
document.querySelector('li:nth-child(2)').textContent = 'Edited Text';

// being a single element selector 'odd' and 'even' pseudo css class only changes the first element
document.querySelector('li:nth-child(odd)').style.background = '#f4f4f4';


// MULTIPLE ELEMENT SELECTOR

// document.getElementsByClassName();

// This is returning all the elements having the class name 'collection-item' in global scope
const items = document.getElementsByClassName('collection-item');
console.log(items);

// to access any specific item we use index number
console.log(items[0]);

items[0].style.color = 'green';
items[1].textContent = 'Edited';

// Now if we dont want to get the elements from the global scope having the class name 'collection-item', we can change scope of that

const listItems = document.querySelector('ul').getElementsByClassName('collection-item'); // -> this will only return the classes inside the 'ul', which we have selected using querySelector('ul')

console.log(listItems);


// document.getElementsByTagName() -> works similar like the previous one

let lis = document.getElementsByTagName('li');
console.log(lis);

// we can also use index numbers to get certain lis
console.log(lis[0]);

// styling
lis[0].style.color = 'red';
lis[0].textContent = 'edited';

// as we already know HTML collection is not an array we need to convert it into array

lis = Array.from(lis);
lis.reverse();
console.log(lis);


lis.forEach(function(li, index){ // it takes optional parameter index
    console.log(li);
    console.log(li.className);
    
    // to change all li
    // li.textContent = 'Hello';

    // usign index
    // li.textContent = `${index}: Hello`;
});



// document.querySelectorAll(); -> returns a NODE-List

// we can put any kind of css selector as a parameter
const itemsNew = document.querySelectorAll('ul li');

// same as above
// const itemsNew2 = document.querySelectorAll('ul.collection li.collection-item');

console.log(itemsNew);

// NODE-List allows us to perform some array operations here we dosent need to convert in into array
itemsNew.forEach(function(iN, index){ // optional parameter index
    console.log(iN);
    // iN.textContent = `${index}: Hello`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
liOdd.forEach(function(liO, index){ // optional parameter index
    liO.style.background = 'grey';
});

const liEven = document.querySelectorAll('li:nth-child(even)');
for(let i=0;i<liEven.length;i++){
    liEven[i].style.background = 'red';
}
