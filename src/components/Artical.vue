<template>
  <div class="blog">
    <el-row class="big-content-container hidden-xs-only">
      <el-col
        class="left-content"
        :sm="6" :md="6" :lg="6" :xl="6">
        <el-input
          placeholder="请输入博客名进行搜索"
          prefix-icon="el-icon-search"
          v-model="searchBar">
        </el-input>
        <categorys :categorys="categorys"></categorys>
        <blogs-info :blogsInfo="blogsInfo"></blogs-info>
      </el-col>
      <el-col
        class="right-content"
        @scroll.native="scrollEvent"
        :sm="18" :md="18" :lg="18" :xl="18">
        <normal-head-bar :buttons="buttons"></normal-head-bar>
        <floating-head-bar id="floatingHeadBar" :buttons="buttons"></floating-head-bar>
        <blog-content title="日语学习" :content="content"></blog-content>
      </el-col>
    </el-row>

    <div class="small-content-container hidden-sm-and-up">
      <el-input
        class="small-search-bar"
        placeholder="请输入博客名进行搜索"
        prefix-icon="el-icon-search"
        v-model="searchBar">
      </el-input>
      <el-dropdown trigger="click" @command="handleCommand">
        <i class="el-icon-menu"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="Home">主页</el-dropdown-item>
          <el-dropdown-item command="About">关于作者</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <categorys :categorys="categorys"></categorys>
      <blogs-info :blogsInfo="blogsInfo"></blogs-info>
    </div>
  </div>
</template>

<script>
import fakeData from '@/utils/fakeData';
import Categorys from './components/Categorys';
import BlogsInfo from './components/BlogsInfo';
import NormalHeadBar from './components/NormalHeadBar';
import FloatingHeadBar from './components/FloatingHeadBar';
import BlogContent from './components/BlogContent';

export default {
  name: 'Artical',
  components: {
    Categorys,
    BlogsInfo,
    NormalHeadBar,
    FloatingHeadBar,
    BlogContent,
  },
  data() {
    return {
      // 搜索框的输入值
      searchBar: '',

      // 类别组件相关数据
      // 全部类别数组
      allCategorys: [],
      // 显示在页面上的类别数组
      categorys: [],
      // 当前显示的第一个类别的序号
      firstCategoryNumber: 0,
      // 页面上总共显示多少个类别
      showCategorysCount: 4,

      // 博客标题列表部分相关数据
      // 显示在页面上的博客信息列表
      blogsInfo: [],
      // 每次请求多少个博客信息
      blogsInfoCount: 20,
      // 最近一次请求的博客信息列表的序号
      blogsInfoNumber: 0,

      // 普通的处于页面正常结构中的顶部跳转按钮列表中的各按钮信息
      buttons: [
        {
          content: '主页',
          routeName: 'Home',
        },
        {
          content: '关于作者',
          routeName: 'About',
        },
        {
          content: '登录',
          routeName: 'LogIn',
        },
      ],

      // 跳转按钮列表
      oldScrollTop: 0,

      // 博客正文
      content: fakeData.content,
    };
  },
  methods: {
    // 上下滑动博客内容部分的滑动时间
    scrollEvent(event) {
      const floatingHeadBar = document.getElementById('floatingHeadBar');
      if (event.target.scrollTop > this.oldScrollTop || event.target.scrollTop < 58) {
        floatingHeadBar.style.display = 'none';
      } else {
        floatingHeadBar.style.display = '';
      }
      this.oldScrollTop = event.target.scrollTop;
    },
    // 跳转按钮下拉菜单的监听事件
    handleCommand(command) {
      this.$router.push({ name: command });
    },
  },
  mounted() {
    // 获取类别种类
    const allCategorys = fakeData.allCategorys;
    for (let i = this.firstCategoryNumber; i < this.showCategorysCount; i += 1) {
      this.categorys.push(allCategorys[i]);
    }

    // 获取所有现在已存的博客信息列表，模拟后端数据
    const allBlogsInfo = fakeData.allBlogsInfo;
    // 获取当前种类下的各博客信息
    for (let i = this.blogsInfoNumber;
      i < this.blogsInfoCount * (this.blogsInfoNumber + 1); i += 1) {
      if (allBlogsInfo[i]) {
        this.blogsInfo.push(allBlogsInfo[i]);
      }
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.blog {
  width: 100%;
  height: 100vh;
}

.big-content-container {
  width: 100%;
  height: 100%;
}

.left-content {
  height: 100%;
  background-color: #fef4eb;
}

.right-content {
  height: 100%;
  overflow-y: auto;
}

.small-content-container {
  width: 100%;
  height: 100%;
  background-color: #fef4eb;
}

.small-search-bar {
  width: calc(100% - 40px);
}
</style>

<style>
.blog .big-content-container .left-content .el-input__inner,
.blog .small-content-container .el-input__inner {
  border: 0;
  background-color: #fef4eb;
  color: #3c3c3c;
}

.blog .small-content-container .el-dropdown {
  position: absolute;
  top: 0;
  right: 0;
  width: 40px;
  height: 40px;
}
.blog .small-content-container .el-dropdown .el-icon-menu {
  display: inline-block;
  margin: 5px;
  cursor: pointer;
  font-size: 30px
}
</style>
