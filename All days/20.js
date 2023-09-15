//? using const with arrays
const arr = [1, 2, 3];
arr.push(4); // OK - arr is mutable and can be changed in place (but not reassigned)
console.log(arr); // [1, 2, 3, 4]

// but you can't reassign the array because it's a constant
arr = [1, 2, 3, 4, 5]; // TypeError: Assignment to constant variable.

// using const with array is a good way to make sure
//that you don't reassign the array
// but you can still change the array in place
