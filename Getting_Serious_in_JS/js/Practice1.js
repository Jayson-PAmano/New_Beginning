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

getName = (name1, name2) => console.log(`Hello, ${name1} \nHello,  ${name2}`);
getName("John", "Jeff");
getName("Jane", "Jen");

callNames = () => {
  getName(`John, Jane\n--> Nice meeting you both`);
};
callNames();
console.log("\n");

// let r1 = prompt("Enter your Number");
// let number = parseInt(r1);
// if (isNaN(number)) {
//   console.log("Invalid Number");
// }
// if (r1 % 2 == 0) {
//   console.log("Your Number is even");
// } else {
//   console.log("Your Number is odd");
// }

// let Text = prompt("Enter Text");
// let index = Text.indexOf();
// console.log(`You entered: "${Text}" the total index of that word is ${index}`);

// let Text = prompt("Enter the main text:");
// let word = prompt("Enter the word to find:");
// let index = Text.indexOf(word);
// console.log(`You entered: "${Text}"`);
// console.log(`The word "${word}" is at index: ${index}`);

// let Text = prompt("Enter a paragraph");
// let word = prompt("Enter the word your finding");
// let index = Text.search(word);
// console.log(`Your paragraph: is "${Text}"`);
// console.log(`You entered: "${word}" the total index of that word is ${index}`);

// let Text = prompt("Enter any Word");
// let charFind = Number(prompt("Enter a number"));
// let charIndex = Text.charAt(charFind);
// console.log(`You entered: "${Text}"`);
// console.log(
//   `You entered Number  "${charFind}" \n that letter is: "${charIndex}"`
// );

getSum = (n1, n2) => n1 + n2;

callSum = () => {
  console.log(getSum(5, 10));
};
callSum();
doubleSum = (a, b) => {
  let sum = getSum(a, b) * 2;
  console.log(sum);
};
doubleSum(5, 10);
console.log("\n");
// Loops

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
for (let i = 0; i < fruits.length; i++) {
  console.log(`index #: ${i} \n fruit: ${fruits[i]}`);
}
console.log("\n");

for (let i = fruits.length - 1; i >= 0; i--) {
  console.log(`index #: ${i} \n fruit: ${fruits[i]}`);
}
console.log("\n");
for (let i = 0; i < colors.length; i++) {
  console.log(`index #: ${i} \n color: ${colors[i]}`);

  if (colors[i] === "green") {
    console.log(`Found the COLOR: ${colors[i]} at POSITION: ${i}`);
    console.log("STOP 🏳🏳‍🌈 ");
    break;
  }
}
console.log("\n");
for (let i = 0; i < text.length; i++) {
  console.log(" ---> " + text.charAt(i).toUpperCase());
}
