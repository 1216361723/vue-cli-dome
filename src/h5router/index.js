import Vue from 'vue';
import Router from 'vue-router';

import Main from '@/h5/Main/index';    // 主界面
import Login from '@/h5/Login/index';    // 登录界面
import Forget from '@/h5/Forget/index';    // 忘记密码
import Regist from '@/h5/Regist/index';    // 注册界面
import Class from '@/h5/Class/index';    // 分类界面
import CoursesList from '@/h5/CoursesList/index';    // 课程列表页面
import Info from '@/h5/Info/index';    // 个人中心界面
import Search from '@/h5/Search/index';    // 搜索界面
import Browse from '@/h5/Info/Browse/index';    // 浏览记录界面
import Curriculum from '@/h5/Info/Curriculum/index';    // 购买课程界面
import Follow from '@/h5/Info/Follow/index';    // 我的关注界面
import Lecturerf from '@/h5/Info/Lecturerf/index';    // 关注讲师界面
import CoursesDetail from '@/h5/CoursesDetail/index';    // 课程详情界面

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/Forget',
      name: 'Forget',
      component: Forget,
    },
    {
      path: '/Regist',
      name: 'Regist',
      component: Regist,
    },
    {
      path: '/Class',
      name: 'Class',
      component: Class,
    },
    {
      path: '/CoursesList',
      name: 'CoursesList',
      component: CoursesList,
    },
    {
      path: '/Info',
      name: 'Info',
      component: Info,
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search,
    },
    {
      path: '/Browse',
      name: 'Browse',
      component: Browse,
    },
    {
      path: '/Curriculum',
      name: 'Curriculum',
      component: Curriculum,
    },
    {
      path: '/Follow',
      name: 'Follow',
      component: Follow,
    },
    {
      path: '/Lecturerf',
      name: 'Lecturerf',
      component: Lecturerf,
    },
    {
      path: '/CoursesDetail',
      name: 'CoursesDetail',
      component: CoursesDetail,
    },
  ],
});
