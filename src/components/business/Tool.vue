<!--
name:工具栏组件
creator:CUIT_MOON
create-time:2022-12-02
-->
<template>
  <div class="Tool-Comp">
    <div class="turn-icon turn-left">
      <i class="fa fa-caret-left"></i>
    </div>
    <div class="tool-list">
      <div class="list-container">
        <div v-for="item in pageSize" class="tool-item" :key="item">
          <img v-if="list.length > 0 && list[(currentPage - 1) * pageSize + item - 1]" :src="list[(currentPage - 1) * pageSize + item - 1]" @click="selectTool(list[(currentPage - 1) * pageSize + item - 1], (currentPage - 1) * pageSize + item - 1)" />
        </div>
      </div>
    </div>
    <div class="turn-icon turn-right">
      <i class="fa fa-caret-right"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tool-Comp',
  props: {
    list: Array
  },
  computed: {
    toolList: function () {
      return this.$props.list
    }
  },
  data () {
    return {
      currentPage: 1, // 当前页数
      pageSize: 4 // 每页工具数
    }
  },
  methods: {
    selectTool (url, index) {
      this.$emit('select-tool', url, index)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/color.scss";
  .Tool-Comp{
    position:relative;
    width:100%;
    height:100%;
    background-color: $main_color;
    opacity: 0.9;
    border-radius: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .turn-icon{
      width:50px;
      height:140px;
      line-height: 140px;
      font-size: 60px;
      text-align: center;
      color: $login_form_bg_color;
      cursor: pointer;
      &:hover{
        transform: scale(1.2);
      }
    }
    .tool-list{
      width:calc(100% - 60px);
      height: 140px;
      overflow: hidden;
      .list-container{
        width:auto;
        height: 140px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        overflow-x: auto;
        .tool-item{
          width: 140px;
          height: 100px;
          background:$login_form_bg_color;
          margin-left: 10px;
          margin-right: 10px;
          border-radius: 10px;
          img{
            width:100%;
            height:100%;
            cursor: pointer;
          }
        }
      }
    }
  }
</style>
