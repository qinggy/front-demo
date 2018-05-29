const path = require('path');
var webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const getPath = p => path.resolve(__dirname, p);

console.log(__dirname);
const isDev = process.env.NODE_ENV === 'dev ';

module.exports = {
  entry: [
    __dirname + "/build/tinymce/tinymce.min.js",
    __dirname + "/build/tinymce/plugins/code/plugin.js",
    __dirname + "/build/tinymce/plugins/image/plugin.js",
    __dirname + "/build/tinymce/plugins/link/plugin.js",
    __dirname + "/build/tinymce/plugins/lists/plugin.js",
    __dirname + "/build/tinymce/plugins/paste/plugin.js",
    __dirname + "/build/tinymce/plugins/textcolor/plugin.js",
    __dirname + "/build/tinymce/themes/modern/theme.js",
    __dirname + "/app/index.js"
  ],
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
                sourceMap: true,
                minimize: true,
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
          getPath('../RichEditor-demo/build/tinymce/skins'),
        ],
      },
      {
        test: /\.(gif|svg)$/,
        include: [
          getPath('../RichEditor-demo/app'),
          getPath('../RichEditor-demo/build/tinymce/skins/lightgray/img/'),
        ],
        use: [{
          loader: 'file-loader',
          options: {
            name: './resources/images/[name]_demo.[ext]',
            publicPath: ' ',
          },
        }],
      },
      {
        test: /\.(woff|eot|ttf|svg)$/,
        include: [
          getPath('../RichEditor-demo/build/tinymce/skins/lightgray/fonts/'),
        ],
        use: [{
          loader: 'file-loader',
          options: {
            name: './resources/fonts/[name]_demo.[ext]',
            publicPath: ' ',
          },
        }],
      },
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin({
      filename: 'richeditor.css',
      allChunks: true,
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   sourceMap: true,
    // }),
  ].filter(_ => _),

  devServer: {
    contentBase: './build',
    historyApiFallback: true,
    inline: true,
    port: 8080,
  }
};