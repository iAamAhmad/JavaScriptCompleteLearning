//?while loop
let i = 0;
while (i < 3) {
    console.log(i); // 0 1 2
    i++;
}
console.log('Starting do while loop');
//?do while loop
let x = 0;
do {
    console.log(x);// 0 1 2
    x++;
} while (x < 3);
console.log('Starting for loop');

//for loop
let y = 0;
for (let y = 0; y < 3; y++) {
    console.log(y);
}
console.log('Starting for loop with array');
//for loop with array
let cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}
console.log('Starting for loop with object');
//for loop with object
const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 40
}
for (let x in user) {
    console.log(`${x}: ${user[x]}`);
}
//?forEach
cars.forEach(function (car, index, array) {
    console.log(`${index}: ${car}`);
    console.log(array);
});
//?map
const users = [{

    id: 1,
    name: 'John'
}, {
    id: 2,
    name: 'Sara'
}, {
    id: 3,
    name: 'Karen'
}];
const ids = users.map(function (user) {
    return user.id;
}
);
console.log(ids);

