import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import store from './store'
import Axios from 'axios'

Vue.use(BootstrapVue);

Vue.config.productionTip = false;
Vue.prototype.$http = Axios;

const token = localStorage.getItem('token')

if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}


window.bus = new Vue();



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
