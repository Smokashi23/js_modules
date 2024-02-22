const arr=[1,2,5,3]
console.log(arr)

console.log("Mutating Methods")
arr.push(6)
console.log("arr.push(6)",arr)
arr.pop()
console.log("arr.pop()", arr)
arr.sort()
console.log("arr.sort()",arr)

console.log("Non Mutating Methods")

let res=arr.filter(obj=>obj>2)
console.log("arr.filter()",res)
console.log("original Array",arr)
res=arr.map((val)=>val*2)
console.log("arr.map()",res)
console.log("original Array",arr)
res=arr.find(val=> val==2)
console.log("arr.find()",res)
console.log("original Array",arr)