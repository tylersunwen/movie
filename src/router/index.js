import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import movie from '@/views/movie'
import cinema from '@/views/cinema'
import mine from '@/views/mine'
import america from '@/components/america'
import china from '@/components/china'
import world from '@/components/world'
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
          path:'/hello/america',
          component:america,
        },
        {
          path:'/hello/china',
          component:china,
        },
      ]
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
      component: mine
    },
  ]
})
