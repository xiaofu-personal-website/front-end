<template>
  <div class="blog-content">
    <div class="title">{{ title }}</div>
    <div class="content">{{ content }}</div>
  </div>
</template>

<script>
export default {
  // 博客内容
  name: 'BlogContent',
  props: {
    // 博客标题
    title: {
      type: String,
      default: '',
    },
    // 博客正文
    content: {
      type: String,
      default: '',
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.blog-content {
  width: 100%;
  height: calc(100% - 78px);
}

.title {
  max-width: 800px;
  height: 84px;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  margin: 20px auto 0 auto;
}

.content {
  width: calc(100% - 160px);
  height: calc(100% - 84px);
  margin: 0 auto;
  font-size: 16px;
  line-height: 200%;
}
</style>
