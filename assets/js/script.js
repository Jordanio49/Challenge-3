// Assignment code here
// Create a single variable containing character options to be called upon later in the code
var characterKey = {
  numArr: '1234567890',
  upperArr: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerArr: "abcdefghijklmnopqrstuvwxyz",
  specialArr: "!@#$%^&*()-+=_[{}]:;<>.?/~`"
};

function generatePassword() {
  
  //created a variable to add the selected characterKeys to
  var passwordCharacters = "";

    //ask how long the user wants the password to be
    var promptLength = prompt("How long would you like the password to be? Enter a number from 8 to 128.");

    //parseInt to return a number value from the prompt
    promptLength = parseInt(promptLength);
    
    // using an if/else statement to either validate whether they selected a valid number or send them back to the start of the function if they didn't
    if (promptLength >= 8 && promptLength <= 128) {

      // Confirmation prompts for each type of character option
      var promptLower = confirm("Would you like to use Lowercase letters?");
        //validating response and choosing to use the array or not
        if (promptLower) {
          // adding the lowerArr characterKey to the passwordCharacters variable if user confirms
          passwordCharacters += characterKey.lowerArr;
        };

      var promptUpper = confirm("Would you like to use Uppercase letters?");
        if (promptUpper) {
          // adding the upperArr characterKey to the passwordCharacters variable if user confirms
          passwordCharacters += characterKey.upperArr;
        };

      var promptNum = confirm("Would you like to use Numbers?");
        if (promptNum) {
          // adding the numArr characterKey to the passwordCharacters variable if user confirms
          passwordCharacters += characterKey.numArr;
        };

      var promptSpecial = confirm("Would you like to use Special characters?");
        if (promptSpecial) {
          // adding the specialArr characterKey to the passwordCharacters variable if user confirms
          passwordCharacters += characterKey.specialArr;
        };
    } 
    else {
      alert("Please select a valid character length!")
      return false;
    };
    
    // use if/else statement to validate whether they chose at least one of the character types.
    if (!promptLower && !promptUpper && !promptNum && !promptSpecial) {
      // if they didnt select a character to use then they get an alert and sent back to the start of the function
      alert("Please choose at least one type of character to use in your password!")
      return generatePassword();
    }

    // if they did then generate the password according to the criteria
    else {
      // created a variable to use the for loop to create the password
      var password = "";
    
      // setting up the for loop to randomly select values from the arrays the user chose to use in their password based on the length they selected
      for (var i = 0; i < promptLength; i++) {
        //adding the passwordCharacters to the password variable along with math functions
        password += passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)]
      }
    }
    return password;
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