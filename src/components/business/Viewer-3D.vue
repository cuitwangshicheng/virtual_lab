<!--
name:3D查看组件
creator:CUIT_MOON
create-time:2022-11-27
-->
<template>
  <div class="View-3D">
    <!--左侧旋转按钮-->
    <i class="fa fa-angle-left" @mousedown="startRollLeft" @mouseup="stopRoll"></i>
    <!--主视窗-->
    <div class="img-container">
      <img style="margin-top: -5%;" :src="url" />
    </div>
    <!---右侧旋转按钮-->
    <i class="fa fa-angle-right right-icon" @mousedown="startRollRight" @mouseup="stopRoll"></i>
  </div>
</template>

<script>
export default {
  name: 'View-3D',
  props: {
    pathUrl: String,
    extName: {
      type: String,
      default: 'png'
    },
    start: {
      type: Number,
      default: 0
    },
    end: {
      type: Number,
      default: 0
    },
    preName: {
      type: String,
      default: ''
    }
  },
  computed: {
    url: function () {
      return this.$props.pathUrl + this.$props.preName + this.currentIndex + '.' + this.$props.extName
    }
  },
  data () {
    return {
      currentIndex: this.$props.start,
      interval: null,
      keyDownFlag: false
    }
  },
  mounted () {
    this.keyDown()
  },
  beforeUnmount () {
    if (this.interval != null) {
      clearInterval(this.interval)
    }
    this.interval = null
  },
  methods: {
    stopRoll () {
      this.keyDownFlag = false
      if (this.interval != null) {
        clearInterval(this.interval)
      }
    },
    startRollLeft () {
      this.keyDownFlag = true
      this.interval = setInterval(() => {
        if (this.keyDownFlag) {
          this.rollLeft()
        }
      }, 50)
    },
    startRollRight () {
      this.keyDownFlag = true
      this.interval = setInterval(() => {
        if (this.keyDownFlag) {
          this.rollRight()
        }
      }, 50)
    },
    keyDown () {
      document.onkeydown = e => {
        // eslint-disable-next-line
        const el = e || event || window.event || arguments.callee.caller.arguments[0]
        if (el && el.keyCode === 37) {
          this.rollLeft()
        } else if (el && el.keyCode === 39) {
          this.rollRight()
        }
      }
    },
    rollLeft () {
      if (this.currentIndex >= this.$props.end) {
        this.currentIndex = this.$props.start
      }
      this.currentIndex++
    },
    rollRight () {
      if (this.currentIndex <= this.$props.start) {
        this.currentIndex = this.$props.end
      }
      this.currentIndex--
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/color.scss";
  .View-3D{
    position:relative;
    width:calc(100% - 40px);
    height:calc(100% - 40px);
    background-color: $login_form_bg_color;
    padding:20px;
    border-radius: 50px;
    .fa{
      position: absolute;
      font-size:140px;
      cursor: pointer;
      left: 40px;
      top:35%;
      z-index: 3;
      &.right-icon{
        right: 40px;
        left: auto;
      }
    }
    .img-container{
      width:100%;
      height:80%;
      background-color:$content_bg_color;
      border-radius: 50px;
      margin-top: 3%;
      img{
        width:100%;
        height:100%;
      }
    }
  }
</style>
