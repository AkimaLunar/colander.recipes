var path = require("path");


module.exports = {
  entry: "./app/app.js",
  output: {
    filename: "app.bundle.js"
  },
  module: {
    loaders: [
      {test: /\.hbs$/, use: "handlebars-loader"}
    ]
  },
  // externals: {
  //     // require("jquery") is external and available
  //     //  on the global var $
  //     "jquery": "$"
  // },
  watch: true

}