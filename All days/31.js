//? arrow functions
// how to make arrow functions

const arrowFunction = () => {
    console.log("hello");
}

//?example of arrow function
const square = (num) => {
    return num * num;
}
square(2); // 4


//arrow function with one expression
const numbers = (num1, num2) => {
    return num1 + num2;
}

const numbers1 = (num1, num2) => num1 + num2;
//this is a function we are defining in one line
numbers(2, 3); // 5 this is calling the function

const isEven = (number) => {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
isEven(4); // true
