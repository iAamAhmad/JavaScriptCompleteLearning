// rest parameters
function add(...args) {
    sum = 0;
    for (let i of args) {
        sum += i;
    }
    console.log(sum);
}
(add(2, 3, 4, 5, 6));
    // output: 20
    // rest parameters are used to pass 
    //multiple arguments to a function