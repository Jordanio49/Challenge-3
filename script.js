// Assignment code here
var numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,]

var upperArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

var lowerArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var specialArr = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "=", "_", "[", "{", "}", "]", ":", ";", "'", '"', "<", ",", ">", ".", "?", "/", "~", "`"]

var passwordLength = function() {

    //ask how long the user wants the password to be
    var prompLength = window.prompt("How long would you like the password to be? Enter a number from 8 to 128.");
    
    //turns the value entered into a number
    promptLength = promptLength.number();
    
    //validate the response
    if (promptLength < 8 || promptLength > 128) {
      window.alert("Please enter a value from 8 to 128.");
      //use return to stop function and call it again 
      return passwordLength();
    }
    
    //if valid move on to the characterUse function
    if (promptLength >= 8 && promptLength <= 128) {
      characterLower();
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