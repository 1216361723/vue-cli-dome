<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>

    <ul>
      <li>
        <router-link to="/Login">登录界面</router-link>
      </li>
      <li>
        <router-link to="/Forget">忘记密码</router-link>
      </li>
      <li>
        <router-link to="/Regist">注册界面</router-link>
      </li>
      <li>
        <router-link to="/Class">分类界面</router-link>
      </li>
      <li>
        <router-link to="/CoursesList">课程列表页面</router-link>
      </li>
      <li>
        <router-link to="/Info">个人中心界面</router-link>
      </li>
      <li>
        <router-link to="/Search">搜索界面</router-link>
      </li>
      <li>
        <router-link to="/Browse">浏览记录界面</router-link>
      </li>
      <li>
        <router-link to="/Curriculum">购买课程界面</router-link>
      </li>
      <li>
        <router-link to="/Follow">我的关注界面</router-link>
      </li>
      <li>
        <router-link to="/Lecturerf">关注讲师界面</router-link>
      </li>
      <li>
        <router-link to="/CoursesDetail">课程详情界面</router-link>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: '主界面',
    };
  },
};
</script>

