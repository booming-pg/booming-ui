import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import cartoon from '../components/Cartoon/cartoon.vue'
export default new Router({
  routes: [
    {
      path:'/cartoon',
      component:cartoon
    }
  ]
})