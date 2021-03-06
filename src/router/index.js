import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Artical from '@/components/Artical'
import LogIn from '@/components/LogIn'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
    	path: '/about',
    	name: 'About',
      	component: About
    },
    {
    	path: '/artical',
    	name: 'Artical',
      	component: Artical
    },
    {
    	path: '/login',
    	name: 'LogIn',
      	component: LogIn
    }
  ]
})
