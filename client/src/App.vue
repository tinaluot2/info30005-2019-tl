<template>
	<div id="app">
		<SiteNavUser />
		<transition name="fade" mode="out-in"><router-view /></transition>
	</div>
</template>

<script>
import SiteNavUser from '@/components/SiteNavUser/SiteNavUser'

export default {
	name: 'app',
	components: {
		SiteNavUser
	}
}
</script>

<style lang="scss">
	@import "./scss/global";
</style>
