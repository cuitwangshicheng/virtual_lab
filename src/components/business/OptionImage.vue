<!--
name:操作视图
creator:CUIT_MOON
create-time:2022-11-28
-->
<template>
  <div class="Option-Image">
    <div class="container" @mousemove="moveTool" @mouseleave="moveOut" @click="startOption">
      <img class="option-img" :src="url" />
      <!--操作工具-->
      <img class="tool-img" v-if="showToolFlag" :src="toolUrl" :style="toolStyle"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Option-Image',
  props: {
    list: Array
  },
  computed: {
    url: function () {
      if (this.$props.list instanceof Array) {
        if (this.$props.list.length > 0 && this.index < this.$props.list.length) {
          return this.completed ? this.$props.list[this.index].img[1] : this.$props.list[this.index].img[0]
        } else {
          return ''
        }
      } else {
        return ''
      }
    },
    toolUrl: function () {
      if (this.$props.list instanceof Array) {
        if (this.$props.list.length > 0 && this.index < this.$props.list.length) {
          return this.completed ? '' : this.$props.list[this.index].tool
        } else {
          return ''
        }
      } else {
        return ''
      }
    }
  },
  data () {
    return {
      index: 0,
      completed: false,
      showToolFlag: false,
      toolStyle: {}
    }
  },
  methods: {
    startOption () {
      this.showToolFlag = false
      this.completed = true
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
  .Option-Image{
    position:relative;
    width:calc(100% - 40px);
    height:calc(100% - 40px);
    background-color: $login_form_bg_color;
    padding:20px;
    border-radius: 50px;
    .container{
      margin: 20px;
      background-color: $content_bg_color;
      height: calc(100% - 40px);
      border-radius: 60px;
      position: relative;
      .option-img{
        width:100%;
        height:100%;
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
  }
</style>
