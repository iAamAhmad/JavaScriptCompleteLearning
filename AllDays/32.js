//?hoisting
// hoisting is a javascript mechanism where 
//variables and function declarations are 
//moved to the top of their scope before 
//code execution.

//calling the function before declaring it is 
//called as hoisting
//and it is only possible in function declaration
//not in function expression


//?scope
//?closure
//?function //?function declaration
function sum() {
    var a = 10;
    var b = 20;
    var c = a + b;
    console.log(c);
}
sum();
function sum1(a, b) {
    var c = a + b;
    console.log(c);
}
sum1(10, 20);
//?function expression
var isSumVAr = function (a, b) {
    var c = a + b;
    console.log(c);
}
sum1(10, 20);

//?arrow function
var isSumVAr = (a, b) => {
    var c = a + b;
    console.log(c);

}
sum1(10, 20);
//?callback function
function sum(a, b) {
    var c = a + b;
    console.log(c);
}
function sum1(a, b, callback) {
    var c = a + b;
    callback(c);
}
sum1(10, 20, sum);
//?higher order function
//?first class function
//?first class citizen
//?first class object
//?anonymous function
//?IIFE
//?immediately invoked function expression
//?function expression
//?function declaration
