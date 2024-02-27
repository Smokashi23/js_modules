// Write a function to check deep equality of two nested objects/arrays

function deepEqual(obj1, obj2) {
  if (typeof obj1 === 'object' && obj1 !== null &&
      typeof obj2 === 'object' && obj2 !== null) {
  
    if (Array.isArray(obj1) && Array.isArray(obj2)) {
      if (obj1.length !== obj2.length) {
          return false;
      }
      for (let i = 0; i < obj1.length; i++) {
          if (!deepEqual(obj1[i], obj2[i])) {
              return false;
          }
      }
      return true;
  }
      const keys1 = Object.keys(obj1);
      const keys2 = Object.keys(obj2);
      if (keys1.length !== keys2.length) {
          return false;
      }
      for (let key of keys1) {
          if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
              return false;
          }
      }
      return true;
  } else {
      return obj1 === obj2;
  }
}

// let obj={
//   name:"Harry Potter",
//   age: 12,
//   address: {
//   details: ["4", "Privet Drive"],
//   area:"Little Whinging",
//   city: "Surrey",
//   state: "England"
//   } 
// }

// let obj1={
//   name:"Harry Potter",
//   age: 12,
//   address: {
//   details: ["4", "Privet Drive"],
//   area:"Little Whinging",
//   city: "Surrey",
//   state: "England"
//   } 
// }

let obj=[1,2,3,4,5]
let obj1=[1,2,3,4]

console.log(deepEqual(obj,obj1))