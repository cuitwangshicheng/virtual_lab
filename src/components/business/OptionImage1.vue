<!--
name:操作图组件1
creator:CUIT_MOON
create-time:2022-12-01
-->
<template>
  <div class="Option-Image-1">
    <div ref="content" class="content" @mousemove="moveTool" @mouseleave="moveOut" @click="startOption">
      <img :src="optionUrl" v-if="optionUrl" class="option-img" />
      <img class="tool-img" v-if="(showToolFlag && currentTool)" :src="currentTool" :style="toolStyle"/>
      <img class="cut-img" v-if="cutUrl" :src="cutUrl" :style="cutStyle" />
    </div>
    <!--工具栏-->
    <div class="tool-area">
      <tool-comp :list="currentClass?currentClass.tools:[]" @select-tool="selectTool"></tool-comp>
    </div>
    <!--错误提示框-->
    <basic-alert type="error" v-if="optionError">操作错误</basic-alert>
  </div>
</template>

<script>
import ToolComp from './Tool'
import BasicAlert from '@/components/basic/Alert.vue'
export default {
  name: 'Option-Image-1',
  components: {
    ToolComp,
    BasicAlert
  },
  props: {
    list: Array
  },
  computed: {
    currentClass: function () {
      if (this.$props.list && this.$props.list.length > 0) {
        if (this.$props.list[this.index]) {
          return this.$props.list[this.index]
        } else {
          return null
        }
      } else {
        return null
      }
    },
    currentOptionImageList: function () {
      const res = []
      this.$props.list.forEach(item => {
        res.push({
          img: [item['start-img'], item['end-img']],
          tool: null
        })
      })
      return res
    },
    optionUrl: function () {
      if (this.currentClass) {
        return this.complete ? this.currentClass['end-img'] : this.currentClass['start-img']
      } else {
        return null
      }
    }
  },
  watch: {
    currentClass: {
      handler: function () {
        this.complete = false
        this.showToolFlag = false
      },
      deep: true,
      immediate: true
    }
  },
  data () {
    return {
      index: 0,
      complete: false,
      currentTool: null,
      showToolFlag: false,
      toolStyle: {},
      interval: null,
      cutStyle: {},
      cutUrl: null,
      optionError: false,
      timer: null
    }
  },
  beforeUnmount () {
    if (this.timer != null) {
      clearTimeout(this.timer)
      this.timer = null
    }
    if (this.interval != null) {
      clearInterval(this.interval)
      this.interval = null
    }
  },
  methods: {
    selectTool (url, index) {
      console.log(index, this.currentClass['true-tool'])
      if (index === this.currentClass['true-tool']) {
        this.currentTool = url
        this.showToolFlag = true
      } else {
        this.currentTool = null
        this.optionError = true
        this.timer = setTimeout(() => {
          this.optionError = false
          clearTimeout(this.timer)
          this.timer = null
        }, 2000)
      }
    },
    startOption () {
      // this.showToolFlag = false
      this.complete = true
      let _temp = this.currentTool.split('.png')
      this.currentTool = _temp[0] + '_option' + '.png'
      let _timer = setTimeout(() => {
        _temp = this.currentTool.split('_option.png')
        this.currentTool = _temp[0] + '.png'
        clearTimeout(_timer)
        _timer = null
      }, 100)
      if (this.currentClass && this.currentClass['cut-animation']) {
        const INTERVAL_TIME = 100
        let _leftStart = this.currentClass['cut-animation'][0][0].indexOf('%') > -1 ? this.$refs.content.offsetWidth * parseFloat(this.currentClass['cut-animation'][0][0].split('%')[0]) / 100 : this.currentClass['cut-animation'][0][0].split('px')[0]
        const _leftEnd = this.currentClass['cut-animation'][1][0].indexOf('%') > -1 ? this.$refs.content.offsetWidth * parseFloat(this.currentClass['cut-animation'][1][0].split('%')[0]) / 100 : this.currentClass['cut-animation'][1][0].split('px')[0]
        let _topStart = this.currentClass['cut-animation'][0][1].indexOf('%') > -1 ? this.$refs.content.offsetHeight * parseFloat(this.currentClass['cut-animation'][0][1].split('%')[0]) / 100 : this.currentClass['cut-animation'][0][1].split('px')[0]
        const _topEnd = this.currentClass['cut-animation'][1][1].indexOf('%') > -1 ? this.$refs.content.offsetHeight * parseFloat(this.currentClass['cut-animation'][1][1].split('%')[0]) / 100 : this.currentClass['cut-animation'][1][1].split('px')[0]
        const _widthStep = (_leftEnd - _leftStart) / (this.currentClass['animation-time'] / INTERVAL_TIME)
        const _heightStep = (_topEnd - _topStart) / (this.currentClass['animation-time'] / INTERVAL_TIME)
        let _intervalCount = 0
        this.interval = setInterval(() => {
          this.cutStyle = {
            position: 'absolute',
            width: this.currentClass['cut-style'][0],
            height: this.currentClass['cut-style'][1],
            left: _leftStart + 'px',
            top: _topStart + 'px'
          }
          this.cutUrl = this.currentClass['cut-img']
          if (_leftStart < _leftEnd) {
            _leftStart += _widthStep
          }
          if (_topStart < _topEnd) {
            _topStart += _heightStep
          }
          if (_intervalCount >= this.currentClass['animation-time'] / INTERVAL_TIME) {
            this.cutUrl = null
            clearInterval(this.interval)
            this.interval = null
          }
          _intervalCount++
        }, INTERVAL_TIME)
      }
    },
    moveOut () {
      this.showToolFlag = false
    },
    moveTool (e) {
      if (!this.completed) {
        this.showToolFlag = true
        this.toolStyle = {
          left: e.x + 'px',
          top: e.y + 'px'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/color.scss";
  .Option-Image-1{
    position:relative;
    width:calc(100% - 40px);
    height:calc(100% - 40px);
    background-color: $login_form_bg_color;
    padding:20px;
    border-radius: 50px;
    .tool-area{
      position: absolute;
      bottom: 60px;
      width: 735px;
      height: 140px;
      left: calc(50% - 300px);
    }
    .content{
      width:calc(100% - 40px);
      height:calc(100% - 40px);
      background-color: $content_bg_color;
      margin:20px;
      border-radius:40px;
      position: relative;
      .option-img{
        width:100%;
        height:calc(100% - 180px);
      }
      .cut-img{
        position: fixed;
        z-index:4;
        left:0;
        top: 0;
      }
    }
    .tool-img{
      position: fixed;
      width: 60px;
      height:60px;
      z-index:4;
      left:0;
      top: 0;
    }
  }
</style>
