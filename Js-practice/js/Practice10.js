let fruits = ["apple", "orange", "grapes"];
let colors = ["red", "green", "blue", "yellow"];
let list = "Heroes";
let tasks = ["Buy groceries", "Learn JavaScript", "Exercise"];

let counter = 0;
let counter2 = 5;

let numbers = [1, 2, 3, 4];
let numbers2 = [21, 32, 13, 54];

const letters = ["a", "b", "c", "d"];
const letters2 = ["e", "f", "g", "h"];

// objects Array
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

//Array Objects
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

// regular objects
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

//function
console.log("Please Enter your names: ");
getName = (name1, name2) => {
  name1 = prompt("Enter 1st Name");
  name2 = prompt("Enter 2nd Name");

  let output = `Your names are, ${name1} and ${name2}\n you may now continue `;
  console.log(output);
  //   console.log(`Name1: ${name1} \n Name2: ${name2}`);
  let greetings = "Welcome to our Home " + name1 + name2;
  console.log(greetings);
};
// getName();

for (i = colors.length - 1; i > 0; i--) {
  console.log(i + " " + colors[i]);
}
console.log("\n");
