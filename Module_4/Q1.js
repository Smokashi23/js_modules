//for loop
function print(){
  for(i=1; i<5; i++)
  {
    if (i==4)
      return i
  }
  console.log("hello")  //will not excute
}

console.log(print()) //output 4

//while loop
function vote(age){
  while(age>=18){
    return true
  }
  console.log("cant vote") //if we enter age less than 18 it wll not enter in while loop and print this                           
}
console.log(vote(19))    


//switch case
function switchcase(age){
  switch (true) {
    case (age <= 12):
        return "child"
    case (age >= 13 && age <= 18):
        return "teen"
    default:
        return "adult"
}
   console.log("hello")   //unreachable code detected
}
console.log(switchcase(29))



