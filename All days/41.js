//?for each method

/*
function multiply(number, index) {
    console.log(` number is ${index} index is ${number * 2}`);
}
numbers.forEach(multiply);

*/

//?for each method
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.forEach(function (number, index) {
    console.log(` number is ${index} index is ${number * 2}`);
}
);
//how for each method works
// number is 0 index is 2
// number is 1 index is 4
// this will work until the array is finished


