const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const common = require('../webpack.config');

const buildDev = () => {
  const compiler = webpack(common);
  const server = new WebpackDevServer({
    open: true,
    hot: false,
    client: false,
  }, compiler);
  return server.start();
};

module.exports = buildDev;
