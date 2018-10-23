const path = require('path');

module.exports = {
  mode: "development",
  entry: {
    main: './src/main.js', 
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
              "presets": ["@babel/preset-env", "@babel/preset-react"]
          }
        },
      }
    ]
  },
  resolve: {
    extensions: [ 'jsx', '.js' ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
};
