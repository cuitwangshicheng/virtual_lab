<!--
name:答题卡
creator:CUIT_MOON
create-time:2022-11-18
-->
<template>
  <div class="Test-Card">
    <basic-rect :type="2">
      <!--title-->
      <div class="title">{{title}}</div>
      <!--content-->
      <div class="content">
        <!--题干-->
        <div class="topic" v-if="testInfo">
          {{testInfo.topic}}
          <el-checkbox-group v-model="checkedList" v-if="type==='check'" @change="statusChange">
            <el-checkbox class="check-item" v-for="(item,index) in testInfo.options" :key="index" :label="index">{{item}}</el-checkbox>
          </el-checkbox-group>
        </div>
        <!--答案和操作区-->
        <div class="option-area">
          <div class="answer">
            <gradient-button height="40px" font-size="20px" type="2">正确答案：{{testInfo.answerText}}</gradient-button>
          </div>
          <div class="opt">
            <gradient-button height="40px" font-size="20px" type="2" style="margin-right:20px;">确定</gradient-button>
            <gradient-button height="40px" font-size="20px" type="2">下一题</gradient-button>
          </div>
        </div>
      </div>
    </basic-rect>
  </div>
</template>

<script>
import BasicRect from '../basic/Rect.vue'
import GradientButton from '../basic/GradientButton.vue'
export default {
  name: 'Test-Card',
  components: {
    BasicRect,
    GradientButton
  },
  props: {
    title: {
      type: String,
      default: '答题'
    },
    testInfo: {
      type: Object,
      default: null
    },
    type: String
  },
  data () {
    return {
      checkedList: []
    }
  },
  methods: {
    statusChange (value) {
      if (this.checkedList.length > 1) {
        this.checkedList.splice(0, 1)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/color.scss";
  .Test-Card{
    position:relative;
    width:calc(100% - 40px);
    height:calc(100% - 40px);
    background-color: $login_form_bg_color;
    padding:20px;
    border-radius: 50px;
    .title{
      height:70px;
      width:calc(100% - 100px);
      background-image:url('@/assets/images/title_bg.png');
      background-repeat: no-repeat;
      background-position: left top;
      background-size: 100% 100%;
      padding-left: 100px;
      line-height: 70px;
      font-size: 24px;
      color: $white_color;
      font-weight: bold;
    }
    .content{
      height:calc(100% - 80px);
      margin-top:20px;
      width:100%;
      .topic{
        height:calc(100% - 180px);
        margin:20px;
        width:calc(100% - 80px);
        background-color:$content_bg_color;
        border-radius:20px;
        padding:20px;
        color: $white_color;
        overflow-y: auto;
        font-size:20px;
        text-indent: 2em;
        .check-item{
          height: 40px;
          line-height: 40px;
          &:first-child{
            margin-top: 40px;
          }
          .el-checkbox{
            color:$white_color;
          }
        }
      }
    }
    .option-area{
      display:flex;
      justify-content: space-between;
      align-items: center;
      width: 90%;
      margin-left:5%;
      .answer{
        width:140px;
      }
      .opt{
        width: 300px;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
      }
    }
  }
</style>
<style lang="scss">
  @import "~@/assets/style/color.scss";
  .Test-Card{
    .content{
      .topic{
        .el-checkbox{
          &.is-checked{
            .el-checkbox__inner{
              background-color: $login_form_bg_color;
            }
          }
          .el-checkbox__label{
            color: $white_color;
            font-size:20px;
            margin-left: -30px;
          }
          .el-checkbox__inner{
            width:20px;
            height:20px;
            background-color: transparent;
            &::after{
              width: 6px;
              height:12px;
              top: 0;
              left:6px;
              border-width:2px;
              border-color: $main_color;
            }
          }
        }
      }
    }
  }
</style>
