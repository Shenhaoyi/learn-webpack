import baseConfig from './webpack.base.js';
import path from 'path';
import process from 'process';
import ESLintPlugin from 'eslint-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

export default {
  ...baseConfig,
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
        test: /\.m?jsx?$/,
        exclude: /node_modules/, // 引用到的包不再重复处理
        resolve: {
          /*
            https://github.com/graphql/graphql-js/issues/2721
            解决配置了resolve.extensions之后，不写拓展名报错的问题
          */
          fullySpecified: false,
        },
        use: {
          loader: 'babel-loader',
          options: {
            //   presets: ['@babel/preset-env'], // 在babel.config.js文件中配置就行了
            cacheDirectory: true, // 开启babel编译缓存
            cacheCompression: false, // 缓存文件不要压缩
            plugins: [await import.meta.resolve('react-refresh/babel')],
          },
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
    new ReactRefreshWebpackPlugin(),
  ],
  // 开发服务器
  devServer: {
    host: 'localhost', // 启动服务器域名
    port: '3000', // 启动服务器端口号
    open: true, // 启动后自动打开默认浏览器
    hot: true, // 默认就是 true
  },
  // 模式
  mode: 'development',
  devtool: 'cheap-module-source-map',
};
