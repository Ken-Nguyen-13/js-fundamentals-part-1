let randomStr = [];
const generateBtn = document.getElementById("generate");
const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let stringLength;
let randomLetter;

generateBtn.addEventListener("click", function () {
  if(document.getElementById("str-length").value > 0) {
    stringLength = Number(document.getElementById("str-length").value);
  for (let i = 0; i < stringLength; i++) {
    randomLetter = Math.trunc(Math.random() * letters.length);
    randomStr.push(letters[randomLetter]);
  }
  document.getElementById("random-text").value = randomStr.join("");
  const letterString = document.createElement(`p`);
  letterString.textContent = randomStr.join("");
  document.body.appendChild(letterString);
  randomStr = [];
  }
});
