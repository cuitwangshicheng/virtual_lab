<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/> -->
  <Login></Login>
</template>
<script>
import Login from './views/Login.vue'
export default {
  name: 'app',
  components: {
    Login
  }
}
</script>
<style lang="scss">
html, body{
  width:100%;
  height:100%;
  margin:0;
  #app{
    position: relative;
    width:100%;
    height:100%;
  }
}
</style>
