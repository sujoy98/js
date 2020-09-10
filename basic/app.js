//alert('hello world');

// log to console
console.log('hello');
console.log(123);
console.log(true);
var b = "hello";
console.log(b);
console.log([1,2,3,4,"abc"]);
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

//null (it will give type as object bug of Js)
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
console.log(typeof v7);

//object literals
const v8 = {
	city: 'kol',
	state: 'wb'
} // after closed flower bracker semicolon is not showing error 
console.log(typeof v8);

// date
const v9 = new Date();
console.log(v9);
console.log(typeof v9);