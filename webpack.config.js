const { merge }  = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "rc-ses",
    projectName: "self-service-provider-demo-react-ui",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    externals: /^@rc-ses\/.+/,
  });
};
