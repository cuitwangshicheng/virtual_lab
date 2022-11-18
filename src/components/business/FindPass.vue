<!--
name:找回密码组件
creator:CUIT_MOON
create-time:2022-11-18
-->
<template>
  <div class="Find-Pass">
    <el-form size="large">
      <el-form-item>
        <el-input v-model="findForm.userName" placeholder="请输入手机号码/邮箱"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input type="password" v-model="findForm.userPwd" placeholder="请设置新的登录密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="findForm.verifyCode" placeholder="验证码"></el-input>
        <basic-button class="verify-code-btn" height="30px" font-size="16px" :disabled="waitingCodeFlag" @click="sendVerifyCode">{{waitingCodeFlag?`${waitingTime}s重新发送`:'发送验证码'}}</basic-button>
      </el-form-item>
      <el-form-item>
        <basic-button class="find-btn" font-size="24px" height="40px" @click="register">找回密码</basic-button>
        <el-button style="width:100%;font-size:24px;color:#606266;box-shadow: 0 1px 1px 1px #ccc;" round @click="goLogin">返回登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import BasicButton from '@/components/basic/Button.vue'
export default {
  name: 'Find-Pass',
  components: {
    BasicButton
  },
  data () {
    return {
      findForm: {
        userName: '',
        userPwd: '',
        confirmPwd: ''
      },
      interval: null,
      waitingCodeFlag: false, // 是否等待验证码
      waitingTime: 120 // 两次发送短信的间隔秒数
    }
  },
  beforeUnmount () {
    if (this.interval != null) {
      clearInterval(this.interval)
      this.interval = null
    }
  },
  methods: {
    sendVerifyCode () {
      if (!this.waitingCodeFlag) {
        if (this.interval != null) {
          clearInterval(this.interval)
          this.interval = null
        }
        this.waitingCodeFlag = true
        this.interval = setInterval(() => {
          this.waitingTime--
          if (this.waitingTime === 0) {
            this.waitingCodeFlag = false
            clearInterval(this.interval)
            this.interval = null
          }
        }, 1000)
      }
    },
    goLogin () {
      this.$emit('login')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~@/assets/style/color.scss';
  .Find-Pass{
    position:relative;
    width:100%;
    height:100%;
    background-color: $login_form_bg_color;
    border-radius: 70px;
    box-shadow: inset 0px 2px 4px 0px $shadow_color;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url('@/assets/images/mihoutao.png');
    background-repeat: no-repeat;
    background-position: 20px 95%;
    background-size: 60px 60px;
    .el-form{
      width: 80%;
      height: 80%;
      .find-btn{
        width:100%;
        height: 60px;
      }
      .verify-code-btn {
        position: absolute;
        width: auto;
        right:10px;
      }
    }
  }
</style>
<style lang="scss">
  .Find-Pass{
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
