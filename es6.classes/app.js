// es6 is simplier
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDay = new Date(dob);
    }
    // any methods we create inside a class it will automatically gets added to the prototype
    greeting() {
        return `welcome ${this.firstName} ${this.lastName}`;
    }
    calculateAge() {
        const diff = Date.now() - this.birthDay.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear()-1970);
    }
    getsMarrird(newLastName) {
        this.lastName = newLastName;
    }
    // Static Methods, we does not need to create object (instantiate) to work with this
    static addNum(x, y) {
        return x+y;
    }
}

const person1 = new Person('Mary', 'James', '11-13-1980');

console.log(person1);

console.log(person1.greeting());

person1.getsMarrird('Tylor');

console.log(person1.greeting());

console.log(person1.calculateAge());

// Calling the static method
console.log(Person.addNum(5,5));
