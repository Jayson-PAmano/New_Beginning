let fruits = ["apple", "orange", "grapes"];
let colors = ["red", "green", "blue", "yellow"];
let text = "Heroes";
let tasks = ["Buy groceries", "Learn JavaScript", "Exercise"];

let counter = 0;
let counter2 = 5;

let numbers = [1, 2, 3, 4];
let numbers2 = [21, 32, 13, 54];

const letters = ["a", "b", "c", "d"];
const letters2 = ["e", "f", "g", "h"];

// objects
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
  getCars: () => {
    console.log(`Car1: ${Cars.Toyota[0].name} \nCar2: ${Cars.Honda[0].name}`);
  },
};
/* 
or.... if we want to use the function keyword
getCars: function () { 
    console.log(`Car1: ${this.Toyota[0].name} \nCar2: ${this.Honda[0].name}`);
  },
};
* */

Cars.getCars();
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

/*functions in ForEach*/

// function logLetters() {
//   letters.forEach(function (letter) {
//     console.log(letter);
//   });
// }
// logLetters();
/* Using  for of...  to ForEach  */
// function logLetters(index, element) {
//   console.log(index, element);
// }
// for (lete of letters) {
//   logLetters(letters.indexOf(lete), lete);
// }
// console.log("\n");

// function logLetters(element, index) {
//   console.log(`No. ${index}\n Letter -> ${element.toUpperCase()}`);
// }
// for (i = 0; i < letters.length; i++) {
//   logLetters(letters[i], i);
// }
// console.log("\n");
// letters2.forEach((element, index) => {
//   console.log(`No. ${index}\n Letter -> ${element.toUpperCase()}`);
// });
// console.log("\n");

/*Using forEach with Array Object*/

// Person.forEach((element, index) => {
//   console.log(
//     `Id#. ${index}\n Name -> ${element.name} \n Age -> ${element.age}`
//   );
// });

// for (i = 0; i < Person.length; i++) {
//   console.log(`Id#. ${i}\n Name -> ${Person[i].name} \n`);
// }
console.log("\n", "\n");
getName = (name1, name2) => {
  name1 = "Jaden";
  name2 = "Aster";

  console.log(`Hello, ${name1} & ${name2}`);
};
callName = () => {
  getName();
  console.log("Nice to meet you!");
};
callName();

getSum = (n1, n2) => n1 + n2;
console.log(getSum(5, 5));

doubleSum = (a, b) => {
  let newSum = getSum(a, b) * 2;
  console.log(newSum);
};
doubleSum(5, 5);

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

for (i = 0; i < letters.length; i++) {
  logLetters(letters[i], i);
}
function logLetters(element, index) {
  console.log(index);
  console.log(element);
}

// Tobe Continued......
