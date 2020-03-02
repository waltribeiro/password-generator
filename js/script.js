// don't use an array, use strings here instead

var generateButtonElement = document.getElementById("generateButton");
var passwordText = document.querySelector("#passwordTextArea");
var alertText = document.querySelector("#alertText");
var uppercaseString = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
var lowercaseString = "abcdefghijklmnopqrstuvwxyz";
var numberString = "0123456789";
var symbolString = "!@#$%^&*()?";
var passwordArray = [];
var passwordLength
var passwordLengthText = document.getElementById("passwordLengthSlider").value

var x = document.getElementById("myBtn").textContent;

generateButtonElement.addEventListener("click", writePassword);



function writePassword() {
  $("passwordText").empty();
  passwordLength = document.getElementById("passwordLengthSlider").innerHTML

    let useUppercase = uppercaseCheck.checked;
    let useLowercase = lowercaseCheck.checked;
    let useNumber = numberCheck.checked;
    let useSymbol = symbolCheck.checked;


    console.log(document.getElementById("passwordLengthSlider").value);


    if (
      useUppercase == false &&
      useLowercase == false &&
      useNumber == false &&
      useSymbol == false
    ) {
      alertText.textContent = "Please select at least one checkbox to continue";
      return;
    }


    alertText.textContent = "";

    // Establishes array password is made from
    if (useUppercase) {
      passwordArray = passwordArray.concat(uppercaseString);
    }
    if (useLowercase) {
      passwordArray = passwordArray.concat(lowercaseString);
    }
    if (useNumber) {
      passwordArray = passwordArray.concat(numberString);
    }
    if (useSymbol) {
      passwordArray = passwordArray.concat(symbolString);
    }

    // generates a random password from selected Array
    var password = "";

    for (var i = 0; i < passwordLength; i++) {
      var x = passwordArray[Math.floor(Math.random() * passwordArray.length)];
      password = password + x;
    }

    passwordArray = [];
    passwordText.textContent = password;


};
