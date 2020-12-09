const personPrototype = {
    greeting: function() {
        return `Hello there ${this.firstName} ${this.lastName}`;
    }, 
    getsMarried: function(newLastName) {
        this.lastName = newLastName;
    }
}

// WAY-1
const mary = Object.create(personPrototype);
mary.firstName = 'Mary';
mary.lastName = 'Smith';
mary.age = 23;

console.log(mary);
mary.getsMarried('Adams')
console.log(mary.greeting());


// WAY-2, Object.create takes an extra parameter as an object where values will aslo be object
const brad = Object.create(personPrototype, {
    firstName: {value: 'Brad'},
    lastName: {value: 'Thames'},
    age: {value: 34}
});

console.log(brad);
console.log(brad.greeting());