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
  
  var characterUse = function() {
  
  //sets up the characterUse function to be called if the passwordLength has a valid response
  var characterLower = function(){
    var characterPromptLower = window.prompt(
      "Would you like to use Lowercase letters? Type 1 if yes and 2 if no."
    );
    
    //Convert answer in prompt to an actual number
    characterPromptLower = parseInt(characterPromptLower);
    
    //Using if/else to decide how to react to prompt entry
    if (characterPromptLower === 1) {
      //include the lowerArr array
      characterUpper();
    }
  
    if (characterPromptLower === 2) {
      //do not include the lowerArr array
      characterUpper();
    }
  
    else {
      window.alert("Please enter a valid option for lowercase letter use.")
      return characterLower();
    };
  }
  
  var characterUpper = function(){
    var characterPromptUpper = window.prompt(
      "Would you like to use Uppercase letters? Type 1 if yes and 2 if no."
    );
      
    //Convert answer in prompt to an actual number
    characterPromptUpper = parseInt(characterPromptUpper);
      
    //Using if/else to decide how to react to prompt entry
    if (characterPromptUpper === 1) {
      //include the upperArr array
      characterNum();
    }
  
    if (characterPromptUpper === 2) {
      //do not include the upperArr array
      characterNum();
    }
  
    else {
      window.alert("Please enter a valid option for uppercase letter use.")
      return characterUpper();
    }
  };
  
  var characterNum = function(){
    var characterPromptNum = window.prompt(
      "Would you like to use Numbers? Type 1 if yes and 2 if no."
    );
      
    //Convert answer in prompt to an actual number
    characterPromptNum = parseInt(characterPromptNum);
      
    //Using if/else to decide how to react to prompt entry
    if (characterPromptNum === 1) {
      //include the numArr array
      characterSpecial();
    }
  
    if (characterPromptNum === 2) {
      //do not include the numArr array
      characterSpecial();
    }
  
    else {
      window.alert("Please enter a valid option for number use.")
      return characterNum();
    }
  };
    
  var characterSpecial = function(){
    var characterPromptSpecial = window.prompt(
      "Would you like to use Specieal characters? Type '1' if yes and '2' if no."
    );
      
    //Convert answer in prompt to an actual number
    characterPromptSpecial = parseInt(characterPromptSpecial);
      
    //Using if/else to decide how to react to prompt entry
    if (characterPromptSpecial === 1) {
      //include the specialArr array
      writePassword();
    }
  
    if (characterPromptSpecial === 2) {
      //do not include the specialArr array
      writePassword();
    }
  
    else {
      window.alert("Please enter a valid option.")
      return characterSpecial();
    }
  };
  
  //If they select no arrays to be used send them back to the start of characterprompts
  if (characterPromptLower === 2 && characterPromptUpper === 2 && characterPromptNum === 2 && characterPromptSpecial === 2) {
    window.alert("You must select at least one character option to use in your password.")
    return characterLower();
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