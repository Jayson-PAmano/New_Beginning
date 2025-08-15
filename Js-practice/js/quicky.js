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

// function logLetters(index, element) {
//   console.log(index, element);
// }
// for (lete of letters) {
//   logLetters(letters.indexOf(lete), lete);
// }
// console.log("\n");
// function logLetters2(index, element) {
//   console.log(index, element);
// }
// for (let i = 0; i < letters2.length; i++) {
//   logLetters2(letters2[i], i);
// }

// fruits.forEach((element, index) => {
//   console.log(`Index: ${index} \n Color: ${element}`);
// });
// Our list of tasks (array of strings)
let tasks = ["Buy groceries", "Learn JavaScript", "Exercise"];

console.log("📋 My To-Do List:");
tasks.forEach((task, index) => {
  console.log(index + 1 + ". " + task);
});

// Add a new task
tasks.push("Read a book");

console.log("\n✨ Updated To-Do List:");
tasks.forEach((task, index) => {
  console.log(index + 1 + ". " + task);
});
console.log("\n");
// Step 1: Create an array of items
const cart = [
  { name: "Apple", price: 20 },
  { name: "Banana", price: 10 },
  { name: "Mango", price: 25 },
];

// Step 2: Set total to 0
let total = 0;

// Step 3: Loop through each item using forEach
cart.forEach(function (item) {
  console.log(`${item.name} - ₱${item.price}`);
  total += item.price; // add the price to the total
});

// Step 4: Show total price
console.log(`Total: ₱${total}`);
