const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'script.js',
    path: __dirname,
  },
  resolve: {
    fallback: {
      fs: false
    }
  }
};