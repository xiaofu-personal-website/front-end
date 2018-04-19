<template>
  <div class="blogs-info">
    <div class="blog-info" v-for="blogInfo in blogsInfo" :key="blogInfo.index">
      <div class="blog-title">· {{ blogInfo.title }}</div>
      <div class="blog-upload-date">{{ blogInfo.uploadDate }}</div>
    </div>
  </div>
</template>

<script>
export default {
  // 博客相关信息
  name: 'BlogsInfo',
  props: {
    // 显示在页面上的博客信息列表
    blogsInfo: {
      type: Array,
      default: function defaultBlogsInfo() {
        return [];
      },
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.blogs-info {
  width: 100%;
  height: calc(100% - 80px);
  overflow-y: auto;
}

.blog-info {
  width: 100%;
  height: 40px;
  margin-top: 10px;
  margin-bottom: 10px;
  cursor: pointer;
}

.blog-info:hover {
  background-color: #FFDDAA;
}

.blog-title {
  width: calc(100% - 25px);
  height: 22px;
  padding: 0 10px 0 15px;
  font-size: 18px;
  color: #3c3c3c;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.blog-upload-date {
  width: calc(100% - 39px);
  height: 18px;
  padding: 0 10px 0 29px;
  font-size: 14px;
  color: #aaa;
}
</style>
