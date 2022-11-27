// const / let / var

const school_name = "DPS"; //initialization
//  school_name="abcd"
// var school_name="XYZ"  // redeclaration

let num = 5667;
num = "ritesh";

//  int a=34
//  int a=90

console.log(num);

var empId = "12ABCD";
// var empId = true;  redeclaration is allowed with var keyword only.

console.log(empId);

function funA() {
  const num1 = 10;
  let num2 = 50;

  const sum = num1 + num2;
  console.log(sum);
}
console.log(num2);
funA();

// console.log(num1)

// block scope

let a = 34;
let b = 90;

if (a > b) {
  var company = "GOOGLE";
  console.log(a, "is greater than ", b);
} else {
  console.log(b, "is greater than ", a);
}

// console.log(company);
