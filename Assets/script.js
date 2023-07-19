// Assignment Code
function generatePassword() {
  var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var symbol = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
  var possibleCharacters = [];

  // get input and validate
  numberOfCharacters = prompt("How many characters do you want in your password? Choose between 8-128 characters.");
    if (numberOfCharacters < 8 || numberOfCharacters > 128) {
      return "Please choose a valid number of characters.";
    } else if (isNaN(numberOfCharacters)) {
      numberOfCharacters = prompt("Please enter a valid number.");
    }
    else {
      alert("Your password will be " + numberOfCharacters + " characters long.");
    }

  hasLowercase = confirm("Do you want lowercase characters?");
  if (hasLowercase) {
    var turnToLowercase = alert("Your password will have lowercase characters.");
  }
  else {
    alert("Your password will NOT have lowercase characters.");
  }

  hasUpperCase = confirm("Do you want uppercase characters?"); 
  if (hasUpperCase) {
    var turnToUppercase = alert("Your password will have uppercase characters."); 
  }
  else {
    alert("Your password will NOT have uppercase characters.")
  }

  hasNumbers = confirm("Do you want numbers in your password?"); 
  if (hasNumbers) {
    alert ("Your password will have numbers.");
  }
  else {
    alert("Your password will NOT have numbers.");
  }

  hasSpecial = confirm("Do you want special characters?");
  if (hasSpecial) {
    alert("Your password will have special characters."); 
  } 
  else {
    alert("Your password will NOT have special characters.");
  }

  if (hasLowercase === false && hasUpperCase === false && hasNumbers === false && hasSpecial === false) {
    return "Please select at least one character type."
  } 


  if (hasLowercase) {
    possibleCharacters = possibleCharacters.concat(upperCase);
  }
  if (hasUpperCase) {
    possibleCharacters = possibleCharacters.concat(lowerCase);
  }
  if (hasNumbers) {
    possibleCharacters = possibleCharacters.concat(number);
  }
  if (hasSpecial) {
    possibleCharacters = possibleCharacters.concat(symbol);
  }
    

  let finalPassword = ""
  for (let i = 0; i < numberOfCharacters; i++) {
    let keyToAdd =[Math.floor(Math.random() * possibleCharacters.length)];
    finalPassword = finalPassword + possibleCharacters[keyToAdd];
  }
    return finalPassword;
};


var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  console.log(password);
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

 /* 

Write password to the #password input
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
  
// }


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

