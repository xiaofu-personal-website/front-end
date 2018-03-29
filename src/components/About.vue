<template>
  <div class="about">
    <div>{{ msg }}</div>
    <el-button type="danger" @click="goToHome" plain>主页</el-button>
    <el-button type="danger" @click="goToAbout" plain>关于作者</el-button>
    <el-button type="danger" @click="goToArtical" plain>文章</el-button>
    <el-button type="danger" @click="goToLogIn" plain>作者登陆</el-button>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      msg: '关于作者页面'
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

</style>
