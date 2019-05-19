import Vue from 'vue'
import App from './App'
import { router } from '@/router/index'
import VeeValidate from 'vee-validate'
import axios from 'axios'
import store from './store'

Vue.use(VeeValidate)
Vue.use(axios)
//Vue.config.productionTip = false

Vue.prototype.$http = axios;
const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

export const bus = new Vue()

new Vue({
	render: h => h(App),
	router,
	store,
	template: '<App/>',
	components: { App }
  }).$mount('#app')
