// Given 2 arrays with related objects, return a new array where objects having the same id from each of the arrays are merged. Try to achieve it with a complexity - O(n).

let userNames = [{
  "id": 1,
  "first_name": "Nicki",
  }, {
  "id": 2,
  "first_name": "Raychel",
  }, {
  "id": 3,
  "first_name": "Demetris",
  }, {
  "id": 4,
  "first_name": "Amata",
  }
  , {
    "id": 6,
    "first_name": "Sakshi",}
]
  let userEmails = [{
  "id": 2,
  "email": "rmcgrady1@cpanel.net",
  }, {
  "id": 1,
  "email": "ncrozier0@squarespace.com",
  }, {
  "id": 4,
  "email": "abraiden3@canalblog.com",
  }, {
  "id": 3,
  "email": "dkilshall2@elpais.com",
  } 
  , {
    "id": 5,
    "email": "dkilshall2@elpais.com",
  }

  ]
  
  // const mergeById = (a1, a2) =>
  //     a1.map(itm => ({
  //         ...a2.find((item) => (item.id === itm.id)),
  //         ...itm
  //     }));
  
  // console.log(mergeById(userNames, userEmails));
  
//   function mergeById(userNames,userEmails){
//       userNames.sort((a,b)=>a.id-b.id)
//       userEmails.sort((a,b)=>a.id-b.id)
//       let obj={}
//       let arr=[]

//       for(let i=0;i<userEmails.length;i++){
//           if(userEmails[i].id==userNames[i].id){
//               obj={
//                   id:userNames[i]["id"],
//                   first_name:userNames[i]["first_name"],
//                   email:userEmails[i]["email"]
//               }
//               arr.push(obj)
//           }
//           else{
//               arr.push(userNames[i])
//               arr.push(userEmails[i])
//           }
          
//       }
//       return arr
//   }
  
//   console.log(mergeById(userNames,userEmails));

// for(i of userEmails){
//     console.log(i["email"]);
// }

// for(i in userEmails){
//     console.log(i);
// }

// function mergeById(userNames, userEmails) {
//     userNames.sort((a, b) => a.id - b.id);
//     userEmails.sort((a, b) => a.id - b.id);
//     let arr = [];

//     for (const userName of userNames) {
//         let userEmail = userEmails.find(email => email.id === userName.id);
//         if (userEmail) {
//             arr.push({
//                 id: userName.id,
//                 first_name: userName.first_name,
//                 email: userEmail.email
//             });
//         } else {
//             arr.push(userName);
//         }
//     }

//     for (const userEmail of userEmails) {
//         let userName = userNames.find(name => name.id === userEmail.id);
//         if (!userName) {
//             arr.push(userEmail);
//         }
//     }

//     return arr;
// }
// console.log(mergeById(userNames,userEmails));

function mergeById(userNames, userEmails) {
    let arr = [];

    for (const userName of userNames) {
        let userEmail = userEmails.find(email => email.id === userName.id);
        if (userEmail) {
            arr.push({
                id: userName.id,
                first_name: userName.first_name,
                email: userEmail.email
            });
        } else {
            arr.push(userName);
        }
    }
    for (const userEmail of userEmails) {
        let userName = userNames.find(name => name.id === userEmail.id);
        if (!userName) {
            arr.push(userEmail);
        }
    }

    arr.sort((a, b) => a.id - b.id);
    return arr;
}
console.log(mergeById(userNames, userEmails));

//by using slice
// function mergeById(userNames, userEmails) {
//     let username1 = userNames.slice().sort((a, b) => a.id - b.id);
//     let useremail1 = userEmails.slice().sort((a, b) => a.id - b.id);
//     let arr = [];




