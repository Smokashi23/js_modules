// 7. Complete the above tasks with async/await.
const fetchData= async()=>{
  const res=await fetch('https://reqres.in/api/users')
  const data=await res.json()
  return new Promise(resolve =>setTimeout(() => resolve(data),2000))
}

fetchData()
.then(data=>console.log(data))
.catch(data=>console.log(error))