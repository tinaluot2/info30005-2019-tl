import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPage from '@/pages/LandingPage'
import UserProfile from '@/pages/UserProfile'
import UserSettings from '@/pages/UserSettings'
import CreateItem from '@/pages/CreateItem'
import UserSavedLists from '@/pages/UserSavedLists'
import DiscoverPage from '@/pages/DiscoverPage'

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
            path: '/user',
            name: 'My Profile',
            component: UserProfile
        },
        {
            path: '/settings',
            name: 'Account Settings',
            component: UserSettings
        },
        {
            path: '/create',
            name: 'Create a New Project',
            component: CreateItem
        },
        {
            path: '/lists',
            name: 'User Saved Lists',
            component: UserSavedLists
        }
    ]
})