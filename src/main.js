import Vue from 'vue'
import App from './App.vue'
import VueGtag from 'vue-gtag'
import VueClipboard from 'vue-clipboard2'

import '@/main.scss'

import 'typeface-inter'

Vue.use(VueClipboard)
Vue.use(VueGtag, {
  config: { id: 'UA-177960351-4' },
})

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount('#app')
