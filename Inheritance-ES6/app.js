// INHERITANCE IN ES6 is also called as SUB-Classes
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    greeting() {
        return `Hello there ${this.firstName} ${this.lastName}`;
    }
}

class Customer extends Person {
    constructor(firstName, lastName, phone, membership) {
        // calling constructor of the parent class we use super()
        super(firstName, lastName);
        
        this.phone = phone;
        this.membership = membership;
    }
    // similar to  Method Overriding
    greeting() {
        return `Welcome ${this.firstName} ${this.lastName}`;
    }
    static getMembershipCost() {
        return 500;
    }
}

const jhon = new Customer('Jhon', 'Doe', '555-555-555', 'Premium');
console.log(jhon);
console.log(jhon.greeting());
console.log(Customer.getMembershipCost());