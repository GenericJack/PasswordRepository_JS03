// Assignment Code
var generateBtn = document.querySelector("#generate");

// Here we add a function to create a password
function generatePassword(length, includeUpperCase, includeNumbers, includeSymbols) {
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numberChars = '0123456789';
  const symbolChars = '!@#$%^&*()-_=+[]{}|;:,.<>?';

  let charset = lowercaseChars;

  if (includeUpperCase) {
    charset += uppercaseChars;
  }

  if (includeNumbers) {
    charset += numberChars;
  }

  if (includeSymbols) {
    charset += symbolChars;
  }

  if (charset.length === lowercaseChars.length) {
    charset += uppercaseChars + numberChars + symbolChars;
  }

  let password = '';
  const charsetLength = charset.length;

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charsetLength);
    password += charset.charAt(randomIndex);
  }

  return password;
}
  
    // Write password to the #password input
function writePassword() {
  var length = 12; 16
  var includeUpperCase = true;
  var includeNumbers = true;
  var includeSymbols = true;

  var password = generatePassword(length, includeUpperCase, includeNumbers, includeSymbols);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
// Added variable here
var generateBtn = document.querySelector("#generate")
generateBtn.addEventListener("click", writePassword);
