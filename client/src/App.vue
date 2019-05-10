<template>
	<div id="app">
		<SiteNavUser />
		<transition name="fade" mode="out-in"><router-view /></transition>
	</div>
</template>

<script>
import SiteNavUser from '@/components/SiteNavUser/SiteNavUser'
import {bus} from './main'
import axios from 'axios'

export default {
	name: 'app',
	components: {
		SiteNavUser
	},
	data: function(){
		return {
			isLoggedIn: false
		}
	},
	created(){
		bus.$on('loggedIn', (data) => {
			this.isLoggedIn = data;
		})
	}
}
</script>

<style lang="scss">
	@import "./scss/global";
</style>
