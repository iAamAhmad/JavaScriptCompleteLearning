//? fill method of array
/*
fill method - fills the array with the value
passed as the first argument from the start index
passed as the second argument to the end index
passed as the third argument
*/
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//fill the array with 0 from index 0 to index 4
const arr1 = arr.fill(0, 0, 5);
console.log(arr1);//[ 0, 0, 0, 0, 0, 6, 7, 8, 9, 10 ]
//fill the array with 0 from index 5 to index 9
const arr2 = arr.fill(0, 5, 10);
console.log(arr2);//[ 1, 2, 3, 4, 5, 0, 0, 0, 0, 0 ]
//fill the array with 0 from index 0 to index 9
const arr3 = arr.fill(0, 0, 10);
console.log(arr3);//[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
/*
here 0,0,10 are the arguments passed to the fill method
0 is the value to be filled
0 is the start index
10 is the end index
if the end index is not passed then the array is filled
from the start index to the end of the array
if the start index is not passed then the array is filled
*/