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
            <div class="title">{{systemName[0]}}</div>
            <div class="title">{{systemName[1]}}</div>
          </div>
        </Rect>
      </div>
      <div class="login-form" v-if="!isLogin">
        <LoginForm v-if="state==='login-form'" @register="state='register-form'" @find-pass="state='find-form'"></LoginForm>
        <register-form v-if="state==='register-form'" @login="state='login-form'"></register-form>
        <find-form v-if="state==='find-form'" @login="state='login-form'"></find-form>
      </div>
      <transition name="el-fade-in-linear">
        <div class="main-menu" v-if="isLogin">
          <main-menu v-for="menu in menuList" :key="menu.id" :menu="menu"></main-menu>
        </div>
      </transition>
    </div>
    <basic-alert show-shade :text="alertText" :type="alertType" v-if="showAlert" @ok="showAlert=false"></basic-alert>
    <!--全屏组件-->
    <div class="full-screen">
      <full-screen></full-screen>
    </div>
  </div>
</template>

<script>
import Rect from '@/components/basic/Rect.vue'
import LoginForm from '@/components/business/LoginForm.vue'
import RegisterForm from '@/components/business/RegisterForm.vue'
import FindForm from '@/components/business/FindPass.vue'
import MainMenu from '@/components/business/MainMenu.vue'
import BasicAlert from '@/components/basic/Alert.vue'
import FullScreen from '@/components/basic/FullScreen.vue'
import mainMenu from '@/assets/data/main_menu.json'
export default {
  name: 'login-page',
  components: {
    Rect,
    LoginForm,
    RegisterForm,
    FindForm,
    BasicAlert,
    MainMenu,
    FullScreen
  },
  computed: {
    isLogin: function () {
      return this.$store.getters.getToken
    }
  },
  data () {
    return {
      menuList: mainMenu,
      state: 'login-form', // 定义首页未登录时状态：login-form-显示登录框；register-form-显示注册框；find-form-找回密码框
      showAlert: false,
      alertText: [],
      alertType: 'info',
      systemName: window.systemConfig.systemName
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
      .main-menu{
        height: 400px;
        width:100%;
        text-align: center;
        margin-left:auto;
        margin-right:auto;
        display: flex;
        justify-content: space-between;
      }
    }
    .full-screen{
      position: absolute;
      z-index: 9;
      top: 20px;
      right:20px;
      width: 40px;
      height: 40px;
      background-color:rgba(0,0,0,.2);
      border-radius:20px;
    }
  }
</style>
