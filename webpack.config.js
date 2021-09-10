const DeadCodePlugin = require("webpack-deadcode-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  optimization: {
    usedExports: true,
  },
  plugins: [
    new DeadCodePlugin({
      patterns: ["src/**/*.(js|jsx|css)"],
    }),
  ],
};
