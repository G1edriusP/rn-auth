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
          components: "./app/components",
        },
        allowExistingDirectories: true,
      },
    },
  },
};
