const webpack = require('webpack');
const common = require('../webpack.config');

const buildDev = () => new Promise((resolve, reject) => {
  webpack({
    ...common,
    mode: 'production',
  }, (err) => {
    if (err) {
      console.error(err.stack || err);
      return reject();
    }
    resolve();
  });
});

module.exports = buildDev;
