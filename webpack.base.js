import path from 'path';
import process from 'process';

export default {
  // 入口
  // entry: './src/main.js', // 相对路径和绝对路径都可以（配置文件在根目录的话用相对路径就行）
  entry: {
    // 多入口的写法
    main: './src/main.js',
    // main2: './src/main2.js',
  },
  // 输出
  output: {
    // path: 文件输出目录，必须是绝对路径
    path: path.resolve(process.cwd(), 'dist'),
    // 输出文件名
    filename: 'static/[name].[contenthash:8].js', // 可以加上路径，会自动生成文件夹的
    chunkFilename: 'static/[name].[contenthash:8].chunk.js', // 动态导入模块输出的文件命名
    clean: true, // 在生成文件之前清空 output 目录
  },
};
