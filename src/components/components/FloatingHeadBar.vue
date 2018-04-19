<template>
  <div class="floating-head-bar">
    <routing-button
      class="floating-routing-button"
      v-for="button in buttons"
      :button="button"
      :key="button.content">
    </routing-button>
  </div>
</template>

<script>
import RoutingButton from './RoutingButton';

export default {
  // 处在页面顶层的顶部跳转按钮列表
  name: 'FloatingHeadBar',
  components: {
    RoutingButton,
  },
  props: {
    // 各按钮的信息
    buttons: {
      type: Array,
      default: function defaultButtons() {
        return [];
      },
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.floating-head-bar {
  position: fixed;
  top: 0;
  width: inherit;
  height: 58px;
  padding: 0;
  background-color: #fff;
  opacity: 0.9;
  z-index: 9998;
  text-align: right;
}

.floating-routing-button {
  z-index: 9999;
}
</style>
