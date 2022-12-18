let empData = [
  {
    name: "Ritesh",
    cities: ["Noida", "Delhi", "Gr Noida"],
    empid: 10,
    getData: function () {
      console.log("regular function");
    },
    getDataArrow: () => {
      console.log("arrow Function");
    },
    innerObj: {
      name1: "XYZ",
      empid1: 1212,
    },
  },
  {
    name: "Abhishek",
    cities: ["Pune", "Banglore", "Gr Noida"],
    empid: 20,
    getData: function () {
      console.log("abhishek");
    },
    getDataArrow: () => {
      console.log("id", 20);
    },
    innerObj: {
      name1: "ABCD",
      empid1: 100,
    },
  },
  {
    name: "Nitesh",
    cities: ["Banglore", "Dehradun", "Chandigarh"],
    empid: 30,
    getData: function () {
      console.log("regular function");
    },
    getDataArrow: () => {
      console.log("arrow Function");
    },
    innerObj: {
      name1: "QWER",
      empid1: 200,
    },
  },
  {
    name: "Kunal",
    cities: ["Noida", "Pune", "Mumbai"],
    empid: 40,
    getData: function () {
      console.log("regular function");
    },
    getDataArrow: () => {
      console.log("arrow Function");
    },
    innerObj: {
      name1: "ASDF",
      empid1: 300,
    },
  },
  {
    name: "Kamal",
    cities: ["Chennai", "Dehradun", "Gr Noida"],
    empid: 500,
    getData: function () {
      console.log("regular function");
    },
    getDataArrow: () => {
      console.log("arrow Function");
    },
    innerObj: {
      name1: "ZAQW",
      empid1: 400,
    },
  },
  {
    name: "Priya",
    cities: ["Noida", "Pune", "Gurugram"],
    empid: 600,
    getData: function () {
      console.log("regular function");
    },
    getDataArrow: () => {
      console.log("arrow Function");
    },
    innerObj: {
      name1: "WERT",
      empid1: 500,
    },
  },
  {
    name: "Diksha",
    cities: ["Punjab", "Pune", "Gr Noida"],
    empid: 1234,
    getData: function () {
      console.log("regular function");
    },
    getDataArrow: () => {
      console.log("arrow Function");
    },
    innerObj: {
      name1: "FRTY",
      empid1: 600,
    },
  },
];

// // console.log(empData[3]);

// // empData.map((emp) => {
// //   console.log(emp.name);
// // });

// ("expected Output:");

// // 1) create a function
// // 2) execute this task -// Emp name - "XYZ",
// // Emp City - "Cite name"
// // innerObj Name- "inner ob name"

// const displayData = () => {
//   empData.map((emp) => {
//     console.log("Emp name :-", emp.name);
//     console.log("Emp City :-", emp.cities[0]);
//     console.log("Emp name :-", emp.innerObj.name1);
//     console.log("   ");
//   });
// };

// displayData();

function ali(test) {
  //console.log(test);
  const filteredData = empData.filter((x) => {
    //console.log("fffff", test);
    if (x.name == test) {
      console.log("EMP ID := " + x.empid);
      console.log("EMP NAME := " + x.name);
      console.log("City := " + x.cities[0]);
      console.log("Inner name := " + x.innerObj.name1);
    }
    // if (x.name == test) {

    // }
  });

  // console.log(filteredData);

  if (filteredData.length == 0) {
    console.log(test, "is not exist in the array");
  }
}

ali("Abhi");
