//  Write a recursive function to create a deep clone of a nested object
const originalObj = {
  name: "John",
  age: 30,
  address: {
      city: "New York",
      country: "USA"
  },
  hobbies: ["reading", "traveling"]
};



function deepClone(obj) {
  if (typeof obj === 'object' && obj !== null) {
      const cloned = Array.isArray(obj) ? [] : {};
      for (let key in obj) {
          cloned[key] = deepClone(obj[key]);
      }

      return cloned;
  } else {
      return obj;
  }
}

const clonedObj = deepClone(originalObj);
console.log(clonedObj);