getName = (name) => {
  console.log(`Hello, ${name}`);
};
getName("Jaden");

getSum = (n1, n2) => n1 + n2;

console.log(getSum(2, 4));

doubleSum = (dblSum) => {
  dblSum = getSum(2, 4) * 2;
  return dblSum;
};
console.log(doubleSum());
