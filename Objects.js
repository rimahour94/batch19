let obj = {
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
// console.log(name);
// console.log(cities);

// const v = funA(34, 6);
// console.log(v);

// console.log(name1);
// console.log(type);

const { log } = console;

// log(class1);

// let console = {
//   log: function (str) {
//     console.log(str);
//   },
// };

// console.log("Batch 19 TRISECT ");

// let newobj = obj;

// newobj.name = "Khushboo";

// console.log(newobj);
// console.log(obj);

// spread operator

// let newobj = { ...obj };
// newobj.name = "Khushboo";

// console.log(newobj);
// console.log(obj);

// new key add
obj = { ...obj, company: "GOOGLE", compnayId: "G101" };

// console.log(obj);

// const v1 = Object.values(obj);
// console.log(v1);

const k1 = Object.keys(obj);
// console.log(k1);

// array of object
const arr = [
  { name: "Kamal", id: 10, city: "Noida", company: "FACEBOOK" },
  { name: "Raman", id: 20, city: "Gr Noida", company: "Google" },
  { name: "Naman", id: 30, city: "Pune", company: "Netflix" },
  { name: "Khushboo", id: 40, city: "Gurugram", company: "Microsoft" },
  { name: "Neha", id: 50, city: "Hydrabad", company: "Apple" },
];

console.log(arr[1].company);
// console.log(arr.name);
