<!--
name:图片标记组件
creator:CUIT_MOON
create-time:2022-11-27
-->
<template>
  <div class="Image-Marker">
    <div class="container">
      <!--title-->
      <div class="title">请输入发光点结构名称</div>
      <img :src="url"/>
      <breath-circle :style="style"></breath-circle>
    </div>
  </div>
</template>

<script>
import BreathCircle from '@/components/basic/BreathCircle.vue'
export default {
  name: 'Image-Marker',
  components: {
    BreathCircle
  },
  props: {
    url: {
      type: String,
      default: ''
    },
    circlePostion: {
      type: Array,
      default: () => {
        return [0, 0]
      }
    }
  },
  computed: {
    style: function () {
      return {
        position: 'absolute',
        left: this.$props.circlePostion[0],
        top: this.$props.circlePostion[1]
      }
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/color.scss";
  .Image-Marker{
    position:relative;
    width:calc(100% - 40px);
    height:calc(100% - 40px);
    background-color: $login_form_bg_color;
    padding:20px;
    border-radius: 50px;
    .container{
      margin:20px;
      background-color:$content_bg_color;
      height: calc(100% - 80px);
      padding:20px;
      border-radius:50px;
      .title{
        font-size:30px;
        color: $white_color;
        text-align:center;
      }
      img{
        width:100%;
        height:calc(100% - 60px);
      }
    }
  }
</style>
