'use strict';
let score=0;
let userName = prompt('Hello! What\'s your name?');
alert('Hello '+userName+', welcome to my website! are you ready to play a little guessing game about me? ');
let answer1 = prompt('Is my name Ahmad? (y/n)');
if (answer1.toLocaleLowerCase()==='y'){
  alert('That\'s correct!');
  score++;
}
else {
  alert('That\'s incorrect!');
}
let answer2 = prompt('Am I Jordanian? (y/n)');
if (answer2.toLocaleLowerCase()==='y'){
  alert('That\'s correct!');
  score++;
}
else {
  alert('That\'s incorrect!');
}
let answer3 = prompt('Am I a student at ASAC? (y/n)');
if (answer3.toLocaleLowerCase()==='y'){
  alert('That\'s correct!');
  score++;
}
else {
  alert('That\'s incorrect!');
}
let answer4 = prompt('Do I have a background in programming? (y/n)');
if (answer4.toLocaleLowerCase()==='y'){
  alert('That\'s incorrect!');
}
else {
  alert('That\'s correct!');
  score++;
}
let answer5 = prompt('Do I enjoy learning coding at ASAC? (y/n)');
if (answer5.toLocaleLowerCase()==='y'){
  alert('That\'s correct!');
  score++;
}
else {
  alert('That\'s incorrect!');
}

let counter = 0;
let answerWrong = false;
const myAge=23;
while (counter < 4) {
  let ageGuess= prompt('Can you guess my age?');
  if(ageGuess>myAge){
    alert('That\'s too high!');
  }
  else if (ageGuess<myAge){
    alert('That\'s too low!');
  }
  else if (ageGuess==myAge){
    alert('You got it! good job.');
    answerWrong = true;
    score++;
    break;
  }
  counter++;
}
if (!answerWrong) {
  alert('Sorry, you ran out of guesses, my age is 23.');
}

let favFood=['mansaf','pizza','spaghetti','burger','falafel','kebab'];
for(let i=0 ; i < 6 ; i++ ){
  let foodGuess=prompt('Can you guess my favorite food?');
  for(let j=0; j<favFood.length; j++){
    if (foodGuess === favFood[j]){
      alert('You got it! good job.');
      score++;
      i=6;
      break;
    }
  }
  if (i!==6){
    alert('Wrong answer, try again!');
  }
}
alert('My favorite foods are: mansaf, pizza, spaghetti, burger and kebab');
alert('Thank you '+userName+' for playing my game! you answered '+score+'/7 questions correctly, you can learn more about me in the next page.');

