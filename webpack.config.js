const path = require('path');

module.exports = {
  entry: './src/index.js', // Replace with the path to your main JS file
  output: {
    filename: 'ChatComponent.bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production', // Use 'development' for development
};
