let path = require("path");

let HTMLWebpackPlagin = require("html-webpack-plugin");
let { CleanWebpackPlugin } = require("clean-webpack-plugin");

let CopyWebpackPligin = require("copy-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "development",
  entry: {
    main: "./index.js",
    "active-info": "./active-info",
  },
  output: {
    filename: "[name].[contenthash].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },

  resolve: {
    extensions: [".js", ".json", ".jpg", ".css", ".svg"],
  },

  plugins: [
    new HTMLWebpackPlagin({
      filename: "index.html",
      template: "./index.html",
    }),
    new HTMLWebpackPlagin({
      filename: "about.html",
      template: "./about.html",
    }),
    new HTMLWebpackPlagin({
      filename: "contact.html",
      template: "./contact.html",
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPligin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/icon.svg"),
          to: path.resolve(__dirname, "dist"),
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.(jpg|png|gif|jpeg)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(ttf|wolf|wolf2)$/,
        use: ["file-loader"],
      },
    ],
  },
  devServer: {
    port: 4200,
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};
