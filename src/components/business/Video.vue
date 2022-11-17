<!--
name: 视频播放组件
creator:CUIT_MOON
create-time:2022-11-17
-->
<template>
  <div class="Video-Comp">
    <basic-rect borderRadius="60px">
      <video id="example_video_1" class=" video-plugin" preload="none" data-setup="{}">
        <source src="" type="video/mp4">
        <source src="" type="video/webm">
        <source src="" type="video/ogg">
        <track kind="captions" src="../shared/example-captions.vtt" srclang="en" label="English">
        <!-- Tracks need an ending tag thanks to IE9 -->
        <track kind="subtitles" src="../shared/example-captions.vtt" srclang="en" label="English">
        <!-- Tracks need an ending tag thanks to IE9 -->
        <p class="vjs-no-js">To view this video please enable JavaScript, and consider upgrading to a web browser that <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a></p>
      </video>
    </basic-rect>
  </div>
</template>

<script>
import BasicRect from '../basic/Rect.vue'
export default {
  name: 'Video-Comp',
  components: {
    BasicRect
  },
  data () {
    return {
      videoWidth: 1024,
      videoHeight: 768
    }
  },
  mounted () {
    // eslint-disable-next-line
    var player = videojs('video', { }, function () {
      this.$emit('init')
    })
    player.on('play', function () {
      this.$emit('play')
    })
    player.on('pause', function () {
      this.$emit('pause')
    })
    player.on('ended', function () {
      console.log('结束播放')
    })
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/color.scss";
  .Video-Comp{
    position:relative;
    width:100%;
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .video-plugin{
      width: calc(100% - 60px);
      height: calc(100% - 120px);
      margin-left: 30px;
      margin-top:30px;
      background-color:$content_bg_color;
      border-radius: 30px;
      background-image:url('@/assets/images/play.png');
      background-position: 50% 50%;
      background-repeat: no-repeat;
      background-size: 200px 200px;
    }
  }
</style>
