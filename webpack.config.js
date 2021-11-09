const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    renderer: "./src/renderer.js",
  },
  plugins: [new HtmlWebpackPlugin()],
};
