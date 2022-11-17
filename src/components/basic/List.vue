<!--
name:
creator:CUIT_MOON
create-time:2022-11-17
-->
<template>
  <div class="Basic-List">
    <div v-for="(item, index) in list" :key="index" :class="index===0?'item active':'item'">{{item}}</div>
  </div>
</template>

<script>
export default {
  name: 'Basic-List',
  props: {
    list: Array
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~@/assets/style/color.scss';
  .Basic-List{
    position:relative;
    width:100%;
    height:100%;
    padding: 30px 0;
    border-radius: 50px;
    background-color: $login_form_bg_color;
    text-align: center;
    box-shadow: 0 2px 1px 2px #ccc;
    .item{
      height: 40px;
      line-height: 40px;
      border:1px solid $white_color;
      display: inline-block;
      padding:0 20px;
      margin-top: 12px;
      margin-bottom:12px;
      border-radius: 20px;
      color:$content_bg_color;
      font-weight: 600;
      cursor: pointer;
      &.active{
        color: $white_color;
        background-color: $content_bg_color;
        cursor: default;
      }
    }
  }
</style>
