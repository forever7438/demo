import Vue from 'vue'
import Router from 'vue-router'
import 'nprogress/nprogress.css'
import NProgress from 'nprogress'

import home from '@/views/home'
import login from '@/views/login'
import lessonDetail from '@/views/lessonDetail'
Vue.use(Router)
const Routers = [{
    path: '/',
    redirect: "/home"
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/home',
    name: 'home',
    component: home
  },
  {
    path: '/lessonDetail',
    name: 'lessonDetail',
    component: lessonDetail
  },
];
const RouterConfig = {
  // 使用 HTML5 的 History 路由模式
  mode: 'history',
  routes: Routers,
  //路由跳转后每次置顶
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  },
};
const router = new Router(RouterConfig);
router.beforeEach((to, from, next) => {
  NProgress.start();
  next()
});
router.afterEach(() => {
  NProgress.done();
});
export default router
