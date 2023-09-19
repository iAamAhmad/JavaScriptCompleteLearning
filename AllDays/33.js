//? functions inside of functions
function outerFunction() {
    let counter = 0;
    function incrementCounter() {
        counter++;
    }
    function decrementCounter() {
        counter++;
    }
    function sum(a, b) {
        return a + b;
    }
    incrementCounter();
    decrementCounter();

    console.log(sum(2, 3));
    console.log(counter);
}
outerFunction();