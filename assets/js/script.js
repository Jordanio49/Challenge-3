// Assignment code here
var numArr = ['1234567890']

var upperArr = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]

var lowerArr = ["abcdefghijklmnopqrstuvwxyz"]

var specialArr = ["!@#$%^&*()-+=_[{}]:;<>.?/~`"]

function generatePassword() {

  var useLowers = confirm(
    "Would you like to use Lowercase letters?"
    );

  var useUppers = confirm(
    "Would you like to use Uppercase letters?"
    );

  var useNums = confirm(
    "Would you like to use Numbers?"
    );
          
  var useSpecials = confirm(
    "Would you like to use Special characters?"
    );

  var passwordLength = prompt(
    "How long would you like the password to be? Enter a number from 8 to 128."
    );
        
  passwordLength = parseInt(passwordLength)
  
  if (passwordLength >= 8 && passwordLength <= 128) {
    // use number of characters selected
  }
  
  else {
    alert("Please select a valid number of characters!")
    // send back to passwordLength prompt
  }

  if (!useLowers && !useUppers && !useNums && !useSpecials) {
    alert("Please select at least one character type to use!")
    //send back to start of prompts
  }

  else {
    // use variables selected
  }
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)