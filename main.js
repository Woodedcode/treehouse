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




///////////////// CONDITIONAL CHALLENGING
/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
   
*/
// let quizAnswers = 0;

// // 2. Store the rank of a player
// let playerRank;

// // 3. Select the <main> HTML element
// const main = document.querySelector('main');

// /*
//   4. Ask at least 5 questions
//    - Store each answer in a variable
//    - Keep track of the number of correct answers
// */
// const question1 = prompt("What gem is used for programming?")
// if (question1.toUpperCase() === "RUBY") {
//   quizAnswers +=1
// }
// const question2 = prompt("What programming language is a snake?")
//  if (question2.toUpperCase() === "PYTHON") {
//   quizAnswers +=1
// }
// const question3 = prompt("How do you move a mouse?")
// if (question3.toUpperCase() === "CHEESE") {
//   quizAnswers +=1
// }
// const question4 = prompt("How do you move a mouse?")
// if (question4.toUpperCase() === "CHEESE") {
//   quizAnswers +=1
// }
// const question5 = prompt("How do you move a mouse?")
// if (question5.toUpperCase() === "CHEESE") {
//   quizAnswers +=1
// }

// /*
//   5. Rank player based on number of correct answers
//    - 5 correct = Gold
//    - 3-4 correct = Silver
//    - 1-2 correct = Bronze
//    - 0 correct = No crown
// */

// if (quizAnswers === 5) {
//   playerRank = 'GOLD';
// } else if (quizAnswers >= 3) {
//   playerRank = 'Silver'
// } else if (quizAnswers >= 2) {
//   playerRank = 'Bronze'
// } else {
//  playerRank = 'none :(' 
// }



// // 6. Output results to the <main> element
// main.innerHTML = `
// <h2>You got ${quizAnswers} out of 5 questions correct.</h2>
// <p>crown earned: <strong>${playerRank}</strong>
// `
/*
EX:
const money = 9;
const today = 'Friday'

if ( money > 10 && today === 'Friday' ) {
  alert("Time to go to the theater.");    
} else if ( money >= 50 && today === 'Friday' ) {
  alert("Time for a movie and dinner.");    
} else if ( today === 'Friday' ) {
  alert("It's Friday, but I don't have enough money to go out.");   
} else {
  alert("This isn't Friday. I need to stay home.");
}

*/




///////////////// NUMBERS 

// EX: RANDOM NUMBER GEN
// // Collect input from a user
// let userInputNum = prompt('Give us a number');

// // Convert the input to a number
// let highNum = parseInt(userInputNum);

// if (highNum) {
//   // Use Math.random() and the user's number to generate a random number
//   let newRandomNum = Math.floor(Math.random() * highNum) + 1;
  
//   // Create a message displaying the random number
//   console.log(`your random number between 1 and ${highNum} was ${newRandomNum}!`);
// } else {
  
//   console.log('You need to provide a number')

//  LOW AND HIGH NUMBER GEN
// Collect input from a user
// let inputLow = prompt('please provide a low number');
// let inputHigh = prompt('Please provide a high number');

// // Convert the input to a number
// let lowNum = parseInt(inputLow);
// let highNum = parseInt(inputHigh);

// if (lowNum && highNum) {
//   // Use Math.random() and the user's number to generate a random number
//   let newRandomNum = Math.floor(Math.random() * (highNum - lowNum + 1)) + lowNum;
  
//   // Create a message displaying the random number
//   console.log(`${newRandomNum} is a random number between ${lowNum} and ${highNum}!`);
// } else {
  
//   console.log('You need to provide two numbers');
// }




///////////////// PROGRAM WITH MATH
//EX:
// const wholesalePrice = 5.45;
// const retailPrice = 9.99;
// const quantity = 47;

// let salesTotal = retailPrice * quantity
// let profit = salesTotal - wholesalePrice * quantity
// let profitPerUnit = profit / quantity




///////////////// STRINGS AS NUMBERS
//NUMBER
// const HTMLBadges = prompt('How many HTML badges do you have?');
// const CSSBadges = prompt('How many CSS badges do you have?');

// const totalBadges = Number(HTMLBadges) + Number(CSSBadges);
// console.log(totalBadges);

//PARSEINT
// const HTMLBadges = prompt('How many HTML badges do you have?');
// const CSSBadges = prompt('How many CSS badges do you have?');

// let totalBadges = HTMLBadges + CSSBadges;
// console.log(parseInt(HTMLBadges) + parseInt(CSSBadges));

// const HTMLBadges = prompt('How many HTML badges do you have?');
// const CSSBadges = prompt('How many CSS badges do you have?');

// let totalBadges = HTMLBadges + CSSBadges;
// console.log(+HTMLBadges + +CSSBadges);

// const pi = '3.14';
// console.log(parseFloat(pi));

// EX:
// const width = '190px';
// const totalImages = 10;

// let totalWidth = parseInt(width) * totalImages;




///////////////// METHODS
//MATH.RANDOM - MATH.FLOOR MATH.CEIL 
// const dieRoll = Math.floor(Math.random() * 6) + 1;

// console.log(`you rolled an ${dieRoll}`);

// EX:
// const temperature = 37.5;

// let tempRounded = Math.round(temperature);
// let tempRoundDown = Math.floor(temperature);




///////////////// FUNCTIONS
// function goToCoffeeShop() {
//     alert('Your coffee is on its way!')
// }

// goToCoffeeShop()

// function alertRandom() {
//     const randomNumber = Math.floor(Math.random() * 6) + 1;
//     alert(randomNumber)
// }
// alertRandom()

// function sayHi() {
//     alert('Hi')
// }

// sayHi()




///////////////// RETURN STATEMENTS
// function goToCoffeeShop() {
//     return "your coffee is on its way."
// }
//  alert(goToCoffeeShop)

// function getRandomNumber() {
//     const randomNumber = Math.floor(Math.random() * 6) + 1;
//     return randomNumber
// }

// alert(getRandomNumber())
// console.log(getRandomNumber())
// const dieRoll = getRandomNumber()

// EX:
// function getYear() {
//     const year = new Date().getFullYear();
//     return year;
//    }

//    let yearToday = getYear()

// function isFieldEmpty() {
//     const field = document.querySelector('#info');
//     if (!field.value) {
//       return true;
//     } else {
//       return false;
//     }
//   }
  
//   const fieldTest = isFieldEmpty();
  
//   if (fieldTest) {
//     alert('please provide your info');
//   }

--------------------------------------------------------
// function max(n1,n2){
//   if (n1 > n2) {
//     return n1
//   } else { 
//     return n2
//   }
// }

// console.log(max(4,5))


  ////// SCOPE
  // global scope
// let person = 'Ryan'

// function greeting() {
//   //function scope
//   person = 'Meg';
//   alert(`Hi, ${person}!`);
// }



// greeting()
// alert(`good morning, ${person}!`)
// greeting()
