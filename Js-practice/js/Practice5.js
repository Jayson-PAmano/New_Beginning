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

const Person = [
  {
    name: "John",
    age: 30,
    occupation: "developer",
  },
  {
    name: "Jane",
    age: 25,
    occupation: "designer",
  },
  {
    name: "Bob",
    age: 40,
    occupation: "engineer",
  },
];

//functions
getName = (name1, name2) => {
  console.log(`Hello, ${name1}`);
  console.log(`Hello, ${name2}`);
};
getName("John", "Jenny");

getSum = (x, y) => x + y;

callSum = (a, b) => {
  let results = getSum(a, b);
  return results;
};
console.log(callSum(5, 7));

doubleResults = (n1, n2) => {
  let dblResults = callSum(n1, n2) * 2;
  return dblResults;
};
console.log(doubleResults(5, 7)); //commented out to avoid error

getRemainder = () => {
  let getInput = prompt("Enter your number");

  if (getInput % 2 == 0) {
    console.log(`${getInput} is odd`);
  } else {
    console.log(`${getInput} is even`);
  }
};
// getRemainder();

console.log("\n");

//Loops
while (counter <= 5) {
  console.log(counter);
  counter++;
}

while (counter2 >= 0) {
  console.log("\t" + counter2);
  counter2--;
}

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

for (let i = colors.length - 1; i >= 0; i--) {
  console.log("\t" + colors[i]);
}

console.log("\n");
for (let i = 0; i < text.length; i++) {
  console.log(i + ". " + text.charAt(i));
  if (text.charAt(i) == "o") {
    console.log(
      `Found the letter ${text.charAt(i).toUpperCase()} \n @ index ${i}`
    );
    break;
  }
}
console.log("\n");
//Array Loops
for (let i = 0; i < letters.length; i++) {
  //   console.log(letters[i]);
  logLetters(letters[i], i);
}

function logLetters(element, index) {
  console.log(`Element at index ${index} is ${element.toUpperCase()}`);
}
console.log("\n");
//forEach
letters2.forEach((element, index) => {
  console.log(`Element at index ${index} is ${element.toUpperCase()}`);
});

console.log("\n");
Person.forEach((element, index) => {
  console.log(
    `FirstName: ${Person[index].name} \n Age: ${Person[index].age} \n Occupation: ${Person[index].occupation}`
  );
});
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

const callTeams = {
  Teams: () => {
    console.log(` Teams:\n ${teams.T1} \n ${teams.T2} \n ${teams.T3}`);
  },
};

for (let i = 0; i < person.length; i++) {
  console.log(
    `\nName: ${person[i].firstName} \n Age: ${person[i].age} \n Favorite Color: ${person[i].favColor}`
  );
}

console.log(`My Cars: \n${cars.Car1} \n${cars.Car2} \n${cars.Car3}`);
city.callCities();
callTeams.Teams.call(teams);
