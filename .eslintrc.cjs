module.exports = {
  root: true, // 此项是用来告诉eslint找当前配置文件时不再往父级文件查找
  env: {
    // 开启环境的全局变量
    // browser: true, // 浏览器环境
    // node: true, // node环境
    es2022: true, // 添加所有 ECMAScript 2022 的全局变量，并自动将解析器选项 ecmaVersion 设置为 13。
  },
  globals: {
    val1: 'off',
  },
  rules: {
    semi: 'warn',
  },
  parserOptions: {
    sourceType: 'module',
  },
  // ignorePatterns: ['dist'], 与.eslintignore文件效果一样
};
