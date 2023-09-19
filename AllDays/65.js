//? new keyword
function createUser(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

}
createUser.prototype.about = function () {
    console.log(`My name is ${this.name} and I am ${this.age} years old`);
};
createUser.prototype.isEven = function () {
    this.age % 2 === 0
        ? console.log("Even")
        : console.log("Odd");
};

createUser("John", "Doe", 20);
var user1 = new createUser("John", "Doe", 20);
var user2 = new createUser("Jane", "Doe", 21);
//here new keyword is used to create a new object
// and this is used to refer to the object
// new is giving this keyword a new object
//new keyword will make a chain of prototype
// with function and methods we are using and we don't neend to
// create calling of prototype chain in the function
//Object.create(prototype.user1) is used to create a prototype chain