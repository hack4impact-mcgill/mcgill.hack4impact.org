module.exports = {
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: "empty",
      assetPrefix: isProd
        ? "https://hack4impact-mcgill.github.io/mcgill.hack4impact.org"
        : ""
    };

    return config;
  }
};
