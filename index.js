const { mainMenu, displayMainMenu } = require('./menu/mainMenu');
const { gameTitle } = require('./layout/gameTitle');
const keypress = require('keypress');
const { highScore } = require('./menu/highScore');
const context = {
  mainMenuCurrentIndex: 0,
  mainMenuMaxIndex: 5,
}



keypress(process.stdin);
process.stdin.on('keypress', (ch, key) => {
  if (key.name === 'down' && context.mainMenuCurrentIndex != context.mainMenuMaxIndex) {
    context.mainMenuCurrentIndex++;
    displayMainMenu(context);
  }
  if (key.name === 'up' && context.mainMenuCurrentIndex != 0) {
    context.mainMenuCurrentIndex--;
    displayMainMenu(context);
  }
  if (key && key.ctrl && key.name == 'c') {
    process.stdin.pause();
    process.exit();
  }
  if (key.name === 'return' && context.mainMenuCurrentIndex === 2) {
    console.clear();
    console.log(highScore());
  }
  if (key.name === 'escape') {
    displayMainMenu(context);
  }
});

process.stdin.setRawMode(true);
process.stdin.resume();
displayMainMenu(context);
