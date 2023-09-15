// nested destructuring
const myArray = [
    { name: "John", age: 25 },
    { name: "Jane", age: 22 },
    { name: "Jim", age: 27 },
    { name: "Jill", age: 24 },
    { name: "Jack", age: 26 },
];
for (let { name, age } of myArray) {
    console.log(name, age);
}
