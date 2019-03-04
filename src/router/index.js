import accountManagement from "@/views/accountManagement";
import homepage from '@/views/homepage';
import lesson from '@/views/lesson';
import lessonDetail from '@/views/lessonDetail';
import lessonPlay from '@/views/lessonPlay';
import forgetPassword from '@/views/login/forgetPassword';
import login from '@/views/login/login';
import quickLogin from '@/views/login/quickLogin';
import updatePassword from '@/views/login/updatePassword';
import personal from '@/views/personal';
import myCollection from '@/views/personalCenter/myCollection';
import myFan from '@/views/personalCenter/myFan';
import myFllow from '@/views/personalCenter/myFllow';
import myLesson from '@/views/personalCenter/myLesson';
import myMessage from '@/views/personalCenter/myMessage';
import myProduction from '@/views/personalCenter/myProduction';
import mySetting from '@/views/personalCenter/mySetting';
import production from '@/views/production';
import updateSign from '@/views/updateSign';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router)
const Routers = [{
    path: '/',
    redirect: "/login"
  },
  {
    path: '/login',
    name: 'login',
    component: login
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
    path: '/updatePassword',
    name: 'updatePassword',
    component: updatePassword
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
    path: '/lessonPlay',
    name: 'lessonPlay',
    component: lessonPlay
  },
  {
    path: '/personal',
    name: 'personal',
    component: personal
  },
  {
    path: '/homepage',
    name: 'homepage',
    component: homepage
  },
  {
    path: '/accountManagement',
    name: 'accountManagement',
    component: accountManagement
  },
  {
    path: '/myFllow',
    name: 'myFllow',
    component: myFllow
  },
  {
    path: '/myCollection',
    name: 'myCollection',
    component: myCollection
  },
  {
    path: '/myLesson',
    name: 'myLesson',
    component: myLesson
  },
  {
    path: '/myProduction',
    name: 'myProduction',
    component: myProduction
  },
  {
    path: '/mySetting',
    name: 'mySetting',
    component: mySetting
  },

  {
    path: '/myMessage',
    name: 'myMessage',
    component: myMessage
  },
  {
    path: '/myFan',
    name: 'myFan',
    component: myFan
  },
  {
    path: '/updateSign',
    name: 'updateSign',
    component: updateSign
  },
];
const RouterConfig = {
  // 使用 HTML5 的 History 路由模式
  // mode: 'history',
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
