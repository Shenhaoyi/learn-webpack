import * as VueRouter from 'vue-router';

// 1. 定义路由组件.
const Home = () => import('../pages/Home.vue');
const About = () => import('../pages/About.vue');

// 2. 定义一些路由
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
];

// 3. 创建路由实例
const router = VueRouter.createRouter({
  // 使用 hash 模式。
  history: VueRouter.createWebHashHistory(),
  routes,
});

export default router;
