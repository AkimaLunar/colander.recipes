var path = require("path");


module.exports = {
  entry: "./app/app.js",
  output: {
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {test: /\.hbs$/, loader: "handlebars-loader"}
    ]
  },
  watch: true

}