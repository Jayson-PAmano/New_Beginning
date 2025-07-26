const letters = ["a", "b", "c", "d"];
const letters2 = ["e", "f", "g", "h"];
const letters3 = ["i", "j", "k", "l"];
const letters4 = ["m", "n", "o", "p"];

const numbers = [1, 2, 3, 4];
const bigNum = [11, 22, 33, 44];
const squared = [];

const numbers2 = [5, 6, 7, 8];
const numbers3 = [9, 10, 11, 12];
const numbers4 = [2, 4, 6, 8];

//ForEach
//Using for Loop

for (let i = 0; i < letters.length; i++) {
  logLetters(letters[i], i);
}

function logLetters(element, index) {
  console.log(`Letter at index ${index}: ${element}`);
}

console.log("\n");
letters2.forEach((element, index) => {
  console.log(`Letter: ${element} @ IndexL:${index}`);
});

//Maps
//Using for Loop
console.log(numbers);
for (i = 0; i < numbers.length; i++) {
  squared.push(numbers[i] * numbers[i]);
}
console.log(squared);

const squared2 = numbers2.map((value) => {
  return value * value;
});
console.log(squared2);

//Filter
//Using loops

for (i = 0; i < bigNum.length; i++) {
  if (bigNum[i] <= 22) {
    console.log(bigNum[i]);
  }
}

const filted = numbers4.filter((value) => {
  return value <= 6;
});
console.log(filted);
