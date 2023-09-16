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
    filename: 'main.js',
  },
  // 加载器
  module: {
    rules: [
      {
        test: /\.css$/, // 处理css文件
        use: ['style-loader', 'css-loader'], // 默认处理顺序是从右到左
      },
      {
        test: /\.less$/, // 处理less文件
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/, // 图片
        type: 'asset', // 根据parser.dataUrlCondition 判断是将文件输出到目标目录还是生成base64打包到js文件中
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024, // 小于100kb的图片会被base64处理(默认是8kb)
          },
        },
      },
    ],
  },
  // 插件
  plugins: [],
  // 模式
  mode: 'development',
};
