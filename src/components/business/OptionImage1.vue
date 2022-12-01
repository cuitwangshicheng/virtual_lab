<!--
name:操作图组件1
creator:CUIT_MOON
create-time:2022-12-01
-->
<template>
  <div class="Option-Image-1">
    <option-image ref="optionImage" :list="currentOptionImageList"></option-image>
    <!--工具栏-->
    <div class="tool-area">
      <tool-comp :list="currentClass?currentClass.tools:[]" @select-tool="selectTool"></tool-comp>
    </div>
  </div>
</template>

<script>
import OptionImage from './OptionImage.vue'
import ToolComp from './Tool'
export default {
  name: 'Option-Image-1',
  components: {
    OptionImage,
    ToolComp
  },
  props: {
    list: Array
  },
  computed: {
    currentClass: function () {
      if (this.$props.list && this.$props.list.length > 0) {
        if (this.$props.list[this.index]) {
          return this.$props.list[this.index]
        } else {
          return null
        }
      } else {
        return null
      }
    },
    currentOptionImageList: function () {
      const res = []
      this.$props.list.forEach(item => {
        res.push({
          img: [item['start-img'], item['end-img']],
          tool: null
        })
      })
      return res
    }
  },
  data () {
    return {
      index: 0,
      currentTool: null
    }
  },
  methods: {
    selectTool (url) {
      this.currentTool = url
      this.currentOptionImageList[this.index].tool = url
      alert(url)
    }
  }
}
</script>

<style lang="scss" scoped>
  .Option-Image-1{
    position:relative;
    width:100%;
    height:100%;
    .tool-area{
      position: absolute;
      bottom: 60px;
      width: 735px;
      height: 140px;
      left: calc(50% - 300px);
    }
  }
</style>
