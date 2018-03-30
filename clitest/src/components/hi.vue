<template>
  <div>
    <h2>{{msg}}</h2>
    <router-link :to="{name:'hi1',params:{userName:'jspang',id:'888'}}">hi页面1</router-link>
    <router-link to="/hi/hi2">hi页面2</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'hi',
  data () {
    return {
      msg: "I'm a hi page!"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
