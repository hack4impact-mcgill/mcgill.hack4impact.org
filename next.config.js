const isProduction = (process.env.NODE_ENV || "").trim() === "production";

module.exports = {
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: "empty"
    };

    return config;
  },
  assetPrefix: "/mcgill.hack4impact.org",
  publicRuntimeConfig: {
    linkPrefix: "/mcgill.hack4impact.org"
  }
};
