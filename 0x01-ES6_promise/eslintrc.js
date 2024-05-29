module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true, // Add this line to include Node.js environment
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    // Add your custom rules here
  },
};
