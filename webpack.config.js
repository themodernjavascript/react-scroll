const path = require('path');

module.exports = { 
  mode: "production", 
  entry: path.resolve(__dirname, 'src/index'), // an entry point indicates which module webpack should use to begin building 
  output: { 
    path: path.resolve(__dirname, 'dist'), // output directory 
    filename: 'react-scroller.js', // the name of output
    library: 'reactScroller', 
    libraryTarget: 'umd', 
  },
  module: {
    rules: [
      { 
        test: /\.jsx?$/, // test property identifies which file or files should be transformed
        use: ['babel-loader'], // use property indicates which loader should be used to do the transforming
        exclude: /node_modules/ 
      }, 
    ], 
  }, 
  // enables users to leave off the extension when importing
  resolve: { 
    extensions: ['.js', '.jsx'], 
  },
};