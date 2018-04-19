<template>
  <div class="categorys">
    <i class="el-icon-arrow-left"></i>
    <el-row class="categorys-text">
      <el-col :span="span" v-for="category in categorys" :key="category.index">
        <span class="category">{{ category }}</span>
      </el-col>
    </el-row>
    <i class="el-icon-arrow-right"></i>
  </div>
</template>

<script>
export default {
  // 分类列表
  name: 'Categorys',
  props: {
    // 每个数据占多少比例
    span: {
      type: Number,
      default: 6,
    },
    // 显示在页面上的类别数组
    categorys: {
      type: Array,
      default: function defaultCategorys() {
        return [];
      },
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.categorys {
  position: relative;
  width: 100%;
  height: 40px;
  border: 0;
}

.el-icon-arrow-left,
.el-icon-arrow-right {
  position: absolute;
  width: 16px;
  height: 16px;
  top: 12px;
}

.el-icon-arrow-left {
  left: 5px;
}

.el-icon-arrow-right {
  right: 5px;
}

.categorys-text {
  position: relative;
  top: 9px;
  margin: 0 21px;
  width: calc(100% - 42px);
  display: inline-block;
}

.categorys-text .el-col {
  text-align: center;
  cursor: pointer;
}
</style>
