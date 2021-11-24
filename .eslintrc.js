module.exports = {
  root: true,
  extends: [
    "@react-native-community",
    "airbnb-typescript",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react",
  ],
  settings: {
    "import/resolver": {
      "babel-module": {
        alias: {
          assets: "./src/assets",
          components: "./src/components",
          constants: "./src/constants",
          screens: "./src/screens",
          styles: "./src/styles",
          utils: "./src/utils",
        },
        allowExistingDirectories: true,
      },
    },
  },
};
