<template>
  <div id="app">
    <nav class="nav flex">
      <div class="left">
        <i class="glyphicon glyphicon-menu-left"></i>
      </div>
      <div class="center">
        {{ title }}
      </div>
      <div class="right">
        <i class="glyphicon glyphicon-share-alt"></i>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {

    return {
      title: '登录'
    }
  },
  method: () => {

    this.$nextTick(() =>  {

    })
  },

};
</script>
