//call back function
function myFunc(name) {
    console.log('callback is working here');
    console.log(name);
}
function higherOrder(callback) {
    console.log('higher order function is working here');
    callback('Khan');
}
higherOrder(myFunc);
//output: callback
//callback works like a function inside a function
//callback is a function that is passed as an argument to another function