const path = require('path');

module.exports = {
  devtool: 'inline-sourcemap',
  devServer: {
    port: 8888
  },
  context: path.join(__dirname, './app'),
  entry: [
    './js/App.js',
  ],
  output: {
    path: path.join(__dirname, '/public/js'),
    publicPath: '/js',
    filename: 'bundle.js'
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
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  }
};
