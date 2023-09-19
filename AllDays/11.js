//? and or operator
//1. if the first operand is truthy, then it will return the first operand
// 2. if the first operand is falsy, then it will return the second operand
// 3. if both are falsy, then it will return the second operand
// 4. if both are truthy, then it will return the first operand

var a = 22;
var b = 20;
var c = 30;
var d = 40;
var result = a > b && c > d ? "a is greater than b and c is greater than d" : "a is less than b and c is less than d";
console.log(result);

//? or operator
//1. if the first operand is truthy, then it will return the first operand
// 2. if the first operand is falsy, then it will return the second operand
// 3. if both are falsy, then it will return the second operand
// 4. if both are truthy, then it will return the first operand
var result = a > b || c > d ? "a is greater than b and c is greater than d" : "a is less than b and c is less than d";
