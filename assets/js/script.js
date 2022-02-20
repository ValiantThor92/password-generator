var generateBtn = document.querySelector("#generate");

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
      for (var i = 0; i < passwordLength; i ++) {
        generatedPassword += passwordTypes[Math.floor(Math.random() * passwordTypes.length)];
      }
    }
    return generatedPassword; 
  };
};

function collectDataTypes(dynamicArray, confChar) {
  // prompt users for included character type
  var lowerConf = window.confirm("Include lowercase characters? Press OK for yes, and CANCEL for no.");
  // check if yes
  if(lowerConf === true) {
    randomLow(confChar.push(...dynamicArray[0].slice(0)));
  } else {
    return confChar.splice(0, confChar.length);
  }
 
  var upperConf = window.confirm("Include uppercase characters? Press OK for yes, and CANCEL for no. ");
  console.log(upperConf);
  if(upperConf === true) {
    randomUpper(confChar.push(...dynamicArray[1].slice(0)));
  } else {
    return confChar.splice(0, confChar.length);
  };
  
  var numericConf = window.confirm("Include numbers in your password? Press OK for yes, and CANCEL for no.");
  console.log(numericConf);
  if(numericConf === true) {
    randomNumber(confChar.push(...dynamicArray[2].slice(0)));
  } else {
    return confChar.splice(0, confChar.length);
  };

  var specialConf = window.confirm("Include special characters? Press OK for yes, and CANCEL for no. ");
  console.log(specialConf);
  if(specialConf === true) {
    randomSpecial(confChar.push(...dynamicArray[3].slice(0)));
  } else {
    return confChar.splice(0, confChar.length);
  };

};
    
    
function lengthPrompt() {
  // prompt user for desired length
  passwordLength = prompt("How long would you like your password? Min 8 characters, Max 128 characters. ");
  // if outside length parameters, alert to reinput
  if(passwordLength !==null){
    parseInt(passwordLength)
    if(isNaN(passwordLength) || (passwordLength < 8 || passwordLength > 128)) {
      window.alert("Invalid length input, please input a number between 8-128.");
      lengthPrompt();
    }
    // rerun password length prompt if falsy value input
    return passwordLength;
  } else {
    return;
  }
};

// character randomizer functions

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
  return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



