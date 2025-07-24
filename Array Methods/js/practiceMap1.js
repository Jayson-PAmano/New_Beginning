const numbers = [1, 2, 3, 4];
const squared = [];

const numbers2 = [5, 6, 7, 8];
const numbers3 = [9, 10, 11, 12];
const numbers4 = [2, 4, 6, 8];

for (let i = 0; i < numbers.length; i++) {
  squared[i] = numbers[i] * numbers[i];
}
console.log(squared);

const squared2 = numbers2.map((value) => {
  return value * value;
});
console.log(squared2);
