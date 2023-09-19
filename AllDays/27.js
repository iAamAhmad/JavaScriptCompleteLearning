// object destructuring
const person = {
    name: 'John',
    age: 30,
    location: {
        city: 'Boston',
        temp: 92
    }
};
// const name = person.name;
// const age = person.age;
// console.log(`${name} is ${age}.`);
const { name, age } = person;
console.log(`${name} is ${age}.`);
const { city, temp: temperature } = person.location;