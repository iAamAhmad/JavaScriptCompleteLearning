/*
function addNames(...others) {
   sum = 0;
   for(let other of others ){
      sum +=other;
   }
   return sum;
}
const sumTotal = addNames(3,4,5,9,8,9)
console.log(sum)


function fun1(...theArgs) {
   console.log(theArgs.length);
 }
 
 fun1(); // 0
 fun1(5); // 1
 fun1(5, 6, 7); // 3

 

 function multiplication(multiply,...args){
   return args.map((element) => element * multiply
   )
 }
 const res = multiplication(2,3,4,5)
 console.log(res)

 */

 //? Spread Operator!
/*
 function addition(a,b,c){
   return a+ b + c
 }
 const numbers = [2,3,4]
 const res = addition(...numbers)
 console.log(res)

 const array = [1, 2, 3];
 const obj = { ...array }; // { 0: 1, 1: 2, 2: 3 }
console.log(obj) 

 */
const students = {
   name : 'Ahmad',
   age : 27,
   hobbies : ['cricket', 'football']
}
let  {...rest} = students;
console.log(rest)

let student = {
   ...students,
   name : 'Ehsan'
}
console.log(student)

let newStudent = {
   ...students,
   name : 'usman'
}
console.log(newStudent)