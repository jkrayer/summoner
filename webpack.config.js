module.exports = [
  {
    entry: {
      app: ['./src/js/myapp.jsx']
    },
    output: {
      path: './dist/js',
      filename: 'bundle.js'
    },
    module: {
      loaders: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel'
        }
      ]
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    }
  },
  {
    entry: {
      app: ['./src/css/style.scss']
    },
    output: {
      path: './dist/css',
      filename: 'style.css'
    },
    module: {
      loaders: [
        {
          test: /\.scss$/,
          loaders: ['style', 'css', 'sass']
        }
      ]
    }
  }
];
