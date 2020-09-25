// Create element
const li = document.createElement('li');

// Add Class
li.className = 'collection-item';

// Add id
li.id = 'new-item';

// Add attribute -> setAttribute accepts two parameter key and value, here title is key and New Item is the value i.e, title = New Item
li.setAttribute('title', 'New Item');

// Create text node and append into the li we use appendChild, createTextNode is to create the text 'Hello World' inside the li
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

console.log(li);