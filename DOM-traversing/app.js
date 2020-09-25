let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item');

// val  = listItem;
val = list;


// Get CHILD NODES -> retunrs all different types of nodes

val = list.childNodes; //-> text node are the line breaks, returns a node list
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeType;

/*
~~~~~NODE-TYPE~~~~~~~
1 -> ELEMENT
2 -> ATTRIBUTE (deprecated)
3 -> TEXT NODE
8 -> COMMENT
9 -> DOCUMENT ITSELF
10 -> DOCTYPE
*/


// Get CHILDERN elemnets nodes -> returns only elements

val = list.children; // -> it wont display any text node, and it returns a HTML collection

// we can perform manimulation off css and html
// val = list.children[0].style.color = 'red';
// val = list.children[0].innerText = 'red';
// val = list.children[0].textContent = 'red';

// Children of Children

val = list.children[3].children;

// adding an id to a children node
// val = list.children[3].children[0].id = 'test-link'; 

// geting firstChild node
val = list.firstChild; // it will return text node if it is present at first position

// geting firstChild node without text node , we need to use firstElementChild
val = list.firstElementChild; 

// similar for last child
val = list.lastChild;
val = list.lastElementChild;

// count the number of child elements
val = list.childElementCount;


// SIMILARLY LIKE CHILD WE HAVE PARENT NODE
val = listItem.parentNode;

// parentNode and parentElement both are same more or less
val = listItem.parentElement;

// we can also get the parent element of the parent element
val = listItem.parentElement.parentElement;


// WE ALSO HAVE SIBLINGS JUST LIKE PARENT AND CHILD

// get next siblings
val = listItem.nextSibling; // similarly like other it will return text node if present

// to fix the text node issue we need to use nextElementSibling
val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling;

// we can attach functions like this to traverse the dom
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

// to get the previous siblings
// val = listItem.previousElementSibling;

val = listItem.previousElementSibling.previousElementSibling;

console.log(val);