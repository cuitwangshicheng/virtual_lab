<!--
name: 按钮组件
creator:CUIT_MOON
create-time:2022-11-15
-->
<template>
  <div class="Basic-Button">
    <el-button @click="clickBtn" round :style="btnStyle">
      <slot></slot>
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'Basic-Button',
  props: {
    fontSize: {
      type: String,
      default: '14px'
    },
    height: {
      type: String,
      default: '20px'
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
  .Basic-Button{
    position:relative;
    width:100%;
    height:100%;
    .el-button{
      width:100%;
      background-color: $main_color;
      border:none;
      color: $white_color;
      box-shadow: 0px 2px 3px 0px $shadow_color;
      &:hover{
        transform: scale(1.01);
      }
    }
  }
</style>
