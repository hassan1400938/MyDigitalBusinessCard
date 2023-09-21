const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./index.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "index_bundle.js",
  },
  target: "web",
  devServer: {
    port: "5000",
    contentBase: "./build",
    static: {
      directory: path.join(__dirname, "public"),
    },
    open: true,
    hot: true,
    liveReload: true,
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
  module: {
    rules: [
      {
        /** Include all modules that pass test assertion. */
        test: /\.(js|jsx)$/,
        /** Exclude all modules matching any of these conditions. */
        exclude: /node_modules/,
        /** Loader to be used */
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        /** Each entry specifies a loader to be used. */
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "file-loader",
        options: {
          /** Loading the image file to the specified directory. */
          name: "resource/image/[name].[ext]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
  ],
};
