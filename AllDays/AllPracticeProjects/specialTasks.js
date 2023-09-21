

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



