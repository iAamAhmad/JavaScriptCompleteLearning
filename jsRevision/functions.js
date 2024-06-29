function calMe(params) {
  console.log("Logging params here", params);
}

calMe(12)

const declareWithDefinition = function (a, b) {
  console.log("Logging params here", a + b);
}
console.log("===============================");
declareWithDefinition(2,4)

const functionWithReturn = function sum(a, b=7) {
  return a + b
}
console.log("===============================");
let sum = functionWithReturn(3)
console.log("returned Value", sum)

function outer(x){
  function inner (y){
    console.log(x + y)
  }
  return inner
}
const outerReturned = outer(8);
outerReturned(4)