//sum of first 10 natural numbers using for loop
var sum = 0;
for (var i = 1; i <= 10; i++) {
    sum += i;
}
console.log(sum);

// sum of first 10 natural numbers using while loop
var sum = 0;
var i = 1;
while (i <= 10) {
    sum += i;
    i++;
}
console.log(sum);
// sum of first 10 natural numbers using do while loop
var sum = 0;
var i = 1;
do {
    sum += i;
    i++;
}
while (i <= 10);
console.log(sum);
// sum of first 10 natural numbers using recursion
function sum1(n) {
    if (n === 1) {
        return 1;
    }
    return n + sum1(n - 1);
}
console.log(sum1(10));
// sum of first 10 natural numbers using recursion
function sum2(n) {
    if (n === 1) {
        return 1;
    }
    return n + sum2(n - 1);
}
console.log(sum2(10));
