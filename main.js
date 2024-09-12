///////////////// JAVASCRIPT BASICS
//////////// VAR
// var message = 'Hello!';
// console.log(message);
// message = "Hello from JavaScript Basics"
// console.log(message)

// EX:

// var myName = "Ryan";




//////////// LET AND CONST
// let score = 5;
// score += 5
// console.log(score)

// EX:
// lett points = 100;
// const bonusPts = 50;

// points += bonusPts;
// console.log(points);




//////////// STRINGS
// const message = 'I\'m a programmer!';
// const htmlSnippet = '<h1> class="headline">My Headline</h1>';
// const multiline = "Hello, students \
// Welcome to Javascript Basics. \
// I hope you learn a lot!";
// console.log(message);
// console.log(htmlSnippet)
// console.log(multiline)




//////////// TRANSFORM AND MANIPULATE STRINGS
// let passPhrase = 'Open Sesame';
// console.log(passPhrase.length)

// let passPhrase1 = 'Hi';
// console.log(passPhrase1.length)

// console.log("This is my string!".length)

// console.log('hello'.toLocaleUpperCase())
// console.log('HELLO'.toLocaleLowerCase())

// EX:
// const message = "You're welcome!";





//////////// CAPTURE INPUT (PROMPT)
// const name = prompt("What is your name?");
// console.log(name)

// EX:





//////////// COMBINE STRINGS
// let firstName = "Ryan "
// let lastName = "Woods"

// let fullName = firstName + lastName
// console.log(fullName)


// let name = prompt("What is your name");
// let message = "Hello " + name + ". Welcome to my music site. "
// message += "I'm so happy that you came by to visit, "
// message += name;
// message += ". Feel free to come again and listen to more music."
// console.log(message);

// EX:
// let firstName = "Ryan";
// let lastName = "Woods";
// let role = 'developer';

// let msg = firstName + " " + lastName + " : " + role.toUpperCase()




//////////// TEMPLATE LITERALS
// const name = prompt('What is your name?');

// const message = `Hello ${name}. fWelcome to my music site. I'm happy you came back to visit, ${name}. Please come back again and listen to more music!`;

// console.log(message);




//////////// SHOUT .JS
// const stringToShout = prompt("What do you want to shout?");
// const shout = stringToShout.toLocaleUpperCase();
// const shoutMessage = `The message to shout is: ${shout}!!!!`
// console.log(shoutMessage)


// const stringToShout = prompt("What do you want to shout?");
// const shout = stringToShout.toLocaleUpperCase();
// const shoutMessage = `<h2>The message to shout is: ${shout}!!!!</h2>`
// document.querySelector('main').innerHTML = shoutMessage

// EX:
// 1. Declare variables and capture input.
// let noun = prompt("Give me a noun");
// let verb = prompt("Give me a verb");

// // 2. Combine the input with other words to create a story.
// let inputVerbAndNoun = `I like to ${noun} while doing the ${verb} all the time and it makes me happy in my pants!!`;

// // 3. Display the story as a <p> inside the <main> element.
// let madLibStory = `<p>this madlib is about ${inputVerbAndNoun}</p>`;
// document.querySelector('main').innerHTML = madLibStory

// const flavor = "Blueberry";
// const type = "Smoothie";
// const price = 4.99;

// const drink = `${flavor} ${type}: $${price}`;




//////////// CONDITIONAL STATEMENTS
// const answer = prompt("Which planet is closest to the sun?");

// if (answer.toUpperCase() === "MERCURY") {
//   console.log("That's answer is correct!")
// } else {
//   console.log("Guess again!")
// }




//////////// COMPARISON OPERATORS
// (3>2) // > T
// (100 > 100) // > F
// (100 >= 100) // > T
// (-12 < 0) // > T
// ('apple' < 'bear') // > T
// ('100' < 'apple') // > T

/*
'==' Equality Operator

('3' == 3) > T

'===' Strict Equality Operator
('3' === 3) > F  - one value us a string and one is a number

(165 === 165.9) > F

!= - NOT EQUAL TO
!== - STRICT NOT EQUAL

(10 !== 9) > T
('10' !== 10) > T
('Java' !== 'java') > T



EX:
const a = 10;
const b = 20;
const c = 30;

if (a > b) {
  console.log('a is greater than b')
}else{
  console.log('a is not greater than b')
}
*/




///////////////// BOOLEAN VALUES
// let correctGuess = false;
// let number = 6;
// const guess = prompt("guess a number between 1 and 10");
                     
//  if (+guess === number) {
//   correctGuess = true
// }



// if (correctGuess) {
//   console.log('You guessed the number');
// } else {
//   console.log(`Sorry. the number was ${number}`);
// }




///////////////// IF-ELSE STATEMENTS
// const weather = prompt("what is it like outside?");

// if (weather === 'sun') {
//   console.log('Its sunny, so im going swimming')
// } else if (weather === 'rain') {
//   console.log('better grab an umbrella')
// } else if (weather === 'snow') {
//   console.log('It is snowing in Texas')
// } else {
//   console.log('i should look outside')
// }

// EX:
// const isAdmin = false;
// const isStudent = false;
// let message;

// if ( isAdmin ) {
//   message = 'Welcome admin';
// } else if ( isStudent ) {
//   message = 'Welcome student';
// } else {
//  message = "Access denied" 
// }




///////////////// && and ||
/*
&&

USE && WHEN YOU WANT TWO OR MORE CONDITIONS TO PASS

(score === 0 && ships <= 0 && time === 0)

---------------------------------------------------
||
TO CHECK IF BOTH CONDITIONS ARE TRUE. to ask if condition 1 is true OR condition 2 is true
let agree = 'yes'

(agree === 'yes || agree === 'y')

(password === '' || email === '' || phoneNumber === '')
*/




///////////////// COMMENTS
/*
consider other developers


The Number Guessing Game
Stores a number between 1-10
and gives the player 1 attempt for guess the number.


// //When the game begins, its false
// let correctGuess = false;
// let number = 6;
// const guess = prompt("guess a number between 1 and 10");

// // conditional statement to test is guess matched the number
// // changes the guess to true if they match
//  if (+guess === number) {
//   correctGuess = true
// }


// // Test if guess is correct 
// if (correctGuess) {
//   console.log('You guessed the number');
// } else {
//   console.log(`Sorry. the number was ${number}`);
// }


*/
