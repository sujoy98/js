// Person Constructor
function Person(name, dob) {
    this.name =  name;
    this.birthday = new Date(dob);
    
    // Universal Standered Way to calculate age
    this.calculateAge = function() {
        const difference = Date.now() - this.birthday.getTime();
        const ageDate = new Date(difference);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

// to isntantiace an object we use new keyword
const brad = new Person('Brad', '1998-10-30');
const jhon = new Person('Jhon', '2000-3-12');

// console.log(brad.calculateAge());
// console.log(jhon);

// STRING

// primitive type
const name1 = 'brad';
console.log(name1);
console.log(typeof name1);

// return strirg as an object
const name2 = new String('brad');

// we can add properties
name2.anyProperty = 'property';
console.log(name2);
console.log(typeof name2); // -> returns object


// NUMBER
const num1 = 4;
const num2 = new Number(4);

console.log(num1);
console.log(typeof num2);// -> returns object

// BOOLEAN
const bool1 = true;
const bool2 = new Boolean(true);

console.log(bool1);
console.log(typeof bool2);// -> returns object

// FUNCTION
const getSum1 = function(x, y) {
    return x+y;
}
console.log(getSum1(5,5));
console.log(typeof getSum1);

const getSum2 = new Function('x','y','return x+y');
console.log(getSum2(5,5));
console.log(typeof getSum2);


// OBJECT
const jhon1 = {name: "Jhon"};
console.log(jhon1);
console.log(typeof jhon1);

const jhon2 = new Object({name: "Jhon"});
console.log(jhon2);
console.log(typeof jhon2);

// ARRAY
const arr1 = [1,2,3,4,5];
console.log(arr1);
console.log(typeof arr1);

const arr2 = new Array(1,2,3,4,5);
console.log(arr2);
console.log(typeof arr2);

// REGULAR EXPRESSION
const re1 = /\w+/;
console.log(re1);
console.log(typeof re1);

const re2 = new RegExp('\\w+');
console.log(re2);
console.log(typeof re2);