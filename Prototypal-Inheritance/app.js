// Person Constructor
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

// Greeting -> prototype function
Person.prototype.greeting = function() {
    return `Hello there ${this.firstName} ${this.lastName}`;
}

// creating a person
const person1 = new Person('Jhon', 'Doe');
console.log(person1.greeting());


// Customer Constructor
function Customer(firstName, lastName, phone, membership) {
    
    // Calling Person constructor with .call() method, which allows us to call anather function form somewhere else in the current context
    // first argument will be 'this' targeting the called constructor
    // rest will be the properties we need to be inherited
    // Inheritance for the Constructor proprties or attributes
    Person.call(this, firstName, lastName);
    this.phone = phone;
    this.membership = membership;
}

// Inheritance for Person Prototype methods (eg -> greeting)
Customer.prototype = Object.create(Person.prototype);

// Make Customer.prototype return Customer(), previosly it was returning to Person but we need to return Customer() 

Customer.prototype.cunstructor = Customer; // this make the __proto__ use the customer constructor

// Create Customer
const customer1 = new Customer('Steve', 'Smith', '555-555-555', 'Premium');
console.log(customer1);

// Customer greeting, after changing the __proto__ to customer constructor
Customer.prototype.greeting = function() {
    return `Hello there ${this.firstName} ${this.lastName} welcome to the Company`;
}

// after prototypr inheritence
console.log(customer1.greeting());