let val;

const list = document.querySelector('ul.collection');

// selects the first list item
const listItem = document.querySelector('li.collection-item');

val  = listItem;
console.log(val);

val = list;
console.log(val);

// Get CHILD NODES -> retunrs all different types of nodes

val = list.childNodes; //-> text node are the line breaks, returns a node list
console.log(val);
val = list.childNodes[0];
console.log(val);

val = list.childNodes[0].nodeName;
console.log(val);

val = list.childNodes[1].nodeType;
console.log(val);

/*
~~~~~NODE-TYPE~~~~~~~
values        NodeType
-----------------------
1       ->    ELEMENT
2       ->    ATTRIBUTE (deprecated)
3       ->    TEXT NODE
8       ->    COMMENT
9       ->    DOCUMENT ITSELF
10      ->    DOCTYPE
*/


// Get CHILDERN elemnets nodes -> returns only elements

val = list.children; // -> it wont display any text node, and it returns a HTML collection
console.log(val);
// we can perform manimulation off css and html
// val = list.children[0].style.color = 'red';
// val = list.children[0].innerText = 'red';
// val = list.children[0].textContent = 'red';

// Children of Children

val = list.children[3].children;
console.log(val);
val = list.children[3].children[0];
console.log(val);

// adding an id to a children node
// val = list.children[3].children[0].id = 'test-link'; 

// geting firstChild node
val = list.firstChild; // it will return text node if it is present at first position
console.log(val);
// geting firstChild node without text node , we need to use firstElementChild
val = list.firstElementChild;
console.log(val); 

// similar for last child
val = list.lastChild;
console.log(val);
val = list.lastElementChild;
console.log(val);



// count the number of child elements
val = list.childElementCount;
console.log(val);

// SIMILARLY LIKE CHILD WE HAVE PARENT NODE
val = listItem.parentNode;
console.log(val);

// parentNode and parentElement both are same more or less
val = listItem.parentElement;
console.log(val);

// we can also get the parent element of the parent element
val = listItem.parentElement.parentElement;
console.log(val);


// WE ALSO HAVE SIBLINGS JUST LIKE PARENT AND CHILD

// get next siblings
val = listItem.nextSibling; // similarly like other it will return text node if present
console.log(val);

// to fix the text node issue we need to use nextElementSibling
val = listItem.nextElementSibling;
console.log(val);
val = listItem.nextElementSibling.nextElementSibling;
console.log(val);

// we can attach functions like this to traverse the dom
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;
console.log(val);

// to get the previous siblings
// val = listItem.previousElementSibling;

// null as there is no previous sibling
val = listItem.previousElementSibling.previousElementSibling;
console.log(val);

console.log(val);