let val;

// returns the entire document
val = document;

// returns all of the html collection in an array format
val = document.all;

// to access any particular element we use index numbers
val = document.all[4];

// we can also view total numbers of element in the DOM by length property (all the elements)
val = document.all.length;

// we can also get these seperate values
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;


// FORMS
// returns a HTML Collection and it will have all the form the html file 
val = document.forms;

// we can access any form by using index values
val = document.forms[0];

// we can fetch details form these form
val = document.forms[0].id;
val = document.forms[0].method; // get or post
val = document.forms[0].action;


// LINKS
// retunns all the links in array format
val = document.links;

// we can get specific links with index values
val = document.links[5];

// we can fetch details form these links
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList; // returns a DOM token list
val = document.links[0].classList[1]; // content of the classList


// 11:25
console.log(val);