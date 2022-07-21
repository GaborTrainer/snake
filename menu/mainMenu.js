const { table } = require('table');
const menuData = require('./menuData.json');
const _ = require('lodash');

const mainMenu = (context) => {
  const menuDataInstance = _.cloneDeep(menuData);
  const currentText = menuDataInstance[context.mainMenuCurrentIndex][0];
  menuDataInstance[context.mainMenuCurrentIndex][0] = `[${currentText}]`;
  return table(menuDataInstance, {
    columnDefault: {
      alignment: 'center',
    }
  });
}

const displayMainMenu = (context) => {
  console.clear();
  console.log(mainMenu(context));
}

module.exports = {
  mainMenu: mainMenu,
  displayMainMenu: displayMainMenu,
};
