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

// splitting on base of space
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

// 15 Aug
// SORTING FOR STRING ARRAY sort() -> in general sorts Alphabetically
fruits = ["Banana", "Orange", "Apple", "Mango"];
val = fruits.sort();
val = fruits.reverse();
console.log(val);

// SORTING FOR NEUMERIC ARRAY
neumeric = [23,56,12,78];
// assending order
val = neumeric.sort(function(a,b){return a-b});
console.log(val);
// decending order
val = neumeric.sort(function(a,b){return b-a});
console.log(val);

// .find() -> it will return the first number that matches the condition
const numbers = [23,34,12,56,78];
function over50(num){
	return num>50;
}
val = numbers.find(over50);
console.log(val);

// ARRAY OF OBJECTS
const person = [
	{name: 'john',age: '30'},
	{name: 'mike', age: '56'},
	{name: 'jake', age: '78'}
];
val = person;
for(let i=0;i<person.length;i++){
	console.log(person[i].name);
	console.log(person[i].age);
}

// PROPERTY FUNCTION
const todo = {
	add:function(a,b){
		return a+b;
		// console.log('Add todo');
	},
	edit:function(id){
		console.log(`Edit todo ${id}`);
	}
}

// we can also define function outside the object
todo.delete = function(id){
	console.log(`Delete todo ${id}`);
}

console.log(todo.add(5,5));
todo.edit(23);
todo.delete(2);

// Map

const users = [
	{id: 1, name: 'John'},
	{id: 2, name: 'Steve'}
];
// we use map to create seperate array for name, we dont need to initialize user
const ids = users.map (function(user){
	return user.name;
});
console.log(ids);
// we use map to create seperate array for id
const idss = users.map (function(user){
	return user.id;
});
console.log(idss);

// FOR-EACH we dont need to initialize ar  

const ar1 = [1,2,4,'sed'];
// in for each the function take three parameters, itarator(cumpolsory), index, array.
ar1.forEach(function(ar, index, array){
	console.log(`${index}: ${ar}`);
	console.log(array);
});

// FOR-IN

const user = {
	firstName: 'John',
	lastName: 'Smith',
	age: 30
}
for(let x in user){
	//console.log(x); // returns only keys
	console.log(`${x}: ${user[x]}`);
}