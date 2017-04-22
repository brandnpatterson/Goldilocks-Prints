var path = require('path');

module.exports = {
  devtool: 'inline-sourcemap',
  devServer: {
    port: 8888,
    stats: 'errors only'
  },
  context: path.join(__dirname, './src'),
  entry: [
    './index.js',
  ],
  output: {
    path: path.resolve(__dirname, './public/js'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['latest']
        }
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader'
      }
    ]
  },
  node: {
    fs: 'empty'
  }
};
