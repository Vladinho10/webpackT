const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractCssChunks = require("extract-css-chunks-webpack-plugin");
const path = require('path');

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, './dist'),
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
        test: /\.less$/,
        use: [{
                loader: ExtractCssChunks.loader // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "less-loader" // compiles Less to CSS
            }]
      }

    ]
  },
  plugins: [
     new HtmlWebpackPlugin({template: './index.html'}),
     new ExtractCssChunks({
       path: path.resolve(__dirname, './dist'),
       filename: "styles.css",
       hot: true
     })
  ],
  mode: 'production',

  devServer: {
           contentBase: __dirname + '/dist',
         }
};
