//using function
function Arr1(arraySize) {
  let Arr= [];
  let i = 1;

  while (i <= arraySize) {
      Arr.push(i);
      i++;
  }

  return Arr;
}

let arraySize = 25;
let result = Arr1(arraySize);

console.log(result)
