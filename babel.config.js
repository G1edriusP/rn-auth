module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          assets: "./src/assets",
          components: "./src/components",
          constants: "./src/constants",
          screens: "./src/screens",
          styles: "./src/styles",
          utils: "./src/utils",
        },
      },
    ],
  ],
};
