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
    const user = {};
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

user1.about();
user2.about();
user3.isEven();