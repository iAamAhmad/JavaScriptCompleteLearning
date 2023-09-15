//default parameters
function add(a, b = 1) {
    sum = a + b;
    console.log(sum);
}
(add(2, 3));
    // expected output: 3
//here b is 1 by default which will be added
//to a if b is not passed as an argument