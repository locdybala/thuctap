const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry: './src/test/js/renderBox.js',
    output :{
        filename :'index.js',
        path : path.resolve(__dirname, 'dist')
    },
    mode : 'development',
    watch :true,
    plugins : [
        new CleanWebpackPlugin,
        new HtmlWebpackPlugin({
            title : 'gulp',
            filename : 'index.html'
        })
    ],
    devtool : 'inline-source-map',
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{
              loader: 'uglify-template-string-loader'
            }]
          }
        ]
      }
}