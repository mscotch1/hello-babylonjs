const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    index: './src/index.js',
  },
  mode: 'development', 
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
      },
    ],
  },
};

