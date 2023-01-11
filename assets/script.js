// Array of special characters to be included in password
const specialCharacters = [
  '@','%','+','\\','/',"'",'!','#','$','^','?',':',
  ',',')','(','}','{',']','[','~','-','_','.'];

// Array of numeric characters to be included in password
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
const lowerCasedCharacters = [
  'a','b','c','d','e','f','g','h','i','j','k','l','m',
  'n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Array of uppercase characters to be included in password
const upperCasedCharacters = [
  'A','B','C','D','E','F','G','H','I','J','K','L','M',
  'N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

// Declare variables
let specOptX = false;
let numOptX = false;
let lowerOptX = false;
let upperOptX = false;
let specOpt = false;
let numOpt = false;
let lowerOpt = false;
let upperOpt = false;
const charOptions = [];
let charSelect = [];

// Function to prompt user for password options
function getPasswordOptions() {
  // Password length while loop to validate number entry
  let passLenOpt = 0;
  do {
    const passLenStr = prompt('How long would you like your passphrase? Enter a number between 10 and 64');
    passLenOpt = parseInt(passLenStr);
    if (isNaN(passLenOpt)) {
        alert('Invalid input. Please enter a number.');
    }
  }while(passLenOpt < 10 || passLenOpt > 64 || isNaN(passLenOpt))
}

// Stored repeat to get user's character type choices for each type
function charChoices(typeChoice, charText) {
  return typeChoice = confirm(`Do you want to include ${charText} characters in your passphrase?`);
}

function getCharChoices() {
  alert(`
  You will now choose whether to include the following character types:
  - lower case (e.g f or m)
  - upper case (e.g. F or M)
  - numbers (e.g. 5 or 9)
  - specials (e.g. % or &)
  
  Please choose at least one option on the prompts that follow.`)
  while (!lowerOptX && !upperOptX && !numOptX && !specOptX) {
    lowerOptX = charChoices(lowerOpt, "lower case");
    upperOptX = charChoices(upperOpt, "upper case");
    numOptX = charChoices(numOpt, "number");
    specOptX = charChoices(specOpt, "special");
  }

  // Set all Opt to OptX
  lowerOpt = lowerOptX;
  upperOpt = upperOptX;
  numOpt = numOptX;
  specOpt = specOptX;

  return choiceOpt = [lowerOpt, lowerCasedCharacters, upperOpt, upperCasedCharacters, numOpt, numericCharacters, specOpt, specialCharacters]
}

function createNewArray(choiceOpt) {
  for(let i = 0; i < choiceOpt.length; i+=2) {
    if (choiceOpt[i]) {
    charOptions.push(choiceOpt[i+1])
    }
  }
  charSelect = [].concat.apply([], charOptions);
  return charSelect;
}

// Function for getting a random element from an array
function getRandom(charSelect) {
console.log(charSelect)
}

// Function to generate password with user input
function generatePassword() {
password = `This is a test...`
return password;
}

// Get references to the #generate element
const generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

// Run code
getPasswordOptions();
getCharChoices();
createNewArray(choiceOpt);
getRandom(charSelect);