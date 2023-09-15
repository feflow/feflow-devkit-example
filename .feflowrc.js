const path = require('path');

module.exports = {
  devkit: {
    commands: {
      dev: {
        builder: 'devkit-demo:dev',
      },
      build: {
        builder: 'devkit-demo:build',
      }
    }
  }
}