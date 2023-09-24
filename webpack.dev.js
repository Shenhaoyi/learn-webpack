import baseConfig from './webpack.base.js';

export default {
  ...baseConfig,
  // 开发服务器
  devServer: {
    host: 'localhost', // 启动服务器域名
    port: '3000', // 启动服务器端口号
    open: true, // 启动后自动打开默认浏览器
  },
  // 模式
  mode: 'development',
};
