module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: ["airbnb-base", "plugin:jest/all"],
  plugins: ["jest"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
	  excludedFiles: "babel.config.js",
    },
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {
    "no-console": "off",
    "no-shadow": "off",
    "no-restricted-syntax": ["error", "LabelStatement", "WithStatement"],
  },
};
