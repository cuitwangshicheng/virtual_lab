<!--
name:图片标记组件
creator:CUIT_MOON
create-time:2022-11-27
-->
<template>
  <div class="Image-Marker">
    <div class="container">
      <!--title-->
      <div class="title" v-if="type===0">请输入发光点结构名称</div>
      <img :src="url"/>
      <breath-circle v-if="type=== 0" :style="style" @click="clickMarker"></breath-circle>
      <!--输入框-->
      <el-form inline size="large" v-if="showInputFlag&&type===0" :style="inputStyle">
        <el-form-item label="结构名字：">
          <el-input v-model="inputVal"></el-input>
        </el-form-item>
        <el-form-item class="no-bg">
          <el-button @click="submitVal">确认</el-button>
        </el-form-item>
      </el-form>
      <!--描述-->
      <template v-if="type===1">
        <template v-for="item in markerList" :key="item.name">
          <div :style="getStyle(item.nameLocation)">{{item.name}}</div>
          <breath-circle :style="getStyle(item.position)" @click="clickMarker1(item)"></breath-circle>
        </template>
      </template>
    </div>
    <!--错误提示框-->
    <basic-alert type="error" v-if="answerError&&type===0">回答错误</basic-alert>
  </div>
</template>

<script>
import BreathCircle from '@/components/basic/BreathCircle.vue'
import BasicAlert from '@/components/basic/Alert.vue'
export default {
  name: 'Image-Marker',
  components: {
    BreathCircle,
    BasicAlert
  },
  props: {
    type: {
      type: Number,
      default: 0
    },
    url: {
      type: String,
      default: ''
    },
    markerList: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  watch: {
    url: function () {
      this.showInputFlag = false
      this.markerIndex = 0
    }
  },
  computed: {
    style: function () {
      if (this.$props.markerList.length > 0 && this.markerIndex < this.$props.markerList.length) {
        console.log(this.$props.markerList)
        return {
          position: 'absolute',
          left: this.$props.markerList[this.markerIndex].position[0],
          top: this.$props.markerList[this.markerIndex].position[1]
        }
      } else {
        return {
          display: 'none'
        }
      }
    }
  },
  data () {
    return {
      markerIndex: 0,
      showInputFlag: false,
      inputStyle: {},
      inputVal: '',
      timer: null,
      answerError: false // 是否答题错误
    }
  },
  beforeUnmount () {
    if (this.timer != null) {
      clearTimeout(this.timer)
      this.timer = null
    }
  },
  methods: {
    getStyle (arr) {
      console.log(arr)
      return {
        position: 'absolute',
        left: arr[0],
        top: arr[1]
      }
    },
    clickMarker (e) {
      if (this.$props.type === 0) {
        this.inputStyle = {
          position: 'fixed',
          left: e.x + 20 + 'px',
          top: e.y - 20 + 'px',
          'z-index': 9
        }
        this.showInputFlag = true
      }
    },
    clickMarker1 (item) {
      this.$emit('click-marker', item)
    },
    submitVal () {
      if (this.inputVal.trim() !== this.markerList[this.markerIndex].answer) {
        this.$emit('reduce-score', 2)
        this.answerError = true
        this.timer = setTimeout(() => {
          this.answerError = false
          clearTimeout(this.timer)
          this.timer = null
          this.markerIndex++
          if (this.markerIndex > this.markerList.length - 1) {
            this.$emit('next-step')
            this.markerIndex = 0
          }
          this.showInputFlag = false
          this.inputVal = ''
        }, 2000)
      } else {
        this.markerIndex++
        if (this.markerIndex > this.markerList.length - 1) {
          this.$emit('next-step')
          this.markerIndex = 0
        }
        this.showInputFlag = false
        this.inputVal = ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/color.scss";
  .Image-Marker{
    position:relative;
    width:calc(100% - 40px);
    height:calc(100% - 40px);
    background-color: $login_form_bg_color;
    padding:20px;
    border-radius: 50px;
    .container{
      margin:20px;
      background-color:$content_bg_color;
      height: calc(100% - 80px);
      padding:20px;
      border-radius:50px;
      position: relative;
      .title{
        font-size:30px;
        color: $white_color;
        text-align:center;
      }
      img{
        width:100%;
        height:calc(100% - 60px);
      }
      .el-form{
        .el-button{
          width:100px;
          height: 40px;
          line-height: 40px;
          background-color:$login_form_bg_color;
          color: $black_color;
          border:none;
          border-radius: 40px;
          font-size:20px;
          font-weight: bold;
        }
      }
    }
  }
</style>
<style lang="scss">
  @import "~@/assets/style/color.scss";
  .Image-Marker{
    .el-form{
      .el-form-item{
        background-color: $white_color;
        &.no-bg{
          background-color: transparent;
        }
        .el-form-item__content{
          .el-input__wrapper{
            box-shadow: none;
          }
        }
        .el-form-item__label{
          text-align:center;
          font-size: 20px;
          font-weight:bold;
          display: inline-block;
        }
      }
    }
  }
</style>
