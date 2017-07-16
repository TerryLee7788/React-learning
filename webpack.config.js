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
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};