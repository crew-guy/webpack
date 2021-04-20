const path = require('path')

module.exports = {
  // mode: 'development',
  entry: './src/index.js', // Relative path to entry file
  output: { 
    path: path.join(__dirname, 'public'), // Absolute path to output file
    filename:"bundle.js"
  },
  module: {
    rules: [{
      loader: 'babel-loader', // For compiling all react JS files into babel-loaded, cross- browser understandable ES5 JS 
      test: /\.js$/,
      exclude:/node_modules/
    }, {
      test:/\.scss$/, // For compiling SCSS directly to CSS and using the scss files straight out of the box
      use: [
        'style-loader',
        'css-loader',
        'sass-loader',
      ],
    }
    ]
  },
  devtool: 'eval-cheap-module-source-map', // To grant Chrome Dev Tools to take us straight to the module we messed up in instead of the line of code in the final bundled JS file
  devServer: {
    contentBase : path.join(__dirname,'public') // To serve a folder's HTML, CSS, JS etc. for development
  }
}