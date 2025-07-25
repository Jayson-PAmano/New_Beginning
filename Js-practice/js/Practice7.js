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
// let answer;
// getRemainder2 = () => {
//   let r1 = prompt("Enter your number: ");
//   const number = parseInt(r1);
//   if (isNaN(number)) {
//     return "Invalid input. Please enter a number.";
//   }
//   if (r1 % 2 == 0) {
//     answer = "EVEN";
//   } else {
//     answer = " ODD";
//   }
//   return answer;
// };

// console.log(getRemainder2(answer));

//Loops

while (counter <= 5) {
  while (counter2 >= 0) {
    console.log(`\t ${counter2}`);
    counter2--;
  }
  console.log(counter);
  counter++;
}

for (let i = 0; i < colors.length; i++) {
  console.log(`Postion: ${i}\n Color: ${colors[i]}`);
}

console.log("\n Reverse: ");
for (let i = colors.length - 1; i >= 0; i--) {
  console.log(`Postion: ${i}\n Color: ${colors[i]}`);
}

for (i = 0; i < text.length; i++) {
  console.log(text.charAt(i).toUpperCase());
  if (text.charAt(i) === "e") {
    console.log(`Found E at Position ${i}`);
    console.log("break");
    break;
  }
}

for (i = 0; i < fruits.length; i++) {
  getFruits(fruits[i], i);
}
function getFruits(element, index) {
  console.log(`Fruit at position ${index}: ${element}`);
}

for (i = 0; i < numbers.length; i++) {
  // squaredNum[i] = numbers[i] * numbers[i];
  squaredNum[i] = Math.round(Math.sqrt(numbers[i]));
}
console.log(squaredNum);

for (i = 0; i < numbers2.length; i++) {
  if (numbers2[i] < 21) {
    console.log(numbers2[i]);
    // Results.push(numbers2[i]);
  }
}
// console.log(Results);

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

//Looping Objects

for (i = 0; i < person.length; i++) {
  console.log(person[i].firstName);
}
city.callCities();
Teams.callTeams.call(teams);

for (car in cars) {
  console.log(cars[car]);
}

for (p of person) {
  console.log(`Name: ${p.firstName}`);
}
for (f of colors) {
  console.log(`Color: ${f}`);
}

//ForEach practice

fruits.forEach((element, index) => {
  console.log(`Fruit: ${element} at index ${index}`);
});

//Map practice

const squaredNum2 = numbers2.map((value) => {
  console.log((value * value) / 2);
});

const filtedNum = numbers2.filter((e) => {
  console.log(e > 10);
});
