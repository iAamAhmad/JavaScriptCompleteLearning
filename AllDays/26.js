//? spread operator
const arr = [1, 2, 3, 4, 5];
const arr2 = [...arr, 6, 7, 8, 9, 10];
const newArray = [...arr, ...arr2];
// console.log(newArray);

//spread method on strings
const str = 'Hello';
const str2 = [...str, ' ', 'World'];
// console.log(str2);

//spread method on objects
const obj = {
    name: 'John',
    age: 30,
    city: 'New York'
}
const obj2 = {
    a: '',
    b: '',
    c: '',
}
const obj3 = {
    ...obj,
    ...obj2,
    name: 'John Doe',
    age: 32,
    city: 'Miami'
}
// console.log(obj3);
//making an object from string
const str3 = 'Hello World';
const obj4 = {
    ...str3
}
console.log(obj4);
