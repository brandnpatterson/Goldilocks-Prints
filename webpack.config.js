const path = require('path')

module.exports = {
  devtool: 'inline-sourcemap',
  devServer: {
    historyApiFallback: true,
    port: 8888
  },
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: 'public'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  module: {
    rules: [
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
          presets: ['react', 'latest', 'stage-0']
        }
      },
      {
        test: /\.sass$/,
        loaders: [ 'style-loader', 'css-loader', 'postcss-loader', 'sass-loader' ]
      },
      {
        test: /\.s?css$/,
        loaders: [ 'style-loader', 'css-loader', 'postcss-loader', 'sass-loader' ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'url-loader'
      },
      {
         test: /\.html$/,
         loader: 'raw-loader'
      }
    ]
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  }
}
