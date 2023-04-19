module.exports = {
  env: {
    browser: false,
    es2021: true,
    jest: true,
  },
  extends: 'airbnb-base',
  overrides: [
    {
      files: ["**/*.test.js"],
      env: { "jest/globals": true },
      plugins: ["jest"],
      extends: ["plugin:jest/recommended"],
    },
  ],
  plugins: ["jest"],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: "module"
  },
  rules: {
  },
};
