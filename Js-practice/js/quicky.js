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
  // getCars: () => {
  //   console.log(`Car1: ${Toyota.name} \n Car2: ${Toyota.name}`);
  // },
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
console.log("\n");

function logLetters(element, index) {
  console.log(`No. ${index}\n Letter -> ${element.toUpperCase()}`);
}
for (i = 0; i < letters.length; i++) {
  logLetters(letters[i], i);
}
console.log("\n");
letters2.forEach((element, index) => {
  console.log(`No. ${index}\n Letter -> ${element.toUpperCase()}`);
});
console.log("\n");

/*Using forEach with Array Object*/

Person.forEach((element, index) => {
  console.log(
    `Id#. ${index}\n Car -> ${element.name} \n Age -> ${element.age}`
  );
});
