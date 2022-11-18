<!--
name:答题卡
creator:CUIT_MOON
create-time:2022-11-18
-->
<template>
  <div class="Test-Card">
    <basic-rect type="2">
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
      </div>
    </basic-rect>
  </div>
</template>

<script>
import BasicRect from '../basic/Rect.vue'
export default {
  name: 'Test-Card',
  components: {
    BasicRect
  },
  props: {
    title: String,
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
      display: flex;
      height:calc(100% - 100px);
      justify-content: flex-start;
      margin-top:20px;
      width:100%;
      .topic{
        height:calc(100% - 180px);
        margin:20px;
        width:calc(100% - 40px);
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
  }
</style>
<style lang="scss">
  @import "~@/assets/style/color.scss";
  .Test-Card{
    .content{
      .topic{
        .el-checkbox{
          .el-checkbox__label{
            color: $white_color;
            font-size:20px;
            margin-left: -30px;
          }
          .el-checkbox__inner{
            width:20px;
            height:20px;
          }
        }
      }
    }
  }
</style>
