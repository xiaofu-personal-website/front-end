<template>
  <div class="home">
    <div class="title">{{ msg }}</div>
    <img class="background-image hidden-xs-only" src="@/../static/home_big.jpg">
    <img class="background-image hidden-sm-and-up" src="@/../static/home_small.jpg">
    <el-button type="danger" @click="goToHome" plain>主页</el-button>
    <el-button type="danger" @click="goToAbout" plain>关于作者</el-button>
    <el-button type="danger" @click="goToArtical" plain>文章</el-button>
    <el-button type="danger" @click="goToLogIn" plain>作者登陆</el-button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to 小f的个人网站'
    }
  },
  methods: {
    goToHome() {
      this.$router.push({name: 'Home'})
    },
    goToAbout() {
      this.$router.push({name: 'About'})
    },
    goToArtical() {
      this.$router.push({name: 'Artical'})
    },
    goToLogIn() {
      this.$router.push({name: 'LogIn'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  position: absolute;
  left: 1%;
  top: 1%;
  color: #FFA500;
  font-size: 1.5em;
}
.background-image {
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
}
</style>
