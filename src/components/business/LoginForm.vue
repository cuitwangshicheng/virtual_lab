<!--
name: 登录表单容器
creator:CUIT_MOON
create-time:2022-11-15
-->
<template>
  <div class="Login-Form">
    <el-form size="large" ref="loginForm" :model="loginForm" :rules="loginRules">
      <el-form-item prop="userName">
        <el-input v-model="loginForm.userName" placeholder="请输入手机号码/邮箱"></el-input>
      </el-form-item>
      <el-form-item prop="userPwd">
        <el-input type="password" v-model="loginForm.userPwd" placeholder="请输入登录密码" @keyup.enter="login"></el-input>
      </el-form-item>
      <el-form-item>
        <basic-button class="login-btn" font-size="24px" height="40px" @click="login">登录</basic-button>
      </el-form-item>
    </el-form>
    <div class="option-area">
      <div>
        <el-button type="text" @click="goFindPass">忘记密码？</el-button>
      </div>
      <div>还没用账户？<el-button type="text" class="register-btn" @click="goRegister">去注册</el-button></div>
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
      loginForm: {
        userName: '',
        userPwd: ''
      },
      loginRules: {
        userName: [{
          required: true,
          message: '用户名不能为空',
          trigger: 'blur'
        }],
        userPwd: [{
          required: true,
          message: '密码不能为空',
          trigger: 'blur'
        }]
      }
    }
  },
  methods: {
    goFindPass () {
      this.$emit('find-pass')
    },
    goRegister () {
      this.$emit('register')
    },
    login () {
      // this.$store.commit('setToken', 'test')
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          if (this.loginForm.userName === 'admin' && this.loginForm.userPwd === 'admin123') {
            this.$store.commit('setToken', 'test')
          } else {
            this.$parent.alertText = ['用户名或密码错误']
            this.$parent.alertType = 'error'
            this.$parent.showAlert = true
          }
        }
      })
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
    background-image: url('@/assets/images/mihoutao.png');
    background-repeat: no-repeat;
    background-position: 20px 95%;
    background-size: 60px 60px;
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
          font-size:22px;
        }
      }
    }
  }
</style>
