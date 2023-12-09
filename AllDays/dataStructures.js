// challenge one!

function stringReturn() {
   return 'Hello World!';
}

const returningString = stringReturn();
// console.log(returningString);


// challenge 2!
function additionReturn(a, b) {
   return a + b;
}

const sum = additionReturn(2, 4);
// console.log(sum)
//? Adding two by taking operator from user!
/*
function additionReturnWithOperator(num1, num2, operator) {

   let result;
   switch (operator) {
      case '+':
         result = num1 + num2;
         break;
      case '-':
         result = num1 - num2;
         break;
      case '/':
         result = num1 / num2;
         break;

      case '*':
         result = num1 * num2;
         break;
      default:
         throw new Error('Invalid operator!')
   }
   return result;
}
const withOperator = additionReturnWithOperator(4, 4, '+');
console.log(withOperator)
*/
/*
function countOccurrences(str, char) {
   count = 0;
   for (let i = 0; i < str.length; i++) {
      if (str[i] === char) {
         count++;
      }

   }
   return count; 
}

const sumOcc = countOccurrences('hello', 'h');
console.log(sumOcc);
 >>>>>>>>>>>>>>>>> Using Methods >>>>>>>>>>>>>>>>>>>>>>>>>>>>
const countOccurrences = (str, char) => str.split(char).length - 1;
const sumOcc = countOccurrences('hello', 'l');
console.log(sumOcc)
*/

//? Finding Maximum in Given Array
/** 
function findMax(arr) {
   let max = arr[0];
   for (i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
         max = arr[i]
      }
   }
   return max;
}
const foundMax = findMax([2, 4, 6, 7, 8, 23, 45]);
 console.log(foundMax) 

*/

//? making each letter of word in strong titleCase!
/** 
function titleCase(str) {
   let words = str.toLowerCase().split(' ');
   // console.log(words)
   for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
   }
   return words.join(' ');
}

const caseTitle = titleCase('A quick brown fox Jumps over');
 console.log(caseTitle)
*/

//? Reversing a given string

/*
function reverseString(str) {
  const reversed = str.split('').reverse().join(''); //with methods
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
     reversed += str[i]
  }
  return reversed;
}
const stringReversed = reverseString('Hello')
console.log(stringReversed)

*/

//? checking if a string is palindrome
/*
function isPalindrome(str) {
   const formattedString = str.toLowerCase().replace(/[^a-z0-9]/g, '');
   const reverseStr = formattedString.split('').reverse().join('');

   return formattedString == reverseStr;
}

const palindrome = isPalindrome('racecarr');
console.log(palindrome)
*/

//? counting Vowels!
/*
function countingVowels(str) {
   const formatStr = str.toLowerCase();
   let count = 0;
   for (let i = 0; i < formatStr.length; i++) {
      const element = formatStr[i];
      if (element === 'a' || element === 'e' || element === 'i' || element === 'o' || element === 'u') {
         count++;
      }

   }
   return count;
}
const vowels = countingVowels('Hello');
console.log(vowels);
*/

//? Removing Duplicates!
/*
function removingDuplicates(arr) {

   let uniqueArray = [];
   for (let i = 0; i < arr.length; i++) {
      if(!uniqueArray.includes(arr[i])){
         uniqueArray.push(arr[i])
      }
   }
   return uniqueArray;
}
const removedDuplicates = removingDuplicates([2,3,4,4,4,5,6]);
console.log(removedDuplicates)
function removingDuplicates(arr){
   return Array.from(new Set(arr));
}
*/

//? FizzBuzz Array!
/*
function fizzBuzzArray(name) {
   let fizzedArray = [];
   for (let i = 1; i <= name; i++) {
     
      if(i % 3 ===0 && i % 5 === 0){
         fizzedArray.push('FizzBuzz');
      }
      else if(i % 3 ==0){
         fizzedArray.push('Fizz');
      }
      else if(i % 5 ==0){
         fizzedArray.push('Buzz');
      }
      else{
         fizzedArray.push(i);
      }
   }
   return fizzedArray;
}

const arrayFizzed = fizzBuzzArray(15);
console.log(arrayFizzed);
*/
//? Intersection of arrays!
/*
function interSection(arr1, arr2) {
   let intersectedArray = [];
   for (let i = 0; i < arr1.length; i++) {
      if(arr2.includes(arr1[i]) && !intersectedArray.includes(arr1[i])){
         intersectedArray.push(arr1[i])
      }  
   }
   return intersectedArray;
}
const interSectionOfArray = interSection([1,2,3,4,5],[2,3,4]);
console.log(interSectionOfArray);
*/
/*
function interSection(arr1, arr2) {
   let intersectedArray = [];
   let set1 = new Set(arr1);
   for(let num of arr2){
      if(set1.has(num)){
         intersectedArray.push(num) 
      }
   }
   return intersectedArray;
}
const interSectionOfArray = interSection([1,2,3,4,5],[2,3,4]);
console.log(interSectionOfArray);
*/
//? displayLikes
/*
function displayLikes(names) {
   const length = names.length;
   if(length === 0){
      return 'no one likes this'
   }
   else if(length === 1){
      return `${names[0]} likes this`
   }
   else if(length === 2){
      return `${names[0]} and ${names[1]} like this`
   }
   else if(length === 3){
      return `${names[0]}, ${names[1]} and ${names[2]} like this`
   }
   else{
      return `${names[0]}, ${names[1]} and ${length - 2} others like this`
   }
}
const likesDisplay = displayLikes(['Ahmad','Muhammad','Ehsan', 'Faisal']);
console.log(likesDisplay);
*/
/*
function missingValue(arr) {
   if(arr.length ===0) return 1;
   let n = arr.length + 1;
   const expectedSum = n * (n + 1)/2;
   let actualSum = 0;
   for (let i = 0; i < arr.length; i++) {
      actualSum += arr[i];
   }
   return expectedSum - actualSum;
}
const valueMissing = missingValue([1,2,4,5,6]);
console.log(valueMissing)
*/
/*
function findMissingLetter(arr){
   const alphabets = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
   let startIndex = alphabets.startIndex(arr[0]);
   for (let i = 0; i < arr.length; i++) {
    if(arr[i] != alphabets[startIndex + i]){
      return alphabets[startIndex + i]
    }  
   }
   return '';
}
*/
function uniqueStatement(str) {
   let unique = {};
   for (let i = 0; i < str.length; i++) {
      const element = str[i];
      if (unique[element]) {
         return false;
      }
      unique[element] = true;
   }
   return true;
}