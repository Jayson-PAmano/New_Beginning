let fruits = ["apple", "orange", "grapes"];
let colors = ["red", "green", "blue", "yellow"];

let counter = 0;
let counter2 = 5;

let numbers = [1, 2, 3, 4];
let squaredNum = [];
const person = [
  {
    firstName: "John",
    age: 35,
    favColor: "blue,",
  },
  {
    firstName: "Joe",
    age: 33,
    favColor: "red,",
  },
  {
    firstName: "Jimmy",
    age: 31,
    favColor: "green,",
  },
];
//funtions

function myFunction(p1, p2) {
  return p1 * p2;
}
console.log(myFunction(5, 5));

myFunction2 = (p1, p2) => {
  return p1 + p2;
};
console.log(myFunction2(2, 2) * 2);

getSum = (num1, num2) => num1 + num2;
console.log(getSum(23, 4));
doubleSum = (results) => {
  results = getSum();
};
console.log(doubleSum(23, 4) * 2);
