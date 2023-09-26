

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



function findMedianSortedArrays(nums1, nums2) {
   if (nums1.length > nums2.length) {
     [nums1, nums2] = [nums2, nums1]; // Ensure nums1 is the shorter array
   }
 
   const m = nums1.length;
   const n = nums2.length;
   let left = 0;
   let right = m;
   let median = 0.0;
 
   while (left <= right) {
     const partition1 = Math.floor((left + right) / 2);
     const partition2 = Math.floor((m + n + 1) / 2) - partition1;
 
     const maxLeft1 = partition1 === 0 ? Number.NEGATIVE_INFINITY : nums1[partition1 - 1];
     const minRight1 = partition1 === m ? Number.POSITIVE_INFINITY : nums1[partition1];
     const maxLeft2 = partition2 === 0 ? Number.NEGATIVE_INFINITY : nums2[partition2 - 1];
     const minRight2 = partition2 === n ? Number.POSITIVE_INFINITY : nums2[partition2];
 
     if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
       if ((m + n) % 2 === 0) {
         median = (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2;
       } else {
         median = Math.max(maxLeft1, maxLeft2);
       }
       break;
     } else if (maxLeft1 > minRight2) {
       right = partition1 - 1;
     } else {
       left = partition1 + 1;
     }
   }
 
   return median;
 }
 
 // Example usage:
 const nums1 = [1, 3];
 const nums2 = [2];
 const median = findMedianSortedArrays(nums1, nums2);
 console.log(median); // Output: 2.0
 