<!--
name: 导航栏组件
creator:CUIT_MOON
create-time:2022-11-17
-->
<template>
  <div :class="active ? 'Basic-Nav active' : 'Basic-Nav'">
    <slot></slot>
    <div class="rotate-box"></div>
  </div>
</template>

<script>
export default {
  name: 'Basic-Nav',
  props: {
    active: {
      type: Boolean,
      default: false
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
  .Basic-Nav{
    position:relative;
    width:auto;
    height:60px;
    padding: 0 10px;
    line-height: 60px;
    box-shadow: inset 0px 0.5px 0px 0px $shadow_color;
    background-color:$login_form_bg_color;
    cursor: pointer;
    font-size:20px;
    font-weight: bold;
    &.active{
      cursor:default;
      color: $white_color;
      background-color:$main_color;
      &::after{
        border-left: 31px solid $main_color;
      }
    }
    &::after{
      content: '';
      display: block;
      border-top: 30px solid transparent;
      border-bottom: 30px solid transparent;
      border-left: 30px solid $login_form_bg_color;
      position: absolute;
      right: -30px;
      top: 0;
    }
  }
</style>
