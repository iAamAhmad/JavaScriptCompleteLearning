//? computed properties
const key1 = 'name';
const key2 = 'age';
const key3 = 'hobbies';
const obj = {
    [key1]: 'John',
    [key2]: 30,
    [key3]: ['cricket', 'football']
};
console.log(obj);
// these are knows as computed properties
//? object methods
const obj1 = {
    name: 'John',
    age: 30,
    hobbies: ['cricket', 'football'],
    greet: function () {
        console.log('Hello');
    }
};
obj.greet();
