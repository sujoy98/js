// Create li element
const li = document.createElement('li');

// Add Class to the li element
li.className = 'collection-item';

// Add id to the li element
li.id = 'new-item';

// Add attribute -> setAttribute accepts two parameter key and value, here title is key and New Item is the value i.e, title = "New Item"
li.setAttribute('title', 'New Item');

// WE CAN SET ANY ATTRIBUTE
// li.setAttribute('id', 'new-item');

// Create text node and append into the li we use appendChild, createTextNode is to create the text 'Hello World' inside the li i.e (<li>Hello World</li>)
li.appendChild(document.createTextNode('Hello World'));

// Create new link element
const link = document.createElement('a');

// Add class name
link.className = "delete-item secondary-content";

// adding a href attribute to 'a' tag
link.setAttribute('href', '#');

// Add icon html (form the html file) as there is no text node we are directly using innerHtml
link.innerHTML = '<i class="fa fa-remove"></i>';

// Append link to li
li.appendChild(link);

// Append li as child to ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);


// REPLACE ELEMENT -> replaceChild('new', 'old');

// Here we are replacing the heading of the html file
// Create element
const newHeading = document.createElement('h2');

//  Adding id
newHeading.id = 'task-title';

// Adding a Text node to the newHeading
newHeading.appendChild(document.createTextNode('Task from class card-action'));

// Get the old heading, also we can use querySelector -> document.querySelector('.task-title');
const oldHeading = document.getElementById('task-title');

// PARENT, we need to have parent element because we will be using replaceChild function, which we will be calling on the PARENT to replace the heading 

// here the parent of the ul is the div which is having a class called card-action
const cardAction = document.querySelector('.card-action');

// REPLACE, replaceChild accepts two parameter
cardAction.replaceChild(newHeading, oldHeading);

console.log(newHeading); 


// REMOVE ELEMENT

// we need a varibale for all the li's so that we can access it with index values
const lis = document.querySelectorAll('li');

// removing list item
lis[0].remove();

// we need a varibale for the list itself (ul)
const list = document.querySelector('ul');

// we can also remove using removechild, ul have li-children
list.removeChild(lis[3]);


// CLASSES AND ATTRUBUTES

// Inside all the 'li' tag there is a 'a' tag for the cross button, which is the children of the 'li' tag, we know we can access the children with '.children'

const firstLi = document.querySelector('li');

// we are accessing the children with the index value
const linkNew = firstLi.children[0];
console.log(linkNew);

let val;

// CLASSES
val = linkNew.className; // returns the class name

// these return a DOM-token list, and also we can access it with index values
val = linkNew.classList; 
console.log(val);

val = linkNew.classList[0];
console.log(val);

// we can also add a class using the classList
link.classList.add('test-class');

// we can also remove a class using the classList
link.classList.remove('test-class');


// ATTRIBUTES
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
val = link.setAttribute('title', 'temp');


// we can also check if there is any attribute, returns boolean
val = link.hasAttribute('href');

// we can also remove an attribute
val = link.removeAttribute('title');



console.log(link);
