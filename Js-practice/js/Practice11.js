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
let animals = [
  { name: "Dog", type: "Mammal", sound: "Bark" },
  { name: "Cat", type: "Mammal", sound: "Meow" },
  { name: "Parrot", type: "Bird", sound: "Squawk" },
  { name: "Goldfish", type: "Fish", sound: "Blub" },
  { name: "Frog", type: "Amphibian", sound: "Ribbit" },
];
let produce = {
  fruits: [
    { name: "apple", type: "fruit" },
    { name: "orange", type: "fruit" },
    { name: "grapes", type: "fruit" },
  ],
  vegetables: [
    { name: "carrot", type: "vegetable" },
    { name: "broccoli", type: "vegetable" },
    { name: "spinach", type: "vegetable" },
    { name: "potato", type: "vegetable" },
  ],
};
/*** Start Here....***/

//functions
getName = (name1, name2) => {
  console.log(`Hello, ${name1} \nHello,  ${name2}`);
};

getName("Aster ", "Jaden");
callNames = () => {
  console.log(getName(`Aster & Jaden\n--> Nice meeting you both`));
};

callNames();

getSum = (n1, n2) => n1 + n2;
console.log(getSum(5, 7));

doubleSum = (a, b) => {
  let sum = getSum(a, b) * 2;
  return sum;
};
console.log(doubleSum(5, 7));

// let mytextInput = document.getElementById("text-input");
// let mytextOutput = document.getElementById("text-output");
// let mybtn = (document.querySelector("button").onclick = () => {
//   let inputValue = mytextInput.value.trim(); // Ensure no extra spaces
//   if (inputValue === "") {
//     mytextOutput.innerHTML = "Please enter a valid name.";
//     mytextOutput.style.color = "red"; // Error message in red
//     mytextOutput.style.fontWeight = "bold";
//   } else {
//     mytextOutput.innerHTML = "Hello, " + inputValue;
//     mytextOutput.style.color = "green"; // Greeting in green
//     mytextOutput.style.fontWeight = "bold";
//   }
// });
add_even = () => {
  let AddNum = document.getElementById("number-input").value;
  let result = document.getElementById("number-output");
  let number = parseInt(AddNum);
  if (isNaN(number)) {
    result.innerHTML = "Please enter a valid number.";
    result.style.color = "red"; // Error message in red
    result.style.fontWeight = "bold";
    return;
  }

  if (AddNum % 2 == 0) {
    result.innerHTML = "Your Number is even";
  } else {
    result.innerHTML = "Your Number is odd";
  }
};
