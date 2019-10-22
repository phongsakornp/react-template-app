const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  output: {
    // Code spliting to supports browser caching.
    // https://webpack.js.org/guides/caching/
    filename: '[name].[contenthash].js',
  },
  plugins: [
    // Supports dotenv and other environment variables
    new Dotenv({
      path: './.env.production',
    }),
  ],
  devServer: {
    contentBase: './dist',
  },
};
