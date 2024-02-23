//  Write a function mapBy to convert an array of objects into an object mapped by the specified key:
let users = [{
  "id": 1,
  "first_name": "Nicki",
  "email": "ncrozier0@squarespace.com",
  "date_of_birth": "2009/05/09"
  }, {
  "id": 2,
  "first_name": "Raychel",
  "email": "rmcgrady1@cpanel.net",
  "date_of_birth": "1996/11/05"
  }];

function mapBy(users,key){
  let object={}
  for(let i=0;i<users.length;i++)
  {    
      object[users[i][key]]=users[i]
  }
  return object
}
console.log(mapBy(users,"first_name"))