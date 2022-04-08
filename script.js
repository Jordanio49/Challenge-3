// Assignment code here
var numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,]

var upperArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

var lowerArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var specialArr = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "=", "_", "[", "{", "}", "]", ":", ";", "'", '"', "<", ",", ">", ".", "?", "/", "~", "`"]
  
  var passwordLength = function() { 
    
    //ask how long the user wants the password to be
    var promptLength = prompt("How long would you like the password to be? Enter a number from 8 to 128.");
  
    //turns the value entered into a number
    promptLength = parseInt(promptLength);

    if (promptLength >= 8 && promptLength <= 128) {
      characterLower();
    }

    //validate the response
    else {
      alert("Please enter a value from 8 to 128.");
      //use return to stop function and call it again 
      return passwordLength();
    }
  };

    var characterLower = function() {
      var promptLower = confirm("Would you like to use Lowercase letters?");

        //validating response and choosing to use the array or not
        if (promptLower) {
          for (var i = 0; i < lowerArr.length; i++) {
          characterUpper();
          }
        }

        else{
          characterUpper();
        }
    };

    var characterUpper = function() {
      var promptUpper = confirm(
        "Would you like to use Uppercase letters?"
      );
        
      //Using if/else to decide how to react to prompt entry
      if (promptUpper) {
        for (var i = 0; i < upperArr.length; i++) {
        characterNum();
        }
      }
    
      else {
        characterNum();
      }
    };

    var characterNum = function() {
        var promptNum = confirm(
          "Would you like to use Numbers?"
        );
          
        //Using if/else to decide how to react to prompt entry
        if (promptNum) {
          for (var i = 0; i < numArr.length; i++) {
          characterSpecial();
          }
        }
      
        else {
          //do not include the numArr array
          characterSpecial();
        }
      };
        
      var characterSpecial = function() {
        var promptSpecial = confirm(
          "Would you like to use Special characters?"
        );

        //Using if/else to decide how to react to prompt entry
        if (promptSpecial) {
          for (var i = 0; i < specialArr.length; i++) {
          //writePassword();
          }
        }
      
        else {
          //do not include the specialArr array
          //writePassword();
        }
      };
      
    
function generatePassword () {
  passwordLength();
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