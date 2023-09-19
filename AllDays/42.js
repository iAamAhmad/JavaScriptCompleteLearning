/*
reduce method
reduce method - returns a single value
reduce method is used to reduce the array to a single value
*/
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const reduceArray =
    numbers.reduce((accumulator, currentValue) =>
        accumulator + currentValue, 0);
console.log(reduceArray);

//?how reduce method works
/*
accumulator = 0, currentValue = 1 return 1
accumulator = 1, currentValue = 2 return 3
accumulator = 3, currentValue = 3 return 6
accumulator = 6, currentValue = 4 return 10
accumulator = 10, currentValue = 5 return 15
accumulator = 15, currentValue = 6 return 21
accumulator = 21, currentValue = 7 return 28
accumulator = 28, currentValue = 8 return 36
accumulator = 36, currentValue = 9 return 45
accumulator = 45, currentValue = 10 return 55
the last return value is the final value of the reduce method
for above example the final value is 55
*/
const userCart = [

    { name: "John", age: 25, cartPrice: 4 },
    { name: "Jane", age: 30, cartPrice: 4 },
    { name: "Jack", age: 35, cartPrice: 4 },
    { name: "Jill", age: 40, cartPrice: 55 },
    { name: "Joe", age: 45, cartPrice: 5 },
]
const totalCart
    = userCart.reduce((accumulator, user) =>
        accumulator + user.cartPrice, 0);
console.log(totalCart);
/*
this 0 is the initial value of the accumulator
if we don't pass the initial value of the 
accumulator then the first value of the 
accumulator will be the first value of the array
in this case the first value of 
the accumulator will 
be { name: "John", age: 25, cart: [1, 2, 3] }
and the first value of 
the currentValue will
be { name: "Jane", age: 30, cart: [4, 5, 6] }

*/