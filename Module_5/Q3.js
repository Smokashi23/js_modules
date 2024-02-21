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
//output {"Name":"sakshi","Age":21}


//nested object
const person = {
  Name: 'Sakshi',
  Age: 21,
  Address: {
    City: 'Solapur',
    Country: 'India'
  }
};
const jsonObject1 = JSON.stringify(person);
console.log(jsonObject1); 


//number
const jsonNumber = JSON.stringify(12);
console.log(jsonNumber);

//string
const jsonString = JSON.stringify("sakshi");
console.log(jsonString);

//Null
const jsonNull = JSON.stringify(null);
console.log(jsonNull);


