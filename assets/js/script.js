var generateBtn = document.querySelector("#generate");

var passwordTypes = [];
var isLowerTrue = false;
var isUpperTrue = false;
var isNumberTrue = false;
var isSpecialTrue = false;

// character code randomizer functions
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

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  function generatePassword() {
    var generatedPassword = "";

    collectDataTypes();
    var passwordLength = lengthPrompt();

    if (passwordLength !== 0){
      // for function to print password 
      for (let i = 0; i < passwordLength; i = i) {
        var pass = Math.floor(Math.random() * 4);
        if(pass === 0 && isLowerTrue === true) {
          generatedPassword += randomLow();
          i ++;
        }

        else if(pass === 1 && isUpperTrue === true) {
          generatedPassword += randomUpper();
          i ++;
        }

        else if(pass === 2 && isNumberTrue === true) {
          generatedPassword += randomNumber();
          i ++;
        }

        else if(pass === 3 && isSpecialTrue === true) {
          generatedPassword += randomSpecial();
          i ++;
        }
      }
    }
  return generatedPassword; 
  };
};

function collectDataTypes() {
  // prompt users for included character types
  lowerConf = window.confirm("Include lowercase characters? Press OK for yes, and CANCEL for no.");
  console.log(lowerConf);
  // if not include lowercase
  if(lowerConf !== null) {
    // if include lowercase
    if(lowerConf === true) {
      isLowerTrue = true;
    };
  };
  
  
  upperConf = window.confirm("Include uppercase characters? Press OK for yes, and CANCEL for no. ");
  console.log(upperConf);
  // if not include uppercase
  if(upperConf !== null) {
    // if include uppercase
    if(upperConf === true) {
      isUpperTrue = true;
    };
  };
    
  
  numericConf = window.confirm("Include numbers in your password? Press OK for yes, and CANCEL for no.");
  console.log(numericConf);
  // if not include numbers
  if(numericConf !== null){
    // if include numbers
    if(numericConf === true) {
      isNumberTrue = true;
    };
  };

  specialConf = window.confirm("Include special characters? Press OK for yes, and CANCEL for no. ");
  console.log(specialConf);
  // if not include special characters
  if(numericConf !== null) {
    // if include special characters
    if(specialConf === true) {
      isSpecialTrue = true;
    };
  };

  // if array empty, recall collectDataTypes function
  if(passwordTypes.length === 0 && (isUpperTrue || isLowerTrue || isNumberTrue || isSpecialTrue) === false) {
    window.alert("You must enter atleast one valid selection");
    return collectDataTypes();
  };
};

function lengthPrompt() {
  // prompt user for desired length
  passwordLength = window.prompt("How long would you like your password? Min 8 characters, Max 128 characters. ");
  // if outside length parameters, alert to reinput
  if(passwordLength !==null){
    console.log("reached parseint");
    passwordLength = parseInt(passwordLength);
    if(isNaN(passwordLength) || (passwordLength < 8 || passwordLength > 128)) {
      window.alert("Invalid length input, please input a number between 8-128.");
      lengthPrompt();
    }
    // rerun password length prompt if falsy value input
    console.log(passwordLength);
    return passwordLength;
  } else {
    return;
  }
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


