class PracticePrograms {
   constructor() {
      this.uniqueObj = {};
      this.arrayForAdding = [];
   }

   //* Method For Cloning the array!

   cloneArray(arr) {
      return arr.slice(0);
   }

   //* Method For getting First Element!
   getFirstElement(arr, n = 1) {
      return arr.length === 0 || n <= 0 ? [] : arr.slice(0, n);
   }

   //* Method For getting Last Elements Element!
   lastElement(array, n) {
      return array === null || n === null
         ? array[array.length - 1]
         : array.slice(Math.max(array.length - n, 0));
   }

   //* Method For getting Squares of elements of Array!
   sumOfSquares(array) {
      let sum = 0;
      for (let i = 0; i < array.length; i++) {
         sum += Math.pow(array[i], 2);
      }
      return sum;
   }

   //* Method For Unique Elements from array!
   add(num) {
      this.uniqueObj[num] = 0;
   }
   getUniqueArray() {
      return Object.keys(this.uniqueObj).map(Number);
   }
}
const instanceOfClass = new PracticePrograms();
const myNum = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];

//* Cloning An array!

const sampleArray = [1, 2, 3, 5, 8];
console.log('Original Array:', sampleArray);
const clonedArray = instanceOfClass.cloneArray(sampleArray);
console.log('Cloned Array:', clonedArray);

//* Printing First Elements from an array!

console.log('Printing First Elements from an array:');
const myArray = [1, 2, 3, 4, 5];
const firstElement = instanceOfClass.getFirstElement(myArray);
const firstThreeElements = instanceOfClass.getFirstElement(myArray, 3);
console.log('Printing One Element:', firstElement);
console.log('Printing Three Element:', firstThreeElements);

//* Printing Last Elements from an array:!

console.log('Printing Last Elements of an array: \n');
console.log(instanceOfClass.lastElement([7, 9, 0, -2]));
console.log(instanceOfClass.lastElement([7, 9, 0, -2], 3));
console.log(instanceOfClass.lastElement([7, 9, 0, -2], 6));

//* Sum of squares of all elements An array!

const sumOfSquaresResult = instanceOfClass.sumOfSquares(myNum);
console.log('Sum of squares of an array:');
console.log(sumOfSquaresResult);

//* Getting Unique Elements

myNum.forEach((num) => {
   instanceOfClass.add(num);
});
const result = instanceOfClass.getUniqueArray();
console.log('Array of unique elements:');
console.log(result);

// const displayButton = document.getElementById("displayCloneButton");

document.getElementById("cloneArrayBtn").addEventListener("click", () => {
   arrayOps.cloneArray()
});