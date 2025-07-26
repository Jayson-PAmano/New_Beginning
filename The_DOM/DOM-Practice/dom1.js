// const textbox = document.getElementById("textbox");
// const displayText = document.getElementById("displayText");

// textbox.addEventListener("input", () => {
//   const value = textbox.value.trim();
//   if (value) {
//     displayText.textContent = `Hello, ${value}!`;
//   } else {
//     displayText.textContent = "";
//   }
// });

let getName = document.getElementById("textbox").value;
let btnSubmit = document.querySelector("button");
btnSubmit.addEventListener("click", () => {
  if (getName == "") {
    document.getElementById("displayText").innerHTML =
      "** Please enter your name";
    document.getElementById("displayText").style.color = "red";
  } else {
    document.getElementById("displayText").innerHTML = "Hello" + " " + getName;
  }
});

let cout = 0;
let header = document.querySelector("h1");
let addNum = document.getElementById("addNum");
addNum.onclick = () => {
  cout += 1;
  header.textContent = cout;
};
