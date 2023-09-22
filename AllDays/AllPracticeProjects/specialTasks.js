

//? Task One!
const object1 =
{
   color: 'blue',
   weight: 24,
};
const object2 =
{
   color: 'Red',
   weight: 25,
}
const merged = { ...object1, ...object2 };
console.log(merged);

//? Method 2!

const byAssigned = Object.assign({}, object1, object2);
console.log(byAssigned);

//? The Custom Method.

const byCustomWay = ((...objs) => {
   const ress = objs.map(obj => JSON.parse(JSON.stringify(obj)));
   return ress.reduce((mergedValue, current) => ({
      ...mergedValue, ...current
   }), {});
});


//? Task two

function findIndex(array, targetValue) {
   for (let i = 0; i < array.length; i++) {
      if (array[i] === targetValue) {
         return i; // Return the index when the targetValue is found
      }
   }
   return -1; // Return -1 if the targetValue is not found in the array
}

// Example usage:
const myArray = [10, 20, 30, 40, 50];
const target = 30;

const index = findIndex(myArray, target);

if (index !== -1) {
   console.log(`The target value ${target} was found at index ${index}.`);
} else {
   console.log(`The target value ${target} was not found in the array.`);
}

var one = 10;
function two() {
   one = 25;
   var one;
   console.log(one);
}
two();
console.log(one);