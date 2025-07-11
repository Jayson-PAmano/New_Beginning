let fruits = ["apple", "orange", "grapes"];
let colors = ["red", "green", "blue", "yellow"];

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

//functions
for (i = 0; i < numbers.length; i++) {
  squaredNum[i] = numbers[i] * numbers[i];
}
console.log(squaredNum);
