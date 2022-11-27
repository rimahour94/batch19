// regular function

// Syntax

// function functionName() {
//   // task...
// }

function add(num1, num2) {
  //   const num1 = 40;
  //   const num2 = 10;
  const sum = num1 + num2;
  return {
    sum: sum,
  };
}

// const a = new add(2, 3);

// console.log(a);

function display() {
  const output = add(2, 3);
  console.log(output, "line 18");
}

function display1() {
  const output = add(4, 5);
  console.log(output, "line 23");
}
display();

display1();

// Arrow Function

// Syntax:

// const funName = ()=>{
//  task.....
// };

const addArrow = (num1, num2) => num1 + num2;

const arrowOutput = addArrow(19, 1);

console.log(arrowOutput);

// console.log(dt, "51");
