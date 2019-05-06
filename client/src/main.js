import Vue from 'vue'
import App from './App'
import { router } from '@/router/index'
import VeeValidate from 'vee-validate'
// import VueAxios from './vue-axios'
import axios from 'axios'

Vue.use(VeeValidate)
Vue.use(axios)
//Vue.config.productionTip = false

export const bus = new Vue()

new Vue({
	render: h => h(App),
	router,
	template: '<App/>',
	components: { App }
  }).$mount('#app')
