// regular functions
// task 1

function addition(num1, num2) {
  return num1 + num2;
}

// task 2
function multiplication(num3, num4) {
  // let num3 = 3;
  // let num4 = 17;

  let sum1 = num3 * num4;
  return sum1;
  // console.log(sum1);
}

let output1 = addition(2, 3);

let output2 = addition(5, 10);

let output3 = multiplication(3, 5);
let output4 = multiplication(6, 5);

console.log(output1, output2, output3, output4);

// arrow function

const substraction = (num1, num2) => num1 - num2;

const square = (a) => a * a;

const sub = substraction(45, 40);
console.log(sub);

const sq = square(7);
console.log(sq);

const obj = new addition(6, 9);

console.log(obj);

const objArrow = new square(5);
console.log(objArrow);
