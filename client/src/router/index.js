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


Vue.use(VueRouter)


export const router = new VueRouter({
    mode: 'history',
    linkActiveClass: "is-active",
    routes: [
{
            path: '/',
            component: DiscoverPage
        },
        {
            path: '/user/:username',
            component: UserProfile
        },
        {
            path: '/settings',
            component: UserSettings
        },
        {
            path: '/create',
            component: CreateItem
        },
        {
            path: '/lists',
            component: UserSavedLists
        },
        {
            path: '/item/:itemid',
            component: ItemProfile
        },
        {
            path: '/edit',
            component: EditItem
        },
        {
            path: '/search'
        }
    ]
})
