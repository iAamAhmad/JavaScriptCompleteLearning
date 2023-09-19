class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get eat() {
        console.log(`${this.name} is eatinggggg`);
    }
    get drink() {
        console.log(`${this.name} is drinking`);
    }
}
const person1 = new Person("Lion", 5);
const person2 = new Person("Tiger", 6);
console.log(person1);
console.log(person1.eat);

//we are using get with methods to use them
//as properties
