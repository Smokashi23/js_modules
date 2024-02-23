//  Write a function that returns a nested key within an object:
let obj={
  name:"Harry Potter",
  age: 12,
  address: {
  details: ["4", "Privet Drive"],
  area:"Little Whinging",
  city: "Surrey",
  state: "England"
  } 
}

function getNestedKey(obj, key) {
  const keys = key.split('.');
  // console.log(keys)
  let value = obj;
  for (let k of keys) {
   
      if (typeof value === 'object' && value != null && k in value) {
          value = value[k];
      } 
  }
  return value;
}
console.log(getNestedKey(obj, "address.details.1"))