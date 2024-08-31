// cypress/plugins/index.js
// cypress/plugins/index.js
const { readExcel } = require('./readExcel');

module.exports = (on, config) => {
  on('task', {
    readExcel(filePath) {
      return readExcel(filePath);
    },
  });
};
