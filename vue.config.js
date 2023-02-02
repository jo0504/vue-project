const { node } = require("webpack");

module.exports = {
  publicPath: "",
  pages: {
    index: {
      entry: "src/main.js",
      title: "vue-project",
    },
  },
  devServer: {
    port: 8080,
  }
}