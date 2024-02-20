function test(callback){
  callback();
 }
 
 function callbackFunc(){
  console.log("calling callback function")
  return 5;
 }

 test(callbackFunc) //Calling callback function
//  test(callbackFunc())    //error callback not function


test(() => callbackFunc())  //calling callback function






