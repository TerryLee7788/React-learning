const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: [
    './app/app.jsx'
  ],
  output: {
    path: __dirname,
    filename: './build/bundle.js'
  },
  resolve: {
    alias: {
      ComponentOne: path.resolve(__dirname, './app/components/ComponentOne.jsx'),
      ComponentTwo: path.resolve(__dirname, './app/components/ComponentTwo.jsx'),
      ListComponents: path.resolve(__dirname, './app/components/ListComponents.jsx'),
      GreeterComponents: path.resolve(__dirname, './app/components/GreeterComponents.jsx'),
      GreeterMessage: path.resolve(__dirname, './app/components/GreeterMessage.jsx'),
      GreeterForm: path.resolve(__dirname, './app/components/GreeterForm.jsx'),
    },
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};