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
let charSelect = [];
let userPassword = '';

// Function to prompt user for password options
function getPasswordOptions() {
  // Password length while loop to validate number entry
  let passLenOpt = 0;
  // Keep asking for a password length until user chooses a number between 10 and 64 inclusive
  do {
    const passLenStr = prompt('How long would you like your passphrase? Enter a number between 10 and 64');
    // Convert user input to integer
    passLenOpt = parseInt(passLenStr);
    // Error message if input was not an integer
    if (isNaN(passLenOpt)) {
        alert('Invalid input. Please enter a number.');
    }
  } while(passLenOpt < 10 || passLenOpt > 64 || isNaN(passLenOpt))
  return passLenOpt;
}

// Stored repeat to get user's character type choices for each type
function charChoices(typeChoice, charText) {
  typeChoice = confirm(`Do you want to include ${charText} characters in your passphrase?`);
  return typeChoice;
}

// Provide instructions in alert for what options user will get
function getCharChoices() {
  alert(`
  You will now choose whether to include the following character types:
  - lower case (e.g f or m)
  - upper case (e.g. F or M)
  - numbers (e.g. 5 or 9)
  - specials (e.g. % or &)
  
  Please choose at least one option on the prompts that follow.`)
  // While loop to ensure user has chosen as least one of the categories
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

  // Output a new array with the true/false and arrays of the characters to be passed into createNewArray function
  const choiceOpt = [lowerOpt, lowerCasedCharacters, upperOpt, upperCasedCharacters, numOpt, numericCharacters, specOpt, specialCharacters]
  return choiceOpt;
}

// Create new array charSelect from the true choices made in getCharChoices
function createNewArray(choiceOpt) {
  // For loop over the choiceOpt looking at true/false values in even indices
  for(let i = 0; i < choiceOpt.length; i+=2) {
    if (choiceOpt[i]) {
      // Concat each true array into charSelect
      charSelect = charSelect.concat(choiceOpt[i+1]);
    }
  }
  return charSelect;
}

// Function for getting random characters from our newly created array, 
// to fill our userPawword with the correct number of characters
function getRandom(charSelect, passLenOptInput) {
  // Choose random characters from charSelect until passLenOptInput is filled with the correct number
  for(i = 0; i < passLenOptInput; i++) {
    let addChar = Math.floor(Math.random() * (charSelect.length));
    userPassword += charSelect[addChar];
  }
  return userPassword;
}

// Reset stored variable values
function resetOpt() {
  specOptX = false;
  numOptX = false;
  lowerOptX = false;
  upperOptX = false;
  specOpt = false;
  numOpt = false;
  lowerOpt = false;
  upperOpt = false;
  charSelect.length = 0;
  userPassword = '';
}

// THIS IS WHERE THE CODE BEGINS TO RUN
// Get references to the #generate element
const generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  // 1. Get desired password length
  let passLenOptInput = getPasswordOptions();
  // 2. Get desired character types to include
  let choiceOpt = getCharChoices();
  // 3. Combine correct character choices into new array
  charSelect = createNewArray(choiceOpt);
  // 4. Fill userPassword with for loop of random characters from step 3, until password length is reached
  userPassword = getRandom(charSelect, passLenOptInput);
  // 5. Display password in html textbox
  let passwordText = document.querySelector('#password');
  passwordText.value = userPassword;
  // 6. Reset stored options so user can generate a new password without refreshing the page
  resetOpt();
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


const choiceOpt = {
  lowerOpt: {array: lowerCasedCharacters, boolean: lowerOpt}, 
  upperOpt: {array: upperCasedCharacters, boolean: upperOpt},
  numOpt: {array: numericCharacters, boolean: numOpt},
  specOpt: {array: specialCharacters, boolean: specOpt}
}