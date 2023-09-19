//? methods in javascript
//function inside object is called method
const person = {
    name: 'John',
    age: 30,
    address: {
        street: 'Main Street',
        city: 'New York'
    },
    // this is a method
    greet: function () {
        console.log(`Hello, my name is ${this.name} and my age is ${this.age}`);
    }
}
// we can call the greet method like this
person.greet();




//? 1. call

//? 2. apply
//? 3. bind
//? 4. new
//? 5. prototype
//? 6. class
//? 7. extends
//? 8. super
//? 9. static
//? 10. this

//explaining this keyword
//this keyword is a reference to the current object
//this keyword is a reference to the current object
const person1 = {
    name: 'John',
}
const person2 = {
    name: 'Jane',
}
// we can use the this keyword to access the name property of the current object
// we can use the this keyword to access the name property of the current object
const greet = function () {
    console.log(`Hello, my name is ${this.name}`);
}
// we can call the greet function like this
greet();
// we will get an error
// because the this keyword is undefined
// we can use the call method to set the this keyword
// we can use the call method to set the this keyword
greet.call(person1);
// we can call the greet function like this
greet.call(person2);
// we can call the greet function like this

