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
    const user = Object.create(userMethods);
    //this is we are doing to establish the prototype chain between the object and the object userMethods
    // proto is a relationship between two objects
    // userMethods is the prototype of user
    // user is the prototype of userMethods


    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.about = userMethods.about;
    user.isEven = userMethods.isEven;
    return user;

}
const user1 = createUser("John", "Doe", 20);
const user2 = createUser("Jane", "Doe", 21);
const user3 = createUser("John", "Doe", 22);
console.log(user1);
// this is the object user1 with the properties and methods


user1.about();
user2.about();
user3.isEven();