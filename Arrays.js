let arr = [12, 23, "Shubham", 67, true];
// elements 1   2      3       4    5
// index    0   1      2        3   4
// arr.length= 5

// console.log(arr);

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);

for (let i = 0; i < arr.length; i++) {
  //   console.log("TRISECT");
  //   console.log(arr[i]);
}

// i=0   0<5(true)    "TRISECT"  line 1
// i=1   1<5(true)    "TRISECT"  line 2
// i=2   2<5(true)    "TRISECT"  line 3
// i=3   3<5(true)    "TRISECT"  line 4
// i=4   4<5(true)    "TRISECT"  line 5
// i=5   5<5(false)   exit loop  line loop

// 2*1=2
// 2*2=4
// 2*3=6

const num = 2;

for (let i = 1; i <= 10; i++) {
  const str = num + "*" + i + "=" + num * i;
  //   console.log(str);
}

// let str= num+"*"+i+"="+num*1

// map filter forEach reduce

let arr1 = [2, 4, 6, 8, 7, 24, 0, 9, 0];
// 0  1  2  3   4
const updatedArray = arr1.map((x, y) => {
  // console.log(y);
  if (x % 2 == 0) {
    return x;
  }
});

// console.log(updatedArray);

// arr1.filter(() => {});
// arr1.forEach(() => {});
// arr1.reduce(() => {});

let sum = 0;

let arr2 = ["TRISECT", "Institute", "In", "Noida"];
//  0           1          2      3
arr2.map((a) => {
  sum = sum + a;
});

// console.log(sum);

//   sum=0   sum=0+3   sum=3
//   sum=3   sum=3+4   sum=7
//   sum=7   sum=7+5   sum=12
//   sum=12  sum=12+6  sum=18
//   sum=18   sum=18+7  sum=25
//   sum=25   sum=25+8  sum=33  final output

const sumArray = arr2.reduce((a, b) => {
  return a + " " + b;
});

console.log(sumArray, "line 72");

let evenArray = arr1.filter((f) => {
  return f % 2 == 0 && f % 3 == 0;
});

// console.log(evenArray);

let a = 29;

// if (a % 2 == 0 || a % 3 == 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

const data = arr1.forEach((a) => {
  return a * a;
});

console.log(data);
