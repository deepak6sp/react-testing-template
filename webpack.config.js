const path = require('path');

module.exports = {
  mode: "development",
  entry: {
    main: './src/main.ts', 
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
      },
      { test: /\.tsx?$/, use: "awesome-typescript-loader" }
    ]
  },
  resolve: {
    extensions: [ ".ts", ".tsx", '.jsx', '.js' ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
};
