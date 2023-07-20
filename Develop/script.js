// Assignment Code
var generateBtn = document.querySelector("#generate");

// Here we add a function to create a password
function generatePassword(length, includeLowercase, includeUpperCase, includeNumbers, includeSymbols) {
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numberChars = '0123456789';
  const symbolChars = '!@#$%^&*()-_=+[]{}|;:,.<>?';

  let charset = '';

  if (includeLowercase) {
    charset += lowercaseChars;
  }

  if (includeUpperCase) {
    charset += uppercaseChars;
  }

  if (includeNumbers) {
    charset += numberChars;
  }

  if (includeSymbols) {
    charset += symbolChars;
  }

  if (charset.length === '') {
    alert('Please select at least one criteria!');
    return '';
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
  const length = document.querySelector("#length").value || 12; // Read password length from input
  const includeLowercase = document.querySelector("#includeLowercase").checked;
  const includeUppercase = document.querySelector("#includeUppercase").checked;
  const includeNumbers = document.querySelector("#includeNumbers").checked;
  const includeSymbols = document.querySelector("#includeSymbols").checked;

  var password = generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


// Add event listener to generate button
// Added variable here
var generateBtn = document.querySelector("#generate")
generateBtn.addEventListener("click", writePassword);
