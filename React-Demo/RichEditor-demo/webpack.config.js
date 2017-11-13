const path = require('path');
var webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const getPath = p => path.resolve(__dirname, p);

console.log(`apppath: ${getPath('../RichEditor-demo/app')}`);

module.exports = {
  devtool: "eval-source-map",
  entry: ['webpack/hot/dev-server', __dirname + "/app/index.js"],
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },

  module: {
    //loaders 加载器
    loaders: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
              loader: 'css-loader',
              options: {
                modules: true,
                sourceMap: true,
                minimize: true,
                localIdentName: '[name]__[local]--[hash:base64:5]',
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins() {
                  return [
                    require('postcss-cssnext'),
                  ];
                },
              },
            },
          ]
        }),
        include: [
          getPath('../RichEditor-demo/app'),
        ],
      },
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(), //热模块替换插件
    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true,
    }),
  ],

  devServer: {
    contentBase: './build',
    historyApiFallback: true,
    inline: true,
    port: 8080,
  }
};