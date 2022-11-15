<!--
name:登录页面
creator:CUIT_MOON
create-time:2022-11-15
-->
<template>
  <div class="login-page">
    <Rect></Rect>
  </div>
</template>

<script>
import Rect from '@/components/basic/Rect.vue'
export default {
  name: 'login-page',
  components: {
    Rect
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  .login-page{
    position:relative;
    width:100%;
    height:100%;
  }
</style>
