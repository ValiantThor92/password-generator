// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");





var generatePassword = function() {
  var passwordText = document.querySelector("#password")
 

  for (var i = 0; i < generatedLow; i++) {
    var generatedLow = Math.floor(Math.random() * lowerCase.length);
    password += lowerCase.substring(generatedLow, generatedLow +1)
  }

  for (var i = 0; i < generatedUp; i++) {
    var generatedUp = Math.floor(Math.random() * upperCase.length);
    password += upperCase.substring(generatedUp, generatedUp +1)
  }

  for (var i = 0; i < generatedNumeric; i++) {
    var generatedNumeric = Math.floor(Math.random() * numeric.length);
    password += numeric.substring(generatedNumeric, generatedNumeric +1)
  }

  for (var i = 0; i < generatedSpecial; i++) {
    var generatedSpecial = Math.floor(Math.random() * special.length);
    password += special.substring(generatedSpecial, generatedSpecial +1)
  }

  console.log(password);
  
}



// prompt user for included character type.
var characterPrompt = function() {}

  var lowerCaseConf = function() {
    var lowerCaseConf = window.confirm("Include lowercase characters? Press OK for yes, and CANCEL for no.");
    console.log(lowerCaseConf);
    return lowerCaseConf;
  }

  var upperCaseConf = function() {
    var upperCaseConf = window.confirm("Include uppercase characters? Press OK for yes, and CANCEL for no. ");
    console.log(upperCaseConf);
    return upperCaseConf;
  }
  
  var numericConf = function() {
    var numericConf = window.confirm("Include numbers in your password? Press OK for yes, and CANCEL for no.");
    console.log(numericConf);
    return numericConf;
  }
  
  var specialConf = function() {
    var specialConf = window.confirm("Include special characters? Press OK for yes, and CANCEL for no. ");
    console.log(specialConf);
    return specialConf;
  }




// ask for password length from 8-128
var getPassLength = function() {
  while (passLength === "" || passLength === null) {
  var lengthPrompt = window.prompt("How long would you like your password? Min 8 characters, Max 128 characters. ");
  }

  // convert answer from prompt to an actual number
  lengthPrompt = parseInt(lengthPrompt);

  if(lengthPrompt < 8 || lengthPrompt > 128) {
    window.alert("Invalid length input, please input a number between 8-128.");
    return lengthPrompt;
  }
  return passLength;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log(password);

}

// INFO AND VARIABLES
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var special = ["!","#", "$", "%", "&", "(", ")", "*", "+", "-", "/", "<", "=", ">", "?", "@", "^", "_", "`", "~"]
var passLength = getPassLength();


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

