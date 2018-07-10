const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/app.js",
  output: {
    path: __dirname + '/dist',
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"]
      }

    ]
  },
  plugins: [
     new HtmlWebpackPlugin({template: './index.html'})
  ],
  mode: 'development',
  devServer: {
           contentBase: __dirname + '/dist',
           port: 3000,
           open: true,
           openPage: ''
         }
};
