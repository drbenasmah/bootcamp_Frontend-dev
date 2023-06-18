// var generateName = require('sillyname');

import generateName from "sillyName";
var sillyName = generateName();

console.log(`My name is ${sillyName}.`);

// const superheroes = require('superheroes');

import superheroes from "superheroes";
 
superheroes.all;
//=> ['3-D Man', 'A-Bomb', …]
 
superheroes.random();

console.log(`I am ${superheroes.random()}!!!`);