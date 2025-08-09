let fruits = ["apple", "orange", "grapes"];
let colors = ["red", "green", "blue", "yellow"];
let text = "Heroes";

let counter = 0;
let counter2 = 5;

let numbers = [1, 2, 3, 4];
let numbers2 = [21, 32, 13, 54];
let Highnumbers = [521, 232, 313, 154];
let squaredNum = [];
let squaredNum2 = [];
let Results = [];

const letters = ["a", "b", "c", "d"];
const letters2 = ["e", "f", "g", "h"];
const letters3 = ["i", "j", "k", "l"];
const letters4 = ["m", "n", "o", "p"];

/*** Start Here....***/
//functions

// const getName = (name) => {
//   name = "";

//   while (name !== "jaden") {
//     name = prompt("Enter your name: ");

//     if (name === "") {
//       alert("Please enter your name");
//     } else if (name === null) {
//       alert("dont leave it empty");
//     } else if (!isNaN(name)) {
//       alert("Don't enter numbers");
//     } else if (name === "Jaden" || name === "JADEN") {
//       alert("Put small letters");
//     } else if (name !== "jaden") {
//       alert("You are not jaden");
//     } else {
//       alert("Welcome " + name);
//       console.log("Welcome " + name);
//     }
//   }
// };

// getName();

// getWeight = (KG, LB) => {
//   KG = "";
//   //   LB = KG / 2.20462;
//   //   alert(`Your weight is ${KG} and it is ${LB} to pounds`);
//   while (KG <= 350) {
//     KG = prompt("Enter your weight in Kilogram(KG)");
//     alert("You are a big boy");

//     if (KG >= 200) {
//       alert("You are still big");
//     } else if (KG === 50) {
//       alert("You are small");
//     } else {
//       alert("You are normal");
//     }
//   }
// };
// getWeight();
// const getWeight = () => {
//   let KG = 0;

//   while (true) {
//     let input = prompt("Enter your weight in Kilogram (KG):");

//     // Convert to number
//     KG = parseFloat(input);

//     if (isNaN(KG)) {
//       alert("Please enter a valid number.");
//       continue;
//     }

//     if (KG >= 250) {
//       alert("You are a big boy");
//       continue;
//     } else if (KG <= 200) {
//       alert("You are still big");
//     } else if (KG === 50) {
//       alert("You are small");
//     } else {
//       alert("You are normal");
//     }

//     break; // exit loop after valid input
//   }

//   // Optional: Convert to pounds
//   let LB = KG / 2.20462;
//   alert(
//     `Your weight is ${KG} KG, which is approximately ${LB.toFixed(2)} pounds.`
//   );
// };

// getWeight();
