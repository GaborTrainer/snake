const { table } = require('table');

const mainMenu = () => {
  const menuData = [
    ['new game'],
    ['settings'],
    ['high scores'],
    ['about the game'],
    ['version'],
    ['exit']]
  ;
  return table(menuData);
}
console.log(mainMenu());

const highScore = () => {

  const highScoreData = [
    ['user']['high Score'],
    ['']['at'],
    [''][''],
    [''][''],
    [''][''],
    ['']['']]
    ;
  return table(highScoreData);
  }
console.log(highScore());