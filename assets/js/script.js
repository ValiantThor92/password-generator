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

  // generate password
  var generatedPassword = function() {
    var password = "";

    // prompt to get password length
    var lengthPrompt = window.prompt("How long would you like your password? Min 8 characters, Max 128 characters. ");

    // convert answer from prompt to an actual number
    lengthPrompt = parseInt(lengthPrompt);

    // if outside length parameters, exit. else, continue w/ prompts
    if(lengthPrompt < 8 || lengthPrompt > 128) {
      window.alert("Invalid length input, please input a number between 8-128.");
      lengthPrompt = parseInt.lengthPrompt;
      return lengthPrompt;
    } else {

      // prompt users for included character type
      var lowerConf = window.confirm("Include lowercase characters? Press OK for yes, and CANCEL for no.");
      console.log(lowerConf);
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
  
    
      // for function to print password 
      for (var i = lengthPrompt.length; i < length; i ++) {
        var generatedPassword = Math.floor(Math.random() * lengthPrompt.length);
        pass += collectArray.charAt(generatedPassword + 1);
      }
      passwordText.value = pass;
      console.log(pass);
      console.log(password);
      return password;
    };

  };
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
  const symbols = "!@#$%^&*()";
  return String.symbols[Math.floor(Math.random() * symbols.length)];
};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



