<!--
name: 装饰组件
creator:CUIT_MOON
create-time:2022-11-17
-->
<template>
  <div class="Decoration-Dot">

  </div>
</template>

<script>
export default {
  name: 'Decoration-Dot',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~@/assets/style/color.scss';
  .Decoration-Dot{
    position:relative;
    width:30px;
    height:30px;
    border:5px solid $title_icon_sub_color_2;
    background-color: $title_icon_sub_color_0;
  }
</style>
