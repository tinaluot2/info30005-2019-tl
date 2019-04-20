import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/pages/LandingPage'
import ItemProfile from '@/pages/ItemProfile'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Reform',
            component: LandingPage
        },
        {
            path: '/item',
            name: 'Reform',
            component: ItemProfile
        }
    ]
})