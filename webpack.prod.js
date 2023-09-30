import baseConfig from './webpack.base.js';
import path from 'path';
import process from 'process';
import ESLintPlugin from 'eslint-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';

// 获取处理样式的Loaders
const getStyleLoaders = (preProcessor) => {
  return [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', preProcessor].filter(Boolean); // 默认处理顺序是从右到左
};

export default {
  ...baseConfig,
  // 加载器
  module: {
    rules: [
      {
        test: /\.css$/, // 处理css文件
        use: getStyleLoaders(),
      },
      {
        test: /\.less$/, // 处理less文件
        use: getStyleLoaders('less-loader'),
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
    new MiniCssExtractPlugin({
      // 提取css文件用的插件，用到其中的loader
      filename: 'style/[name].css', // 输出文件名
    }),
    new CssMinimizerPlugin(), // css压缩
  ],
  // 模式
  mode: 'production',
};
