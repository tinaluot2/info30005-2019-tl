<template>
	<div id="app">
		<Nav />
		<transition name="fade" mode="out-in">
			<router-view :key="$route.fullPath"></router-view>
		</transition>
	</div>
</template>

<script>
import Nav from '@/components/SiteNav/SiteNav.vue'
import {bus} from './main'
import axios from 'axios'
export default {
	name: 'app',
	components: {
		Nav
	},
	data: function(){
		return {
			loggingOut: false,
		}
	},
	created(){
		bus.$on('loggingOut', () => {
			this.loggingOut = true;
		})
		bus.$on('loggedOut', () => {
			this.loggingOut = false;
		})
	}
}
</script>

<style lang="scss">
@import "./scss/global";
@import "@/scss/_animation.scss";
</style>