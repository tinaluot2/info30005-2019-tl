import Vue from 'vue'
import App from './App'
import { router } from '@/router/index'
import VeeValidate from 'vee-validate'

//Vue.config.productionTip = false

Vue.use(VeeValidate)

export const bus = new Vue()

new Vue({
	render: h => h(App),
	router,
	template: '<App/>',
	components: { App }
  }).$mount('#app')
