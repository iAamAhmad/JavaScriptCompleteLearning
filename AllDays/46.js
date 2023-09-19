//? find method of array
// find method - finds the first element in the array
// that satisfies the condition in the callback function
// and returns that element
const user = [
    { name: "John", age: 20 },
    { name: "Jane", age: 25 },
    { name: "Jack", age: 30 },
    { name: "Jill", age: 35 },
    { name: "Joe", age: 40 },
];
//find the first user who is 30 years old
const user30 = user.find((user) => user.age === 30);
console.log(user30);//{ name: 'Jack', age: 30 }
//find the first user who is 35 years old
const user35 = user.find((user) => user.age === 35);
console.log(user35);//{ name: 'Jill', age: 35 }
//find the first user who is 40 years old
const user40 = user.find((user) => user.age === 40);
console.log(user40);//{ name: 'Joe', age: 40 }
//find the first user who is 45 years old
const user45 = user.find((user) => user.age === 45);
console.log(user45);//undefined

