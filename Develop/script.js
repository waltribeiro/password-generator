// Variables
var generateBtn = document.querySelector("#generate");

var uppercaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];var lowercaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbolsArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"];

// I'm trying to tie myButton() to the HTML's generate button

function myButton() {
  var uppercaseInclude = confirm("Include uppercase?");
  var lowercaseInclude = confirm("Include lowercase?");
  var numbersInclude = confirm("Include numbers?");
  var symbolsInclude = confirm("Include symbols?");
}

// 4 functions that I will .concat or .append once my code works

function uppercaseIndex() {
  return Math.floor(Math.random() * uppercaseArray.length);
}

function lowercaseIndex() {
  return Math.floor(Math.random() * lowercaseArray.length);
}

function numbersIndex() {
  return Math.floor(Math.random() * numbersArray.length);
}

function symbolsIndex() {
  return Math.floor(Math.random() * symbolsArray.length);
}

// checking the console to assure that my functions work

console.log(uppercaseArray[uppercaseIndex()]);
console.log(lowercaseArray[lowercaseIndex()]);
console.log(numbersArray[numbersIndex()]);
console.log(symbolsArray[symbolsIndex()]);

document.getElementById("generate").onclick = function() {
  uppercaseIndex();
};

function passwordQuestion() {
  if (passwordLength > 8 && passwordLength <= 128) {
    uppercaseCapture = [Math.floor(Math.random() * uppercase.length)];
  }

  console.log(uppercaseArray[uppercaseIndex()]);
  console.log(lowercaseArray[lowercaseIndex()]);
  console.log(numbersArray[numbersIndex()]);
  console.log(symbolsArray[symbolsIndex()]);
}

generateBtn.addEventListener("click", uppercaseIndex);

// PSEUDO CODE THAT IS NOT WORKING AS INTENDED

//if (uppercaseAnswer = true || lowercaseAnswer = true || numbersAnswer = true || ) {
//   var uppercaseTotal = uppercase[Math.floor(Math.random() * uppercase.length)];
// }

// if (lowercaseAnswer = true) {
//   var lowercaseTotal = lowercase[Math.floor(Math.random() * lowercase.length)];
//   return lowercaseTotal;
// }

// if (numbersAnswer = true) {
//   var numbersTotal = numbers[Math.floor(Math.random() * numbers.length)];
// }

// if (specialsAnswer = true) {
//   var specialsTotal = specials[Math.floor(Math.random() * specials.length)];
// }


  // var uppercaseFunctionTotal = function uppercaseFunction() {

  //  uppercase[Math.floor(Math.random() * Array.length) + 1]
  // return
  // };

// Write password to the #password input

// uppercaseRandom * document.getElementById("value")

// var uppercaseRandomTotal = uppercaseRandom + lowercaseRandom + numbersRandom + specialsRandom

// Add event listener to generate button
