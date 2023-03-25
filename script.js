// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
// Function to generate a random password, letting the length undefined until called in the WritePassword function.

function generatePassword(length) {
  var char = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var result = '';
  var charLength = char.length;
  for (var i = 0; i < length; i++) {
    result += char.charAt(Math.floor(Math.random() * charLength));
  }
  return result;
}


function writePassword() {
  var password = generatePassword(10);
  var passwordText = document.querySelector("#password");
  passwordText.textContent = password;
  console.log(password);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


/*
//Notes
I want the password to remplace the placeholder of password
Show alert? 
  var newPassword = generatePassword();
  var passwordDisplay = document.getElementById('#password');
  passweordDisplay.textcontent = newPassword;

*/

