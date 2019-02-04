const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode : 'development',
    entry : './assets/js/index.js',

    output : {
        path : path.resolve(__dirname, 'dist'),
        filename : 'bundle.js',
        //publicPath : 'assets/'
    },

    plugins : [
        
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),

        new MiniCssExtractPlugin('assets/css/index.css'),
    ],

    module: {
        rules: [
          {
            test: /\.css$/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  publicPath: '../'
                }
              },
              "css-loader"
            ]
          },
        ]
    }
}  