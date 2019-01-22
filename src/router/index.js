import Vue from 'vue'
import Router from 'vue-router'
import 'nprogress/nprogress.css'
import NProgress from 'nprogress'

import production from '@/views/production'
import lesson from '@/views/lesson'
import personal from '@/views/personal'
import quickLogin from '@/views/login/quickLogin'
import forgetPassword from '@/views/login/forgetPassword'
import updatePasswprd from '@/views/login/updatePasswprd'
import lessonDetail from '@/views/lessonDetail'
Vue.use(Router)
const Routers = [{
    path: '/',
    redirect: "/production"
  },
  {
    path: '/quickLogin',
    name: 'quickLogin',
    component: quickLogin
  },
  {
    path: '/forgetPassword',
    name: 'forgetPassword',
    component: forgetPassword
  },
  {
    path: '/updatePasswprd',
    name: 'updatePasswprd',
    component: updatePasswprd
  },
  {
    path: '/production',
    name: 'production',
    component: production
  },
  {
    path: '/lesson',
    name: 'lesson',
    component: lesson
  },
  {
    path: '/lessonDetail',
    name: 'lessonDetail',
    component: lessonDetail
  },
  {
    path: '/personal',
    name: 'personal',
    component: personal
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
