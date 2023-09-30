import path from 'path';
import process from 'process';

export default {
  // 入口
  entry: './src/main.js', // 相对路径和绝对路径都可以（配置文件在根目录的话用相对路径就行）
  // 输出
  output: {
    // path: 文件输出目录，必须是绝对路径
    path: path.resolve(process.cwd(), 'dist'),
    // 输出文件名
    filename: 'static/main.js', // 可以加上路径，会自动生成文件夹的
    clean: true, // 在生成文件之前清空 output 目录
  },
};
