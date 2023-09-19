//? important step for binding
/*
1. bind() returns a new function
2. bind() does not invoke the function
3. bind() can be used to bind any number of arguments
4. bind() can be used to bind any number of arguments
*/
const user1 = {
    name: "John",
    age: 20,
    about: function () {
        console.log(`Name: ${this.name} Age: ${this.age}`);
    }

}
var myFunc = user1.about.bind(user1);
myFunc();
//and this can be wrong to write like this
var myFunc = user1.about;
//this is not binding the function to the object user1
