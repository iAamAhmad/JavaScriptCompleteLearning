//? how JavaScript works
//?compilation phase
/*
1. tokenizing/lexing
2. parsing
3. code generation
*/
//? MAin purpose of compilation phase:Lexing and Parsing
/*
early error detection
pure lazy compilers do not report error
Determining appropriate scope for variables is done at this stage(DAST)
abstract syntax tree AST
*/
//?execution phase
/*
1. we need to create execution context for all the code
1. Global Execution Context
i) Creation: this window()host object
1) this will give undefined value for var variable, but not for let variable

ii) Execution: this == var window()host object
Any code that is run in js program resides in global execution contextThe JS engine is a high speed interpreter that accesses code
and calculates it immediately where it is in the file. The JS engine runs
across three contexts
*/

console.log(this);
console.log(this.toString());
console.log(window);
window.console.log(this == window);
console.log(firstName);
var firstName = "Akanksha";
console.lof(firstName);
