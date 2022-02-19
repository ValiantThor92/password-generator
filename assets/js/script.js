
// Dom elements.

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// DOM element
const password = document.getElementById("#password");

// prompt users for included character type

var lowerCaseConf = function(event) {
  var lowerCaseConf = window.confirm("Include lowercase characters? Press OK for yes, and CANCEL for no.");
  console.log(lowerCaseConf);
  return lowerCaseConf;
}

var upperCaseConf = function(event) {
  var upperCaseConf = window.confirm("Include uppercase characters? Press OK for yes, and CANCEL for no. ");
  console.log(upperCaseConf);
  return upperCaseConf;
}

var numericConf = function(event) {
  var numericConf = window.confirm("Include numbers in your password? Press OK for yes, and CANCEL for no.");
  console.log(numericConf);
  return numericConf;
}

var specialConf = function(event) {
  var specialConf = window.confirm("Include special characters? Press OK for yes, and CANCEL for no. ");
  console.log(specialConf);
  return specialConf;
}


// randomize generator functions
function randomLow() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function randomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function randomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function randomSpecial() {
  const symbols = "!@#$%^&*()";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// collect data from generator
var collect = function() {
  var lowerCase = randomLow();
  var upperCase = randomUpper();
  var number = randomNumber();
  var special = randomSpecial();
  var lowerCaseConf = lowerCaseConf();
  var upperCaseConf = upperCaseConf();
  var numericConf = numericConf();
  var specialConf = specialConf();
};


// function to set password length
var getPassLength = function() {

  var lengthPrompt = window.prompt("How long would you like your password? Min 8 characters, Max 128 characters. ");

  // convert answer from prompt to an actual number
  lengthPrompt = parseInt(lengthPrompt);

  if(lengthPrompt < 8 || lengthPrompt > 128) {
    window.alert("Invalid length input, please input a number between 8-128.");
    return lengthPrompt;
  }
  return passLength;
}

// generate password
var generatePassword = function() {

  if (lowerCaseConf === true) {
    lowerCase
    passLength
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log(password);

}

// INFO AND VARIABLES



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
windowConfirm.addEventListener(SubmitEvent, lowerCaseConf);


