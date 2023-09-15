console.log(this);
console.log(this.toString());
console.log(window);
console.log(myFunction);
console.log(firstName);

function myFunction() {
    console.log("Hello");
}
var firstName = "Akanksha";
var lastName = "Sharma";
var fullName = firstName + " " + lastName;
console.log(fullName);

//?global execution context
/*
it resides in stack memory
it is created by js engine
1. Creation phase
2.global execution phase
*/