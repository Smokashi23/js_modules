let obj = {
  a:"Apple",
  b:["Basketball","Baseball"],
  c: {
   call: "cellphone"  },
  d: "Dog"
 }

//  function filterObject(obj) {
//   let result={};
//   for (let key in obj){
//     if(typeof(obj[key])!="object"){
//       result[key]=obj[key];
//     }
//   }
//   return result;
// }
// console.log(filterObject(obj))

function filter(obj) {
  return Object.keys(obj).reduce((result, key) => {
    if (typeof obj[key] !== "object") {
      result[key] = obj[key];
    }
    return result; 
  }, {});
}
console.log(filter(obj))