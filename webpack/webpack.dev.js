const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '../src/main/webapp/app/index.tsx'),
  output: {
    path: path.resolve(__dirname, '../build/resources/main/static/'),
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx$/,
        use: 'ts-loader', // ts-loader 사용
        exclude: /node_modules/, // node_modules는 제외
      },
      {
        test: /\.scss$/, // SCSS 파일 처리 규칙
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ],
  },
  mode: 'development',
  devServer: {
    port: 9000,
    open: true,
    historyApiFallback: true,
    proxy: [
      {
        context: ['/api'],
        target: `http://localhost:8080`,
        secure: false,
      },
      {
        context: ['/websocket'],
        target: 'ws://127.0.0.1:8080',
        ws: true,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/main/webapp/index.html'),
      title: 'Webpack Dev Server Example',
    }),
  ],
};
