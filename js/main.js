'use strict';

const firstname = prompt("Please enter your name", " ");
console.log(firstname)

const surname = prompt("Please enter your surname", " ");
console.log(surname)

const color = prompt("Please enter your favorite color", " ");
console.log(color)

const pass = `This is your accuratissima and insgamabile password: ${firstname}${surname}${color}89` ;
console.log(pass)

document.querySelector ('h1').innerHTML = pass;