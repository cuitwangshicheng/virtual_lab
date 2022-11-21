<!--
name: 视频播放组件
creator:CUIT_MOON
create-time:2022-11-17
-->
<template>
  <div class="Video-Comp">
    <video :id="id" class="video-plugin" preload="none" data-setup="{}">
      <source src="http://localhost:8081/static/video/test.mp4" type="video/mp4">
    </video>
    <!-- <video :src="require('@/assets/video/test.mp4')" autoplay controls></video> -->
    <!--停止播放状态-->
    <div class="start-btn" v-if="state==='pause'" @click="play"></div>
  </div>
</template>

<script>
export default {
  name: 'Video-Comp',
  props: {
    url: String
  },
  watch: {
    url: function (n, o) {
      if (this.player) {
        this.player.pause()
        this.player.dispose()
        this.state = 'pause'
      }
    }
  },
  data () {
    return {
      videoWidth: 1200,
      videoHeight: 529,
      player: null,
      id: 'player_' + new Date().getTime(),
      state: 'pause'
    }
  },
  mounted () {
    // eslint-disable-next-line
    this.player = videojs(this.id, { }, () => {
      this.$emit('init')
    })
    this.player.on('play', () => {
      this.state = 'playing'
      this.$emit('play')
    })
    this.player.on('pause', () => {
      this.state = 'pause'
      this.$emit('pause')
    })
    this.player.on('ended', () => {
      this.state = 'pause'
      this.$emit('stop')
    })
  },
  methods: {
    play () {
      this.player.ready(() => {
        this.player.play()
      })
    }
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
      width: 100%;
      height: 100%;
      background-color:$content_bg_color;
      border-radius: 30px;
      video{
        width:100%;
        height:100%;
      }
    }
    .start-btn{
      position: absolute;
      left: calc(50% - 100px);
      top: calc(50% - 100px);
      z-index: 9;
      background-image:url('@/assets/images/play.png');
      background-position: 50% 50%;
      background-repeat: no-repeat;
      background-size: 200px 200px;
      width:200px;
      height:200px;
      cursor: pointer;
      &:hover{
        transform: scale(1.5);
      }
    }
  }
</style>
