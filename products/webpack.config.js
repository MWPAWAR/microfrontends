const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/Container/ModuleFederationPlugin');
const packageJson = require('./package.json');

module.exports = {
  entry: "./src/index",
  mode: 'development',
  devServer: {
    port: 8081,
    static: path.join(__dirname, "dist"),
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
      name: 'productsApp',
      filename: 'remoteEntry.js',
      exposes: {
        './Products': './src/components/Products',
      },
      shared: packageJson.dependencies,
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}