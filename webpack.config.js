const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

const htmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  mode: 'production',
  //修改默认入口
  entry: './src/main.js',
  //修改默认出口
  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'index.js',
    clean: true
  },
  plugins: [
    new htmlWebpackPlugin({ template: './public/index.html' }),
    new MiniCssExtractPlugin({ filename: './src/index.css' }),
    new VueLoaderPlugin()
  ]
  ,
  devServer: {
    open: true,
    port: 30000,
  }
  ,
  module: {
    rules: [
      //css 文件解析
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      //less文件解析
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      //图片处理
      {
        test: /\.(gif|jpg|png|svg|ico)$/,
        type: 'asset/resource',
      },
      //vue
      {
        test: /\.vue/i,
        use: ['vue-loader']
      }
    ]
  }
}