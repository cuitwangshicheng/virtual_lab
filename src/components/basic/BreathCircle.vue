<!--
name:
creator:CUIT_MOON
create-time:2022-11-27
-->
<template>
  <div class="Breath-Circle" :style="style">

  </div>
</template>

<script>
export default {
  name: 'Breath-Circle',
  props: {
    width: {
      type: String,
      default: '30px'
    },
    height: {
      type: String,
      default: '30px'
    },
    color: {
      type: String,
      default: '#fff'
    }
  },
  computed: {
    style: function () {
      return {
        width: this.$props.width,
        height: this.$props.height,
        'border-radius': this.$props.width,
        'background-color': this.$props.color
      }
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  .Breath-Circle{
    position:relative;
    width:100%;
    height:100%;
    animation-timing-function: ease-in-out;
    animation-name: breathe;
    animation-duration: 1000ms;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    cursor: pointer;
  }
  @keyframes breathe {
    0% {
      opacity: .2;
    }
    100% {
      opacity: 1;
    }
  }
</style>
