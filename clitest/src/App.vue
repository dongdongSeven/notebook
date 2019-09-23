<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <button @click="goBack">后退</button>
      <button @click="forward">前进</button>
      <button @click="goHome">返回首页</button>
    </div>
    <div>
      <router-link to="/">首页</router-link>
      <router-link to="/hi">hi页面</router-link>
      <router-link to="/params/123/jspang website is very good">Params</router-link>
      <router-link to="/goHome">goHome</router-link>
      <router-link to="/goParams/8989/redirect and canshu">goParams</router-link>
      <router-link to="/hi1">hi1</router-link>
      <router-link to="/jspang">jspang</router-link>
      <!-- 下面返回主页是坑，现在已经修复 -->
      <router-link to="/home1">home1</router-link>
      <router-link to="/65165556">我是瞎写的</router-link>
    </div>
    <p>{{$route.name}}</p>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
    <router-view name="left" style="float:left;width:50%;height:200px;backgroundColor:#eee;"/>
    <router-view name="right" style="float:right;width:50%;height:200px;backgroundColor:deeppink;"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    goBack(){
      this.$router.go(-1);
    },
    forward(){
      this.$router.go(1);
    },
    goHome(){
      this.$router.push("/");
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition:opacity .5s;
}
.fade-leave{
  opacity: 1;
}
.fade-leave-active{
  opacity: 0;
  transition: opacity .5s;
}
</style>
