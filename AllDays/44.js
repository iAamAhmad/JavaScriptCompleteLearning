//? map method
//map method with arrow function
//map method - returns a new array
// map method is used to transform the array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const mapArray = numbers.map((number) => number * 3);
console.log(mapArray);

const users = [
    { name: "John", age: 25 },
    { name: "Jane", age: 30 },
    { name: "Jack", age: 35 },
    { name: "Jill", age: 40 },
    { name: "Joe", age: 45 },
]
const userNames = users.map((user) => user.age);
console.log(userNames);



// const newNumbers = numbers.map(function (number, index) {
//     return number * 2;
// });
// console.log(newNumbers);


