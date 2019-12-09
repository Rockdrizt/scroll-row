const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: path.resolve(__dirname + '/src/scrollRow.vue'),
  output: {
    path: path.resolve(__dirname + '/dist/'),
    filename: 'scroll-row.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: __dirname,
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  mode: 'development',
  optimization: {
    minimize: false
  },
  plugins: [
    new VueLoaderPlugin(),
  ]
};
