const path = require('path')

module.exports = {
  context: path.join(__dirname, '/scripts'),
  entry: './App.js',
  devtool: 'cheap-module-source-map',
  output: {
    path: path.join(__dirname, '/public'),
    publicPath: '/public/',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        include: [
          path.resolve('scripts')
        ]
      }
    ]
  }
}
