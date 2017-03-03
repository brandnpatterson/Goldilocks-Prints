const path = require('path');

module.exports = {
  devtool: 'inline-sourcemap',
  context: path.join(__dirname, './app'),
  entry: [
    './js/App.js',
  ],
  output: {
    path: path.join(__dirname, './public/js'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['latest']
        }
      }
    ]
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  }
};
