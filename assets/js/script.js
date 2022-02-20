var generateBtn = document.querySelector("#generate");

var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]

var collectArray = [
  [randomLow()], 
  [randomUpper()], 
  [randomNumber()], 
  [randomSpecial()]
];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  function generatePassword() {
    var passwordTypes = [];
    var generatedPassword = "";

    collectDataTypes(collectArray, passwordTypes);
    if (passwordTypes.length !== 0){
      var passwordLength = lengthPrompt();

        // for function to print password 
      for (var i = lengthPrompt.length; i < length; i ++) {
        generatedPassword += passwordTypes[Math.floor(Math.random() * lengthPrompt.length)];
      }
    }
    return generatedPassword; 
  };
};

function collectDataTypes() {
  // prompt users for included character type
  var lowerConf = window.confirm("Include lowercase characters? Press OK for yes, and CANCEL for no.");
  while(lowerConf === true) {
    randomLow() 
    collectArray.push[randomLow()];
  }
 
  var upperConf = window.confirm("Include uppercase characters? Press OK for yes, and CANCEL for no. ");
  console.log(upperConf);
  while(upperConf === true) {
    randomUpper()  
    collectArray.push[randomUpper()];
  }
  
  var numericConf = window.confirm("Include numbers in your password? Press OK for yes, and CANCEL for no.");
  console.log(numericConf);
  while(numericConf === true) {
    randomNumber();
    collectArray.push[randomNumber()];
  }

  var specialConf = window.confirm("Include special characters? Press OK for yes, and CANCEL for no. ");
  console.log(specialConf);
  while(specialConf === true) {
    randomSpecial() 
    collectArray.push[randomSpecial()];
  }
} 
    
    
function lengthPrompt() {
  // prompt user for desired length
  passwordLength = window.prompt("How long would you like your password? Min 8 characters, Max 128 characters. ");
  // if outside length parameters, alert to reinput
  if(passwordLength !==null){
    parseInt(passwordLength)
    if(isNaN(passwordLength) || (passwordLength < 8 || passwordLength > 128)) {
      window.alert("Invalid length input, please input a number between 8-128.");
      lengthPrompt();
    }
    return passwordLength;
  } else {
    return;
  }
};


// charactar randomizer functions

function randomLow() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

function randomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

function randomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};

function randomSpecial() {
  return String.symbols[Math.floor(Math.random() * symbols.length)];
};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



