var generateBtn = document.querySelector("#generate");

// global variables
var passwordTypes = [];
var isLowerTrue = false;
var isUpperTrue = false;
var isNumberTrue = false;
var isSpecialTrue = false;

// Character code randomizer functions
function randomLow() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function randomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};
function randomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};
function randomSpecial() {
  return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
};
// Write password to the #password input w/ nested functions.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  function generatePassword() {
    var generatedPassword = "";

    collectDataTypes();
    var passwordLength = lengthPrompt();

    if (passwordLength !== 0){                                // If "passwordLength" doesNot equal 0, execute this for loop
      for (let i = 0; i < passwordLength; i = i) {            // Create a variable named "pass" and make it equal to a random number-
        var pass = Math.floor(Math.random() * 4);                   // -between 0 and 3.
        if(pass === 0 && isLowerTrue === true) {              // If variable "pass" (holds a random number between 0-3) is uqual to 0, and the user selected to include lower case
          generatedPassword += randomLow();                   // Execute the "randomLow" function and store the value to the variable "generatedPassword" and itarate upon recall
          i ++;
        } else if (pass === 1 && isUpperTrue === true) {      // This cycle continues for every chosen character type-
          generatedPassword += randomUpper();                       //-(0=lowercase, 1=uppercase, 2=numbers, 3=special-characters)
          i ++;
        } else if (pass === 2 && isNumberTrue === true) {
          generatedPassword += randomNumber();
          i ++;
        } else if (pass === 3 && isSpecialTrue === true) {
          generatedPassword += randomSpecial();
          i ++;
        }
      }
    }
  return generatedPassword;                                  // Return the value of "generatePassword"
  };
};

function collectDataTypes() {                                // Function to prompt users for included character types                              
  lowerConf = window.confirm("Include lowercase characters? Press OK for yes, and CANCEL for no.");
  if(lowerConf !== null) {                                   // If "lowerConf" doesNot equal the value of null
    if(lowerConf === true) {                                 // If "lowerConf" equals the boolean value true
      isLowerTrue = true;                                    // Set the variable "isLowerTrue" to the boolean value true
    };
  };
  
  
  upperConf = window.confirm("Include uppercase characters? Press OK for yes, and CANCEL for no. ");
  if(upperConf !== null) {                                  // If "upperConf" doesNot equal the value of null
    if(upperConf === true) {                                // If "upperConf" equals the boolean value true
      isUpperTrue = true;                                   // Set the variable "isUpperTrue" to the boolean value true
    };
  };
    
  
  numericConf = window.confirm("Include numbers in your password? Press OK for yes, and CANCEL for no.");
  if(numericConf !== null) {                                // If "numericConf" doesNot equal the value of null
    if(numericConf === true) {                              // If "numericConf" equals the boolean value true
      isNumberTrue = true;                                  // Set the variable "isNumberTrue" to the boolean value true
    };
  };

  specialConf = window.confirm("Include special characters? Press OK for yes, and CANCEL for no. ");
  if(specialConf !== null) {                                // If "specialConf" doesNot equal the value of null
    if(specialConf === true) {                              // If "numericConf" equals the boolean value true
      isSpecialTrue = true;                                 // Set the variable "isSpecialTrue" to the boolean value true
    };
  };                                                        // If array empty, recall "collectDataTypes" function
  if(passwordTypes.length === 0 && (isUpperTrue || isLowerTrue || isNumberTrue || isSpecialTrue) === false) {
    window.alert("You must enter atleast one valid selection");
    return collectDataTypes();
  };
};

function lengthPrompt() {                                   // Function to prompt user for desired length
  passwordLength = window.prompt("How long would you like your password? Min 8 characters, Max 128 characters. ");
  if(passwordLength !==null) {                              // If outside length parameters, alert to reinput
    passwordLength = parseInt(passwordLength);
    if(isNaN(passwordLength) || (passwordLength < 8 || passwordLength > 128)) {
      window.alert("Invalid length input, please input a number between 8-128.");
      lengthPrompt();                                       // Rerun password "lengthPrompt" if falsy value input
    }
    return passwordLength;                                  // Return the value of "passwordLength"
  } else {
    return;
  }
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


