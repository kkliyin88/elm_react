const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, './src/main.js'),
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js'
  },
  plugins: [ // 插件
    new htmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'),
      filename: 'index.html'
    })
  ],
  module: {
    rules: [
      {test: /\.css$/, exclude: /(node_modules)/, loader:'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]'},
      {test: /\.css$/, exclude: /(src)/, loader:'style-loader!css-loader'}, // 如果想要启用 CSS 模块化，可以为 css-loader 添加 modules 参数即可
      { test: /\.less$/, use: ['style-loader', 'css-loader?modules&localIdentName=[name]_[local]_[hash:5]', 'less-loader'] },
      { test: /\.scss$/, use: ['style-loader', 'css-loader?modules&localIdentName=[name]_[local]_[hash:5]', 'sass-loader'] },
      { test: /\.(png|gif|bmp|jpg)$/, use: 'url-loader?limit=5000' },
      { test: /\.jsx?$/, use: 'babel-loader', exclude: /node_modules/ }
    ]
  }
}