let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item');

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

// we can perform every other manimulation off css and html
// val = list.children[0].style.color = 'red';
// val = list.children[0].innerText = 'red';
// val = list.children[0].textContent = 'red';



console.log(val);