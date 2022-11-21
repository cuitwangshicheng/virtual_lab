<template>
  <router-view></router-view>
</template>
<script>
export default {
  name: 'app'
}
</script>
<style lang="scss">
html, body{
  width:100%;
  height:100%;
  margin:0;
  background-image:url('@/assets/images/bg_img.png');
  background-repeat: no-repeat;
  background-position: left top;
  background-size:100% 100%;
  #app{
    position: relative;
    width:100%;
    height:100%;
  }
}
</style>
