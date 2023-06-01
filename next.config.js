/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ["rn-grwb-feeds", "nativewind"],
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // Transform all direct `react-native` imports to `react-native-web`
      "react-native$": "react-native-web",
      "rn-grwb-feeds": "rn-grwb-feeds",
    };
    config.resolve.extensions = [
      ".web.js",
      ".web.jsx",
      ".web.ts",
      ".web.tsx",
      ...config.resolve.extensions,
    ];
    return config;
  },
};
