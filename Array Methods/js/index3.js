//Array Filter method
const numbers = [9, 1, 8, 2, 5];
const numbers2 = [19, 11, 18, 12, 15];
const numbers3 = [23, 15, 34, 25, 55];

const result = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] >= 5) {
    result.push(numbers[i]);
  }
}
console.log(result);

function greaterThan11(value) {
  return value > 11;
}

const result2 = numbers2.filter(greaterThan11);

console.log(result2);

const result3 = numbers3.filter((value) => {
  return value > 23;
});
console.log(result3);

const