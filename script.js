// Assignment Code
var generateBtn = document.querySelector("#generate");
var keys = {
  chars: "",
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  number:"0123456789",
  symbol: "!@#$%^&*()_+~`|}{[]:;?><,./-=",
}

// Write password to the #password input
var getkey = {
  uppercase: function() {
    return keys.upperCase.charAt(Math.floor(Math.random() * keys.upperCase.length));
  },
  lowercase: function() {
    return keys.lowerCase.charAt(Math.floor(Math.random() * keys.upperCase.length));
  },
  number: function () {
    return keys.number.charAt(Math.floor(Math.random() * keys.upperCase.length));
  }, 
  symbol: function() {
    return keys.symbol.charAt(Math.floor(Math.random() * keys.upperCase.length));
  } , 
}

function generatePassword(length) {
  var passwordText = document.querySelector("#password");
  var password = '';
  var passwordLength = length;
  for (var i = 0; i < length; i++){
    if (i < 2) {
      password += getkey.uppercase();
    } else if (i < 4) {
      password += getkey.lowercase();
    } else if (i < 6) {
      password += getkey.number();
    } else {
      password += getkey.symbol();
    }
  }
  return password; 
  
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
 This didn't worked. 

  function :upperCase() ,{
    return keys.upperCase(Math.floor(Math.random() * keys.upperCase.length));
  },
  function lowerCase() {
    return keys.lowerCase(Math.floor(Math.random() * keys.lowerCase.length));
  },
  function number() {
    return keys.number(Math.floor(Math.random() * keys.number.length));
  },
  function symbol() {
    return keys.symbol(Math.floor(Math.random() * keys.symbol.length));
  },
}


 It Works!  But i need more random. 
Function to generate a random password, letting the length undefined until called in the WritePassword function.
function generatePassword(length) {
  var char = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var result = '';
  var charLength = char.length;
  for (var i = 0; i < length; i++) {
    result += char.charAt(Math.floor(Math.random() * charLength));
  }
  return result;
}

Something is not working here 
for (var i = 0; i < length; i++){
  password += getkey.charAt (Math.floor(Math.random() * passwordLength ));

}
return password

while (length.value > password.length) {
  var keyToAdd = getkey  [Math.floor(Math.random() * getkey.length)];
  password += keyToAdd();
}
return password; 

  var newPassword = generatePassword();
  var passwordDisplay = document.getElementById('#password');
  passweordDisplay.textcontent = newPassword;

*/

