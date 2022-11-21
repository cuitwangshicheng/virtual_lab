<!--
name:折叠面板
creator:CUIT_MOON
create-time:2022-11-21
-->
<template>
  <div class="Basic-Collapse">
    <el-collapse accordion v-model="activeName">
      <el-collapse-item v-for="item in list" :key="item.name" :name="item.name" :title="item.name" :class="item.subList && item.subList.length > 0?'has-list':'no-list'" @click="clickHeader(item.list, item.name)">
        <div v-for="(subItem,index) in item.subList" :key="'collapse_'+index">{{subItem.name}}</div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: 'Basic-Collapse',
  props: {
    list: Array
  },
  data () {
    return {
      activeName: this.$props.list.length > 0 ? this.$props.list[0].name : ''
    }
  },
  mounted () {
    this.$nextTick(() => {
      if (this.$props.list.length > 0) {
        if (!this.$props.list[0].subList) {
          this.clickHeader(this.$props.list[0].list, this.$props.list[0].name)
        }
      }
    })
  },
  methods: {
    clickHeader (contentList, name) {
      this.activeName = name
      this.$emit('click', contentList)
    }
  }
}
</script>

<style lang="scss" scoped>
  .Basic-Collapse{
    position:relative;
    width:100%;
    height:100%;
  }
</style>
<style lang="scss">
  @import '@/assets/style/color.scss';
  .Basic-Collapse{
    .el-collapse{
      .el-collapse-item{
        &.no-list{
          .el-collapse-item__wrap{
            display: none;
          }
          .el-collapse-item__header{
            .el-collapse-item__arrow{
              transform: rotate(0deg);
            }
          }
        }
        border-bottom: 20px solid transparent;
        &:last-child{
          border-bottom:none;
        }
        .el-collapse-item__header{
          background-color:$login_form_bg_color;
          color: $black_color;
          font-size: 18px;
          font-weight:bold;
          padding-left:10px;
          .el-collapse-item__arrow{
            color: $white_color;
            &.is-active{
              color: $black_color;
            }
          }
        }
        .el-collapse-item__wrap{
          background-color:transparent;
        }
        &.is-active{
          .el-collapse-item__header{
            color: $white_color;
          }
        }
      }
    }
  }
</style>
