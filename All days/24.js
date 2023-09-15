//? how to create object in javascript

// create object using object literal
var obj = {
    name: 'John',
    age: 30,
    hobbies: ['cricket', 'football']
};
// access object property
console.log(obj.name); // John
console.log(obj.age); // 30
console.log(obj.hobbies); // ['cricket', 'football']
// add new property
obj.city = 'New York';
console.log(obj.city); // New York
// delete property
delete obj.city;
console.log(obj.city); // undefined
// dot and bracket notation
console.log(obj.name); // John (dot notation)
console.log(obj['name']); // John this is bracket notation

//how to add key value pair in object using bracket notation
obj['city'] = 'New York';
console.log(obj.city); // New York
