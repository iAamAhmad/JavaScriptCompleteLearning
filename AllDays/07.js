//?String methods
//trim()
let name1 = "   John   ";
console.log(name1.length);// 11
name2 = name1.trim();
console.log(name2.length);// 4
//toUppercase()
let name3 = "john";
name3 = name3.toUpperCase();// JOHN
console.log(name3);//JOHN
//toLowerCase()
let name4 = "JOHN";
name4 = name4.toLowerCase();
console.log(name4);//john
//includes()
let name5 = "John";
name5 = name5.includes("J");// true
console.log(name5);//true
//startsWith()
let name6 = "John";
name6 = name6.startsWith("J");
console.log(name6);//true
//endsWith()
// this tells us if the string ends with 
//the character we are looking for
let name7 = "John";
name7 = name7.endsWith("n");
console.log(name7);//true
//indexOf()
// this tells us the index of the character
let name8 = "John";
name8 = name8.indexOf("n");
console.log(name8);//3
//lastIndexOf()
// this tells us the index of the last character
let name9 = "John";
name9 = name9.lastIndexOf("n");
console.log(name9);//3
//slice()
// slice is used to extract a part of a string
let name10 = "John";
name10 = name10.slice(0, 2);
console.log(name10); //Jo because 2 is not included
//substring()
// substring is used to extract a part of a string
let name11 = "John";
name11 = name11.substring(0, 2);
console.log(name11); //Jo because 2 is not included
//replace()
// replace is used to replace a character with another character
let name12 = "John";
name12 = name12.replace("J", "j");
console.log(name12);//john
//split()
// split is used to split a string into an array
let name13 = "John";
name13 = name13.split("");
console.log(name13);//[ 'J', 'o', 'h', 'n' ]
//concat()
// concat is used to concatenate two strings
let name14 = "John";
let name15 = "Doe";
name14 = name14.concat(name15);
console.log(name14);//John Doe
//repeat()
// repeat is used to repeat a string
let name16 = "John";
name16 = name16.repeat(3);
console.log(name16);//JohnJohnJohn

//template string
// template string is a string that uses backticks
//and wraps expressions inside ${}
let name = "John";
let age = 25;
let message = `My name is ${name} and I am ${age} years old`;
console.log(message);

