let fruits = ["apple", "orange", "grapes"];
let colors = ["red", "green", "blue", "yellow"];
let text = "Heroes";

let counter = 0;
let counter2 = 5;

let numbers = [1, 2, 3, 4];
let numbers2 = [21, 32, 13, 54];

const letters = ["a", "b", "c", "d"];
const letters2 = ["e", "f", "g", "h"];

// ANCHOR functions

getName = (name) => console.log(`${name}`);
callName = () => {
  getName("John & Peter");
};
callName();
additionals = () => {
  let para = getName("Hello, how are you both?");
  return para;
};
additionals();

getSum = (n1, n2) => n1 + n2;
getAns = (a, b) => {
  let sum = getSum(a, b);
  console.log(`5 + 5 = ${sum}`);
  console.log(`X2 = ${sum * 2}`);
};
getAns(5, 5);

getSqrt = (myNumber) => {
  let sqrt = Math.sqrt(myNumber);
  console.log(`Square root of ${myNumber} is ${sqrt}`);
};
getSqrt(25);

console.log("\n");
//ANCHOR Loops
for (let i = 0; i <= 5; i++) {
  console.log(i);
}
console.log("\n");

for (let i = 5; i >= 0; i--) {
  console.log(i);
}
console.log("\n");

for (let i = 0; i <= 5; i++) {
  console.log(i);
  console.log("\n");
  for (let j = 5; j >= 0; j--) {
    console.log(j);
  }
}

console.log("\n");

for (let i = 0; i < colors.length; i++) {
  console.log(`${i} - ${colors[i]}`);
}
console.log("\n");

for (let i = colors.length - 1; i >= 0; i--) {
  console.log(`${i} - ${colors[i]}`);
}

console.log("\n");

for (let i = 0; i < colors.length; i++) {
  console.log(`${i} - ${colors[i]}`);

  console.log("\n");
  for (let j = 0; j < fruits.length; j++) {
    console.log(`${j} - ${fruits[j]}`);
  }
}

//TODO -  Create an objects array

const Cars = {
  Toyota: [
    {
      name: "Camry",
      year: 2020,
      price: 25000,
    },
  ],
  Honda: [
    {
      name: "Civic",
      year: 2020,
      price: 22000,
    },
  ],
};

const Person = [
  {
    name: "John",
    age: 30,
    occupation: "Carpenter",
  },
  {
    name: "Jane",
    age: 25,
    occupation: "Teacher",
  },
];
