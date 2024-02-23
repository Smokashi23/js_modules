let names = ["sakshi","rohit","sandhya","sumit","sakshi"]
const result = names.filter((item,i,names)=>i==names.indexOf(item))
console.log(result)

