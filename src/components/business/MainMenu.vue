<!--
name: 首页菜单
creator:CUIT_MOON
create-time:2022-11-17
-->
<template>
  <div class="Login-Main-Menu">
    <div class="group" v-if="menu">
      <div class="main">{{menu.name}}</div>
      <div class="sub-menu">
        <!--eslint-disable-next-line-->
        <div class="menu-item" v-for="sub in menu.subMenu" :key="sub.id" @click="goHome(sub)">{{sub.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login-Main-Menu',
  props: {
    menu: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
    }
  },
  methods: {
    goHome (menu) {
      this.$store.commit('setCurrentMenu', menu)
      this.$router.push({
        path: '/home'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/color.scss";
  .Login-Main-Menu{
    position:relative;
    width: 240px;
    height:auto;
    .group{
      .main{
        height: 150px;
        background:$gradient_color;
        border-radius: 60px;
        line-height: 150px;
        font-size: 32px;
        color: $white_color;
        border:1px solid $shadow_color;
        box-shadow: 0px 2px 1px 2px #ccc;
        cursor: pointer;
        position: absolute;
        width: 240px;
        top:0;
        z-index: 1;
      }
      .sub-menu{
        display: none;
        background-color: $sub_color;
        margin-top: 75px;
        position: absolute;
        width: 240px;
        padding-top: 85px;
        padding-bottom:20px;
        border-radius: 50px;
        .menu-item{
          position:relative;
          cursor: pointer;
          height: auto;
          color:$white_color;
          background-color: $content_bg_color;
          width: 180px;
          text-align: center;
          margin-left:auto;
          margin-right:auto;
          font-size:20px;
          padding: 10px;
          margin-top:10px;
          border: 1px solid $white_color;
          border-radius: 30px;
          &:hover{
            background-color: $main_color;
          }
        }
      }
      &:hover{
        .sub-menu{
          display: block;
        }
      }
    }
  }
</style>
