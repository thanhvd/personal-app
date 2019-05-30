const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devtool: "inline-source-map",
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: ["babel-loader", "eslint-loader"]
      },
      {
        test: /\.(js|jsx)$/,
        use: "react-hot-loader/webpack",
        include: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "build/"),
    publicPath: "/build/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "build/"),
    port: 8080,
    publicPath: "http://localhost:8080/build/",
    hotOnly: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve("./public/index.html")
    })
  ],
  performance: { hints: false }
};
