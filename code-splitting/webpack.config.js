var path = require('path');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {loader} = require("enhanced-resolve");

module.exports = {
  mode: 'none', // production(배포용), development(개발용), none
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // css 파일을 올바르게 가져오기 위해서 loader를 추가한다
        use: [{loader: MiniCssExtractPlugin.loader}, "css-loader"]
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin()
  ],
}