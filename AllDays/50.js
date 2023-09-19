//? splice array method
/*
splice method - removes elements from the array
and returns the removed elements
*/
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//remove the first element from the array
const removedFirst = arr.splice(0, 1);
console.log(removedFirst);//[1]
console.log(arr);//[2, 3, 4, 5, 6, 7, 8, 9, 10]
//remove the last element from the array
const removedLast = arr.splice(arr.length - 1, 1);
console.log(removedLast);//[10]
console.log(arr);//[2, 3, 4, 5, 6, 7, 8, 9]

/*
here 0,1 are the arguments passed to the splice method
0 is the start index
1 is the number of elements to be removed
if the number of elements to be removed is not passed
then the elements from the start index to the end of the array
are removed
if the start index is not passed then the elements from the
beginning of the array to the end of the array are removed
splice method can also be used to add elements to the array
by passing the elements to be added as the second argument
to the splice method
add 0 to the beginning of the array\
*/
arr.splice(0, 0, 0);
console.log(arr);//[0, 2, 3, 4, 5, 6, 7, 8, 9]
//add 10 to the end of the array
arr.splice(arr.length, 0, 10);
console.log(arr);//[0, 2, 3, 4, 5, 6, 7, 8, 9, 10]
