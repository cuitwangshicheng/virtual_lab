<!--
name: 主要的方形容器组件
creator:CUIT_MOON
create-time:2022-11-15
-->
<template>
  <div :class="'Basic-Rect type_'+type" :style="rectStyle">
    <slot></slot>
    <img class="bg-img" :src="bgImg"/>
  </div>
</template>

<script>
export default {
  name: 'Basic-Rect',
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
    },
    borderRadius: {
      type: String,
      default: '20px'
    },
    type: { // 0-主色调背景；1-次色调背景;2-无背景
      type: Number,
      default: 0
    }
  },
  computed: {
    rectStyle: function () {
      return {
        width: this.$props.width,
        height: this.$props.height,
        'border-radius': this.$props.borderRadius
      }
    }
  },
  data () {
    return {
      bgImg: require('@/assets/images/rect_decorate.png')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~@/assets/style/color.scss';
  .Basic-Rect{
    position:relative;
    width:100%;
    height:100%;
    box-shadow: inset 0px 0.5px 1px 1px $shadow_color, 0px 2px 1px 1px $shadow_color;
    &.type_0{
      background-color:$main_color;
    }
    &.type_1{
      background-color:$sub_color;
    }
    &.type_2{
      background-color: transparent;
      box-shadow: none;
    }
    .bg-img{
      width:98%;
      position: absolute;
      z-index: 2;
      left: 0;
      height: 30px;
      bottom:30px;
    }
  }
</style>
