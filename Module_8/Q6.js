// 6. Create a promise that makes a fetch call, but resolves with the data only 2 seconds after the data has been received in the fetch.
const getData = new Promise((resolve,reject)=>{
  fetch('https://reqres.in/api/users')
  .then((res)=>res.json())
  .then((res)=>setTimeout(()=>{
     resolve(res)
  },2000))
  .catch(err =>reject(err))
}).then((data)=>{
  console.log(data)
}).catch(err=>console.log(err))