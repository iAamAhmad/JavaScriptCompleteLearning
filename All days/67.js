function CreateUser(firstName, lastName, age) {

    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.about = userMethods.about;
    user.isEven = userMethods.isEven;

}


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
for (let key in user1) {
    // console.log(key);
    if (user1.hasOwnProperty(key)) {
        console.log(key);
    }
}
console.log(user1);