import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPage from '@/pages/LandingPage'
import UserProfile from '@/pages/UserProfile'
import UserSettings from '@/pages/UserSettings'
import CreateItem from '@/pages/CreateItem'
import UserSavedLists from '@/pages/UserSavedLists'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
{
            path: '/',
            name: 'Reform',
            component: LandingPage
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