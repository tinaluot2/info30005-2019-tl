import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPage from '@/pages/LandingPage'
import UserProfile from '@/pages/UserProfile'
import UserSettings from '@/pages/UserSettings'
import CreateItem from '@/pages/CreateItem'
import UserBookmarks from '@/pages/UserBookmarks'
import DiscoverPage from '@/pages/DiscoverPage'
import ItemProfile from '@/components/ItemProfile/ItemProfile'
import EditItem from '@/components/EditItem/EditItem'
import Error from '@/pages/ErrorPage'
import LoginPage from '@/pages/LoginPage'
import store from '@/store'

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
			path: '/bookmarks',
			component: UserBookmarks,
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
				requiresAuth: true,
				userOnly: true
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
router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
		//if loggedin, OK
    if (store.getters.isLoggedIn) {
      next()
      return
		}
		//redirect to login
    next('/login')
	}
	else if (to.matched.some(record => record.meta.guest)) {
		//if a guest, OK
		if (!store.getters.isLoggedIn) {
      next()
      return
		}
		//redirect to user profile
    next('/user/' + store.state.currentUser.username)
	}
	else {
    next()
  }
})

