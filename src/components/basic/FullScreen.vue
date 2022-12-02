<!--
name:全屏组件
creator:CUIT_MOON
create-time:2022-12-02
-->
<template>
  <div class="Full-Screen">
    <i class="fa fa-arrows-alt" v-if="!isFullscreen" title="点击进入全屏" @click="fullScreen"></i>
    <i class="fa fa-arrows-alt" v-else title="点击退出全屏" @click="exitFullScreen"></i>
  </div>
</template>

<script>
export default {
  name: 'Full-Screen',
  data () {
    return {

    }
  },
  computed: {
    isFullscreen: function () {
      return this.$store.getters.getFullscreenState
    }
  },
  methods: {
    fullScreen () {
      const el = document.documentElement
      const rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullScreen
      if (typeof rfs !== 'undefined' && rfs) {
        rfs.call(el)
      } else if (typeof window.ActiveXObject !== 'undefined') {
        // for Internet Explorer
        // eslint-disable-next-line
        const wscript = new ActiveXObject('WScript.Shell')
        if (wscript != null) {
          wscript.SendKeys('{F11}')
        }
      }
      this.$store.commit('setFullscreenState', true)
    },
    exitFullScreen () {
      const el = document
      const cfs = el.cancelFullScreen || el.webkitCancelFullScreen || el.mozCancelFullScreen || el.exitFullScreen
      let wscript = null
      if (typeof cfs !== 'undefined' && cfs) {
        cfs.call(el)
      }
      if (typeof window.ActiveXObject !== 'undefined') {
        // eslint-disable-next-line
        wscript = new ActiveXObject('WScript.Shell')
        if (wscript != null) {
          wscript.SendKeys('{F11}')
        }
      }
      this.$store.commit('setFullscreenState', false)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~@/assets/style/color.scss';
  .Full-Screen{
    position:relative;
    width:100%;
    height:100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    .fa{
      font-size: 20px;
      color: $white_color;
      cursor: pointer;
      &:hover{
        color: $main_color;
      }
    }
  }
</style>
