let fruits = ["apple", "orange", "grapes"];
let colors = ["red", "green", "blue", "yellow"];
let text = "Heroes";

let counter = 0;
let counter2 = 5;

let numbers = [1, 2, 3, 4];
let squaredNum = [];

const letters = ["a", "b", "c", "d"];
const letters2 = ["e", "f", "g", "h"];

const Cars = {
  Toyota: {
    model: "Camry",
    year: 2015,
    made_in: "China",
  },
  Honda: {
    model: "Civic",
    year: 2018,
    made_in: "Japan",
  },
};

const Animals = [
  {
    name: "Lion",
    age: 5,
  },
  {
    name: "Tiger",
    age: 3,
  },
];

const Country = {
  Asia: [
    {
      name: "China",
      population: 1439323776,
    },
    {
      name: "India",
      population: 1380004385,
    },
  ],
  Europe: [
    {
      name: "Russia",
      population: 5439323776,
    },
    {
      name: "Moscow",
      population: 2339323776,
    },
  ],
};
//Start here....

Sum = (n1, n2) => n1 + n2;
getSum = () => console.log(Sum(5, 5));
getSum();

doubleSum = (a, b) => {
  let dblSum = Sum(a, b) ** 2;

  return dblSum;

  // let sqrt = Math.sqrt(dblSum);
  // return sqrt;
};
console.log(doubleSum(5, 5));
console.log(
  "Square root of " + doubleSum(5, 5) + " is " + Math.sqrt(doubleSum(5, 5))
);

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

for (let i = 0; i < colors.length; i++) {
  console.log(i + colors[i]);
}

console.log("\n");

for (let i = colors.length - 1; i >= 0; i--) {
  console.log(i + colors[i]);
}

console.log("\n");

for (let i = 0; i < text.length; i++) {
  console.log(i + ". " + text.charAt(i));
  let getLetters = prompt("Enter letter");
  // if (getLetters === text.charAt(i)) {
  //   console.log("Correct");
  // } else {
  //   console.log("Incorrect");
  // }
}
//1 Using A.i
// let response;

// getName = (name) => {

//   while (name !== "Jaden") {
//     name = prompt("Enter your name: ");
//     if (name === "") {
//       alert("Please, do not leave empty");
//       response = "Please, do not leave empty";
//     } else if (name === "Jaden") {
//       alert("Welcome, Jaden");
//       response = "Welcome, Jaden";
//     } else if (name.startsWith("jaden")) {
//       alert("Please use upper case of the first letter");
//       response = "Please use upper case of the first letter";
//     } else {
//       alert(`Name ${name} is undefined`);
//       response = `Name ${name} is undefined`;
//     }
//   }
//   console.log(response);
// };
// getName();

// getNum = (myNumber) => {
//   myNumber = prompt("Enter your number");
//   let number = parseInt(myNumber);
//   if (isNaN(number)) {
//     alert("Please enter a valid number");
//     response = "Please enter a valid number";
//   }

// else if (number < 0) {
//   alert("Please enter a positive number");
//   response = "Please enter a positive number";
// } else {
//   alert(`Your number is ${number}`);
//   response = `Your number is ${number}`;
// }};getNum();

//   while (myNumber < 10) {
//     alert("Please enter a number greater than 10");
//     response = "Please enter a number greater than 10";
//     myNumber = prompt("Enter your number");
//     number = parseInt(myNumber);
//   }
//
// };

// let output = document.querySelector("h2");
// AddNum = () => {
//   let num1 = prompt("Enter first number: ");
//   let num2 = prompt("Enter second number: ");
//   let number1 = parseInt(num1);
//   let number2 = parseInt(num2);
//   if (isNaN(number1) || isNaN(number2)) {
//     alert("Please enter a valid number");
//     response = "Please enter a valid number";
//     output.innerHTML = response;
//   } else if (number1 < 0 || number2 < 0) {
//     alert("Please enter a positive number");
//     response = "Please enter a positive number";
//     output.innerHTML = response;
//   } else if (number1 > 100 || number2 > 100) {
//     alert("Please enter a number less than 100");
//     response = "Please enter a number less than 100";
//     output.innerHTML = response;
//   } else {
//     let sum = number1 + number2;
//     alert(`The sum of ${number1} and ${number2} is ${sum}`);
//     response = `The sum of ${number1} and ${number2} is ${sum}
//     `;

//     alert(`The Square root  of ${sum} is ${Math.sqrt(sum)}`);
//     response = `The Square root  of ${sum} is ${Math.sqrt(sum)}
//     `;

//     alert(`Round off of ${Math.sqrt(sum)} is ${Math.round(Math.sqrt(sum))}`);
//     response = `Round off  of ${Math.sqrt(sum)} is ${Math.round(Math.sqrt(sum))}
//     `;
//     output.innerHTML = response;
//   }
// };
// AddNum();

// number = (myNumber) => {
//   while (myNumber !== 13) {
//     myNumber = prompt("Enter your number: ");
//     if (myNumber === "") {
//       alert("Please, do not leave empty");
//       response = "Please, do not leave empty";
//     } else if (myNumber <= 10) {
//       alert("Number must not be lower than 13");
//       response = "Number must not be lower than 13";
//     } else if (myNumber >= 15) {
//       alert("Number must not be higher than 15");
//       response = "Number must not be higher than 15";
//     } else {
//       alert(`You enter ${myNumber} favorite`);
//       response = `You enter ${myNumber} favorite`;
//     }
//     break;
//   }
//   console.log(response);
// };
// number();

// const getRemainder = () => {
//   let name = "";
//   while (name === "") {
//     name = prompt("What is your name:");
//     if (name === "") {
//       alert("Please enter your name.");
//     }
//   }

//   let number;
//   while (true) {
//     let input = prompt("Enter your number:");
//     number = parseInt(input);

//     if (isNaN(number)) {
//       alert("Please enter a number.");
//     } else {
//       break;
//     }
//   }

//   if (number % 2 === 0) {
//     alert(`The number ${number} is Even`);
//     console.log(`The number ${number} is Even`);
//   } else {
//     alert(`The number ${number} is Odd`);
//     console.log(`The number ${number} is Odd`);
//   }
// };

// getRemainder();

// const incrementNum = () => {
//   let start = Number(prompt("Enter the starting number:"));
//   let end = Number(prompt("Enter the ending number:"));

//   if (isNaN(start) || isNaN(end)) {
//     alert("Please enter valid numbers.");
//     return;
//   }

//   while (start <= end) {
//     console.log(start);
//     start++;
//   }
//   while (start >= end) {
//     console.log(start);
//     start--;
//   }
// };

// incrementNum();

// function getCarDetails() {
//   return `The ${Cars.Toyota.model} was made in ${Cars.Toyota.made_in} in the year ${Cars.Toyota.year}`;
// }
// console.log(getCarDetails());
