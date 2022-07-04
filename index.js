const { table } = require('table');
const menuData = require('./menuData.json');
const highScoreData = require('./highScore.json');

const mainMenu = () => {
  return table(menuData, {
    columnDefault: {
      alignment: 'center',
    }
  });
}

console.log(mainMenu());

const highScore = () => {
  return table(highScoreData, {
    columnDefault: {
      alignment: 'center',
    }
  });
}

console.log(highScore());

const gameTitle = () => {
  const text = 'snake game by Gabor Nagy';
  const textLength = text.length;
  const terminalLength = 80; //process.stdout.columns;
  console.log(terminalLength);
  const offset = (terminalLength - textLength) / 2;
  let offsetString = '';
  for (let i = 0; i < offset; i++) {
    offsetString = ' ' + offsetString;
  }
  const resultText = offsetString + text;
  console.log(resultText);
};
gameTitle();