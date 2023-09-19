//? sort method
// sort method - sorts the array
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//descending order
arr.sort((a, b) => b - a);
console.log(arr);
//in ascending order
arr.sort((a, b) => a - b);
console.log(arr);

//how it works
/*
sort method takes a callback function as an argument
the callback function takes two arguments
the callback function returns a positive number 
if the first argument is greater than the second argument
the callback function returns a negative number 
if the first argument is less than the second argument
the callback function returns 0 
if the first argument is equal to the second argument
the sort method sorts the array based on 
the return value of the callback function
*/

/*
the sort method sorts the array in ascending order
if the callback function returns a positive number
and it sorts the array in descending order
if the callback function returns a negative number
*/

