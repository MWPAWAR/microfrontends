const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/Container/ModuleFederationPlugin');
const packageJson = require('./package.json');

module.exports = {
  entry: "./src/index",
  mode: 'development',
  devServer: {
    static: path.join(__dirname, "dist"),
    port: 8080
  },
  output: {
    publicPath: "auto",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          "presets": [
            "@babel/preset-env",
            ["@babel/preset-react", {"runtime": "automatic"}]
          ]
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        productsApp: 'productsApp@http://localhost:8081/remoteEntry.js',
      },
      shared: packageJson.dependencies,
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}