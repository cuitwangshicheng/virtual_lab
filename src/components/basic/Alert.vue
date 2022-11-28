<!--
name:弹出窗组件
creator:CUIT_MOON
create-time:2022-11-18
-->
<template>
  <div :class="showShade ? 'Basic-Alert shade':'Basic-Alert'">
    <div :class="'container type_'+type">
      <img :src="mihoutaoImg" v-if="type==='icon'"/>
      <i class="fa fa-check" v-else-if="type==='success'"></i>
      <i class="fa fa-close" v-else-if="type==='error'"></i>
      <img :src="warningImg" v-else/>
      <div class="text" v-for="item in text" :key="item">{{item}}</div>
      <slot>
        <el-button round @click="okEvent">确定</el-button>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Basic-Alert',
  props: {
    showShade: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'info' // info-信息提示；success-成功提示；error-失败提示；icon-带有猕猴桃图标的提示
    },
    text: {
      type: Array,
      default: () => {
        return ['提示']
      }
    }
  },
  data () {
    return {
      mihoutaoImg: require('@/assets/images/mihoutao.png'),
      warningImg: require('@/assets/images/warning.png')
    }
  },
  methods: {
    okEvent () {
      this.$emit('ok')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~@/assets/style/color.scss';
  .Basic-Alert{
    position:absolute;
    width:100%;
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0;
    top: 0;
    z-index: 9;
    &.shade{
      background-color: rgba(0,0,0,.2);
    }
    .container{
      text-align:center;
      width: 300px;
      height: 300px;
      background-color: $login_form_bg_color;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 70px;
      box-shadow: inset 0px 0.5px 1px 1px $shadow_color, 0px 2px 1px 1px $shadow_color;
      img {
        width: 140px;
        height:140px;
      }
      .fa{
        font-size:140px;
        color: $main_color;
      }
      .text{
        height: 60px;
        line-height: 60px;
        color: $white_color;
        font-size:20px;
      }
      .el-button{
        width: 140px;
        height: 40px;
        font-size:16px;
        color: $white_color;
        background-color: $main_color;
      }
      &.type_info{
        .text{
          color: $white_color;
        }
      }
      &.type_error{
        .text{
          color: $red_color;
        }
      }
      &.type_success{
        .text{
          color: $main_color;
        }
      }
    }
  }
</style>
