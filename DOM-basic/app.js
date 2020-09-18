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
val = document.links[5];
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

// we can get attributes form the scripts
val = document.scripts[2].getAttribute('src');
console.log(val);


// All these are returning values in an array format but can not use any kind of array operation on them, to solve this issue we need to TypeCast into array.

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