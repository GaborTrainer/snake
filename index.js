const { displayMainMenu } = require('./menu/mainMenu');
const keypress = require('keypress');
const { displayHighScore } = require('./menu/highScore');
const context = {
  mainMenuCurrentIndex: 0,
  mainMenuMaxIndex: 5,
  screen: 'mainMenu',
}

const exitGame = () => {
  process.stdin.pause();
  process.exit();
}

keypress(process.stdin);
process.stdin.on('keypress', (ch, key) => {
  if (key.name === 'down' && context.mainMenuCurrentIndex != context.mainMenuMaxIndex) {
    if (context.screen === 'mainMenu') {
      context.mainMenuCurrentIndex++;
      displayMainMenu(context);
    }
  }
  if (key.name === 'up' && context.mainMenuCurrentIndex != 0) {
    if (context.screen === 'mainMenu') {
      context.mainMenuCurrentIndex--;
      displayMainMenu(context);
    }
  }
  if (key && key.ctrl && key.name == 'c') {
    exitGame();
  }
  if (key.name === 'return' && context.mainMenuCurrentIndex === 5) {
    exitGame();
  }
  if (key.name === 'return' && context.mainMenuCurrentIndex === 2) {
    displayHighScore(context);
  }
  if (key.name === 'escape') {
    displayMainMenu(context);
  }
});

process.stdin.setRawMode(true);
process.stdin.resume();
displayMainMenu(context);
