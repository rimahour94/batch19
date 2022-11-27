const obj = {
  name: "Aman",
  cities: ["Noida", "Delhi", "Pune"],
  funA: (a, b) => {
    console.log("Arrow Function in Object");
    return a + b;
  },
  funB: function (x, y) {
    console.log("regular function in Object");
    return x * y;
  },
  innerObj: {
    name1: "Kamal",
    type: "Student",
    class1: "12th",
  },
};

// console.log(obj.name);
// console.log(obj.cities);
// console.log(obj.innerObj);
// const str = obj.funA("ABCD", "WXYZ");
// const mul = obj.funB(2, 6);
// console.log(str);
// console.log(mul);

// destructuring

const { name, cities, funA, innerObj } = obj;
const { name1, type, class1 } = innerObj;
console.log(name);
console.log(cities);

const v = funA(34, 6);
console.log(v);

console.log(name1);
console.log(type);

const { log } = console;

log(class1);

// let console = {
//   log: function (str) {
//     console.log(str);
//   },
// };
