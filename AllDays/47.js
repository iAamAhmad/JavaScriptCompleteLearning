//? every method of array
/*
every method - checks if all the elements in the array
satisfy the condition in the callback function
and returns that element
*/
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//check if all the elements in the array are even
const allEven = arr.every((num) => num % 2 === 0);
console.log(allEven);//false
//check if all the elements in the array are odd
const allOdd = arr.every((num) => num % 2 !== 0);
console.log(allOdd);//false
//check if all the elements in the array are greater than 0
const allPositive = arr.every((num) => num > 0);
console.log(allPositive);//true
//check if all the elements in the array are less than 0
const allNegative = arr.every((num) => num < 0);
console.log(allNegative);//false
//check if all the elements in the array are greater than 5
const allGreaterThan5 = arr.every((num) => num > 5);
console.log(allGreaterThan5);//false
//check if all the elements in the array are less than 5
const allLessThan5 = arr.every((num) => num < 5);
console.log(allLessThan5);//false
