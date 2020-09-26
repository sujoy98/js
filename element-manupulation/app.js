// Create element
const li = document.createElement('li');

// Add Class to the element
li.className = 'collection-item';

// Add id to the element
li.id = 'new-item';

// Add attribute -> setAttribute accepts two parameter key and value, here title is key and New Item is the value i.e, title = "New Item"
li.setAttribute('title', 'New Item');

// Create text node and append into the li we use appendChild, createTextNode is to create the text 'Hello World' inside the li i.e (<li>Hello World</li>)
li.appendChild(document.createTextNode('Hello World'));

// Create new link element
const link = document.createElement('a');

// Add class name
link.className = "delete-item secondary-content";

// adding a href attribute to 'a' tag
link.setAttribute('href', '#');

// Add icon html (form the html) as there is no text node we are directly using innerHtml
link.innerHTML = '<i class="fa fa-remove"></i>';

// Append link to li
li.appendChild(link);

// Append li as child to ul
document.querySelector('ul.collection').appendChild(li);

// console.log(li);


// REPLACE ELEMENT

// Create element
const newHeading = document.createElement('h2');

//  Adding id
newHeading.id = 'task-title';

// Adding a Text node to the newHeading
newHeading.appendChild(document.createTextNode('Task-list'));

// Get the old heading
const oldHeading = document.getElementById('task-title');

// PARENT, we need to have parent element because we will be using replaceChild function to replace the heading 
const cardAction = document.querySelector('.card-action');

// REPLACE, replaceChild accepts two parameter
cardAction.replaceChild(newHeading, oldHeading);

// console.log(newHeading); 


// REMOVE ELEMENT

// we need a varibale for all the li's
const lis = document.querySelectorAll('li');

// we need a varibale for the list itself (ul)
const list = document.querySelector('ul');

// removing list item
lis[0].remove();

// we can also remove using child, ul have li-children
list.removeChild(lis[3]);
// 5:09