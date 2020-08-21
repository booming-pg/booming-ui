import Vue from 'vue'
import App from './App.vue'

import boomingui from '../packages'
Vue.use(boomingui)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
