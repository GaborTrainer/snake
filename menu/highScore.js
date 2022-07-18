const highScoreData = require('./highScore.json');
const { table } = require('table');

const highScore = () => {
  return table(highScoreData, {
    columnDefault: {
      alignment: 'center',
    }
  });
}

module.exports = {
  highScore: highScore,
};
