<template>
  <div class="login">
    <h1 class="title text-center">{{ title }}</h1>

    <div class="box">
      <form class="form-horizontal" role="form">
        <div class="form-group">
          <div class="col-xs-12 col-sm-12">
            <input
              type="text"
              class="form-control"
              v-model="formData.userName"
              maxlength="11"
              placeholder="手机号/用户名" />
            <i class="i glyphicon glyphicon-remove"></i>
          </div>
        </div>
        <div class="form-group">
          <div class="col-xs-12 col-sm-12">
            <input
              type="password"
              class="form-control"
              v-model="formData.password"
              maxlength="33"
              placeholder="手机号/用户名" />
            <i class="i glyphicon glyphicon-eye-open"></i>
          </div>
        </div>
      </form>
      <div class="btn-box text-center">
        <button class="btn" type="button">登录</button>
        <p class="forget"><a href="javascript:;">忘记密码</a></p>
      </div>
      <div class="re text-center"><a href="javascript:;">注册</a></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      title: '登 录',    // 标题
      formData: {
        userName: '',    // 用户名/手机号
        password: '',    // 密码
      },
    };
  },

};
</script>

