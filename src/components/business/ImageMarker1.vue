<!--
name:图片标记组件1
creator:CUIT_MOON
create-time:2022-11-28
-->
<template>
  <div class="Image-Marker-1">
    <div class="left-panel">
      <ImageMarker :url="url" :marker-list="markerList" :type="1" @click-marker="clickMarker"></ImageMarker>
    </div>
    <div class="right-panel">
      <div class="title">详细信息</div>
      <detail-info :type="2" :content="desc"></detail-info>
    </div>
  </div>
</template>

<script>
import ImageMarker from '@/components/business/ImageMarker.vue'
import DetailInfo from '@/components/business/DetailInfo.vue'
export default {
  name: 'Image-Marker-1',
  props: {
    url: String,
    markerList: Array
  },
  components: {
    ImageMarker,
    DetailInfo
  },
  data () {
    return {
      desc: ''
    }
  },
  methods: {
    clickMarker (info) {
      console.log(info)
      this.desc = info.description
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/color.scss";
  .Image-Marker-1{
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
