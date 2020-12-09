// Object.prototype -> Person.prototype , Object is the parent prototype or predefined and Person is the constructor we created which is known as Person Prototype


function Person(firstName,lastName, dob) {
    this.firstName =  firstName;
    this.lastName =  lastName;
    this.birthday = new Date(dob);
    
    // Universal Standered Way to calculate age
    // this.calculateAge = function() {
    //     const difference = Date.now() - this.birthday.getTime();
    //     const ageDate = new Date(difference);
    //     return Math.abs(ageDate.getUTCFullYear() - 1970);
    // }
}

// Calcualte age in Person prototype, this will move the calculateAge function to the __proto__
Person.prototype.calculateAge = function() {
    const difference = Date.now() - this.birthday.getTime();
    const ageDate = new Date(difference);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// Get full name
Person.prototype.getFullName = function() {
    return (`${this.firstName} ${this.lastName}`);
}

// Gets married i.e Change LastName
Person.prototype.getsMarried = function(newLastName) {
    this.lastName = newLastName;
}

const jhon = new Person('Jhon', 'Doe', '1998-10-30');
const mary = new Person('Mary', 'Doe', '1990-10-30');

console.log(mary);
console.log(jhon.calculateAge());
console.log(mary.getFullName());
mary.getsMarried('Smith');
console.log(`Last name changed : ${mary.getFullName()}`);

// Using Object Prototype
console.log(mary.hasOwnProperty('firstName'));


console.log(mary.hasOwnProperty('getFullName')); // returns false as it is not present in the own property, it is loacted in the Person.protorype