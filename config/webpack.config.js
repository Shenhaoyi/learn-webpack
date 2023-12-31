import path from 'path';
import process from 'process';
import ESLintPlugin from 'eslint-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

// 截止p23的配置

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
        generator: {
          filename: 'images/[hash:10][ext][query]',
        },
      },
      {
        test: /\.(woff2?|ttf)$/, // iconfont
        type: 'asset/resource',
        generator: {
          filename: 'media/[hash:10][ext][query]',
        },
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/, // 引用到的包不再重复处理
        use: {
          loader: 'babel-loader',
          // options: {
          //   presets: ['@babel/preset-env'], // 在babel.config.js文件中配置就行了
          // },
        },
      },
    ],
  },
  // 插件
  plugins: [
    new ESLintPlugin({
      // context: path.resolve(process.cwd()),
      // extensions: ['js'],
      // exclude: ['node_modules'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(process.cwd(), 'public/index.html'),
    }),
  ],
  // 开发服务器
  devServer: {
    host: 'localhost', // 启动服务器域名
    port: '3000', // 启动服务器端口号
    open: true, // 启动后自动打开默认浏览器
  },
  // 模式
  mode: 'development',
};
