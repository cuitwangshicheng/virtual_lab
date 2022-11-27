<!--
name: 详细资料2组件
creator:CUIT_MOON
create-time:2022-11-17
-->
<template>
  <div :class="'Detail-Info type_'+type">
    <div class="title">{{title}}</div>
    <div class="content-list">
      <div class="list-item">{{content}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Detail-Info-2',
  props: {
    content: String,
    title: {
      type: String,
      default: ''
    },
    type: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~@/assets/style/color.scss';
  .Detail-Info{
    position:relative;
    width:100%;
    height:calc(100% - 40px);
    border-radius: 50px;
    text-align: center;
    padding-top: 30px;
    padding-bottom:10px;
    &.type_2{
      background-color:$content_bg_color;
      .content-list{
        background-color:$login_form_bg_color;
      }
    }
    &.type_1{
      background-color:$light_grey_color;
      .content-list{
        background-color:$light_primary_color;
      }
    }
    .title{
      position: absolute;
      top:20px;
      text-align:center;
      color: $white_color;
      font-size:14px;
      width:100%;
    }
    .content-list{
      margin:20px;
      padding:20px 20px;
      border-radius:50px;
      overflow-y: auto;
      height: calc(100% - 80px);
      text-align: left;
      .list-item{
        background-color: $grey_color;
        margin-top:5px;
        margin-bottom:5px;
        height: calc(100% - 10px);
        line-height: 40px;
        font-size:20px;
        font-weight: bold;
      }
    }
  }
</style>
