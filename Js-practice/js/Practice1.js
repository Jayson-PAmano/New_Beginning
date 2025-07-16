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

//functions
getName = (myName) => console.log(`Hello, ${myName}`);
getName("John");

getSum = (x, y) => x + y;
console.log(getSum(5, 7));

double = (x, y) => {
  return getSum(x, y) * 2;
};
console.log(double(5, 7));

let results;

Remainder = (remainder) => {
  if (remainder % 2 == 0) {
    results = "even";
    return results;
  } else {
    results = "odd";
    return results;
  }
};
console.log(Remainder(3));

//loops
for (i = 0; i < numbers.length; i++) {
  squaredNum[i] = numbers[i] * numbers[i];
}
console.log(squaredNum);

for (i = 0; i < fruits.length; i++) {
  logFruits(fruits[i], i);
}

function logFruits(element, index) {
  console.log(`Fruit at index ${index}: ${element}`);
}
while (counter <= 5) {
  console.log(counter);
  counter++;
}
console.log("\n");
while (counter2 >= 0) {
  console.log(counter2);
  counter2--;
}

for (i = 0; i < colors.length; i++) {
  console.log(i + colors[i]);
}

console.log("Color Reverse:");

for (i = colors.length - 1; i >= 0; i--) {
  console.log(i + colors[i]);
}
console.log(getName("jaden"));
