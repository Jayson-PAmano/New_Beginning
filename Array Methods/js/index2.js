//Array Map method

const numbers = [1, 2, 3, 4];
const squared = [];

const numbers2 = [5, 6, 7, 8];
const numbers3 = [9, 10, 11, 12];
const numbers4 = [2, 4, 6, 8];

for (index = 0; index < numbers.length; index++) {
  squared[index] = numbers[index] * numbers[index];
  console.log(squared);
}
console.log("\n");

function sq(value) {
  return value * value;
}
const squared2 = numbers2.map(sq);
console.log(squared2);
console.log("\n");

const squared3 = numbers3.map((value) => {
  return value * value;
});
console.log(squared3);
console.log("\n");

const squared4 = numbers4.map((value) => value * value);
console.log(squared4);
