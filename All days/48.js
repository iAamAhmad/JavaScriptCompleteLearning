//? some methods of the Array 
/*
some method is similar to every method
but it checks if at least one element in the array
satisfies the condition in the callback function
and returns that element

*/
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//check if at least one element in the array is even
const atLeastOneEven = arr.some((num) => num % 2 === 0);
console.log(atLeastOneEven);//true
//check if at least one element in the array is odd
const atLeastOneOdd = arr.some((num) => num % 2 !== 0);
console.log(atLeastOneOdd);//true