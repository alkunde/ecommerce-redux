module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true }],
    'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.js'] }],
    'react/state-in-constructor': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'warn',
    'no-unused-vars': 'warn',
    'no-param-reassign': 'off',
    'no-shadow': 'warn',
    'no-console': ['error', { allow: ['tron'] }],
  },
};
