<template>
  <button
    class="routing-button"
    @click="goTo(button.routeName)">
    {{ button.content }}
  </button>
</template>

<script>
export default {
  // 右上角的导航按钮
  name: 'RoutingButton',
  props: {
    // 按钮的信息
    button: {
      type: Object,
      default: function defaultButton() {
        return {};
      },
    },
  },
  methods: {
    goTo(someWhere) {
      if (someWhere !== '') {
        this.$router.push({ name: someWhere });
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.routing-button {
  min-width: 80px;
  margin: 10px;
  padding: 8px;
  border: 0;
  border-radius: 5%;
  outline: 0;
  font-size: 16px;
  background-color: #ffcccc;
  cursor: pointer;
}
</style>
