# webpack
- **webpack.config.js** ⇒ Tells webpack from where and finally where and how to bundle, compile, load project files coupled with some other options like dev server, source maps, etc.

    ```jsx
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
    ```

- **.babelrc** ⇒ Instructions to babel loader on compiling the code

    ```jsx
    {
        "presets":[
            "@babel/preset-env",
            "@babel/preset-react"
        ],
        "plugins":[
            "@babel/plugin-proposal-class-properties" // Fancy plugin to help us use class based React components with a lot less complex code and  binding of "this" keyword
        ]
    }
    ```

- **package.json**

    ```json
    {
      "name": "indecision-app",
      "version": "1.0.0",
      "main": "index.js",
      "author": "Andrew Mead",
      "license": "MIT",
      "scripts": {
        "serve": "live-server public/",
        "build": "webpack",
        "dev": "webpack serve",
        "build-babel": "babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch"
      },
      "dependencies": {
        "@babel/core": "^7.13.15",
        "babel-cli": "6.24.1",
        "babel-loader": "^8.2.2",
        "babel-preset-env": "1.5.2",
        "babel-preset-react": "6.24.1",
        "css-loader": "^5.2.3",
        "live-server": "^1.2.0",
        "node-sass": "^5.0.0",
        "react": "^17.0.2",
        "react-dom": "^17.0.2",
        "sass-loader": "^11.0.1",
        "style-loader": "^2.0.0",
        "webpack": "3.1.0",
        "webpack-cli": "^4.6.0",
        "webpack-dev-server": "^3.11.2"
      },
      "devDependencies": {
        "@babel/plugin-proposal-class-properties": "^7.13.0",
        "@babel/preset-env": "^7.13.15",
        "@babel/preset-react": "^7.13.13"
    ```

