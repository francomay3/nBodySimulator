const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  watchOptions: {
    ignored: /node_modules/,
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 3000,
  },
};
