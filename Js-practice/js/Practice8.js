let fruits = ["apple", "orange", "grapes"];
let colors = ["red", "green", "blue", "yellow"];
let text = "Heroes";

let counter = 0;
let counter2 = 5;

let numbers = [1, 2, 3, 4];
let numbers2 = [21, 32, 13, 54];
let squaredNum = [];
let Results = [];

const letters = ["a", "b", "c", "d"];
const letters2 = ["e", "f", "g", "h"];
const letters3 = ["i", "j", "k", "l"];
const letters4 = ["m", "n", "o", "p"];

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

const Teams = {
  callTeams: () => {
    console.log(`Teams:\n ${teams.T1} \n ${teams.T2} \n ${teams.T3}`);
  },
};

//functions

getName = (name1, name2) => `hello ${name1} & ${name2}`;

callName = (name3) => {
  console.log(getName("John", "Joe"));
  console.log(`Hi, ${name3}`);
};
callName("diana");

getSum = (n1, n2) => n1 + n2;
console.log(getSum(5, 5));

double = (a, b) => {
  let sumDoubled = getSum(a, b) * 2;
  return sumDoubled;
};
console.log(double(5, 5));

let ans;
let ans2;

getRemainder = (r1) => {
  if (r1 % 2 == 0) {
    ans = "Even";
  } else {
    ans = "Odd";
  }
  return ans;
};
console.log(getRemainder(2));

// getRemainder2 = (r1) => {
//   r1 = prompt("Enter your number: ");
//   let number = parseInt(r1);
//   if (isNaN(number)) {
//     return "That's not a number!";
//   }

//   if (r1 % 2 == 0) {
//     ans2 = "Even";
//   } else {
//     ans2 = "Odd";
//   }

//   return ans2;
// };
// console.log(getRemainder2());

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
  for (let j = 0; j < fruits.length; j++) {
    console.log(j + " " + fruits[j] + " " + " " + i + " " + colors[i]);
  }
}
// for (let i = 0; i < fruits.length; i++) {
//   for (let j = 0; j < colors.length; j++) {
//     console.log(`${fruits[i]} is sometimes ${colors[j]}`);
//   }
// }

// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5; j++) {
//       console.log(`${i} x ${j} = ${i * j}`);
//     }
//   }
// for (let row = 0; row < 3; row++) {
//   for (let col = 0; col < 3; col++) {
//     console.log(`Row: ${row}, Column: ${col}`);
//   }
// }

for (let i = colors.length - 1; i >= 0; i--) {
  console.log(i + " " + colors[i]);
}
// let name = "";
// while (name !== "jaden") {
//   name = prompt("Please Enter your name: ");
//   if (name === "jaden") {
//     alert("Welcome Jaden");

//     console.log(`Welcome, ${name}`);
//   } else if (name === "") {
//     alert("It is empty!");
//     console.log("It is empty!");
//   } else {
//     alert("Sorry, you are not jaden");
//     console.log("Sorry, you are not jaden");
//   }
// }
