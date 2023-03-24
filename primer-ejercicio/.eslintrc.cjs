module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  plugins: [
    'react'
  ],
  rules: {
  }
  
}
{
  "extends": ["plugin:react/jsx-runtime"]
}