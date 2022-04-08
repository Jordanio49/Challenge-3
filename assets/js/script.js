// Assignment code here
// Create a single variable containing character options to be called upon later in the code
const characterKey = {
  numArr: '1234567890',
  upperArr: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerArr: "abcdefghijklmnopqrstuvwxyz",
  specialArr: "!@#$%^&*()-+=_[{}]:;<>.?\/~`"
};

function generatePassword() {
  
  var passwordCharacters = "";

    //ask how long the user wants the password to be

    var promptLength = prompt("How long would you like the password to be? Enter a number from 8 to 128.");

    if (promptLength <= 8 && promptLength >= 128) {
      alert("Please select a valid number of characters!");
    };

      // Confirmation prompts for each type of character option
      var promptLower = confirm("Would you like to use Lowercase letters?");

        //validating response and choosing to use the array or not
        if (promptLower) {
          passwordCharacters += characterKey.lowerArr;
        };

      var promptUpper = confirm("Would you like to use Uppercase letters?");
        
        //Using if to decide how to react to prompt entry
        if (promptUpper) {
          passwordCharacters += characterKey.upperArr;
        };

      var promptNum = confirm("Would you like to use Numbers?");
          
        //Using if to decide how to react to prompt entry
        if (promptNum) {
         passwordCharacters += characterKey.numArr;
        };
        
      var promptSpecial = confirm("Would you like to use Special characters?");

        //Using if to decide how to react to prompt entry
        if (promptSpecial) {
         passwordCharacters += characterKey.specialArr;
        };
};

console.log(generatePassword());
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