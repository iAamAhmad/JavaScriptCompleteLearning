//?type operator
let age = 25;
console.log(typeof age); //number
let name = "John";
console.log(typeof name); //string
let isApproved = true;
console.log(typeof isApproved); //boolean
let firstName = undefined;
console.log(typeof firstName); //undefined
let selectedColor = null;
console.log(typeof selectedColor); //object
//?converting types
//convert string to number
let age1 = "25";
console.log(typeof age1); //string
age1 = +age1; //?this is also a way age1=Number(age1)
console.log(typeof age1); //number
//convert number to string
let age2 = 25;
console.log(typeof age2); //number
age2 = '' + age2;
console.log(typeof age2); //string

//convert boolean to string
let isApproved1 = true;
console.log(typeof isApproved1); //boolean
isApproved1 = String(isApproved1);
console.log(typeof isApproved1); //string

//convert boolean to number
let isApproved2 = true;
console.log(typeof isApproved2); //boolean
isApproved2 = Number(isApproved2);
console.log(typeof isApproved2); //number

//convert string to boolean
let isApproved3 = "true";
console.log(typeof isApproved3); //string
isApproved3 = Boolean(isApproved3);
console.log(typeof isApproved3); //boolean

//convert number to boolean
let isApproved4 = 1;
console.log(typeof isApproved4); //number
isApproved4 = Boolean(isApproved4);
console.log(typeof isApproved4); //boolean

//convert undefined to boolean
let isApproved5 = undefined;
console.log(typeof isApproved5); //undefined
isApproved5 = Boolean(isApproved5);
console.log(typeof isApproved5); //boolean

//convert null to boolean
let isApproved6 = null;
console.log(typeof isApproved6); //object
isApproved6 = Boolean(isApproved6);
console.log(typeof isApproved6); //boolean

//convert string to number
let age3 = "25";
console.log(typeof age3); //string
age3 = + age3;
console.log(typeof age3); //number



//? primitive data types

// number
// string
// boolean
// null
// undefined
//bigint
//symbol


