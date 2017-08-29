const path = require("path");
const srcPath = path.resolve(__dirname, "src");
const buildPath = path.resolve(__dirname, "build");

module.exports = {
  entry: {
    app: srcPath + "/index.js"
  },
  output: {
    path: buildPath,
    filename: "bundle.js"
  },
  devtool: "source-map",
  module: {
    loaders: [      
      { /* Babel loader */
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        query: {
          presets: ["es2015", "react", "stage-0"],
          plugins: ['transform-decorators-legacy']        
        }
      },      
      { /* CSS loader */
        test: /\.scss$/, 
        include: srcPath,
        loader: "style-loader!css-loader!sass-loader"
      },      
      { /* Url loader */
        test: /\.png$/,
        loader: "url-loader",
        query: { 
          mimetype: "image/png" 
        }
      }
    ]
  }
};