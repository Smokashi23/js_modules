//  Write a function that can stop execution of a function for the number of milliseconds sent as an argument
const func = async()=>{
  console.log("Before Printing")
  await sleep(3000)
  console.log("After Printing")
}

const sleep = async(time)=>{
  let p=new Promise(resolve=> setTimeout(resolve,time))
  return p
}

func()