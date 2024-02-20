//Array
const arr=[1,2,3];
const JsonString= JSON.stringify(arr);
console.log(JsonString);

//Object
const student = {
  Name: 'sakshi',
  Age: 21,
};
const jsonobject = JSON.stringify(student);
console.log(jsonobject);

//number
const jsonNumber = JSON.stringify(12);
console.log(jsonNumber);

//string
const jsonString = JSON.stringify("sakshi");
console.log(jsonString);

//Null
const jsonNull = JSON.stringify(null);
console.log(jsonNull);


