// Array forEach method

const letters = ["a", "b", "c", "d"];
const letters2 = ["e", "f", "g", "h"];
const letters3 = ["i", "j", "k", "l"];
const letters4 = ["m", "n", "o", "p"];
for (let index = 0; index < letters.length; index++) {
  //   console.log(`index: ${index}`);
  //   console.log(`letter: ${letters[index]}`);
  log(letters[index], index);
}
function log(L, I) {
  console.log(`index: ${I}`);
  console.log(`letter: ${L}`);
}
console.log("\n");

function log2(element, index) {
  console.log(`Index: ${index}`);
  console.log(`Letter: ${element}`);
}
letters2.forEach(log2);
console.log("\n");
letters3.forEach(function (element, index) {
  console.log(`Index: ${index}`);
  console.log(`Letter: ${element}`);
});
console.log("\n");
letters4.forEach((element, index) => {
  console.log(`Index: ${index}`);
  console.log(`Letter: ${element}`);
});
