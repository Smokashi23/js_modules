const JsonString = '{"name": "sakshi", "age": 21, "city": "Solapur"}';
const parse = JSON.parse(JsonString);


//Json passing dirty string
/*
const jsonString = '{"name": "sakshi", "age": 21, "city": "Solapur",}';

try {
  const parse = JSON.parse(jsonString);
  console.log(parse);
} catch (error) {
  console.error("Error parsing JSON:", error.message);
}
*/

