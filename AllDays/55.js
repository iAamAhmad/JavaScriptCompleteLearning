//? optional chaining
/*
    optional chaining is a new feature in ES2020
    it is a way to access properties of an object without having to check if the object is undefined or not
    it is a way to access properties of an object without having to check if the object is undefined or not
    */
const person = {

    name: 'John',
    age: 30,
    address: {
        street: 'Main Street',
        city: 'New York'
    }
}
// if we want to access the city property of the address property of the person object
// we can do it like this
console.log(person.address.city);
// but if the address property is undefined
// we will get an error
// so we can use optional chaining to avoid this error
// we can use optional chaining like this
console.log(person.address?.city);
// if the address property is undefined
// we will get undefined
// if the address property is not undefined
// we will get the value of the city property
// we can use optional chaining with functions too
// we can use optional chaining like this
console.log(person.address?.city?.toUpperCase());
// if the address property is undefined
// we will get undefined
// if the address property is not undefined
// we will get the value of the city property
// if the city property is undefined
// we will get undefined
// if the city property is not undefined