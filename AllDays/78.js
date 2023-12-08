const person = {
   name: ["Bob", "Smith"],
   age: 32,
   bio: function () {
      console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
   },
   introduceSelf: function () {
      console.log(`Hi! I'm ${this.name[0]}.`);
   },
};
console.log(person.name);
console.log(person.name[1]);
console.log(person.age);
person.introduceSelf();
person.age = 45;
person.name[2] = "Ahmad";
console.log(person.age);
console.log(person.name);
console.log(person.name[2]);


const persons = {
   name: ["Bob", "Smith"],
   age: 32,
   bio() {
      console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
   },
   introduceSelf() {
      console.log(`Hi! I'm ${this.name[0]}.`);
   },
};

persons.introduceSelf()
console.log(persons.name[1]);


function createPerson(name) {
   const obj = {};
   obj.name = name;
   obj.introduceSelf = function () {
      console.log(`Hi! I'm ${this.name}.`);
   };
   return obj;
}
const myName = createPerson("Ahmad Jee");
console.log(myName.name);
myName.introduceSelf();


const myObject = {
   city: "Madrid",
   greet() {
      console.log(`Greetings from ${this.city}`);
   },
};

myObject.greet(); // Greetings from Madrid
console.log(myObject.toString())
console.log(Object.getPrototypeOf(myObject))



const myDate = new Date(1995, 11, 17);

console.log(myDate.getYear()); // 95
console.log(myDate.getDate()); // 17
console.log(myDate.getFullYear()); 1995

myDate.getYear = function () {
   console.log("something else!");
};

myDate.getYear(); // 'something else!'


//? Working with JSON!
const data = {
   "squadName": "Super hero squad",
   "homeTown": "Metro City",
   "formed": 2016,
   "secretBase": "Super tower",
   "active": true,
   "members":
      [
         {
            "name": "Molecule Man",
            "age": 29,
            "secretIdentity": "Dan Jukes",
            "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
         },
         {
            "name": "Madame Uppercut",
            "age": 39,
            "secretIdentity": "Jane Wilson",
            "powers": [
               "Million tonne punch",
               "Damage resistance",
               "Superhuman reflexes"
            ]
         },
         {
            "name": "Eternal Flame",
            "age": 1000000,
            "secretIdentity": "Unknown",
            "powers": [
               "Immortality",
               "Heat Immunity",
               "Inferno",
               "Teleportation",
               "InterDimensional travel"
            ]
         }
      ]
}
console.log(data.members[0].powers[2]) 

const personOne = {
   fName : "Ahmad",
   lName : "Muhammad",
}
let {fName,lName, middleName: mName = "Khan"} = personOne;
console.log(fName);
console.log(lName);
console.log(mName);