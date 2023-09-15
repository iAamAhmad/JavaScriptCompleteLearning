//? cloning of objects
/*
    The clone() method creates a new object with the same properties as the

    original object. The new object is a shallow copy of the original object.
    The clone() method is used to create a new object with the same properties
    as the original object. The new object is a shallow copy of the original
    object.
 */
clone = (obj) => {
    return Object.assign({}, obj);
}
const person = {
    name: 'John',
    age: 30
}
const person1 = clone(person);//{name: "John", age: 30}
console.log(person1);

//cloning with help of spread operator
const person2 = { ...person };
console.log(person2);//{name: "John", age: 30}
