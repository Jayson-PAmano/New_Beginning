const numbers = [1, 2, 3, 4];
const Bignumbers = [36, 25, 81, 40];
const Bignumbers2 = [99, 125, 581, 340];
const squared = [];
const squared2 = [];

const numbers2 = [5, 6, 7, 8];
const numbers3 = [9, 10, 11, 12];
const numbers4 = [2, 4, 6, 8];

for (let i = 0; i < numbers.length; i++) {
  squared[i] = numbers[i] * numbers[i];
}
console.log(squared);
for (let i = 0; i < Bignumbers.length; i++) {
  squared2[i] = Math.round(Math.sqrt(Bignumbers[i]));
}
console.log(squared2);

const a = numbers2.map((x) => x * 2);
console.log(a);

const b = numbers2.map((x) => x * x);
console.log(b);

const squared3 = numbers3.map((value) => {
  return value * 2;
});
console.log(squared3);
