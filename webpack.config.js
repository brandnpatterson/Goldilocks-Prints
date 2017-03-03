const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

module.exports = {
  devtool: 'inline-sourcemap',
  entry: './app/js/App.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  module: {
    rules: [
      {
        test: /\.sass$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
          publicPath: 'public'
        })
      },
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
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Goldilocks Prints',
      minify: {
        collapseWhitespace: true
      },
      hash: true,
      inject: 'body',
      template: './app/index.ejs',
      output: {
        publicPath: '/'
      }
    }),
    new ExtractTextPlugin({
      filename: 'app.css',
      allChunks: true
    })
  ],
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  }
}
