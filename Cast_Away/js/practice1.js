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

// myFunction2 = (p1, p2) => {
//   return p1 + p2;
// };
// console.log(myFunction2(2, 2) * 2);

getSum = (num1, num2) => num1 + num2;
console.log(getSum(23, 4));
doubleSum = (a, b) => {
  return getSum(a, b) * 2;
};
console.log(doubleSum(23, 4));
getName = (name1, name2) => {
  name1 = "Jayden";
  name2 = "Aster";

  console.log(`Hello, ${name1} and ${name2}`);
};

callName = () => {
  return getName(), "Nice to meet you!";
};
console.log(callName());

let results;

getRemainder = (R1) => {
  if (R1 % 2 === 0) {
    results = "Odd";
    return results;
  } else {
    results = "Even";
    return results;
  }
};
console.log(getRemainder(3));

//Loops

while (counter <= 5) {
  console.log(counter);
  counter++;
}
console.log("\n");

while (counter2 >= 0) {
  console.log(counter2);
  counter2--;
}
console.log("\n");

for (let i = 0; i < colors.length; i++) {
  console.log(`Index: ${i} \n Color: ${colors[i]}`);
}
console.log("\n");
for (let i = colors.length - 1; i >= 0; i--) {
  console.log(`Index: ${i} \n Color: ${colors[i]}`);
}
