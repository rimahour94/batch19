const p1 = new Promise((resolve, reject) => {
  console.log("quick start");
  let arr = [];
  setTimeout(() => {
    // reject("data successfully found");
    arr.push("Ritesh");
    arr.push("Mayank");
    // reject("empty array");
    resolve(arr);
  }, 3000);
});

const prFun = () => {
  return new Promise((resolve, reject) => {
    console.log("quick start");
    let obj = {};
    setTimeout(() => {
      // reject("data successfully found");
      obj = { ...obj, name: "Mayank", city: "Noida" };
      resolve(obj);
    }, 3000);
  });
};

// console.log(p1);

// p1.then((res) => {
//   console.log(res, "success");
// }).catch((err) => {
//   console.log(err, "Failure");
// });

const getData = async () => {
  const p2 = prFun();
  //   console.log(p2);
  try {
    const res = await p1;
    const res2 = await p2;
    console.log(res);
    console.log(res2);
  } catch (err) {
    console.log(err);
  }
};

getData();
