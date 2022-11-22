module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
  },
  extends: ['eslint:recommended'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? ['warn', { allow: ['info', 'warn', 'error']}] : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'comma-dangle': ['warn', 'always-multiline'],
    'no-unused-vars': 'warn',
  },
}
