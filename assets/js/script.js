// Assignment code here
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var special = ["!","#", "$", "%", "&", "(", ")", "*", "+", "-", "/", "<", "=", ">", "?", "@", "^", "_", "`", "~"]
var passLength = "";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var passLength = function() {
  var lengthPrompt = window.prompt("How long would you like your password? Min 8 characters, Max 128 characters. ");
  if(lengthPrompt < 8 || lengthPrompt > 128) {
    window.alert("Invalid length input, please input a number between 8-128.");
    return lengthPrompt;
  }
  return passLength();
}

// prompt user for included character type.

var lowerCase = function() {
 var lowerCaseConf = window.confirm("Include lowercase characters? Press OK for yes, and CANCEL for no.");
 return lowerCaseConf;
}

var upperCase = function() {
  var upperCaseConf = window.confirm("Include uppercase characters? Press OK for yes, and CANCEL for no. ");
  return upperCaseConf;
}

var numeric = function() {
  var numericConf = window.confirm("Include numbers in your password? Press OK for yes, and CANCEL for no.");
  return numericConf;
}

var special = function() {
  var specialConf = window.confirm("Include special characters? Press OK for yes, and CANCEL for no. ");
  return specialConf;
}

var generatePassword = function() {
  var passwordText = document.querySelector("#password")
 

  for (var i = 0; i < generatedLow; i++) {
    var generatedLow = Math.floor(Math.random() * lowerCase.length);
    password += lowerCase.substring(GeneratedLow, generatedLow +1)
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


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


