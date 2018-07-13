const path = require('path');

module.exports = { 
  mode: "production", 
  // an entry point indicates which 
  // module webpack should use to begin building 
  entry: path.resolve(__dirname, 'src/index'), 
  output: { 
    // output directory
    path: path.resolve(__dirname, 'dist'), 
    // the name of output
    filename: 'react-scroller.js', 
    library: 'reactScroller', 
    libraryTarget: 'umd', 
  },
  module: {
    rules: [
      { 
        // test property identifies which file 
        // or files should be transformed
        test: /\.jsx?$/, 
        // use property indicates which 
        // loader should be used to do the transforming
        use: ['babel-loader'], 
        exclude: /node_modules/ 
      }, 
    ], 
  }, 
  // enables users to leave off the extension when importing
  resolve: { 
    extensions: ['.js', '.jsx'], 
  },
};
