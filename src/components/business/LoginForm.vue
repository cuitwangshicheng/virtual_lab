<!--
name: 登录表单容器
creator:CUIT_MOON
create-time:2022-11-15
-->
<template>
  <div class="Login-Form">
    <el-form size="large">
      <el-form-item>
        <el-input v-model="userName" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="userPwd" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <basic-button class="login-btn">登录</basic-button>
      </el-form-item>
    </el-form>
    <div class="option-area">
      <div>
        <el-button type="text">忘记密码？</el-button>
      </div>
      <div>还没用账户？<el-button type="text" class="register-btn">去注册</el-button></div>
    </div>
  </div>
</template>

<script>
import BasicButton from '@/components/basic/Button.vue'
export default {
  name: 'Login-Form',
  components: {
    BasicButton
  },
  data () {
    return {
      userName: '',
      userPwd: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~@/assets/style/color.scss';
  .Login-Form{
    position:relative;
    width:100%;
    height:100%;
    background-color: $login_form_bg_color;
    border-radius: 70px;
    box-shadow: inset 0px 2px 4px 0px $shadow_color;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    .el-form{
      width: 80%;
      height: calc(100% - 280px);
      .el-form-item{
        margin-bottom:44px;
      }
      .login-btn{
        width:100%;
      }
    }
    .option-area{
      height: 40px;
      font-size:14px;
      .el-button{
        color:$black_color;
        &.register-btn{
          color: $white_color;
        }
      }
    }
  }
</style>
<style lang="scss">
  .Login-Form{
    .el-form{
      .el-input{
        .el-input__wrapper{
          border-radius: 20px;
          height: 40px;
          line-height: 40px;
          font-size:30px;
        }
      }
    }
  }
</style>
