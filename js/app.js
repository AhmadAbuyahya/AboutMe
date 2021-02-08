'use strict';
let userName = prompt('Hello! What\'s your name?');
alert('Hello '+userName+', welcome to my website! are you ready to play a little guessing game about me? ');
let answer1 = prompt('Is my name Ahmad? (y/n)');
if (answer1.toLocaleLowerCase()==='y'){
  alert('That\'s correct!');
}
else {
  alert('That\'s incorrect!');
}
let answer2 = prompt('Am I Jordanian? (y/n)');
if (answer2.toLocaleLowerCase()==='y'){
  alert('That\'s correct!');
}
else {
  alert('That\'s incorrect!');
}
let answer3 = prompt('Am I a student at ASAC? (y/n)');
if (answer3.toLocaleLowerCase()==='y'){
  alert('That\'s correct!');
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
}
let answer5 = prompt('Do I enjoy learning coding at ASAC? (y/n)');
if (answer5.toLocaleLowerCase()==='y'){
  alert('That\'s correct!');
}
else {
  alert('That\'s incorrect!');
}
alert('Thank you '+userName+' for playing my game! you can learn more about me in the next page.');

