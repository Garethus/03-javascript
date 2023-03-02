// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  // var passwordText = document.querySelector("#password");
  function generatePassword() {
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    //splits lowercase characters into array
    var lowerSplit = lowercase.split("");
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    //splits uppercase characters into array
    var upperSplit = uppercase.split("");
    var numbers = "0123456789";
    //splits numbers into array
    var numbersSplit = numbers.split("");
    var special = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    //splits special characters into array
    var specialSplit = special.split("");
    //ask for password length
    var passLength = prompt("Entered password length (must be 8-128 only)");
    //exits the program when Cancel is clicked
    if (passLength === null) {
      return ("Password cannot be generated.");
    }
    //validate the input
    while (!(passLength >= 8) || !(passLength <= 128)) {
      var newLength = prompt("Password length is INVALID!\nRe-enter password length (must be 8-128 only)");
      passLength = newLength;
      //exits the program when Cancel is clicked
      if (passLength === null) {
        return ("Password cannot be generated.");
      }
    }
    var allChar = [];
    var includeLowercase = confirm("Include Lowercase Letters? (a-z)");
    //add lowercase characters to array of included criteria
    if (includeLowercase) {
      allChar.push(...lowerSplit);
    }
    var includeUppercase = confirm("Include Uppercase Letters? (A-Z)");
    //add uppercase characters to array of included criteria
    if (includeUppercase) {
      allChar.push(...upperSplit);
    }
    var includeNumbers = confirm("Include numbers? (0-9)");
    //add numbers to array of included criteria
    if (includeNumbers) {
      allChar.push(...numbersSplit);
    }
    var includeSpecial = confirm("Include special characters? ( !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~)");
    //add special characters to array of included criteria
    if (includeSpecial) {
      allChar.push(...specialSplit);
    }
    //check if at least once criteria is chosen
    //if no criteria is chosen, program exits
    if (allChar.length === 0) {
      return ("Password cannot be generated.\nPlease select at least one criteria for your password.");
    }
    //loop to generate password based on length entered
    password = "";
    for (i = 0; i < passLength; i++) {
      var randomNum = Math.floor(Math.random() * allChar.length);
      var randomChar = allChar[randomNum]
      password = password.concat(randomChar);
    }
    return (password);
  }
  // passwordText.value = password;
  document.getElementById("password").innerHTML = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
