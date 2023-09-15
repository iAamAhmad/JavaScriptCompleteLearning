//? function returning function
function foo() {
    return function () {
        console.log("Hi");
    };
}
var bar = foo();
bar();
    //output: Hi