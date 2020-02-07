// 1.) should I be writing pseudo code before I code?
// 2.) how can I bind the character select to the 

// Assignment Code
var generateBtn = document.querySelector("#generate");

var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers = [0,1,2,3,4,5,6,7,8,9];
var symbols = ["!","@","#","$","%","^","&","*","(",")","_","+"];

var complexity = document.getElementById("value").value;


function generate() {

}







document.getElementById("demo").onclick = function() {myFunction()};

function myFunction() {
  document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
}


generateBtn.addEventListener("click", writePassword);


if (passwordLength > 8 && passwordLength <= 128) {
  uppercaseCapture = [Math.floor(Math.random() * uppercase.length)];
}

console.log(uppercaseCapture);

// if (uppercaseAnswer = true || lowercaseAnswer = true || numbersAnswer = true || ) {
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

console.log(uppercaseAnswer);
console.log(lowercaseAnswer);
console.log(numbersAnswer);
console.log(symbolsAnswer);

function characterTotalFunction (characterTotal) {
  characterTotal * uppercaseFunctionTotal
}
if (document.getElementById("numbers") == true) {
  
}

var uppercaseFunctionTotal = function uppercaseFunction() {
  //  uppercase[Math.floor(Math.random() * Array.length) + 1]
  // return 
}


// Write password to the #password input
function writePassword() {
  console.log("Hello");

  console.log(uppercase[Math.floor(Math.random() * uppercase.length)]);
  console.log(lowercase[Math.floor(Math.random() * lowercase.length)]);
  console.log(numbers[Math.floor(Math.random() * numbers.length)]);
  console.log(symbols[Math.floor(Math.random() * symbols.length)]);

  function myFunction() {
    var numbers = ["1", "2", "3"];
    var uppercase = ["A", "B", "C"];
      var lowercase = ["a", "b", "c"];
    var children = numbers.concat(uppercase).concat(lowercase); 
    document.getElementById("demo").innerHTML = children;
  }

  // uppercaseRandom * document.getElementById("value")

  var passwordLengthSelect = document.getElementById("passwordLength");
  var passwordLengthValue = passwordLengthSelect.options[passwordLengthSelect.selectedIndex].value;

  // var uppercaseRandomTotal = uppercaseRandom + lowercaseRandom + numbersRandom + specialsRandom
}

// Add event listener to generate button
