const highScoreData = require('./highScore.json');
const { table } = require('table');

const highScore = () => {
  return table(highScoreData, {
    columnDefault: {
      alignment: 'center',
    }
  });
}

const displayHighScore = (context) => {
  context.screen = 'highScore';
  console.clear();
  console.log(highScore());
}

module.exports = {
  highScore: highScore,
  displayHighScore: displayHighScore,
};
