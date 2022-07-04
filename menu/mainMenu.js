const { table } = require('table');
const menuData = require('./menuData.json');

const mainMenu = () => {
  return table(menuData, {
    columnDefault: {
      alignment: 'center',
    }
  });
}

module.exports = {
  mainMenu: mainMenu,
};
