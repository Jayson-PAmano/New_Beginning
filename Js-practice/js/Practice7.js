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

//Functions

getName = (name1, name2) => {
  return " Hello " + name1 + " " + name2;
};
console.log(getName("Jaden", "& Aster"));

getSum = (n1, n2) => n1 + n2;

getSumAns = (n1, n2) => console.log(getSum(n1, n2));
getSumAns(5, 2);

double = (a, b) => {
  let results = getSum(a, b) * 2;
  return results;
};
console.log(double(5, 2));

getRemainder = (r1) => {
  if (r1 % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
};

console.log(getRemainder(7));
let answer;
getRemainder2 = () => {
  let r1 = prompt("Enter your number: ");
  const number = parseInt(r1);
  if (isNaN(number)) {
    return "Invalid input. Please enter a number.";
  }
  if (r1 % 2 == 0) {
    answer = "EVEN";
  } else {
    answer = " ODD";
  }
  return answer;
};

console.log(getRemainder2(answer));

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
