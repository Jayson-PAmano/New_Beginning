let fruits = ["apple", "orange", "grapes"];
let colors = ["red", "green", "blue", "yellow"];
let letters = "Heroes";

let counter = 0;
let counter2 = 5;

let numbers = [1, 2, 3, 4];
let squaredNum = [];

//functions

getName = () => {
  //   let myName = prompt("Enter your name: ");
  let myName = "jaden";
  console.log(`Hello, ${myName}`);
};
getName();

getPerson = (p1, p2) => console.log(`Hello, ${p1} and ${p2}`);
getPerson("Mark", "Joseph");

getSum = (x, y) => x + y;
console.log(getSum(5, 5));

doubleSum = (a, b) => {
  let ans = getSum(a, b) * 2;
  return ans;
};
console.log(doubleSum(5, 5));
console.log("\n");
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

for (let i = 0; i < fruits.length; i++) {
  console.log(i + ". " + fruits[i].toUpperCase());
}
console.log("\n");

for (let i = fruits.length - 1; i >= 0; i--) {
  console.log(i + ". " + fruits[i].toUpperCase());
}
console.log("\n");

for (let i = 0; i < letters.length; i++) {
  console.log(i + " " + letters[i]);
  if (letters[i] === "r") {
    console.log(
      "\t Found the letter " + letters[i].toUpperCase() + " at position " + i
    );
    break;
  }
}
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
    console.log(`Cities: \n ${city.No1} \n ${city.No2} \n ${city.No3}`);
  },
};

const teams = {
  T1: "GSW",
  T2: "PHX",
  T3: "LAC",
};

const callTeams = {
  NbaTeams: () => {
    console.log(`NBA Teams: \n ${teams.T1} \n ${teams.T2} \n ${teams.T3} \n`);
  },
};

console.log(cars.Car1);
city.callCities();
callTeams.NbaTeams.call(teams);
