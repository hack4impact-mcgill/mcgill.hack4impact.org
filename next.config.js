module.exports = {
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: "empty"
    };

    return config;
  },
  assetPrefix:
    process.env.NODE_ENV === "production" ? "/mcgill.hack4impact.org" : "",
  exportPathMap: function() {
    return {
      "/": { page: "/" },
      "/about": { page: "/about" }
    };
  }
};
