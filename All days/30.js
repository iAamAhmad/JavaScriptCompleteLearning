//? functions

function add(a, b) {
    return a + b;
}
add(1, 2); // 3

// a,b are parameters
// 1,2 are arguments
// function is a block of code that can be reused
//checking if number is even or odd
function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
isEven(4); // true

//function returning first character of a string
function firstChar(str) {
    return str[0];
}
firstChar("hello"); // "h"

// function taking an array and giving target value

function isEven(num, target) {
    for (var i = 0; i < num.length; i++) {
        if (num[i] === target) {
            return i;
        }
    }
    return -1;

}
const arr = [1, 2, 3, 4, 5];
isEven(arr, 3); // 2
console.log(isEven(arr, 3));
// function expression
// function expression is a function stored in a variable
// function expression is not hoisted
// function expression is not accessible before it is defined
// function expression is not accessible outside of the block it is defined in
const square = function (num) {
    return num * num;
}
square(2); // 4
