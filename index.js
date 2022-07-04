const { table } = require('table');
const { highScore } = require('./menu/highScore');
const { mainMenu } = require('./menu/mainMenu');
const { gameTitle } = require('./layout/gameTitle');

console.log(highScore());
console.log(mainMenu());
gameTitle();