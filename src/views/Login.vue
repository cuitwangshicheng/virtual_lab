<!--
name:登录页面
creator:CUIT_MOON
create-time:2022-11-15
-->
<template>
  <div class="login-page">
    <div class="container">
      <div class="title-area">
        <Rect height="240px" width="calc(100% - 40px)" borderRadius="50px" class="sys-name">
          <div class="title-panel">
            <div class="title">苍溪职业中学省级</div>
            <div class="title">虚拟仿真实验室</div>
          </div>
        </Rect>
      </div>
      <div class="login-form">
        <LoginForm></LoginForm>
      </div>
    </div>
  </div>
</template>

<script>
import Rect from '@/components/basic/Rect.vue'
import LoginForm from '@/components/business/LoginForm.vue'
export default {
  name: 'login-page',
  components: {
    Rect,
    LoginForm
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/color.scss";
  .login-page{
    position:relative;
    width:100%;
    height:100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .container{
      width: 1196px;
      min-height: 850px;
      height: 90%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      margin-top: -6%;
      .title-area{
        height: 280px;
        border-radius: 60px;
        background-color: $sub_color;
        .sys-name{
          text-align: center;
          margin: 20px;
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: center;
          .title-panel{
            vertical-align: middle;
            margin-top: -30px;
          }
          .title{
            color:$white_color;
            font-size:46px;
            font-weight: bold;
            line-height: 65px;
          }
        }
      }
      .login-form{
        height: 400px;
        width: 700px;
        text-align: center;
        margin-left:auto;
        margin-right:auto;
      }
    }
  }
</style>
