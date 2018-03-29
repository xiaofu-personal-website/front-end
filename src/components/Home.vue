<template>
  <div class="home">
    <div class="title">{{ msg }}</div>
    <img class="background-image hidden-xs-only" src="@/../static/home_big.jpg">
    <img class="background-image hidden-sm-and-up" src="@/../static/home_small.jpg">
    <floating-button class="login-button hidden-xs-only" content="作者登陆" routeName="LogIn" left="80%" top="5%"></floating-button>
    <floating-button class="artical-button hidden-xs-only" content="文章" routeName="Artical" left="35%" top="20%" width="10em" height="10em" fontSize="1.5em"></floating-button>
    <floating-button class="artical-button hidden-sm-and-up" content="文章" routeName="Artical" left="40%" top="20%" width="7em" height="7em" fontSize="1.2em"></floating-button>
    <floating-button class="about-button hidden-xs-only" content="关于作者" routeName="About" left="7%" top="58%" width="7em" height="7em" fontSize="1.2em"></floating-button>
    <floating-button class="about-button hidden-sm-and-up" content="关于作者" routeName="About" left="15%" top="63%"></floating-button>
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
.login-button {
  animation: aniThree 10s infinite;
}
.artical-button {
  animation: aniTwo 10s infinite;
}
.about-button {
  animation: aniOne 10s infinite;
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
