export default {
  presets: [
    [
      '@babel/preset-env',
      {
        // 按需从 corejs 引入 polyfill
        useBuiltIns: 'usage',
        corejs: '3',
      },
    ],
  ],
  plugins: ['@babel/plugin-transform-runtime'],
};
