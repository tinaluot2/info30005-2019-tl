<template>
	<div id="app">
		<SiteNavUser />
		<SiteFooter />
	</div>
</template>

<script>
import SiteNavUser from '@/components/SiteNavUser/SiteNavUser'
import LandingPage from '@/pages/LandingPage'
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
