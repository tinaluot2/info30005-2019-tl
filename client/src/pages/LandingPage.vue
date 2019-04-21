<template>
	<div id="page-container">
		<LandingHero />
	</div>
</template>

<script>
import LandingHero from '@/components/LandingHero/LandingHero.vue'

export default {
	name: 'LandingPage',
		components: {
			LandingHero
		},
		data () {
			return{
				title: 'Welcome to Reform'
			}
		}
}
</script>

<style scoped lang="scss">
</style>

