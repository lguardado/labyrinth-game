module.exports = {
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  plugins: ['react', '@typescript-eslint', 'jest', "testing-library"],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    "no-plusplus": "off",
    "@typescript-eslint/no-unused-expressions": "off",
    "react/destructuring-assignment": "off",
    "react/prop-types": "off",
    "react/sort-comp": "off",
    "no-return-assign": "off",
    "no-return-reassign": "off",
    "@typescript-eslint/camelcase": "off",
    "react/state-in-constructor": "off",
    'linebreak-style': "off",
    "consistent-return": "off",
    "no-param-reassign": "off",
    "no-nested-ternary": "off",
    "react/no-array-index-key": "off",
    "react/jsx-props-no-spreading": "off",
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};