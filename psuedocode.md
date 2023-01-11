# Password Generator

# Pseudocode for how generate a password based on user choices

* Declare variables needed for the process:
  - Different character types;
  - Password length choice;
  - Booleans for included character types;
* User confirm messages to get character type selection;
  - Check that user has made at least one choice;
* Concat the character type choices into one array;
* Function to handle producing a random number between two ints x and y inclusive;
* While newPassword < passwordLenChoice, choose random from concat, add to newPassword string;
* Display password in passwordText textbox in html
