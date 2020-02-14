import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'
fetch("/api")
const app = new Vue({
  ...App
})
app.$mount()
