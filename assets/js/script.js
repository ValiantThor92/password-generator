var generateBtn = document.querySelector("#generate");

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
  
const collectObj = {
  lower: randomLow(),
  upper: randomUpper(),
  number: randomNumber(),
  special: randomSpecial()
};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  function generatePassword() {
    var passwordTypes = Object.keys(0, 1, 2, 3);
    var generatedPassword = "";

    collectDataTypes(collectObj, passwordTypes);
    if (passwordTypes.length !== 0){
      var passwordLength = lengthPrompt();

        // for function to print password 
      for (let i = 0; i < passwordLength; i++) {
        
        generatedPassword += passwordTypes[Math.floor(Math.random() * passwordTypes.length)];
        //  lower, upper, number, special += generatedPassword += passwordTypes;
      }
    }
    console.log(generatedPassword);
    return generatedPassword; 
  };
};

function collectDataTypes(collectObj, passwordTypes) {
  // prompt users for included character type
  lowerConf = window.confirm("Include lowercase characters? Press OK for yes, and CANCEL for no.");
  console.log(lowerConf);
  // check if yes
  if(lowerConf === true) {
    lower = randomLow();
    randomLow(passwordTypes.push(...collectObj + 1));
  }
 
  upperConf = window.confirm("Include uppercase characters? Press OK for yes, and CANCEL for no. ");
  console.log(upperConf);
  if(upperConf === true) {
    upper = randomUpper();
    randomUpper(passwordTypes.push(...collectObj + 1));
  };
  
  numericConf = window.confirm("Include numbers in your password? Press OK for yes, and CANCEL for no.");
  console.log(numericConf);
  if(numericConf === true) {
    number = randomNumber();
    randomNumber(passwordTypes.push(...collectObj + 1));
  };

  specialConf = window.confirm("Include special characters? Press OK for yes, and CANCEL for no. ");
  console.log(specialConf);
  if(specialConf === true) {
    special = randomSpecial();
    randomSpecial(passwordTypes.push(...collectObj + 1));
  };

  // if array empty, recall collectDataTypes function
  if(passwordTypes.length === 0){
    window.alert("You must enter atleast one valid selection");
    return collectDataTypes(collectObj, passwordTypes);
    
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
    console.log(passwordLength);
    return passwordLength;
  } else {
    return;
  }
};

console.log(collectObj);
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



