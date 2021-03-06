import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import "./assets/css/reset.css"

Vue.config.productionTip = false
Vue.use(iView)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
