//const { highScore } = require('./menu/highScore');
const { mainMenu } = require('./menu/mainMenu');
const { gameTitle } = require('./layout/gameTitle');
const keypress = require('keypress');
const context = {
  mainMenuCurrent: 0,
  mainMenuMaxIndex: 5,
}

keypress(process.stdin);
process.stdin.on('keypress', function (ch, key) {
  if (key.name === 'down' && mainMenuCurrent != context.mainMenuMaxIndex) {
    context.mainMenuCurrent++;
    console.clear();
    console.log(mainMenu(context));
  }
  if (key.name === 'up' && mainMenuCurrent != 0) {
    context.mainMenuCurrent--;
    console.clear();
    console.log(mainMenu(context));
  }
  if (key && key.ctrl && key.name == 'c') {
    process.stdin.pause();
    process.exit();
  }
});

process.stdin.setRawMode(true);
process.stdin.resume();

//console.log(highScore());
console.log(mainMenu(context));
gameTitle();
