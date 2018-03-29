<template>
  <button
    class="floating-button"
    :style="{
      margin, padding, border, borderRadius, color, backgroundColor,
      opacity, left, top, width, height, fontSize }"
    @click="goTo(routeName)">{{ content }}</button>
</template>

<script>
export default {
  name: 'FloatingButton',
  props: {
    // 按钮中的内容
    content: {
      type: String,
      default: '',
    },
    // 去到哪个页面
    routeName: {
      type: String,
      default: '',
    },
    // 外边距
    margin: {
      type: String,
      default: '0',
    },
    // 内边距
    padding: {
      type: String,
      default: '0',
    },
    // 边框
    border: {
      type: String,
      default: '0',
    },
    // 边框弧度
    borderRadius: {
      type: String,
      default: '50%',
    },
    // 字体颜色
    color: {
      type: String,
      default: '#fb3',
    },
    // 背景颜色
    backgroundColor: {
      type: String,
      default: '#58a',
    },
    // 字体颜色
    opacity: {
      type: Number,
      default: 0.8,
    },
    // 左边的距离
    left: {
      type: String,
      default: '0',
    },
    // 上面的距离
    top: {
      type: String,
      default: '0',
    },
    // 宽度
    width: {
      type: String,
      default: '5em',
    },
    // 高度
    height: {
      type: String,
      default: '5em',
    },
    // 字体大小
    fontSize: {
      type: String,
      default: '1em',
    },
  },
  data() {
    return {
      msg: '博客页面',
    };
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
.floating-button {
  display: inline-block;
  position: absolute;
  outline: none;
  font-weight: bold;
  cursor: pointer;
}
</style>
<template>
  <button
    class="floating-button"
    :style="{
      margin, padding, border, borderRadius, color, backgroundColor,
      opacity, left, top, width, height, fontSize }"
    @click="goTo(routeName)">{{ content }}</button>
</template>

<script>
export default {
  name: 'FloatingButton',
  props: {
    // 按钮中的内容
    content: {
      type: String,
      default: '',
    },
    // 去到哪个页面
    routeName: {
      type: String,
      default: '',
    },
    // 外边距
    margin: {
      type: String,
      default: '0',
    },
    // 内边距
    padding: {
      type: String,
      default: '0',
    },
    // 边框
    border: {
      type: String,
      default: '0',
    },
    // 边框弧度
    borderRadius: {
      type: String,
      default: '50%',
    },
    // 字体颜色
    color: {
      type: String,
      default: '#fb3',
    },
    // 背景颜色
    backgroundColor: {
      type: String,
      default: '#58a',
    },
    // 字体颜色
    opacity: {
      type: Number,
      default: 0.8,
    },
    // 左边的距离
    left: {
      type: String,
      default: '0',
    },
    // 上面的距离
    top: {
      type: String,
      default: '0',
    },
    // 宽度
    width: {
      type: String,
      default: '5em',
    },
    // 高度
    height: {
      type: String,
      default: '5em',
    },
    // 字体大小
    fontSize: {
      type: String,
      default: '1em',
    },
  },
  data() {
    return {
      msg: '博客页面',
    };
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
.floating-button {
  display: inline-block;
  position: absolute;
  outline: none;
  font-weight: bold;
  cursor: pointer;
}
</style>
