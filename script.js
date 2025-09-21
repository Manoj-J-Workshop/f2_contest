/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((emp) => {
    if (emp.profession === "developer") {
      console.log(emp);
    }
  });
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((emp) => {
    if (emp.profession === "developer") {
      console.log(emp);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  //{id:4,name:"susan",age:"20",profession:"intern"}
  let newEmp = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newEmp);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  arr = arr.filter((emp) => emp.profession !== "admin");
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let newArr = [
    { id: 5, name: "Vijay", age: "24", profession: "manager" },
    { id: 6, name: "Ajay", age: "23", profession: "tech lead" },
    { id: 7, name: "Shawn", age: "16", profession: "architect" },
  ];

  let combinedArr = arr.concat(newArr);
  console.log(combinedArr);
}
