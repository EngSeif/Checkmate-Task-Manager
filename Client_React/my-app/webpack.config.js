// webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/index.js', // Adjust this to your entry point
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(mp4)$/,
        use: 'file-loader',
      },
      // Other rules (e.g., for JavaScript, CSS) can go here
    ],
  },
};
