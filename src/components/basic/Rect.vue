<!--
name: 主要的方形容器组件
creator:CUIT_MOON
create-time:2022-11-15
-->
<template>
  <div :class="'Basic-Rect type_'+type" :style="rectStyle">
    <slot></slot>
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
    type: { // 0-主色调背景；1-次色调背景
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
    background-image: url('@/assets/images/rect_decorate.png');
    background-repeat: no-repeat;
    background-position: 10% 90%;
    background-size: 98% auto;
    &.type_0{
      background-color:$main_color;
    }
    &.type_1{
      background-color:$sub_color;
    }
  }
</style>
