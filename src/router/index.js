import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import movie from '@/views/movie'
import cinema from '@/views/cinema'
import mine from '@/views/mine'
import america from '@/components/america'
import china from '@/components/china'
import world from '@/components/world'
import infor from '@/components/infor'
import message from '@/components/message'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/hello'
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component:HelloWorld,
      children:[
        {
          path:'/hello/movie',
          component:movie,
        },
        {
          path:'/hello/cinema',
          component:cinema,
        },
        {
          path:'/hello/mine',
          component:mine,
        },
      ]
    },
    {
      path: '/w/:world',
      name: 'world',
      component: world
    },
    {
      path: '/movie',
      name: 'movie',
      component: movie
    },
    {
      path: '/cinema',
      name: 'cinema',
      component: cinema
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine,
      children:[
        {
          path:'/mine/infor',
          component:infor,
        },
        {
          path:'/mine/message',
          component:message,
        },
      ]
    },
  ]
})
