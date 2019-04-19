<template>
	<div id="page-container">
		<SiteNavTop />
		<LandingHero />
	</div>
</template>

<script>
import SiteNavTop from '../components/SiteNavTop/SiteNavTop.vue';
import LandingHero from '../components/LandingHero/LandingHero.vue';
import SiteFooter from '../components/SiteFooter/SiteFooter.vue';

export default {
  name: 'LandingPage',
	components: {
		SiteNavTop,
		LandingHero
	}
}
</script>

<style scoped lang="scss">
</style>

