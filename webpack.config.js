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
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /(\.jsx)/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};