<!--
name:视频课程组件
creator:CUIT_MOON
create-time:2022-11-18
-->
<template>
  <div class="Video-Class">
    <basic-rect type="2">
      <!--title-->
      <div class="title">{{title}}</div>
      <!--content-->
      <div class="content">
        <video-comp class="left-panel"></video-comp>
        <detail-info class="right-panel" :type="2" v-if="type==='2'" :title="detailTitle" style="margin-left:20px;" :list="detailList"></detail-info>
      </div>
    </basic-rect>
  </div>
</template>

<script>
import VideoComp from './Video.vue'
import BasicRect from '../basic/Rect.vue'
import DetailInfo from './DetailInfo.vue'
export default {
  name: 'Video-Class',
  components: {
    VideoComp,
    BasicRect,
    DetailInfo
  },
  props: {
    title: String,
    detailList: Array,
    detailTitle: String,
    type: {
      type: String,
      default: '1' // 1-只有视频；2-视频+详细资料
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~@/assets/style/color.scss';
  .Video-Class{
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
      display: flex;
      height:calc(100% - 100px);
      justify-content: flex-start;
      margin-top:20px;
      .left-panel{
        height: calc(100% - 60px);
        margin-top:0px;
      }
      .right-panel{
        width: 600px;
        height: calc(100% - 100px);
      }
    }
  }
</style>
