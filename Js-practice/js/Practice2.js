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

getName = (name) => {
  return `Hello, ${name}`;
};

getSum = (x, y) => x + y;
console.log(getSum(5, 6));

double = (a, b) => {
  return getSum(a, b) * 2;
};
console.log(double(5, 6));

OddEven = (r1) => {
  if (r1 % 2 == 0) {
    console.log("odd");
  } else {
    console.log("even");
  }
};
console.log(OddEven(3));

//Loops

while (counter <= 5) {
  console.log(counter);
  counter++;
}

while (counter2 >= 0) {
  console.log(counter2);
  counter2--;
}

for (let i = 0; i < fruits.length; i++) {
  console.log(`index: ${i}`);
  console.log(`fruit: ${fruits[i]}`);
}

for (let i = fruits.length - 1; i >= 0; i--) {
  console.log(`index: ${i}`);
  console.log(`fruit: ${fruits[i]}`);
}
