
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = createPassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


var upperCase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ" ;
var lowerCase= "abcdefghijklmnopqrstuvwxyz";
var numbers= "1234567890" ;
var symbols= "'()*+,-./:;<=>?@[]^_`{|}~#$%&";


  //Password length question
function createPassword() {
  var userPassword = "";
  var allowedPassword = ""; 
  var passwordLength = prompt("How many charaters would you like for your password? (Please choose between 8 to 128 charaters!") 
  if (passwordLength > 7 && (passwordLength < 129)) {
    console.log(passwordLength) } 
    else {alert("Please choose between 8 to 128 characters!");
    return "" ;
  }

  // Lower case question
  passwordLowerCase = confirm("Do you want 'Lower Case' in your password?");
  if (passwordLowerCase) {
    userPassword += lowerCase;
    console.log(userPassword);
   }
   else {
    passwordLowerCase = ''
  };


  // Upper case question
  passwordUpperCase = confirm("Do you want 'Upper Case' in your password?");
  if (passwordUpperCase) {
    userPassword += upperCase;
    console.log(userPassword);
   }
   else {
    passwordUpperCase = ''
  };


   // Numbers question
  passwordNumbers = confirm("Do you want 'Numbers' in your password?");
  if (passwordNumbers) {
    userPassword += numbers;
    console.log(userPassword);
   }
   else {
    passwordNumbers = ''
  };

  // Symbols question
  passwordSymbols = confirm("Do you want 'Symbols' in your password?");
  if (passwordSymbols) {
    userPassword += symbols;
    console.log(userPassword);
   }
   else {
    passwordSymbols = ''
  };


  for (var i = 1; i <=passwordLength; i++) {
    allowedPassword += userPassword.charAt(Math.floor(Math.random() * userPassword.length));
    console.log(allowedPassword);
  } 
   
  if (allowedPassword === "" ) {
    alert("At least one character type should be selected.");
    return reject;
  }
  
  else {"" ;
  return allowedPassword; 
  }
  
}