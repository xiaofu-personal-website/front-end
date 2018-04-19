<template>
  <div class="home">
    <div class="title">{{ msg }}</div>
    <img class="background-image hidden-xs-only" src="@/../static/home_big.jpg">
    <img class="background-image hidden-sm-and-up" src="@/../static/home_small.jpg">
    <!-- <floating-button class="login-button hidden-xs-only" content="作者登陆" routeName="LogIn" left="80%" top="5%"></floating-button> -->
    <!-- <floating-button class="artical-button hidden-xs-only" content="文章" routeName="Artical" left="35%" top="20%" width="10em" height="10em" fontSize="1.5em"></floating-button> -->
    <!-- <floating-button class="artical-button hidden-sm-and-up" content="文章" routeName="Artical" left="40%" top="20%" width="7em" height="7em" fontSize="1.2em"></floating-button> -->
    <!-- <floating-button class="about-button hidden-xs-only" content="关于作者" routeName="About" left="7%" top="58%" width="7em" height="7em" fontSize="1.2em"></floating-button> -->
    <!-- <floating-button class="about-button hidden-sm-and-up" content="关于作者" routeName="About" left="15%" top="63%"></floating-button> -->
    <div class="login-button" @click="goTo('LogIn')">
      <span class="login-button-text">作者登陆</span>
      <img class="login-button-image" src="@/../static/home_button.jpg">
    </div>
    <div class="artical-button" @click="goTo('Artical')">
      <span class="artical-button-text">文章</span>
      <img class="artical-button-image" src="@/../static/home_button.jpg">
    </div>
    <div class="about-button" @click="goTo('About')">
      <span class="about-button-text">关于作者</span>
      <img class="about-button-image" src="@/../static/home_button.jpg">
    </div>
  </div>
</template>

<script>
import FloatingButton from './components/FloatingButton';

export default {
  name: 'Home',
  components: {
    FloatingButton,
  },
  data () {
    return {
      msg: 'Welcome to 小f的个人网站'
    }
  },
  methods: {
    // goToHome() {
    //   this.$router.push({name: 'Home'})
    // },
    // goToAbout() {
    //   this.$router.push({name: 'About'})
    // },
    // goToArtical() {
    //   this.$router.push({name: 'Artical'})
    // },
    // goToLogIn() {
    //   this.$router.push({name: 'LogIn'})
    // },
    goTo(someWhere) {
      this.$router.push({name: someWhere})
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
  color: #8b4513;
  font-weight: bold;
  /*color: #FFA500;*/
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
.login-button {
  position: absolute;
  left: 80%;
  top: 5%;
  animation: aniOne 10s infinite;
}
.login-button:hover .login-button-image {
  opacity: 0.6;
}
.login-button-image {
  position: relative;
  left: 0;
  top: 0;
  width: 7em;
  height: 7em;
  opacity: 0.3;
}
.login-button-text {
  position: absolute;
  left: 1em;
  top: 2.2em;
  z-index: 2;
  font-size: 1.2em;
  /*color: #ff8c00;*/
  color: #ffebcd;
  font-weight: bold;
}
.artical-button {
  position: absolute;
  left: 36%;
  top: 25%;
  width: 10em;
  height: 10em;
  cursor: pointer;
  animation: aniTwo 10s infinite;
}
.artical-button:hover .artical-button-image {
  opacity: 0.65;
}
.artical-button-image {
  position: relative;
  left: 0;
  top: 0;
  width: 16em;
  height: 16em;
  opacity: 0.45;
}
.artical-button-text {
  position: absolute;
  left: 0em;
  top: 2em;
  width: 5em;
  z-index: 2;
  font-size: 3em;
  color: #696969;
  /*color: #fdf5e6;*/
  /*font-weight: bold;*/
}
.about-button {
  position: absolute;
  left: 7%;
  top: 58%;
  width: 7em;
  height: 7em;
  cursor: pointer;
  animation: aniThree 10s infinite;
}
.about-button:hover .about-button-image {
  opacity: 0.6;
}
.about-button-image {
  position: relative;
  left: 0;
  top: 0;
  width: 7em;
  height: 7em;
  opacity: 0.3;
}
.about-button-text {
  position: absolute;
  left: 1em;
  top: 2.2em;
  z-index: 2;
  font-size: 1.2em;
  color: #8b4513;
  font-weight: bold;
}
@keyframes aniOne {
  0% {transform: translate(0, 0);}
  25% {transform: translate(1.5em, .5em);}
  50% {transform: translate(.5em, -.5em);}
  75% {transform: translate(1.5em, .5em)}
  100% {transform: translate(0, 0);}
}

@keyframes aniTwo {
  0% {transform: translate(0, 0);}
  25% {transform: translate(1em, .5em);}
  50% {transform: translate(.5em, 0);}
  75% {transform: translate(1em, -.5em)}
  100% {transform: translate(0, 0);}
}

@keyframes aniThree {
  0% {transform: translate(0, 0);}
  25% {transform: translate(-.5em, 1em);}
  50% {transform: translate(.5em, 0);}
  75% {transform: translate(-.5em, .5em)}
  100% {transform: translate(0, 0);}
}
</style>
