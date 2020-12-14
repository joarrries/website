import Vue from 'vue'
import i18n from './i18n'
import App from './App.vue'

import router from "./router"
new Vue({
  i18n,
  el: '#app',
  router,
  render: h => h(App)
})