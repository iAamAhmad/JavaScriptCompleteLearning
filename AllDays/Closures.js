function outerFunction () {
   const outerVariable = 'i am variabke of outerFunction'
   function innerFunction(){
      console.log(outerVariable)
      return 'Value returned from innerFunction';
   }
   return innerFunction;
}
const testedFunction = outerFunction();
console.log(testedFunction());


function outerFunction () {
   const outerVariable = 'i am variabke of outerFunction'
   function innerFunction(){
      console.log(outerVariable)
      return 'Value returned from innerFunction';
   }
   return innerFunction;
}
const testedFunctionone = outerFunction();
console.log(testedFunction());