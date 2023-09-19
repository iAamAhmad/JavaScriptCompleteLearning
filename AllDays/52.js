//? Sets
/*
sets are newly introduced in ES6. 
Sets are collection of unique values.
*/
const numbers = new Set([1, 2, 3, 4, 5]);
console.log(numbers);//Set(5) {1, 2, 3, 4, 5}
console.log(numbers.size);//5
console.log(numbers.has(1));//true  
console.log(numbers.has(6));//false
numbers.add(6);
console.log(numbers);//Set(6) {1, 2, 3, 4, 5, 6}
numbers.delete(6);
console.log(numbers);//Set(5) {1, 2, 3, 4, 5}
numbers.clear();
console.log(numbers);//Set(0) {}
//? WeakSets
/*
WeakSets are similar to sets but they only accept objects as values.
*/
const person1 = { name: 'Max' };
const person2 = { name: 'Manuel' };
const person3 = { name: 'Manu' };

const personWeakSet = new WeakSet([person1, person2, person3]);
console.log(personWeakSet);//WeakSet {{…}, {…}, {…}}
console.log(personWeakSet.has(person1));//true
console.log(personWeakSet.has(person3));//true
personWeakSet.add({ name: 'Anna' });
console.log(personWeakSet);//WeakSet {{…}, {…}, {…}, {…}}
personWeakSet.delete(person1);
console.log(personWeakSet);//WeakSet {{…}, {…}, {…}}
personWeakSet.clear();
console.log(personWeakSet);//WeakSet {}
