const HtmlWebpackPlugin = require("html-webpack-plugin")
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")

const dependencies = require("./package.json").dependencies

exports.onCreateWebpackConfig = ({ stage, actions, plugins, module }) => {
  actions.setWebpackConfig({
    plugins: [
      new ModuleFederationPlugin({
        name: "gatsby",
        filename: "remoteEntry.js",
        remotes: {
          joker: "joker@//localhost:3002/remoteEntry-joker.js",
        },
      }),
    ],
  })
}
