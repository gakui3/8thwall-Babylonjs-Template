const path = require("path");

module.exports = {
  mode: "development",

  entry: "./docs/index.js",
  output: {
    path: `${__dirname}/docs`,
    filename: "dist.js",
  },
  module: {
    rules: [],
  },
  resolve: {
    extensions: [".js"],
  },
  target: ["web", "es5"],
  devServer: {
    hot: true,
    // historyApiFallback: true,
    static: {
      directory: path.join(__dirname, "/docs"),
    },
  },
};
