let fruits = ["apple", "orange", "grapes"];
let colors = ["red", "green", "blue", "yellow"];
let text = "Heroes";

let counter = 0;
let counter2 = 5;

let numbers = [1, 2, 3, 4];
let squaredNum = [];

const letters = ["a", "b", "c", "d"];
const letters2 = ["e", "f", "g", "h"];
const letters3 = ["i", "j", "k", "l"];
const letters4 = ["m", "n", "o", "p"];

//functions

getName = (name1, name2) => `Hello ${name1} and ${name2}`;
console.log(getName("jaden", "aster"));

// let getName2 = prompt("Tell me your name: ");
// console.log(`Hello, ${getName2}`);

getSum = (n1, n2) => n1 + n2;
console.log(getSum(5, 7));

doubleSum = (a, b) => {
  let sum = getSum(a, b) * 2;
  return sum;
};
console.log(doubleSum(5, 7));

getRemainder = (r1) => {
  if (r1 % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
};
console.log(getRemainder(4));
console.log(getRemainder(5));

// getNum = () => {
//   let GetNum = prompt("Enter your number");
//   if (GetNum % 2 == 0) {
//     console.log("Even");
//   } else {
//     console.log("Odd");
//   }
// };
// console.log(getNum());
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

for (let i = 0; i < text.length; i++) {
  console.log(text.charAt(i));
}

for (let i = text.length - 1; i >= 0; i--) {
  console.log(i + " " + text[i]);
}

console.log("\n");

for (let i = 0; i < colors.length; i++) {
  console.log(`index: ${i} \n color: ${colors[i]}`);
  if (i === 2) {
    console.log(`Found the color ${colors[i]} at position ${i}`);
    console.log(`BREAK`);
    break;
  }
}
// for (let i = 0; i < fruits.length; i++) {
//   let getFruits = prompt("Enter Number: ");
//   if (getFruits === i) {
//     console.log(`You have selected ${fruits[i]}`);
//   } else {
//     console.log(
//       `You have selected ${fruits[i]} but it is not the correct answer`
//     );
//   }
// }
// Loop through the fruits array
// for (let i = 0; i < fruits.length; i++) {
//   // Prompt the user to enter a number
//   const userInput = prompt(
//     `Enter the number of the fruit you'd like to select (${i + 1}): `
//   );
//   // Check if the user input matches the current index
//   if (parseInt(userInput) === i + 1) {
//     console.log(`You have selected ${fruits[i]}`);
//   } else {
//     console.log(
//       `You have selected ${
//         fruits[i]
//       }, but it's not the correct answer. The correct answer is ${i + 1}.`
//     );
//   }
// }
console.log("\n");

// Objects

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

const cars = {
  Car1: "Toyota - 2019",
  Car2: "Nissan - 2012",
  Car3: "Honda - 2016",
};

const city = {
  No1: "New York",
  No2: "Los Angeles",
  No3: "Dallas",
  callCities: () => {
    console.log(`Cities:\n ${city.No1} \n ${city.No2} \n ${city.No3}`);
  },
};

const teams = {
  T1: "GSW",
  T2: "PHX",
  T3: "LAC",
};

//Loop Objects
for (let key in cars) {
  // console.log(`${key}: ${cars[key]}`);
  const value = cars[key];
  console.log(`${key}: ${value}`);
}
for (let index of fruits) {
  console.log(`Favorite fruit: ${index}`);
}
