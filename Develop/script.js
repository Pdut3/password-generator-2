// Assignment Code
var textBox = document.getElementById("password");
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var generateBtn = document.querySelector("#generate");
var passwordCharacters = [];
var passwordLength;
function passwordPrompt() {
 passwordLength = prompt("Select a password length");
  
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be at least 8 but not more than 128 characters");
  }
  var includelowercase = confirm("Do you want your password to include lower case letters?");
  var includeuppercase = confirm("Do you want your password to include upper case letters?");
  var includenumbers = confirm("Do you want your password to include numbers?");
  var includespecialcharacters = confirm("Do you want your password to include any special characters?");

if (includelowercase === false) {
  alert("You need to choose one of the characters");
  passwordPrompt()
}
  if (includelowercase) {
    passwordCharacters = passwordCharacters.concat(lower)
  }
  if (includeuppercase) {
    passwordCharacters = passwordCharacters.concat(upper)
  }
  if (includenumbers) {
    passwordCharacters = passwordCharacters.concat(number)
  }
  if (includespecialcharacters) {
    passwordCharacters = passwordCharacters.concat(special)
   
  }
  generatePassword()
}
passwordPrompt()
// Write password to the #password input
function generatePassword() {
  
  var finishedPassword = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() *
      passwordCharacters.length)
    finishedPassword += passwordCharacters[randomNumber]
    
  }
  textBox.textContent = finishedPassword
}


// Add event listener to generate button
function copyPassword() {
  generateBtn.addEventListener("click", generatePassword);
  var copyText = document.querySelector("#generate");
  copyText.select();
  copyText.setSelectionRange(8, 128);
}
