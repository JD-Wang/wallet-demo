// @ts-check
// const { defineConfig } = require('eslint-define-config');

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parser: '',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    jsxPragma: 'React',
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended', 'prettier'],
  rules: {
    'prettier/prettier': 'error', // 使用 prettier 插件提供的规则校验
    '@typescript-eslint/no-unused-vars': 'off', // 变量可以定义未使用
    '@typescript-eslint/ban-ts-comment': 'off', // 允许关闭、忽略ts检测
    '@typescript-eslint/no-explicit-any': 'off', // 允许使用any
    '@typescript-eslint/no-non-null-assertion': 'off', // 关闭空值检测
    '@typescript-eslint/explicit-module-boundary-types': 'off', // 模块可不返回类型
    'no-empty-function': 'off', // 可以使用空函数
    '@typescript-eslint/no-empty-function': 'off', // 可以使用空函数
  },
  settings: {},
  plugins: ['prettier'], // 使用 plugin 插件
}
