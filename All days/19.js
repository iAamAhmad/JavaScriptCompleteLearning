//? reference data types

// ?1. What is the difference between primitive and reference data types?
// Primitive data types are immutable, meaning they cannot be changed. 
// Reference data types are mutable, meaning they can be changed.
// Primitive data types are copied by value, reference data types are copied by reference.
// Primitive data types are stored on the stack, reference data types are stored on the heap.
// Primitive data types are passed by value, reference data types are passed by reference.
// Primitive data types are compared by value, reference data types are compared by reference.
// Primitive data types are created using literals, reference 
// data types are created using constructors.
// Primitive data types are faster, reference data types are slower.
// Primitive data types are smaller, reference data types are larger.
// Primitive data types are limited, reference data types are not limited.
// Primitive data types are simple, reference data types are complex.
// Primitive data types are atomic, reference data types are not atomic.
// Primitive data types are immutable, reference data types are mutable.
// refrence data types are objects, arrays, functions, dates, all objects, and all arrays.
// Primitive data types are strings, numbers, booleans, undefined, and null.
//? what are arrays?
// Arrays are a special type of object that can hold multiple values of any type. 
//Arrays are indexed starting at 0.
//? what is the difference between an array and an object?
// Arrays are indexed starting at 0, objects are not.
// Arrays are ordered, objects are not.
// Arrays are iterable, objects are not. 
//Arrays are accessed using bracket notation,
// objects are accessed using dot notation. 
//Arrays are used to store multiple values of the same type,
// objects are used to store multiple values of different types.
//? what is the difference between an array and a string?
// Arrays are ordered, strings are not. Arrays are iterable, strings are not. 
//Arrays are accessed using bracket notation, strings are accessed using bracket notation. 
//Arrays are used to store multiple values of the same type, strings are used to store 
//multiple values of the same type.
//? what is the difference between an array and a set?
// Arrays are ordered, sets are not. Arrays are iterable, sets are not. //
//Arrays are accessed using bracket notation, sets are accessed using bracket notation. 
//Arrays are used to store multiple values of the same type, sets are used to store multiple 
//values of the same type.
//? what is the difference between an array and a map?
// Arrays are ordered, maps are not. Arrays are iterable, maps are not. 
//Arrays are accessed using bracket notation, maps are accessed using bracket notation. 
//Arrays are used to store multiple values of the same type, maps are used to store multiple 
//values of different types.
//? what is the difference between an array and a weakset?
// Arrays are ordered, weaksets are not. Arrays are iterable, weaksets are not.
// Arrays are accessed using bracket notation, weaksets are accessed using bracket notation. 
//Arrays are used to store multiple values of the same type, weaksets are used to 
//store multiple values of the same type.
//? what is the difference between an array and a weakmap?
// Arrays are ordered, weakmaps are not. Arrays are iterable, weakmaps are not. 
//Arrays are accessed using bracket notation, weakmaps are accessed using bracket notation. 
//Arrays are used to store multiple values of the same type,
// weakmaps are used to store multiple values of different types.
//? what is the difference between an array and a symbol?
// Arrays are ordered, symbols are not. Arrays are iterable, symbols are not. 
//Arrays are accessed using bracket notation, symbols are accessed using bracket notation. 
//Arrays are used to store multiple values of the same type, symbols are used to store multiple values of the same type.
//? what is the difference between an array and a function?
// Arrays are ordered, functions are not. Arrays are iterable, functions are not.
// Arrays are accessed using bracket notation, functions are accessed using bracket notation.
// Arrays are used to store multiple values of the same type, functions are used to store 
//multiple values of the same type.
//? array 
 let fruits = ["apple", "banana", "orange"];
 //this is an array
 
//? array methods
// ?1. What is the difference between .push() and .unshift()?
// .push() adds an element to the end of an array, 
let fruits1 = ["apple", "banana", "orange"];
fruits.push("kiwi");
console.log(fruits); // ["apple", "banana", "orange", "kiwi"]
//.unshift() adds an element to the beginning of an array.
let fruits2 = ["apple", "banana", "orange"];
fruits.unshift("kiwi");
console.log(fruits); // ["kiwi", "apple", "banana", "orange"]

//? 2. What is the difference between .pop() and .shift()?
//.pop() removes an element from the end of an array, 
let fruits3 = ["apple", "banana", "orange"];
fruits.pop();
console.log(fruits); // ["apple", "banana"]
//.shift() removes an element from the beginning of an array.
let fruits4 = ["apple", "banana", "orange"];
fruits.shift();
console.log(fruits); // ["banana", "orange"]
//?3. What is the difference between .splice() and .slice()?
//.splice() removes elements from an array, 
let fruits5 = ["apple", "banana", "orange"];
fruits.splice(1, 1);
console.log(fruits); // ["apple", "orange"]
//.slice() returns a copy of a portion of an array.
let fruits6 = ["apple", "banana", "orange"];
fruits.slice(1, 1);
console.log(fruits); // ["apple", "banana", "orange"]

//?4. What is the difference between .sort() and .reverse()?
//.sort() sorts the elements of an array, 
let fruits7 = ["apple", "banana", "orange"];
fruits.sort();
console.log(fruits); // ["apple", "banana", "orange"]
//.reverse() reverses the order of the elements of an array.
let fruits8 = ["apple", "banana", "orange"];
fruits.reverse();
console.log(fruits); // ["orange", "banana", "apple"]
//?5. What is the difference between .concat() and .join()?
//.concat() joins two or more arrays, 
let fruits9 = ["apple", "banana", "orange"];
let fruits10 = ["kiwi", "mango", "pineapple"];
fruits9.concat(fruits10);
console.log(fruits); // ["apple", "banana", "orange", "kiwi", "mango", "pineapple"]
//.join() joins all elements of an array into a string.
let fruits11 = ["apple", "banana", "orange"];
fruits.join();
console.log(fruits); // "apple, banana, orange"

//?6. What is the difference between .indexOf() and .lastIndexOf()?
//.indexOf() returns the index of the first occurrence of an element in an array, 
let fruits12 = ["apple", "banana", "orange"];
fruits.indexOf("banana");
console.log(fruits); // 1
//.lastIndexOf() returns the index of the last occurrence of an element in an array.
let fruits13 = ["apple", "banana", "orange"];
fruits.lastIndexOf("orange");
console.log(fruits); // 2
//?7. What is the difference between .includes() and .find()?
//.includes() determines whether an array includes a certain value among its entries,
let fruits14 = ["apple", "banana", "orange"];
fruits.includes("banana");
console.log(fruits); // true
// returning true or false as appropriate, 

//.find() returns the value of the first element in the 
let fruits15 = ["apple", "banana", "orange"];
fruits.find("banana");
console.log(fruits); // "banana"    
//provided array that satisfies the provided testing function.
//?8. What is the difference between .findIndex() and .every()?
//.findIndex() returns the index of the first element in the array that satisfies 
//the provided testing function, 
let fruits16 = ["apple", "banana", "orange"];
fruits.findIndex("banana");
console.log(fruits); // 1
//.every() tests whether all elements in the array 
//pass the test implemented by the provided function.
let fruits17 = ["apple", "banana", "orange"];
fruits.every("banana");
console.log(fruits); // false
//?9. What is the difference between .some() and .filter()?
//.some() tests whether at least one element in the array passes the 
//test implemented by the provided function, 
let fruits18 = ["apple", "banana", "orange"];
fruits.some("banana");
console.log(fruits); // true
//.filter() creates a new array with all elements that pass the test implemented by 
//the provided function.
let fruits19 = ["apple", "banana", "orange"];
fruits.filter("banana");
console.log(fruits); // ["banana"]
//?10. What is the difference between .map() and .reduce()?
// .map() creates a new array with the results of calling a provided function 
//on every element in the calling array, 
let fruits20 = ["apple", "banana", "orange"];
fruits.map("banana");
console.log(fruits); // ["banana", "banana", "banana"]
//.reduce() executes a reducer function (that you provide) on each member of the array //
//resulting in a single output value.
let fruits21 = ["apple", "banana", "orange"];
fruits.reduce("banana");
console.log(fruits); // "bananabananabanana"
// ?11. What is the difference between .forEach() and .for()?
// .forEach() executes a provided function once for each array element, 
let fruits22 = ["apple", "banana", "orange"];
fruits.forEach("banana");
console.log(fruits); // ["banana", "banana", "banana"]
//.for() loops through a block of code a number of times.
let fruits23 = ["apple", "banana", "orange"];
fruits.for("banana");
console.log(fruits); // ["banana", "banana", "banana"]
// ?12. What is the difference between .forEach() and .map()?
// .forEach() executes a provided function once for each array element, 
let fruits24 = ["apple", "banana", "orange"];
fruits.forEach("banana");
console.log(fruits); // ["banana", "banana", "banana"]
//.map() creates a new array with the results of calling a provided function on 
//every element in the calling array.
// ?13. What is the difference between .forEach() and .reduce()?
// .forEach() executes a provided function once for each array element, 
//.reduce() executes a reducer function (that you provide) on each member of the
// array resulting in a single output value.
//? 14. What is the difference between .forEach() and .filter()?
// .forEach() executes a provided function once for each array element, 
//.filter() creates a new array with all elements that pass the test 
//implemented by the provided function.
//? 15. What is the difference between .forEach() and .find()?
// .forEach() executes a provided function once for each array element, 
//.find() returns the value of the first element in the provided array 
//that satisfies the provided testing function.
// ?16. What is the difference between .forEach() and .every()?
// .forEach() executes a provided function once for each array element, 
//.every() tests whether all elements in the array pass the test
// implemented by the provided function.
let fruits25 = ["apple", "banana", "orange"];
fruits.every("banana");
console.log(fruits); // false
//? 17. What is the difference between .forEach() and .some()?

   // .forEach() executes a provided function once for each array element, 
   //.some() tests whether at least one element in the array passes 
   //the test implemented by the provided function.
//? 18. What is the difference between .forEach() and .includes()?       
    // .forEach() executes a provided function once for each array element, 
    //.includes() determines whether an array includes a certain value among its entries, 
    //returning true or false as appropriate.


