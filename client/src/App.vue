<template>
	<div id="app">
		<SiteNavUser />
		<transition name="fade" mode="out-in"><router-view /></transition>
		<SiteFooter />
	</div>
</template>

<script>
import SiteNavUser from '@/components/SiteNavUser/SiteNavUser'
import SiteFooter from '@/components/SiteFooter/SiteFooter'

export default {
	name: 'app',
	components: {
		SiteNavUser,
		SiteFooter
	}
}
</script>

<style lang="scss">
	@import "./scss/global";
</style>
