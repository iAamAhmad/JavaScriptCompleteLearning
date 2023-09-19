//? creating a class of animal

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        console.log(`${this.name} is eating`);
    }
    drink() {
        console.log(`${this.name} is drinking`);
    }
}
const animal1 = new Animal("Lion", 5);
const animal2 = new Animal("Tiger", 6);
const animal3 = new Animal("Elephant", 7);
console.log(animal1);
console.log(animal2);
console.log(animal1.eat());
console.log(animal3);

//? creating a class of cat
class cat extends Animal {
    constructor(name, age, color) {
        super(name, age);
        this.color = color;
    }
}
const cat1 = new cat("Lion", 5, "yellow");