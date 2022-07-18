const { table } = require('table');
const menuData = require('./menuData.json');
const _ = require('lodash');

const mainMenu = (context) => {
  const menuDataInstance = _.cloneDeep(menuData);
  const currentText = menuDataInstance[context.mainMenuCurrent][0];
  menuDataInstance[context.mainMenuCurrent][0] = `[${currentText}]`;
  return table(menuDataInstance, {
    columnDefault: {
      alignment: 'center',
    }
  });
}

module.exports = {
  mainMenu: mainMenu,
};
