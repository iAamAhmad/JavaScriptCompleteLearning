//?lexical scope
function foo() {
    var bar = "bar"; // bar is lexically scoped to foo
    function myFunc() {
        console.log(bar); // bar is accessible here
    }
    function baz() {
        console.log('inside baz function', bar);
        // baz has access to bar variable
        //because of lexical scope
    }
    console.log('inside foo function', bar);
    baz();
    myFunc();
}
foo(); // "bar"