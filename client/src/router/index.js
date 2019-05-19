import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPage from '@/pages/LandingPage'
import UserProfile from '@/pages/UserProfile'
import UserSettings from '@/pages/UserSettings'
import CreateItem from '@/pages/CreateItem'
import UserSavedLists from '@/pages/UserSavedLists'
import DiscoverPage from '@/pages/DiscoverPage'
import ItemProfile from '@/components/ItemProfile/ItemProfile'
import EditItem from '@/components/EditItem/EditItem'
import Error from '@/pages/ErrorPage'
import LoginPage from '@/pages/LoginPage'


Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    linkActiveClass: "is-active",
    routes: [
        {
            path: '/',
            name: 'Reform',
            component: DiscoverPage
        },
        {
            path: '/discover',
            name: 'Discover',
            component: DiscoverPage
        },
        {
            path: '/user/:username',
            name: 'profile',
            component: UserProfile
        },
        {
            path: '/settings',
            component: UserSettings,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/create',
            component: CreateItem,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/lists',
            component: UserSavedLists,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/item/:itemid',
            component: ItemProfile
        },
        {
            path: '/edit/:itemid',
            component: EditItem,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/error',
            component: Error
        },
        {
            path: '/search'
        },
        {
            path: '/login',
            component: LoginPage,
            meta: {
                guest: true
            }
        }
    ]
})

//Tutorial help from
//https://scotch.io/tutorials/vue-authentication-and-route-handling-using-vue-router
// router.beforeEach((to, from, next) => {
//     if(to.matched.some(record => record.meta.requiresAuth)) {
//         if (localStorage.getItem('jwt') == null) {
//             next({
//                 path: '/login',
//                 params: { nextUrl: to.fullPath }
//             })
//         } else {
//             let user = JSON.parse(localStorage.getItem('user'))
//             if(to.matched.some(record => record.meta.requiresAuth)) {
//                 if(user.requiresAuth == 1){
//                     next()
//                 }
//                 else{
//                     next({ name: 'profile'})
//                 }
//             }else {
//                 next()
//             }
//         }
//     } else if(to.matched.some(record => record.meta.guest)) {
//         if(localStorage.getItem('jwt') == null){
//             next()
//         }
//         else{
//             next({ name: 'profile'})
//         }
//     }else {
//         next() 
//     }
// })

