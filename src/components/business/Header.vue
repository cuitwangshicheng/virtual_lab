<!--
name: 头部组件
creator:CUIT_MOON
create-time:2022-11-17
-->
<template>
  <div class="Header-Comp">
    <div class="title">{{title}}</div>
    <div class="option">
      <gradient-button style="width:120px;margin-top:20px;margin-right:30px;" fontSize="20px" height="40px" @click="goBack">返回</gradient-button>
      <gradient-button style="width:120px;margin-top:20px;" fontSize="20px" height="40px">
        <i class="fa fa-question-circle-o" style="font-size:26px;"></i>
      </gradient-button>
    </div>
  </div>
</template>

<script>
import GradientButton from '@/components/basic/GradientButton.vue'
export default {
  name: 'Header-Comp',
  props: {
    title: {
      type: String,
      default: () => {
        return ''
      }
    }
  },
  components: {
    GradientButton
  },
  data () {
    return {

    }
  },
  methods: {
    goBack () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~@/assets/style/color.scss';
  .Header-Comp{
    position:relative;
    width:100%;
    height:90px;
    background-color:$main_color;
    display: flex;
    justify-content: space-between;
    .title{
      width: calc(100% - 600px);
      border-top-right-radius: 60px;
      border-bottom-right-radius: 60px;
      height: 60px;
      margin-top:15px;
      background:$title_gradient_color;
      box-shadow: 0 2px 1px 1px $shadow_color;
      line-height:60px;
      color: $white_color;
      padding: 0 20px;
      font-size:32px;
      font-weight: bolder;
    }
    .option{
      background:$content_bg_color;
      height:60px;
      margin-top:15px;
      border-top-left-radius: 60px;
      border-bottom-left-radius:60px;
      width: 380px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
    }
  }
</style>
