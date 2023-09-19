const userMethods = {
    about: function () {
        console.log(`My name is ${this.name} and I am ${this.age} years old`);
    },
    //? important step for binding
    isEven: function () {
        this.age % 2 === 0
            ? console.log("Even")
            : console.log("Odd");
    }

};
function createUser(firstName, lastName, age) {
    const user = Object.create(createUser.prototype);
    //this is we are finally calling our prototype created things


    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.about = userMethods.about;
    user.isEven = userMethods.isEven;
    return user;
}

//? this very important step for  prototype chain
//? we will make prototype chain for function we are using above.
createUser.prototype.about = function () {
    console.log(`My name is ${this.name} and I am ${this.age} years old`);
};
createUser.prototype.isEven = function () {
    this.age % 2 === 0

        ? console.log("Even")
        : console.log("Odd");
};
// we are adding the properties and methods to the function createUser


const user1 = createUser("John", "Doe", 20);
const user2 = createUser("Jane", "Doe", 21);
const user3 = createUser("John", "Doe", 22);
console.log(user1);
// this is the object user1 with the properties and methods
console.log(user1.about());
user2.about();
user3.isEven();