import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';


const config = {
  entry: ['./src/index'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        exclude: /node_modules|packages/,
        test: /\.js$/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin(), new webpack.NamedModulesPlugin()],
}

export default config;