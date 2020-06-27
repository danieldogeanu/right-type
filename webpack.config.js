const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /^(?!.*\.(spec|test)\.js$).*\.js$/gi,
        exclude: /(node_modules|tests)/gi,
        loader: 'babel-loader',
      },
    ],
  },
}
