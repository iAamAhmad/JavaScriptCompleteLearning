//? for in loop
const fruits = ['apple', 'banana', 'orange'];
const newFruits = [];
for (let index in fruits) {
    newFruits.push(fruits[index].toUpperCase());
}
console.log(newFruits);

// how for in loop works
const fruits1 = ['apple', 'banana', 'orange', 'mango'];
const iterator = fruits1[Symbol.iterator]();
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
