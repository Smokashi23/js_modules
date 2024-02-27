// 5. What will be printed to the console?

const testAsyncFunction = () => {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve('Test Resolve');  //Output will be Response in then block:  Test Resolve
    } else {
      reject('Test Reject');
    }
  }).catch((err) => {
    console.log('Error caught in testAsyncFunction', err);
    throw new Error('Forced error');
  });
};
testAsyncFunction()
  .then((res) => {
    console.log('Response in then block: ', res);
  })
  .catch((err) => console.log('Error in catch block: ', err));
// //output will be Error caught in testAsyncFunction Test Reject Error in catch block:  Error: Forced error
//   at /home/sakshi/JS_module/Module_8/Q5.js:12:11



