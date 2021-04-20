const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    a: path.resolve('./src/a.js'),
    b: path.resolve('./src/b.js')
  },
  devtool: 'cheap-module-source-map',
  devServer: {
    dev: {
      writeToDisk: true,
    }
  },
  optimization: {
    runtimeChunk: true,
  },
  experiments: {
    lazyCompilation: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'a.html',
      template: path.resolve('./index.html'),
      chunks:['a']
    }),
    new HtmlWebpackPlugin({
      filename: 'b.html',
      chunks:['b'],
      template: path.resolve('./index.html')
    })
  ]
}