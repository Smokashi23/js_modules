const tasks = [
  function () {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Chopping done");
      }, 1000);
    });
  },
  function () {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Baking done");
      }, 2000);
    });
  },
  function () {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Serving done");
      }, 1000);
    });
  },
  function () {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Eating done");
      }, 1000);
    });
  }
];

async function dotask(tasks) {
  
  const res = [];
  for (task of tasks) {
    const p = await task();
    res.push(p);
  }
  // return res.values() 
  return res;
}

dotask(tasks).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})