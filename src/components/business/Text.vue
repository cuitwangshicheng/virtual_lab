<!--
name:图文组件
creator:CUIT_MOON
create-time:2022-11-27
-->
<template>
  <div class="Text-With-Img">
    <basic-rect :type="2">
      <!--title-->
      <div class="title">{{title}}</div>
      <!--content-->
      <div class="content" v-html="content">
      </div>
    </basic-rect>
  </div>
</template>

<script>
import BasicRect from '../basic/Rect.vue'
export default {
  name: 'Text-With-Img',
  props: {
    title: {
      type: String,
      default: '图文资料'
    },
    content: {
      type: String,
      default: String
    }
  },
  components: {
    BasicRect
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/color.scss";
  .Text-With-Img{
    position:relative;
    width:calc(100% - 40px);
    height:calc(100% - 40px);
    background-color: $login_form_bg_color;
    padding:20px;
    border-radius: 50px;
    .title{
      height:70px;
      width:calc(100% - 100px);
      background-image:url('@/assets/images/title_bg.png');
      background-repeat: no-repeat;
      background-position: left top;
      background-size: 100% 100%;
      padding-left: 100px;
      line-height: 70px;
      font-size: 24px;
      color: $white_color;
      font-weight: bold;
    }
    .content{
      height:calc(100% - 180px);
      margin-top:20px;
      width: calc(100% - 40px);
      border-radius:50px;
      background-color: $main_color;
      padding: 20px;
    }
  }
</style>
