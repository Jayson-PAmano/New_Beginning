const letters = ["a", "b", "c", "d"];
const letters2 = ["e", "f", "g", "h"];
const letters3 = ["i", "j", "k", "l"];
const letters4 = ["m", "n", "o", "p"];

const person = [
  {
    firstName: "John",
    age: 35,
    favColor: "blue,",
  },
  {
    firstName: "Joe",
    age: 33,
    favColor: "red,",
  },
  {
    firstName: "Jimmy",
    age: 31,
    favColor: "green,",
  },
];
// for (let i = 0; i < letters.length; i++) {
//   console.log(`index: ${i} \n letter: ${letters[i]}`);
// }
// console.log("\n");
// for (let i = letters.length - 1; i >= 0; i--) {
//   console.log(`index: ${i} \n letter: ${letters[i]}`);
// }
for (let i = 0; i < letters2.length; i++) {
  logLetters(letters2[i], i);
}
function logLetters(element, index) {
  console.log(`index: ${index} \n letter: ${element}`);
}
console.log("\n");
letters3.forEach((element, index) => {
  console.log(`index: ${index} \n letter: ${element}`);
});

person.forEach((element, index) => {
  console.log(`Name: ${person[index].firstName}`);
});
