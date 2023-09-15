//? object oriented programming
//Proto
//creating function to create multiple objects
function createUser(name, age) {
    //creating object
    var user = {};
    //adding properties to the object
    user.name = name;
    user.age = age;
    //returning the object
    return user;
}
//creating object using the function
var user1 = createUser("John", 20);
console.log(user1);
var user2 = createUser("Jane", 21);
console.log(user2);
//creating object using object literal
var user3 = {
    name: "John",

    age: 20
}




//? prototype
//? prototype chain
//?class
