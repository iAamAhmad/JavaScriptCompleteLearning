//? param destructuring
//? destructuring
const person = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        state: 'NY'
    }
};
function logPerson({ name, age }) {
    console.log(name, age);
}
logPerson(person);
//this is called destructuring
//we are destructuring the object person
//we are pulling out the name and age properties
//and passing them to the function logPerson
//output: John 30