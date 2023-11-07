import subtract from './js/subtract.js';
import sum from './js/sum.js';
import './css/index.css';
import './less/index.less';
import './assets/iconfont/iconfont.css'; // font class 和unicode
import './assets/iconfont/iconfont.js';
import debounce from 'lodash/debounce.js';

console.log(subtract(2, 1));
console.log(sum(1, 2, 3, 4));
console.log(debounce); // 验证一下 split 的效果

// 按需加载，使模块被拆分
setTimeout(async () => {
  const { lazy } = await import(/* webpackChunkName: "lazy" */ './js/lazy.js');
  lazy();
}, 5000);
