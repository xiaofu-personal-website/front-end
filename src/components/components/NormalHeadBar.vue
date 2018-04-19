<template>
  <div class="normal-head-bar">
    <routing-button
      v-for="button in buttons"
      :button="button"
      :key="button.content">
    </routing-button>
  </div>
</template>

<script>
import RoutingButton from './RoutingButton';

export default {
  // 普通的处于页面正常结构中的顶部跳转按钮列表
  name: 'NormalHeadBar',
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
.normal-head-bar {
  width: 100%;
  height: 58px;
  padding: 0;
  text-align: right;
}
</style>
