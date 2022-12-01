<!--
name:
creator:CUIT_MOON
create-time:2022-12-01
-->
<template>
  <div class="Images-Text">
    <div class="left-panel">
      <!--title-->
      <div class="title">{{title}}</div>
      <!--content-->
      <div class="content">
        <div class="image-container">
          <img v-if="url" :src="url"/>
        </div>
      </div>
    </div>
    <div class="right-panel">
      <div class="title">详细信息</div>
      <detail-info :type="2" :content="desc"></detail-info>
    </div>
  </div>
</template>

<script>
import DetailInfo from '@/components/business/DetailInfo.vue'
export default {
  name: 'Images-Text',
  components: {
    DetailInfo
  },
  props: {
    title: {
      type: String,
      default: '图文资料'
    },
    url: String,
    desc: String
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/color.scss";
  .Images-Text{
    position:relative;
    width:100%;
    height:100%;
    display:flex;
    justify-content: space-between;
    .left-panel{
      width: calc(100% - 340px);
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
        width:100%;
        height: calc(100% - 110px);
        margin-top:20px;
        display: flex;
        align-items: flex-start;
        background-color: $content_bg_color;
        border-radius: 60px;
        .image-container{
          display: flex;
          flex-wrap: wrap;
          width:100%;
          height:100%;
          overflow: hidden;
          img{
            width: 100%;
            height: 100%;
            border-radius: 40px;
          }
        }
      }
    }
    .right-panel{
      width:280px;
      position: relative;
      padding-top:30px;
      .title{
        position: absolute;
        top: 0px;
        height: 60px;
        z-index:2;
        background-color:$content_bg_color;
        width:80%;
        line-height: 60px;
        color:$white_color;
        left:10%;
        border-radius:30px;
        box-shadow: 0px 2px 2px 1px $shadow_color;
        text-align: center;
      }
    }
  }
</style>
