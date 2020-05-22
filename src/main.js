// Plugins for the project is set ut
import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

// Initializing vue to the web page
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
