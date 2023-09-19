//? array destructuring
// array destructuring
const myArray = [1, 2, 3, 4, 5];
let [a, b, c, ...myNewArray] = myArray;
console.log(a, b, c, myNewArray); // 1 2 3 4 5
// this array destructuring is equivalent to the following code 
// const a = myArray[0];
// const b = myArray[1];
// const c = myArray[2];
// const d = myArray[3];
// const e = myArray[4];


//? object destructuring
// object destructuring
const myObject = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        state: 'NY'
    }
};
const { name, age, address: { city, state } } = myObject;
console.log(name, age, city, state);
// this object destructuring is equivalent to the following code
// const name = myObject.name;
// const age = myObject.age;
// const city = myObject.address.city;
// const state = myObject.address.state;
//? function parameter destructuring