function CreateUser(firstName, lastName, age) {
    // const user = Object.create(createUser.prototype);/? done by new keyword
    //this is we are finally calling our prototype created things
    //this is we are finally calling our prototype created things
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.about = userMethods.about;
    user.isEven = userMethods.isEven;

}
//new keyword creates a new object and this keyword refers to the object
// it also gives return keyword calls our function in the future\
//then we will start function with capital letter
//and if we want that only new 

CreateUser.prototype.about = function () {
    console.log(`My name is ${this.name} and I am ${this.age} years old`);
};
CreateUser.prototype.isEven = function () {
    this.age % 2 === 0

        ? console.log("Even")
        : console.log("Odd");
};
const user1 = new CreateUser("John", "Doe", 20);
const user2 = new CreateUser("Jane", "Doe", 21);
const user3 = new CreateUser("John", "Doe", 22);
console.log(user1);