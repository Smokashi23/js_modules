const person={
  name:"Harry Potter",
  age: 12,
  address: {
   details: ["4", "Privet Drive"],
   area:"Little Whinging",
   city: "Surrey",
   state: "England"
  } 
 }
 console.log(person)

 const person1=person
 console.log(person1)
 person1.name="Ron wisely"
 console.log(person1) //name modified in copy of object
 
//  console.log(person) //origin object also gets changed
//this is not copy

//  person1.address.details[0]="5"
//  console.log(person1)
//  console.log(person)

//copy using spread operator
const person2 ={...person}
person2.name="dubledore"
console.log(person2)  //copy of the objec get changed
console.log(person)  //original remmains same
person2.address.details="6"
console.log(person2)
console.log(person)
//this is shallow copy where deeper level are refrenced

//deep copy using spread operator
const person3={...person,address:{...person.address}}
person3.address.area="abc"
person3.address.city="pune"
console.log(person3) //city is update to pune
console.log(person)  //original object remain same

//assign 
const person4 = Object.assign({}, person);
person4.address.details[0]="5"
console.log(person4)
console.log(person)
//works same like spread operator

//deep copy using json.parse()
let person5 = JSON.parse(JSON.stringify(person));
person5.address.details[0]="5"
console.log(person5)
console.log(person) //origin obj dont change
//json.stringify not best practice will return no key-value pair for the undefined and symbol values.
//It also changes other values like Nan and Infinity to null

//Lodash 

const user={
  name:"Harry Potter",
  age: 12,
  address: {
   details: ["4", "Privet Drive"],
   area:"Little Whinging",
   city: "Surrey",
   state: "England",
   pincode: undefined
  } 
 }
const _ = require('lodash');
const person6 = _.cloneDeep(user);
console.log(person6)   //undefined also get printed

