<!--
name: 渐变色按钮
creator:CUIT_MOON
create-time:2022-11-17
-->
<template>
  <div class="Gradient-Button">
    <el-button :class="'type_'+type" @click="clickBtn" round :style="btnStyle">
      <slot></slot>
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'Gradient-Button',
  props: {
    fontSize: {
      type: String,
      default: '14px'
    },
    height: {
      type: String,
      default: '20px'
    },
    type: {
      type: () => {
        return String | Number
      },
      default: '0'
    }
  },
  computed: {
    btnStyle: function () {
      return {
        height: this.$props.height,
        'font-size': this.$props.fontSize
      }
    }
  },
  data () {
    return {

    }
  },
  methods: {
    clickBtn () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~@/assets/style/color.scss';
  .Gradient-Button{
    position:relative;
    width:100%;
    height:100%;
    .el-button{
      width:100%;
      border:none;
      color: $white_color;
      box-shadow: 0px 2px 3px 0px $shadow_color;
      height:100%;
      &:hover{
        transform: scale(1.01);
      }
      &.type_0{
        background: $button_gradient_color_0;
      }
      &.type_1{
        background: $button_gradient_color_1;
      }
    }
  }
</style>
