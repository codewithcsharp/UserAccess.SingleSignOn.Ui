module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.entry = './src/index.jsx';
      return webpackConfig;
    },
  },
};
