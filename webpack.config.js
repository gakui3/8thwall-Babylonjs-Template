const path = require("path");

module.exports = {
  mode: "development",

  entry: "./docs/App.jsx",
  output: {
    path: `${__dirname}/docs/dist`,
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/react"],
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  target: ["web", "es5"],
  devServer: {
    hot: true,
    // historyApiFallback: true,
    port: 8081,
    // watchFiles: ["./docs/**/*"],
    // hot: true,
    static: {
      directory: path.join(__dirname, "/docs"),
    },
  },
};
