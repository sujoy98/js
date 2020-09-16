//alert('hello world');

// log to console
console.log('hello');
console.log(123);
console.log(true);
var b = "hello";
console.log(b);
console.log([1,2,3,4,"abc"]);
// object literals
console.log({a:1,b:2});
// table format
console.table({a:1,b:2});
console.error('ERROR MSG');

// to clear the console
//console.clear();
console.warn('WARNING MSG');

// it will tell us the time it will take to ececute until
// - console.timeEnd
console.time('anything');
	console.log('hello');
	console.log('hello');
	console.log('hello');
	console.log('hello');
console.timeEnd('anything');

// variable type using typeof

// !Primitive types
//string
const v1 = 'hello';
console.log(typeof v1);

//number
const v2 = 2;
console.log(typeof v2);

//boolean
const v3 = true;
console.log(typeof v3);

// null (it will give type as object bug of Js)
const v4 = null;
console.log(typeof v4);

//undefined
let v5;
console.log(typeof v5);

//symbol
const v6 = Symbol();
console.log(typeof v6);


//refference type

//array
const v7 = [1,2,34,4];
// console.log(String(v7));

console.log(typeof v7);

//object literals
const v8 = {
	city: 'kol',
	state: 'wb'
} // after closed flower bracker semicolon is not showing error 
console.log(v8);
console.log(typeof v8);

// date
// 'Date()' and 'new Date()' both works no error 'new Date()' is prefferable
const v9 = new Date();
console.log(v9);
console.log(typeof v9);

// TYPE CASTING
// number to string
// .toString() -> also works
let val;
val = String(5);
console.log(val);
console.log(typeof val);


// NaN -> not a number
// string to number
val = Number('6');

// true returns 1
val = Number(true);

// false returns 0
val = Number(false);

// null returns o
val = Number(null);

console.log(val);
// tofixed(5) indicates decimal number
console.log(val.toFixed(5));

// .random() gives random decimal number, we are rounding up the random value
// to get a whole number in this case the range is 20
val = Math.floor(Math.random() * 20);
console.log(val);

// splitting on base of space (same for any separator)
const str = 'hello world good morning';
val = str.split(' ');
console.log(val);

// T E M P L E T E  L I T E R A L S OR S T R I N G
const name = 'john';
const age = 20;
const job = 'webDev';
const country = 'Ind';

// OLD METHOD without templete literals or strings (es5)

// html = '<ul><li>Name:  '+name+' </li> <li>Age: '+ age +'</li> <li>Job: '+ job +'</li> <li>City: '+ city +'</li></ul>';
// document.body.innerHTML=html;


// NEW AND BEST METHOD using templete literals or string (es6)
html = 
	`<ul>
		<li>Name: ${name}</li>
		<li>Age: ${age}</li>
		<li>Job: ${job}</li>
		<li>Country: ${country}</li>
	</ul>`;

// document.body.innerHTML=html;
document.write(html);

// 15 Sep
// SORTING FOR STRING ARRAY sort() -> in general sorts Alphabetically
fruits = ["Banana", "Orange", "Apple", "Mango"];
val = fruits.sort();
// before reversing the array we need to .sort() it first
val = fruits.reverse();
console.log(val);

// FUNCTION DECLARATION
function greet(firstName = 'Default', lastName = 'Name'){
	return 'Hello '+ firstName + ' ' + lastName;
}
console.log(greet('Jhon','Doe'));

// FUNCTION EXPRESSION -> putting a function as a variable assignment, function can be named or annonynous(default)

const square = function(x){ // or (x=anyNum)
	return x*x;
}; // semi-colon as square is a variable
console.log(square(10));


// IMMIDIATELY INVOCABLE FUNCTION EXPRESSIONS -> IIFEs its basically a function that we declare and run at the same time , we use these in MODULE PATTERN

(function(){
	console.log('IFFE Ran');
})();


(function(name){
	console.log(`Hello ${name}`);
})('Brad');

// PROPERTY METHODS -> When a function is put inside an object it called method or function as an object property

const todo = {
	add:function(a,b){
		// let res = a+b;
		// console.log(res);
		return a+b;
	},
	edit:function(id){
		console.log(`Edit todo ${id}`);
	}
}
// we can also define function outside the same object using objectName.functionName
todo.delete = function(id){
	console.log(`Delete todo ${id}`);
}
// todo.add(5,5);
console.log(todo.add(5,5));
todo.edit(23);
todo.delete(2);







// SORTING FOR NEUMERIC ARRAY
neumeric = [23,56,12,78];
// the compare function inside sort() takes 2 elements and compare between them, for 23 and 56 -> 23-56= -33,so 23 is smaller the sorting goes like this, but if we doesnt use the callback function the array of num gets sorted by first dig to avoid that we need the callback function.
// assending order
val = neumeric.sort(function(a,b){return a-b});
console.log(val);
// decending order
val = neumeric.sort(function(a,b){return b-a});
console.log(val);

// .find() -> it will return the first number that matches the condition
const numbers = [23,34,12,56,78];
// we dont need to define num
function over50(num){
	return num>50;
}
val = numbers.find(over50);
console.log(val);

// ARRAY OF OBJECTS
const persons = [
	{name: 'john',age: '30'},
	{name: 'mike', age: '56'},
	{name: 'jake', age: '78'}
];
for(let i=0;i<persons.length;i++){
	console.log(persons[i].name);
	console.log(persons[i].age);
}

// Map

const users = [
	{id: 1, name: 'John'},
	{id: 2, name: 'Steve'}
];
//.map() takes a annonymous function we use map to create seperate array for name, we dont need to initialize user as js is weakly typed
const ids = users.map (function(user){
	return user.name;
});
console.log(ids);
// we use map to create seperate array for id
const names = users.map (function(user){
	return user.id;
});
console.log(names);

// FOR-EACH we dont need to initialize ar  

const ar1 = [1,2,4,'sed'];
// in for-each the function take three parameters, itarator(cumpolsory), index, array.
ar1.forEach(function(ar, index, array){
	console.log(`${index}: ${ar}`);
	console.log(array);
});

// FOR-IN is for objects (similar to for-each loop)

const user = {
	firstName: 'John',
	lastName: 'Smith',
	age: 30
}
// for(x in user) -> also working as js is weakly typed
for(let x in user){
	//console.log(x); // returns only keys
	console.log(`${x}: ${user[x]}`);
}

// WINDOW METHODS / OBJECTS / PROPERTIES

// const input = prompt("Enter your name !");
// alert(`Your name is ${input}`);

// CONFIRM

// if(confirm("Are you sure ?")){
// 	console.log('You confirmed');
// }else{
// 	console.log('You cancelled');
// }

// let condi = confirm('Are you sure?');
// if(condi == true){
// 	console.log('pressed OK');
// }else{
// 	console.log('pressed cancel');
// }

// Getting OUTER and INNER Window HEIGHT and WIDTH
let dimention;
// OUTER
dimention = window.outerHeight;
console.log(dimention);

dimention = window.outerWidth;
console.log(dimention);

// INNER
dimention = window.innerHeight;
console.log(dimention);

dimention = window.innerWidth;
console.log(dimention);

// SCROLL points or location X-> horizontal , Y-> vertical
let valN
valN = window.scrollY;
console.log(valN);

valN = window.scrollX;
console.log(valN);

// 16 SEP

// LOCATION OBJECT

valN = window.location;

// these are some location object
valN = window.location.origin;
console.log(valN);

valN = window.location.href;
console.log(valN);

// Redirect -> setting the href
// window.location.href = 'http://google.com';

// Reload -> the page will reload constantly
// window.location.reload();



// HISTORY OBJECT

// go() -> bring us back to where ever we came from
// go(-1) -> previous site
// go(-2) -> 2 back site

//window.history.go();

// we can also check history length

valN = window.history.length;
console.log(`history length : ${valN}`);


// NAVIGATOR OBJECT -> works with browser not window or environment

valN = window.navigator;
console.log(valN);

// these are some navigator objects
valN = window.navigator.appName;
console.log(valN);

valN = window.navigator.appVersion;
console.log(valN);

valN = window.navigator.userAgent;
console.log(valN);

valN = window.navigator.platform;
console.log(valN);

valN = window.navigator.vendor;
console.log(valN);

valN = window.navigator.language;
console.log(valN);

// let a = [1,2,4,5];
// let ab = ['abr','df'];
// let c = a.concat(ab);
// c.push('last');
// c.unshift('first');
// console.log(c);

// taking id form html file using getElementById() and entering value using innerHTML
document.getElementById("demo").innerHTML = 'Replacing id -> demo form HTML file';