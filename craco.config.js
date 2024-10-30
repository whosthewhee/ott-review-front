const path = require("path");
//const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  //   webpack: {
  //     configure: (webpackConfig) => {
  //       // TsconfigPathsPlugin의 경우 resolve의 plugin으로 넣어줘야 tsconfig.json의 paths를 인식할 수 있다.
  //       webpackConfig.resolve.plugins = [new TsconfigPathsPlugin()];
  //       return webpackConfig;
  //     },
  alias: {
    "@src": path.resolve(__dirname, "./src"),
    "@components": path.resolve(__dirname, "./src/components"),
    "@pages": path.resolve(__dirname, "./src/pages"),
    "@utils": path.resolve(__dirname, "./src/utils"),
  },
  //   },
};
