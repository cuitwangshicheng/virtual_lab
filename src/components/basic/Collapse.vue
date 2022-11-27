<!--
name:折叠面板
creator:CUIT_MOON
create-time:2022-11-21
-->
<template>
  <div class="Basic-Collapse">
    <el-collapse accordion v-model="activeName">
      <el-collapse-item v-for="item in list" :key="item.name" :name="item.name" :title="item.name" :class="item.subList && item.subList.length > 0?'has-list':'no-list'" @click="clickHeader(item, item.name)">
        <div :class="index===activeItemIndex?'collapse-sub-item active':'collapse-sub-item'" v-for="(subItem,index) in item.subList" :key="'collapse_'+index" @click="clickItem(index, subItem)">{{subItem.name}}</div>
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
      activeName: this.$props.list.length > 0 ? this.$props.list[0].name : '',
      activeItemIndex: 0
    }
  },
  mounted () {
    this.$nextTick(() => {
      if (this.$props.list.length > 0) {
        if (!this.$props.list[0].subList) {
          this.clickHeader(this.$props.list[0].list, this.$props.list[0].name)
        } else {
          this.activeName = this.$props.list[0].name
          this.clickItem(0, this.$props.list[0].subList)
        }
      }
    })
  },
  methods: {
    clickHeader (item, name) {
      if (!item.subList) {
        this.activeName = name
        this.$emit('click', item.list)
      }
    },
    clickItem (index, item) {
      this.activeItemIndex = index
      this.$emit('click', item.list)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/style/color.scss';
  .Basic-Collapse{
    position:relative;
    width:100%;
    height:100%;
    .collapse-sub-item{
      height: 30px;
      line-height: 30px;
      background-color:$white_color;
      padding-left:10px;
      cursor: pointer;
      border-top: 1px solid $white_color;
      &.active{
        cursor: default;
        background-color: $login_form_bg_color;
        color:$white_color;
      }
    }
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
        border-bottom: 5px solid transparent;
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
        .el-collapse-item__content{
          padding-bottom: 0;
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
