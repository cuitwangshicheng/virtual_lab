<template>
  <div class="home">
    <header-comp :title="currentMenu.name"></header-comp>
    <div class="nav">
      <div style="display:flex;" v-if="currentMenu.subMenu">
        <div style="display:flex;" v-for="(item, index) in currentMenu.subMenu" :key="item.id">
          <div style="display:flex;align-items: center;">
            <basic-nav :class="index===currentNavIndex?'nav-item active':'nav-item'" @click="changeNav(index, item.id)">{{item.name}}</basic-nav>
            <div class="dot" v-if="index !== currentMenu.subMenu.length - 1"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <!--左侧区域-->
      <div class="left-panel">
        <div class="left-top-panel">
          <basic-collapse style="width:80%;" :list="currentClass" @click="checkClass"></basic-collapse>
        </div>
        <div class="left-bottom-panel">
          <div class="title">{{leftBottomInfo.title}}</div>
          <detail-info :type="2" :list="leftBottomInfo.list"></detail-info>
        </div>
      </div>
      <!--中间区域-->
      <div class="center-panel">
        <video-class style="height:calc(100% - 80px);" title="教学视频" type="1" v-if="currentClassInfo && currentClassInfo.type==='video'" :url="currentClassVideo"></video-class>
        <test-card style="height:calc(100% - 80px);" v-if="currentClassInfo && currentClassInfo.type==='test'" :type="currentClassInfo.testInfo.type" :testInfo="currentClassInfo.testInfo"></test-card>
      </div>
      <!--右侧区域-->
      <div class="right-panel">
        <div class="option-btn">
          <gradient-button type="1" height="40px" fontSize="20px">上一步</gradient-button>
          <gradient-button type="1" height="40px" fontSize="20px">下一步</gradient-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComp from '@/components/business/Header.vue'
import BasicNav from '@/components/basic/Nav.vue'
import BasicCollapse from '@/components/basic/Collapse'
import DetailInfo from '@/components/business/DetailInfo.vue'
import VideoClass from '@/components/business/VideoClass.vue'
import TestCard from '@/components/business/TestCard.vue'
import GradientButton from '@/components/basic/GradientButton.vue'

import ClassContent from '@/assets/data/class_content.json'

export default {
  name: 'HomeView',
  components: {
    HeaderComp,
    BasicNav,
    DetailInfo,
    BasicCollapse,
    VideoClass,
    GradientButton,
    TestCard
  },
  data () {
    return {
      leftTopInfo: {
        type: 'list',
        list: ['整形修剪技术的目标', '整形修剪技术的原理', '整形修剪技术的思路']
      },
      leftBottomInfo: {
        title: '详细资料',
        list: ['1、详细资料', '2、详细资料', '3、详细资料', '4、详细资料', '5、详细资料', '6、详细资料', '7、详细资料']
      },
      detailList: ['详细资料', '详细资料'],
      workspaceType: 'test', // video-视频；test-测试
      testType: 'check', // 答题类型：check-选择题
      testInfo: {
        id: 0,
        type: 'check',
        topic: '（）__是能够指挥计算机工作的程序、程序运行时所需要的数据、相关文档和资料的集合的统称。',
        options: ['A.软件', 'B.硬件', 'C.高级语音', 'D.指令系统'],
        multiCheck: false, // 是否多选
        answer: 0,
        answerText: 'A'
      },
      currentMenu: {},
      currentNavIndex: 0,
      currentClass: [], // 当前课程列表，用于构建左侧列表
      classList: [], // 课程列表，用于构建中间工作区内容
      classIndex: 0, // 当前课程索引
      currentClassInfo: null,
      currentClassVideoIndex: 0,
      currentClassVideo: ''
    }
  },
  mounted () {
    try {
      this.currentMenu = this.$store.getters.getCurrentMenu
      if (this.currentMenu.subMenu instanceof Array) {
        if (this.currentMenu.subMenu.length > 0) {
          console.log('123')
          this.currentClass = ClassContent['' + this.currentMenu.subMenu[0].id]
          console.log(this.currentClass)
          this.currentClassInfo = this.currentClass[this.classIndex]
          if (this.currentClassInfo.type === 'video') {
            this.currentClassVideo = this.currentClassInfo.url[this.currentClassVideoIndex]
          }
        }
      }
    } catch (e) {
      this.$message.error('菜单初始化异常')
    }
  },
  methods: {
    // 选择课程
    checkClass (list) {
      this.classList = list
      if (list instanceof Array && list.length > 0) {
        this.currentClassInfo = list[this.classIndex]
        console.log(this.currentClassInfo)
        if (this.currentClassInfo.type === 'video') {
          this.currentClassVideo = this.currentClassInfo.url[this.currentClassVideoIndex]
          console.log(this.currentClassVideo)
        }
      }
    },
    changeNav (index, id) {
      this.currentNavIndex = index
      console.log(ClassContent['' + id])
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '~@/assets/style/color.scss';
  .home{
    position: relative;
    width:100%;
    height:100%;
    min-height: 1196px;
    min-height:850px;
    .nav{
      height:120px;
      display: flex;
      align-items: center;
      .nav-item{
        margin-left:30px;
      }
      .dot{
        width:20px;
        height:20px;
        background-color: $main_color;
        margin-left: 50px;
        box-shadow: 2px 2px 3px 2px $shadow_color;
        border-radius:20px;
      }
    }
    .container{
      height: calc(100% - 210px);
      display: flex;
      .left-panel{
        width: 340px;
        overflow-y: auto;
        .left-top-panel{
          width: 80%;
          margin-left: 10%;
        }
        .left-bottom-panel{
          width:80%;
          position: relative;
          margin-left:10%;
          margin-top: 60px;
          .title{
            position: absolute;
            top: -30px;
            height: 60px;
            z-index:2;
            background-color:$content_bg_color;
            width:80%;
            line-height: 60px;
            color:$white_color;
            left:10%;
            border-radius:30px;
            box-shadow: 0px 2px 2px 1px $shadow_color;
            text-align: center;
          }
        }
      }
      .center-panel{
        width: calc(100% - 680px);
        overflow: hidden;
      }
      .right-panel{
        width:340px;
        display: flex;
        justify-content: flex-end;
        margin-bottom:120px;
        flex-direction: column;
        .option-btn{
          width: 140px;
          margin-left:40px;
        }
      }
    }
  }
</style>
