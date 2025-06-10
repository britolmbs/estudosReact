module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'react-app',
    'plugin:react/recommended',
    'prettier', // Removido "prettier/react"
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@babel/eslint-parser', // Alterado para @babel/eslint-parser
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'react-hooks'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': 0,
    'import/prefer-default-export': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
