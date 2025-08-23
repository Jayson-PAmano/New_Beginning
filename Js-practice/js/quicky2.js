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

//functions
getName = (name1, name2) => {
  name1 = "Aster";
  name2 = "Jaden";
  return `Hello ${name1} and ${name2}`;
};

callName = () => {
  console.log(getName());
  console.log("Nice to meet you!");
};
callName();
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
