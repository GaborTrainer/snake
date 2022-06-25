const { table } = require('table');

const mainMenu = () => {
  const menuData = [
    ['new game'],
    ['settings'],
    ['high scores'],
    ['about the game'],
    ['version'],
    ['exit']
  ];

  return table(menuData);
}
console.log(mainMenu());

const highScore = () => {

  const highScoreData = [
    ['user', 'high Score'],
    ['', 1],
    ['', 2],
    ['', 3],
    ['', 4],
    ['', 5]
  ];

  return table(highScoreData);
  }
console.log(highScore());