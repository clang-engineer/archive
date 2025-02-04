const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '../src/main/webapp/app/index.ts'),
  output: {
    path: path.resolve(__dirname, '../build/resources/main/static/'),
  },
  resolve: {
    extensions: ['.ts', '.js'], // .ts 확장자를 인식하도록 설정
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // TypeScript 파일을 처리
        use: 'ts-loader', // ts-loader 사용
        exclude: /node_modules/, // node_modules는 제외
      },
    ],
  },
  mode: 'development',
  devServer: {
    port: 9000,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/main/webapp/index.html'),
      title: 'Webpack Dev Server Example',
    }),
  ],
};
