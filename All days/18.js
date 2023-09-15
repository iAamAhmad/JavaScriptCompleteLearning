//?break statement
// break statement is used to terminate the loop or 
//switch statement

//?continue statement
// continue statement is used to skip the current 
//iteration of the loop

//?for...in statement
// for...in statement is used to loop 
//through the properties of an object

//?for...of statement
// for...of statement is used to loop 
//through the values of an iterable object
//?for statement
// for statement is used to loop through 
//a block of code a number of times
//?while statement
// while statement is used to loop through 
//a block of code while a specified condition is true
for (let i = 0; i < 10; i++) {
    if (i == 5) {
        console.log(i);//5 will be printed and 
        //the loop will be terminated
        break;
    }
}
console.log("continue statement");
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log(i);//5 will not be printed because of 
        //continue statement
        continue;
    }
}