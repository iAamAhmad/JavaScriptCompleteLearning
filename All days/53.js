//? map structure

const person = new Map();
person.set('name', 'John');
person.set('age', 30);
console.log(person);//Map(2) {"name" => "John", "age" => 30}
console.log(person.size);//2
console.log(person.get('name'));//John
console.log(person.get('age'));//30
console.log(person.has('name'));//true
console.log(person.has('age'));//true
person.delete('age');
console.log(person);//Map(1) {"name" => "John"}
person.clear();
console.log(person);//Map(0) {}
/*
map is a collection of key value pairs.
has is used to check if a key exists in the map.
get is used to get the value of a key.
size is used to get the size of the map.
*/
// applying for of on map
const person1 = new Map();
person1.set('name', 'John');
person1.set('age', 30);
for (const [key, value] of person1) {
    console.log(key, value);//name John age 30
}



