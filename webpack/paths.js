const path = require('path');

module.exports = {
  root: path.resolve(__dirname, '../'),
  output: path.resolve(__dirname, '../', 'build'),
  outputAssets: path.resolve(__dirname, '../', 'build'),
  template: path.resolve(__dirname, '../', 'views/index.html'),
  serverEntry: path.resolve(__dirname, '../', 'server/index.js'),
  serverFolder: path.resolve(__dirname, '../', 'server'),
};
