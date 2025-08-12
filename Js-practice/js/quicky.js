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

// colors.forEach((Element, Index) => {
//   // console.log(Index, Element);
// });

let btn = (document.querySelector("button").onclick = () => {
  colors.forEach((Element, Index) => {
    document.querySelector(
      "p"
    ).innerHTML = `Index: ${Index}\n Color: ${Element[Index]} `;
  });
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
