class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        console.log(`${this.firstName} is `);
    }

    set fullName(fullName) {
        const [firstName, lastName] = fullName.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
const person1 = new Person("Lion", 'Monkey');
console.log(person1.firstName);
console.log(person1.lastName);
person1.fullName = 'Rohit Khan'
console.log(person1.firstName);



