let fruits = ["apple", "orange", "grapes"];
let colors = ["red", "green", "blue", "yellow"];
let text = "Heroes";

let counter = 0;
let counter2 = 5;

let numbers = [1, 2, 3, 4];
let numbers2 = [21, 32, 13, 54];

const letters = ["a", "b", "c", "d"];
const letters2 = ["e", "f", "g", "h"];

//forEach

// function logLetters() {
//   letters.forEach(function (letter) {
//     console.log(letter);
//   });
// }
// logLetters();
for (let i = 0; i < letters.length; i++) {
  logLetters(letters[i], i);
}
function logLetters(element, index) {
  console.log(element, index);
}
console.log("\n");

letters2.forEach((e, i) => {
  console.log(e, i);
});

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
    console.log(`Car1: ${Toyota.name} \n Car2: ${Toyota.name}`);
  },
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

Person.forEach((e, i) => {
  console.log(`Name: ${e.name}`);
});

// // functions

// getName = (name) => console.log(`${name}`);
// getName("John, Jane");

// GreatName = () => {
//   getName(`Hello, nice to meet you both`);
// };
// GreatName();
// console.log(Cars.getCars());
// Person.forEach((element, index) => {
//   console.log(Person[index].name);
// });
