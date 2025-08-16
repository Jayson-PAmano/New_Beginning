let tasks = ["Buy groceries", "Learn JavaScript", "Exercise"];
console.log("📋 My To-Do List:");
tasks.forEach((task, index) => {
  console.log(index + 1 + ". " + task);
});

// Add a new task
tasks.push("Read a book");

console.log("\n✨ Updated To-Do List:");
tasks.forEach((task, index) => {
  console.log(index + 1 + ". " + task);
});
console.log("\n");

// Step 1: Create an array of items
const cart = [
  { name: "Apple", price: 20 },
  { name: "Banana", price: 10 },
  { name: "Mango", price: 25 },
];

// Step 2: Set total to 0
let total = 0;

// Step 3: Loop through each item using forEach
cart.forEach(function (item) {
  console.log(`${item.name} - ₱${item.price}`);
  total += item.price; // add the price to the total
});

// Step 4: Show total price
console.log(`Total: ₱${total}`);
