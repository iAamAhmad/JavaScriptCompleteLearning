//? for of loop
const fruits = ['apple', 'banana', 'orange'];
const newFruits = [];
for (let fruit of fruits) {
    newFruits.push(fruit.toUpperCase());
}
console.log(newFruits);

// how for of loop works
const fruits1 = ['apple', 'banana', 'orange', 'mango'];
const iterator = fruits1[Symbol.iterator]();
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }

// for of usage is so common that we can use it with strings
