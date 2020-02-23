// Assignment Code
var generateBtn = document.getElementById("#generateButton");
var passwordText = document.querySelector("#password");

// don't use an array, use strings here instead
var uppercaseArray = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
var lowercaseArray = "abcdefghijklmnopqrstuvwxyz";
var numberArray = "0123456789";
var symbolArray = "!@#$%^&*()?";
var passwordArray = [];
var passwordLength = 34; // slider.value();
var alertText = document.querySelector("#alertText");
var sliderNumber = document.querySelector("#textBox");

generateBtn.addEventListener("click", writePassword());

// $("#generate").on("click", writePassword());

function writePassword() {
  $("passwordText").empty();
    let useUppercase = uppercaseCheck.checked;
    let useLowercase = lowercaseCheck.checked;
    let useNumber = numberCheck.checked;
    let useSymbol = symbolCheck.checked;
    var val = document.getElementById("slider").value

    console.log(document.querySelector("#oninput"));
    console.log(document.getElementById("fPrice").innerHTML);
    console.log($("input[name=walt2]").val());
    console.log($(slider).val());

    if (
      useUppercase == false &&
      useLowercase == false &&
      useNumber == false &&
      useSymbol == false
    ) {
      alertText.textContent = "Please select at least one checkbox to continue";
      return;
    }

    // Clears alert text if any issues existed previously
    alertText.textContent = "";
    // Establishes array password is made from

    if (useUppercase) {
      passwordArray = passwordArray.concat(uppercaseArray);
    }
    if (useLowercase) {
      passwordArray = passwordArray.concat(lowercaseArray);
    }
    if (useNumber) {
      passwordArray = passwordArray.concat(numberArray);
    }
    if (useSymbol) {
      passwordArray = passwordArray.concat(symbolArray);
    }

    if (
      useLowercase == false &&
      useUppercase == false &&
      useNumber == false &&
      useSymbol == false
    ) {
      alert(
        "Password must include at least one of lower case letters, upper case letters, numbers, or special characters"
      );
    }

    // generates a random password from selected Array
    var password = "";

    for (var i = 0; i < passwordLength; i++) {
      var x = passwordArray[Math.floor(Math.random() * passwordArray.length)];
      password = password + x;
    }

    passwordText.textContent = password;
    passwordArray = [];

};
