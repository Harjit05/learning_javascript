
let person={
    name:"Harjit",
    age:30
};
// console.log(person);
person.name="John";
// console.log(person.name);
person['name']="Mary";
// console.log(person.name);

let selection='name';
person[selection]="Bella";
console.log(person.name);


