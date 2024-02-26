// 4.  What will be printed to the console?

const testAsyncFunction = () =>{
  return Promise.reject('Test static reject'); // Output will be Error in catch block Test static reject
  };
  // return Promise.resolve('Test static reject'); // Output Response in then block Test static reject
  //   };
  testAsyncFunction()
  .then((res) =>{     
  console.log('Response in then block', res);
  })
  .catch((err) => console.log('Error in catch block', err));

  